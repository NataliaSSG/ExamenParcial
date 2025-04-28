'use client'

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Login() {
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    const [error, setError] = useState("");
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        try {
            const response = await axios.post('http://localhost:3001/api/login', formData);

            localStorage.setItem('nombreCompleto', response.data.message);  // Or adapt this if needed
            localStorage.setItem('numeroMembresia', response.data.membershipNumber.toString());

            router.push('/portal');
        } catch (err: any) {
            console.error(err);
            if (err.response && err.response.status === 401) {
                setError("Usuario o contraseña incorrectos");
            } else {
                setError("Error connecting to the server");
            }
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="flex flex-col gap-4">
                <div className="w-72 p-5 shadow-lg rounded-lg bg-white mt-16">
                    <h2 className="text-center mb-5 text-2xl">Login</h2>
                    <form className="flex flex-col gap-3" onSubmit={handleSubmit} noValidate>
                        <input
                            type="text"
                            name="username"
                            placeholder="Usuario"
                            className="p-2 rounded border border-gray-300"
                            value={formData.username}
                            onChange={handleChange}
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Contraseña"
                            className="p-2 rounded border border-gray-300"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <button
                            type="submit"
                            className="p-2 rounded bg-indigo-500 text-white border-none cursor-pointer hover:bg-indigo-600 transition"
                        >
                            Entrar
                        </button>
                    </form>
                </div>

                {error && (
                    <div className="w-72 mt-4">
                        <p className="text-red-500 text-center">{error}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
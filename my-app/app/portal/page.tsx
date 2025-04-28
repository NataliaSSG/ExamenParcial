'use client'

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Portal() {
    const [userInfo, setUserInfo] = useState({
        nombreCompleto: "",
        numeroMembresia: ""
    });

    const router = useRouter();

    useEffect(() => {
        // Check if the user is logged in (you can also check the localStorage)
        const nombreCompleto = localStorage.getItem("nombreCompleto");
        const numeroMembresia = localStorage.getItem("numeroMembresia");

        if (nombreCompleto && numeroMembresia) {
            setUserInfo({ nombreCompleto, numeroMembresia });
        } else {
            // If not logged in, redirect to login
            router.push("/login");
        }
    }, [router]);

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="flex flex-col gap-4">
                <div className="w-72 p-5 shadow-lg rounded-lg bg-white mt-16">
                    <h2 className="text-center mb-5 text-2xl">Bienvenido</h2>
                    {userInfo.nombreCompleto && userInfo.numeroMembresia ? (
                        <div>
                            <p className="text-center">¡Hola, {userInfo.nombreCompleto}!</p>
                            <p className="text-center">Número de Membresía: {userInfo.numeroMembresia}</p>
                        </div>
                    ) : (
                        <p className="text-center text-red-500">No se pudo cargar tu información.</p>
                    )}
                </div>
            </div>
        </div>
    );
}
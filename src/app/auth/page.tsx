"use client";

import { HDivider } from "@/components/shared/HDivider";
import { useAuth } from "@/providers/authProvider";
import { signIn } from "@/service/authService";
import {
  ArrowRight02Icon,
  Car03Icon,
  CustomerSupportIcon,
  SquareLockPasswordIcon,
} from "hugeicons-react";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useAuth();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const result = signIn({ user: name, password });
    console.log("RESS", result);

    if (!result || result == null) {
      alert("BAD CREDENTIALS");
    } else {
      setUser(result);
      window.location.href = "/verify";
    }
  };

  return (
    <div className="min-h-screen">
      <div className="flex-grow flex justify-center py-20 items-center space-x-3">
        <Image src="/images/logo_only.png" width={60} height={60} alt="logo" />
        <div>
          <h1>BANCO DE LOJA</h1>
          <h4>SIEMPRE SEGURO Y NUESTRO</h4>
        </div>
      </div>
      <div className="flex px-20 ">
        <div className="flex-auto px-10">
          <h3 className="font-bold text-2xl mb-4">BANCA ELECTRÓNICA</h3>
          <h4 className="font-semibold text-xl mb-2">BIENVENIDOS</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex flex-col items-center justify-center font-semibold border rounded-lg p-2 w-28 hover:border-primary text-primary cursor-pointer">
              <CustomerSupportIcon size={36} />
              AYUDA
            </div>
            <div className="flex flex-col items-center justify-center font-semibold border p-2 rounded-lg w-28 hover:border-primary text-primary cursor-pointer">
              <SquareLockPasswordIcon size={36} />
              SEGURIDAD
            </div>
            <div className="flex flex-col items-center justify-center font-semibold border p-2 rounded-lg w-28 hover:border-primary text-primary cursor-pointer">
              <Car03Icon size={36} />
              CONTACTO
            </div>
          </div>
        </div>
        <form className="flex-1 items-end flex" onSubmit={handleSubmit}>
          <div className="p-6 gap-y-2 flex flex-col justify-center max-w-80">
            <input
              type="text"
              placeholder="Usuario"
              className="py-2 px-4 border-2 rounded-full focus:border-primary "
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="password"
              placeholder="Contraseña"
              className="py-2 px-4 border-2 rounded-full focus:border-primary "
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="bg-primary flex justify-center gap-2 text-background rounded-full py-2 font-bold hover:gap-4 duration-200"
            >
              Ingresar
              <ArrowRight02Icon size={23} />
            </button>
            <Link href="">
              <p className="text-center underline">Olvidé mis credenciales</p>
            </Link>
            <HDivider />
            <button className="bg-secondary flex justify-center gap-2 text-background rounded-full py-2 font-bold">
              Activar banca electrónica
            </button>
          </div>
        </form>
      </div>
      <footer className="fixed bottom-0 px-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </footer>
    </div>
  );
}

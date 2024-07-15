"use client";

import { Header } from "@/components/home/Header";
import { HDivider } from "@/components/shared/HDivider";
import { IconsPicker } from "@/components/verify/IconsPicker";
import { Question } from "@/components/verify/Question";
import { Icon } from "@/models/icon";
import { Question as QModel } from "@/models/question";
import { verifyInfo } from "@/service/authService";
import { ArrowRight02Icon } from "hugeicons-react";
import { redirect } from "next/navigation";
import { useCallback, useState } from "react";

export default function Verify() {
  const [icon, setIcon] = useState<Icon | undefined>();
  const [question, setQuestion] = useState<QModel | undefined>();

  const handleSubmit = useCallback(() => {
    if (!icon || !question) {
      alert("COMPLETA LAS PREGUNTAS");
      return;
    }

    const isValid = verifyInfo(icon!, question!);
    console.log(isValid);
    if (!isValid) {
      alert("INFORMACION INCORRECTA");
      return;
    }
    // redirect("/home");
    window.location.href = "/home";
  }, [icon, question]);

  return (
    <div className="min-h-screen">
      <Header center={true} showSearchBar={false} />
      <main className="mx-[20%] pt-4">
        <h3 className="font-bold text-primary text-xl mb-2">
          ACCESO BANCA ELECTRÓNICA
        </h3>
        <HDivider />
        <div className="flex flex-col mt-4">
          <p className="text-lg">Bienvenido USUARIO</p>
          <p>
            Por favor responda la siguiente pregunta y seleccione una imagen
          </p>
          <div className="py-4">
            <p className="text-sm text-primary font-bold">
              PREGUNTA DE SEGURIDAD
            </p>
            <Question setValue={setQuestion} />
            <p className="text-sm text-primary font-bold mt-4">
              SELECCIONA LA IMAGEN ASOCIADA A TU CUENTA
            </p>
            <IconsPicker setValue={setIcon} />
            <div className="flex flex-row-reverse border-t pt-2 mt-2">
              <button
                onClick={handleSubmit}
                className="bg-primary flex justify-center gap-2 text-background rounded-full py-2 font-bold hover:gap-4 duration-200 px-4 active:gap-2"
              >
                Ingresar
                <ArrowRight02Icon size={23} />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

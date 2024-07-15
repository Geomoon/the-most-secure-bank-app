import { Header } from "@/components/home/Header";
import { HDivider } from "@/components/shared/HDivider";
import { IconsPicker } from "@/components/verify/IconsPicker";
import { Question } from "@/components/verify/Question";
import { ArrowRight02Icon, ReloadIcon } from "hugeicons-react";
import Link from "next/link";

export default function Verify() {
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
            <Question />
            <p className="text-sm text-primary font-bold mt-4">
              SELECCIONA LA IMAGEN ASOCIADA A TU CUENTA
            </p>
            <IconsPicker />
            <div className="flex flex-row-reverse border-t pt-2 mt-2">
              <Link
                href="/verify"
                className="bg-primary flex justify-center gap-2 text-background rounded-full py-2 font-bold hover:gap-4 duration-200 px-4 active:gap-2"
              >
                Ingresar
                <ArrowRight02Icon size={23} />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

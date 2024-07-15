"use client";

import { Header } from "@/components/home/Header";
import { HDivider } from "@/components/shared/HDivider";
import { MenuItem } from "@/components/shared/MenuItem";
import { useAuth } from "@/providers/authProvider";
import {
  BankIcon,
  CreditCardAcceptIcon,
  LegalDocument01Icon,
  Megaphone01Icon,
  SearchList01Icon,
  WalletAdd01Icon,
} from "hugeicons-react";
import { useCallback } from "react";

export default function Home() {
  const { setUser, user } = useAuth();

  const onLogout = useCallback(() => {
    setUser(null);
    localStorage.clear();
    window.location.href = "/welcome";
  }, [setUser]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header center={true} showSearchBar={false} />
      <div className="flex-1 pt-4 flex">
        <aside className="flex flex-col max-w-48 bg-card py-8 rounded-md mb-20">
          <MenuItem title="Posición Consolidada" icon={<BankIcon />} />
          <MenuItem title="Campañas" icon={<Megaphone01Icon />} />
          <MenuItem title="Cuentas" icon={<LegalDocument01Icon />} />
          <MenuItem title="Créditos" icon={<WalletAdd01Icon />} />
          <MenuItem title="Visa" icon={<CreditCardAcceptIcon />} />
          <MenuItem title="Consultas" icon={<SearchList01Icon />} />
        </aside>
        <main className="flex-1 flex flex-col gap-4">
          <div className="flex pl-4 items-center">
            <h2 className="text-lg font-bold text-center flex-1 leading-tight pr-4">
              BANCA <br />
              ELECTRÓNICA
            </h2>
            <div className="flex flex-col flex-auto bg-gray-100 py-2 pl-4 border-l-4 border-text">
              USUARIO - {user?.user}
              <p className="text-sm">
                ÚLTIMO ACCESO: {new Date().toLocaleString()}
              </p>
            </div>
            <div className="flex-1 bg-gray-100 py-2">
              <button onClick={onLogout}>
                <div className="bg-secondary w-20 text-center justify-center gap-2 text-background rounded-full py-2 font-bold">
                  Salir
                </div>
              </button>
            </div>
          </div>
          <h2 className="pl-4 text-md font-bold text-secondary">
            Posición Consolidada
          </h2>
          <HDivider />

          <div className="mx-4">
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                <thead className="text-xs text-background uppercase bg-primary rounded-t-md">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Tipo Cliente
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Tipo Cuenta
                    </th>
                    <th scope="col" className="px-6 py-3">
                      No. Cuenta
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Saldo Contable
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Saldo Disponible
                    </th>
                    <th scope="col" className="px-6 py-3">
                      ESTADO
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      TITULAR
                    </th>
                    <td className="px-6 py-4">CUENTA ACTIVA</td>
                    <td className="px-6 py-4">4894603489603</td>
                    <td className="px-6 py-4">$2999</td>
                    <td className="px-6 py-4">$321.47</td>
                    <td className="px-6 py-4">ACTIVO</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

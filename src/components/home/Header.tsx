import { Search01Icon } from "hugeicons-react";
import Image from "next/image";
import { FC } from "react";

type props = {
  showSearchBar?: boolean;
  center?: boolean;
};

export const Header: FC<props> = ({ showSearchBar = true, center = false }) => {
  return (
    <nav
      className={`flex py-6 px-4 items-center ${
        center ? "justify-center" : ""
      }`}
    >
      <div
        className={`flex items-center space-x-3 ${center ? "" : "flex-grow"}`}
      >
        <Image src="/images/logo_only.png" width={60} height={60} alt="logo" />
        <div>
          <h1>BANCO DE LOJA</h1>
          <h4>SIEMPRE SEGURO Y NUESTRO</h4>
        </div>
      </div>
      {showSearchBar && (
        <div>
          <div className="border border-primary rounded-full pl-6 py-2 pr-4  flex flex-shrink">
            <input type="text" id="search" placeholder="Buscar..." />
            <label htmlFor="search">
              <Search01Icon width={24} className="text-primary" />
            </label>
          </div>
        </div>
      )}
    </nav>
  );
};

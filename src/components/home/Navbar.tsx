import {
  UserMultiple02Icon,
  Building05Icon,
  Store01Icon,
  CreditCardIcon,
} from "hugeicons-react";
import { FC } from "react";
import { Divider } from "../shared/Divider";

export const Navbar: FC = () => {
  return (
    <nav className="bottom-0 top-auto fixed min-w-full bg-background">
      <div className="flex flex-row items-center justify-center space-x-4">
        <div className="flex items-center h-20 ">
          <UserMultiple02Icon className="text-secondary" size={36} />
          <p className="text-primary font-medium">PERSONAS</p>
        </div>
        <Divider size={20} />
        <div className="flex items-center h-20 ">
          <Building05Icon size={36} className="text-secondary" />
          <p className="text-primary font-medium">EMPRESAS</p>
        </div>
        <Divider size={20} />
        <div className="flex items-center h-20 ">
          <Store01Icon size={36} className="text-secondary" />
          <p className="text-primary font-medium">MICROFINANZAS</p>
        </div>
        <Divider size={20} />
        <div className="flex items-center h-20 ">
          <CreditCardIcon size={36} className="text-secondary" />
          <p className="text-primary font-medium">TARJETA DE CRÉDITO</p>
        </div>
      </div>
    </nav>
  );
};

import { BankIcon } from "hugeicons-react";
import { FC, ReactNode } from "react";

type props = {
  title: string;
  icon: ReactNode;
};

export const MenuItem: FC<props> = ({ title, icon }) => {
  return (
    <div className="flex gap-4 items-center px-4 py-2 cursor-pointer leading-tight font-medium duration-200 hover:bg-secondaryBackground hover:after:w-1 hover:after:h-full hover:text-background active:bg-primary">
      <div className="w-7">{icon}</div>
      {title}
    </div>
  );
};

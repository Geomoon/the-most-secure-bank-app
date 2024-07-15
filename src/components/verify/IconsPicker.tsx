"use client";

import { useGetIcons } from "@/hooks/useGetIcons";
import { Icon } from "@/models/icon";
import Image from "next/image";
import { FC, useCallback, useState } from "react";
import clsx from "clsx";

type props = {
  setValue: (icon: Icon) => void;
};

export const IconsPicker: FC<props> = ({ setValue }) => {
  const icons = useGetIcons();
  console.log(icons);

  const [icon, setIcon] = useState<Icon>();

  const handleClick = useCallback(
    (item: Icon) => {
      setIcon(item);
      setValue(item!);
    },
    [setValue]
  );

  const buildItem = useCallback(
    (item: Icon) => {
      return (
        <div
          id={item.id.toString()}
          onClick={() => handleClick(item)}
          className={clsx(
            "flex flex-col items-center justify-center gap-2 h-32 w-32 border rounded-md cursor-pointer hover:border-2 hover:border-primary hover:text-primary hover:font-bold duration-200",
            {
              "border-primary text-primary font-bold bg-card":
                item.id === icon?.id,
            }
          )}
        >
          <div className="flex-1 flex items-center">
            <Image src={item.icon} alt="img" height={36} width={36} />
          </div>
          {item.name}
        </div>
      );
    },
    [icon?.id]
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-2">
      {icons.map(buildItem)}
    </div>
  );
};

import { FC } from "react";

type props = {
  size?: number;
};

export const Divider: FC<props> = ({ size = 16 }) => {
  return <div className={`h-${size} w-1 border-l-2`} />;
};

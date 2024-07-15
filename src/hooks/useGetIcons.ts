import { Icon } from "@/models/icon";
import { getIcons } from "@/service/iconsService";
import { useEffect, useState } from "react";

export const useGetIcons = () => {
  const [icons, setIcons] = useState<Icon[]>([]);

  useEffect(() => {
    const items = getIcons();
    setIcons(items);
  }, []);

  return icons;
};

import { Icon } from "@/models/icon";
import icons from "../../data/icons-data.json";
import { useState } from "react";

export const getIcons = (): Icon[] => {
  const json = icons;
  console.log(json);
  return json.data.sort(() => Math.random() - 0.5);
};

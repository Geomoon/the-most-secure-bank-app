"use client";

import { useGetQuestions } from "@/hooks/useGetQuestions";
import { ReloadIcon } from "hugeicons-react";
import { FC } from "react";

export const Question: FC = () => {
  const { question, next } = useGetQuestions();

  return (
    <div className="bg-card py-4 px-4 rounded-md text-primary space-y-2">
      <div>{question?.question}</div>
      <input
        type="text"
        className="border-2 rounded-full px-4 py-2 focus:border-primary w-full"
        placeholder="Escribe aquí la respuesta"
      />
      <div className="flex flex-row-reverse">
        <div
          onClick={next}
          className="b-icon max-w-fit flex flex-row-reverse gap-2 items-center cursor-pointer hover:bg-primary rounded-full hover:text-white px-4 py-2 duration-200"
        >
          Cambiar pregunta
          <ReloadIcon size={16} className="spinner" />
        </div>
      </div>
    </div>
  );
};

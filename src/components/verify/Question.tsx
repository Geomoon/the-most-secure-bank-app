"use client";

import { useGetQuestions } from "@/hooks/useGetQuestions";
import { Question as QModel } from "@/models/question";
import { ReloadIcon } from "hugeicons-react";
import { FC } from "react";

type props = {
  setValue: (question: QModel) => void;
};

export const Question: FC<props> = ({ setValue }) => {
  const { question, next } = useGetQuestions();

  return (
    <div className="bg-card py-4 px-4 rounded-md text-primary space-y-2">
      <div>{question?.question}</div>
      <input
        type="text"
        className="border-2 rounded-full px-4 py-2 focus:border-primary w-full"
        placeholder="Escribe aquí la respuesta"
        onChange={(e) => setValue({ ...question!, answer: e.target.value })}
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

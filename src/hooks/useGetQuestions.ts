import { Question } from "@/models/question";
import { getQuestions } from "@/service/questionService";
import { useCallback, useEffect, useState } from "react";

export const useGetQuestions = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [question, setQuestion] = useState<Question>();

  const next = useCallback(() => {
    const index = questions.indexOf(question!);
    if (index >= questions.length - 1) {
      setQuestion(questions[0]);
      return;
    }
    setQuestion(questions[index + 1]);
  }, [question, questions]);

  useEffect(() => {
    const data = getQuestions();
    setQuestions(data);
    setQuestion(questions[0]);
  }, [questions]);

  return { questions, question, next };
};

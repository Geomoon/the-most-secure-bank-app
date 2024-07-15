import questions from "../../data/questions-data.json";

export const getQuestion = () => {
  const list = questions.questions.sort(() => Math.random() - 0.5);
  return list[0];
};

export const getQuestions = () => {
  return questions.questions.sort(() => Math.random() - 0.5);
};

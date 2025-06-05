import Options from "./Options";
import { useQuiz } from "../contexts/QuizContext";

function Question() {
  const { questions, index } = useQuiz();

  const quistion = questions.at[index];
  return (
    <div>
      <h4>{questions[index].question}</h4>
      <Options question={quistion} />
    </div>
  );
}

export default Question;

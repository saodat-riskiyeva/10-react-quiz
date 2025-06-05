import Options from "./Options";
import { useQuiz } from "../contexts/QuizContext";

function Question() {
  const { questions, index, dispatch, answer } = useQuiz();

  return (
    <div>
      <h4>{questions[index].question}</h4>
      <Options
        question={questions[index]}
        dispatch={dispatch}
        answer={answer}
      />
    </div>
  );
}

export default Question;

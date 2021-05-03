import React, {useState} from 'react';
import Question from "../Question/Question";
import Finish from "../Finish/Finish";
import Timer from "../Timer/Timer";

const Quiz = ({data}) => {
  const TIME_FOR_QUESTION = 30; // in seconds
  const [counter, setCounter] = useState(TIME_FOR_QUESTION);
  const [questionNumber, setQuestionNumber] = useState(0);

  const reset = (event) => {
    event.preventDefault();
    setQuestionNumber(0);
  };

  const handleAnswer = (event) => {
    event.preventDefault();
    setQuestionNumber(questionNumber + 1);
    setCounter(TIME_FOR_QUESTION);
  };

  return (
    <div className="quiz-item__wrapper">
      {questionNumber < data.length
        ? <>
          <div className="quiz-item__info">
            <Timer counter={counter} setCounter={setCounter}/>
            <p className="quiz-item__current">{questionNumber + 1} / {data.length}</p>
          </div>
          <Question
            itemData={data[questionNumber]}
            buttonText={questionNumber + 1 === data.length ? 'Finish' : 'Next'}
            handleAnswer={handleAnswer}
          />
        </>
        : <Finish reset={reset} />
      }
    </div>
  )
};

export default Quiz;
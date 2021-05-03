import React from 'react';

const Question = ({itemData, handleAnswer, buttonText}) => {
  const {question, image, type, answers} = itemData;

  return (
    <div className="quiz-item">
      <h3 className="quiz-item__title">{question}</h3>
      {image && <div className="quiz-item__image"><img src={image} alt="quiz" /></div>}
      <form className="quiz-item__form">
        {type === 'test' && answers.map((answer, answerIndex) => {
          return (
            <label
              key={answerIndex}
              className="quiz-item__form__label"
              htmlFor={`testQuiz${answerIndex}`}
            >
              <input
                value={answerIndex}
                id={`testQuiz${answerIndex}`}
                className="quiz-item__form__input"
                name="test-quiz"
                type="radio"
              />
              {answer}
            </label>
          )
        })}
        {itemData.type === 'question' && <label htmlFor="open-question">
          <textarea
            name="open-question"
            className="quiz-item__form__textarea"
            placeholder="Ответ"
          />
        </label>}
        <button
          onClick={handleAnswer}
          className="quiz-item__button"
          type="submit"
        >
          {buttonText}
        </button>
      </form>
    </div>
  );
};

export default Question;
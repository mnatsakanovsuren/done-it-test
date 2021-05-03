import React, { useEffect } from 'react';

const Timer = ({counter, setCounter}) => {

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter, setCounter]);

  return (
    <div className="timer">
      <p className={`timer__content ${counter < 10 && 'danger'}`}>0:{counter > 9 ? counter : `0${counter}`}</p>
    </div>
  );
};

export default Timer;
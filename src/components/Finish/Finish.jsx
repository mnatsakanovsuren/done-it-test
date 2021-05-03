import React from 'react';

const Finish = ({reset}) => {
  return (
    <div className="finish">
      <h5 className="finish__title">Finish</h5>
      <button className="finish__button" onClick={reset}>Again</button>
    </div>
  );
};

export default Finish;
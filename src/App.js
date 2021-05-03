import React from 'react';
import Quiz from './components/Quiz/Quiz';
import './App.css';
import QuizData from './data/QuizData.json';

function App() {
  return (
    <main className="App">
      <h1 className="main-title">Test Quiz</h1>
      <Quiz data={QuizData} />
    </main>
  );
}

export default App;

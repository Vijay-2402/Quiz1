import React, { useState } from 'react';

function Candidate() {
    const [questions, setQuestions] = useState([
    {
      id: 1,
      question: 'What is the capital of France?',
      options: ['London', 'Berlin', 'Madrid', 'Paris'],
      correctAnswer: 'Paris',
      selectedAnswer: null,
    },
    // Add more questions here
  ]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSelect = (selectedAnswer) => {
    if (!questions[currentQuestionIndex].selectedAnswer) {
      questions[currentQuestionIndex].selectedAnswer = selectedAnswer;
      setQuestions([...questions]);

      if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
        setScore(score + 1);
      }

      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setQuizCompleted(true);
      }
    }
  };

  return (
    <div className="candidate-quiz">
      <h1>Candidate Quiz</h1>
      {quizCompleted ? (
        <div className="quiz-result">
          <p>Quiz completed! Your score: {score}/{questions.length}</p>
        </div>
      ) : (
        <div className="question">
          <p>{questions[currentQuestionIndex].question}</p>
          <ul>
            {questions[currentQuestionIndex].options.map((option, index) => (
              <li key={index}>
                <button
                  onClick={() => handleAnswerSelect(option)}
                  disabled={questions[currentQuestionIndex].selectedAnswer !== null}
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Candidate;
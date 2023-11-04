import React, { useState } from 'react';

function Admin() {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState({
    text: '',
    optionA: '',
    optionB: '',
    optionC: '',
    optionD: '',
    correctAnswer: 'A',
  });
  const [editQuestionId, setEditQuestionId] = useState(null);

  const handleAddQuestion = () => {
    setQuestions([...questions, { ...newQuestion, id: Date.now() }]);
    setNewQuestion({
      text: '',
      optionA: '',
      optionB: '',
      optionC: '',
      optionD: '',
      correctAnswer: 'A',
    });
  };

  const handleEditQuestion = (id) => {
    const questionToEdit = questions.find((question) => question.id === id);
    if (questionToEdit) {
      setNewQuestion({ ...questionToEdit });
      setEditQuestionId(id);
    }
  };

  const handleUpdateQuestion = () => {
    const updatedQuestions = questions.map((question) =>
      question.id === editQuestionId ? { ...newQuestion, id: editQuestionId } : question
    );
    setQuestions(updatedQuestions);
    setEditQuestionId(null);
    setNewQuestion({
      text: '',
      optionA: '',
      optionB: '',
      optionC: '',
      optionD: '',
      correctAnswer: 'A',
    });
  };

  const handleCancelEdit = () => {
    setEditQuestionId(null);
    setNewQuestion({
      text: '',
      optionA: '',
      optionB: '',
      optionC: '',
      optionD: '',
      correctAnswer: 'A',
    });
  };

  return (
    <div className="admin-page">
      <h1>Admin Page</h1>

      <h2>Add Question</h2>
      <div className="add-question-form">
        <input
          type="text"
          placeholder="Question Text"
          value={newQuestion.text}
          onChange={(e) => setNewQuestion({ ...newQuestion, text: e.target.value })}
        />
        <input
          type="text"
          placeholder="Option A"
          value={newQuestion.optionA}
          onChange={(e) => setNewQuestion({ ...newQuestion, optionA: e.target.value })}
        />
        <input
          type="text"
          placeholder="Option B"
          value={newQuestion.optionB}
          onChange={(e) => setNewQuestion({ ...newQuestion, optionB: e.target.value })}
        />
        <input
          type="text"
          placeholder="Option C"
          value={newQuestion.optionC}
          onChange={(e) => setNewQuestion({ ...newQuestion, optionC: e.target.value })}
        />
        <input
          type="text"
          placeholder="Option D"
          value={newQuestion.optionD}
          onChange={(e) => setNewQuestion({ ...newQuestion, optionD: e.target.value })}
        />
        <select
          value={newQuestion.correctAnswer}
          onChange={(e) => setNewQuestion({ ...newQuestion, correctAnswer: e.target.value })}
        >
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
        </select>
        <button onClick={handleAddQuestion}>Add Question</button>
      </div>

      <h2>Update Question</h2>
      <div className="update-question-form">
        {editQuestionId !== null ? (
          <>
            <input
              type="text"
              placeholder="Question Text"
              value={newQuestion.text}
              onChange={(e) => setNewQuestion({ ...newQuestion, text: e.target.value })}
            />
            <input
              type="text"
              placeholder="Option A"
              value={newQuestion.optionA}
              onChange={(e) => setNewQuestion({ ...newQuestion, optionA: e.target.value })}
            />
            <input
              type="text"
              placeholder="Option B"
              value={newQuestion.optionB}
              onChange={(e) => setNewQuestion({ ...newQuestion, optionB: e.target.value })}
            />
            <input
              type="text"
              placeholder="Option C"
              value={newQuestion.optionC}
              onChange={(e) => setNewQuestion({ ...newQuestion, optionC: e.target.value })}
            />
            <input
              type="text"
              placeholder="Option D"
              value={newQuestion.optionD}
              onChange={(e) => setNewQuestion({ ...newQuestion, optionD: e.target.value })}
            />
            <select
              value={newQuestion.correctAnswer}
              onChange={(e) => setNewQuestion({ ...newQuestion, correctAnswer: e.target.value })}
            >
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
            </select>
            <button onClick={handleUpdateQuestion}>Update Question</button>
            <button onClick={handleCancelEdit}>Cancel</button>
          </>
        ) : (
          <p>No question selected for editing.</p>
        )}
      </div>

      <h2>Questions</h2>
      <ul className="question-list">
        {questions.map((question) => (
          <li key={question.id}>
            {question.text}
            <button onClick={() => handleEditQuestion(question.id)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Admin;
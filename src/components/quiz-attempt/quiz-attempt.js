import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import QuizAttemptService from "../../services/quiz-attempt-service";

const QuizAttempts = () => {
  const {courseId, quizId} = useParams();
  const [attempts, setAttempts] = useState([]);

  useEffect(() => {
    QuizAttemptService.findAttemptsForQuiz(quizId)
    .then(data => setAttempts(data))
  }, []);

  return (<>
    <h2>Quiz {quizId}</h2>
    <table class="table">
      <thead>
      <tr>
        <th scope="col">Attempts</th>
        <th scope="col">Score</th>
        <th scope="col">QuizId</th>
      </tr>
      </thead>
      <tbody>
      {
        attempts.map((a, idx) => {
          return (<tr>
            <th scope="row">{idx + 1}</th>
            <td>{a.score}</td>
            <td>{[a.quiz._id]}</td>
          </tr>)
        })
      }
      </tbody>
    </table>
  </>);
}

export default QuizAttempts;
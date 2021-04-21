import React, {useState, useEffect} from "react";
import {Link, useParams} from 'react-router-dom'
import Question from "./questions/question";
import QuestionService from "../../services/question-service";
import QuizAttemptService from "../../services/quiz-attempt-service";

const Quiz = () => {
  const {courseId, quizId} = useParams();
  const [questions, setQuestions] = useState([]);
  const [submission, setSubmission] = useState([]) // answer for graded

  useEffect(() => {
    if (courseId !== "undefined" && typeof courseId !== "undefined") {
      QuestionService.findQuestionsForQuiz(quizId)
      .then(q => setQuestions(q))
    }
  }, [courseId, quizId]);


  const submitQuiz = () => {
    setSubmission(questions.map(q => q["answer"]))
    console.log("submitting an attempt")
    return QuizAttemptService.submitAttemptForQuiz(quizId, questions)
    .then(result => console.log(result))
  }

  return(
      <div>
        <h2>Quiz {quizId}</h2>
        <ul class="list-group">
          {
            questions.map((question, idx) =>
                <li class="list-group-item"
                    key={question._id}>
                  <Question
                      question={question}
                      quizId={quizId}
                      submitted={submission[idx]}
                  />
                </li>
            )
          }
        </ul>
        <br/>
        <button
            type="button"
            className="btn btn-success float-left"
            onClick={() => submitQuiz()}>
          Submit
        </button>

        <Link
            to={`/courses/${courseId}/quizzes/${quizId}/attempts`}>
          <button
              type="button"
              className="btn btn-primary float-left">
            Show Attempts
          </button>
        </Link>
      </div>
  );
}

export default Quiz;
import React, {useState, useEffect} from "react";
import TrueFalseQuestion from "./true-false-question";
import MultipleChoiceQuestion from "./multiple-choice-question";
import "./questions.style.client.css";

const Question = ({question, quizId, submitted}) => {
  const [answer, setAnswer] = useState(null)
  const [graded, setGraded] = useState(null)

  return(
      <div>
        <h4>
          {question.question} &nbsp;
          {submitted !== undefined &&
            <span>
              {submitted === question.correct &&
                <i className="fas fa-check"/>}
              {submitted !== question.correct &&
                <i className="fas fa-times"/>}
            </span>}
        </h4>
        {question.type === "TRUE_FALSE" &&
          <TrueFalseQuestion
              question={question}
              answer={answer}
              setAnswer={setAnswer}
              graded={graded}
              setGraded={setGraded}
              submitted={submitted}
          />
        }
        {
          question.type === "MULTIPLE_CHOICE" &&
          <MultipleChoiceQuestion
              question={question}
              answer={answer}
              setAnswer={setAnswer}
              graded={graded}
              setGraded={setGraded}
              submitted={submitted}
          />
        }
        <br/>
        <span className="float-left">Your Answer:</span>
        {submitted !== undefined && <span>{submitted}</span>}
        <br/>
        <button
            type="button"
            className="btn btn-success float-left"
            disabled
            onClick={() => setGraded(answer)}>
          Grade
        </button>
      </div>
  )
}
export default Question
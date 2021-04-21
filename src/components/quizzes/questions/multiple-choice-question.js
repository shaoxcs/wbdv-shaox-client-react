import React, {useState} from "react";

const MultipleChoiceQuestion = ({question, answer, setAnswer, submitted}) => {

  return(
    <ul className="list-group">
      {
        question.choices.map((choice, idx) => {
          return (
            <li className={
              `list-group-item
              ${(submitted !== null && submitted === choice) ? "selected" : ""}
              ${(submitted !== null && question.correct === choice) ? "correct" : ""}`}
                key={idx}>
              <input type="radio"
                     name={question._id}
                     value={choice}
                     onClick={() => {
                       setAnswer(choice)
                       question.answer = answer
                     }}
              />
              {choice}
            </li>
          )
        })
      }
    </ul>
  )
}

export default MultipleChoiceQuestion
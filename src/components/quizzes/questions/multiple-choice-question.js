import React, {useState} from "react";

const MultipleChoiceQuestion = ({question, answer, setAnswer, submitted, setSubmitted}) => {
  const [yourAnswer, setYourAnswer] = useState("")
  return(
    <ul className="list-group">
      {
        question.choices.map((choice, idx) => {
          return (
            <li className={
              `list-group-item
              ${(submitted !== null && submitted === choice) ? "selected" : ""}
              ${(question.correct === choice && submitted !== null) ? "correct" : ""}`}
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
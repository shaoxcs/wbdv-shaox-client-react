import React, {useState} from "react";

const TrueFalseQuestion = ({question, answer, setAnswer, submitted, setSubmitted}) => {
  return(
    <div>
      <ul className="list-group">
        <li className={`list-group-item
                       ${(submitted != null && submitted === "true") ? "selected" : ""}
                       ${(question.correct === "true" && submitted != null) ? "correct" : ""}
                      `}>
          <input
              type="radio"
              onClick={() => {
                setAnswer("true")
                question.answer = answer
              }}
              name={question._id}
              value="true"/>
          True
        </li>
        <li className={`list-group-item 
                       ${(submitted != null && submitted === "false") ? "selected" : ""}
                       ${(question.correct === "false" && submitted != null) ? "correct" : ""}
                      `}>
          <input type="radio"
              onClick={() => {
                setAnswer("false")
                question.answer = answer
              }}
              name={question._id}
              value="false"/>
          False
        </li>
      </ul>
    </div>
  )
}

export default TrueFalseQuestion
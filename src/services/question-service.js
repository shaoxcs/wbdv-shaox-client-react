const QUIZZES_URL = 'https://webdev-shaox-backend-node.herokuapp.com/quizzes';

const QuestionService = {
  findQuestionsForQuiz : (qid) => {
    return fetch(`${QUIZZES_URL}/${qid}/questions`)
    .then(response => response.json())
  }
}

export default QuestionService;
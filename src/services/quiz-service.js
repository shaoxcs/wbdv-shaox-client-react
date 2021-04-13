const QUIZZES_URL = 'http://localhost:4000/api/quizzes';

const QuizService = {
  findAllQuizzes : () => {
    return fetch(QUIZZES_URL)
    .then(res => res.json())
  },

  findQuizById : (qid) => {
    return fetch(`${QUIZZES_URL}/${qid}`)
    .then(res => res.json())
  }
}

export default QuizService;
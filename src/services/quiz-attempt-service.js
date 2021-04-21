const QUIZZES_URL = 'https://webdev-shaox-backend-node.herokuapp.com/api/quizzes';

const QuizAttemptService = {
  findAttemptsForQuiz : (quizId) => {
    return fetch(`${QUIZZES_URL}/${quizId}/attempts`)
    .then(res => res.json())
  },

  submitAttemptForQuiz: (quizId, questions) => {
    return fetch(`https://webdev-shaox-backend-node.herokuapp.com/api/quizzes/${quizId}/attempts`,
        {
          method: 'POST',
          body: JSON.stringify(questions),
          headers: {
            'content-type': 'application/json'
          }})
    .then(response => response.json())
  }
}

export default QuizAttemptService;
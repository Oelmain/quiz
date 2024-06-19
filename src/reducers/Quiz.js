import { createSlice } from '@reduxjs/toolkit'
const questions = [
  { id: 1,
    questionText: 'What is React?',
    options: [
      'A back-end programming language',
      'A front-end JavaScript library',
      'A mobile application development platform',
      'A database management system'],
    correctAnswerIndex: 1 },
  { id: 2,
    questionText: 'What is JSX?',
    options: [
      'A type of HTML used in React components',
      'A CSS framework for styling React components',
      'A JavaScript extension for writing React code',
      'A back-end server for React applications'],
    correctAnswerIndex: 2 },
  { id: 3,
    questionText: 'What is the Virtual DOM?',
    options: [
      'A real-time representation of the HTML DOM used for performance optimization',
      'A way to manage multiple React components on a page',
      'A tool for debugging React applications',
      'A database used to store React component data'],
    correctAnswerIndex: 0 },
  { id: 4,
    questionText: 'What is a React component?',
    options: [
      'A tool for debugging React applications',
      'A programming language used to create React applications',
      'A database used to store React component data',
      'A small, reusable piece of code that can be rendered on a web page'],
    correctAnswerIndex: 3 },
  { id: 5,
    questionText: 'What is the purpose of state in React?',
    options: [
      'To render components on the page',
      'To store and manage data that can change over time',
      'To handle user events like clicks and keyboard inputs',
      'To control the overall layout of the web page'
    ],
    correctAnswerIndex: 1 }
]

const initialState = {
  questions,
  answers: [],
  currentQuestionIndex: 0,
  quizOver: false
}

export const quiz = createSlice({
  name: 'quiz',
  initialState,
  reducers: {

    
    submitAnswer: (state, action) => {
      const { questionId, answerIndex } = action.payload
      const question = state.questions.find((q) => q.id === questionId)

      if (!question) {
        throw new Error('Could not find question! Check to make sure you are passing the question id correctly.')
      }

      if (question.options[answerIndex] === undefined) {
        throw new Error(`You passed answerIndex ${answerIndex}, but it is not in the possible answers array!`)
      }

      state.answers.push({
        questionId,
        answerIndex,
        question,
        answer: question.options[answerIndex],
        isCorrect: question.correctAnswerIndex === answerIndex
      })
    },

    
    goToNextQuestion: (state) => {
      if (state.currentQuestionIndex + 1 === state.questions.length) {
        state.quizOver = true
      } else {
        state.currentQuestionIndex += 1
      }
    },

    
    restart: () => {
      return initialState
    }

  }
})

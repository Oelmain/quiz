
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import swal from 'sweetalert';
import { quiz } from '../reducers/Quiz';

const Option = styled.button`
background-color: white;
border: 2px solid #E7E6EE;
border-radius: 11px;
color: #564593;
font-family: Outfit;
font-weight: 400;
width: 320px;
height: 45px;
margin-bottom: 15px;
cursor: pointer;

:focus {
    background-color: #EFEAFE;
    border: 2px solid #54497B;
}

:hover {
background-color: #EFEAFE;
border: 2px solid #EFEAFE;
}

@media (max-width: 321px) {
  width: 250px;
  height: 60px;
}
`

const OptionButton = ({ index, option }) => {
  const dispatch = useDispatch();
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex]);
  const selectedOption = useSelector((state) => state.quiz.answers[state.quiz.currentQuestionIndex]);

  const nextQuestion = () => {
    dispatch(quiz.actions.goToNextQuestion())
  }

  const selectOption = (questionId, answerIndex) => {
    dispatch(quiz.actions.submitAnswer({ questionId, answerIndex }))
    if (question.correctAnswerIndex === answerIndex) {
      swal({
        icon: 'success',
        title: 'Correct!',
        text: 'Great job!',
        button: 'Next question'
      }).then(nextQuestion)
    } else {
      swal({
        icon: 'error',
        title: 'Not quite :(',
        text: 'Better luck next time!',
        button: 'Next question'
      }).then(nextQuestion)
    }
  }

  return (
    <Option
      type="button"
      onClick={() => selectOption(question.id, index)}
      disabled={selectedOption}>
      {option}
    </Option>
  )
}

export default OptionButton
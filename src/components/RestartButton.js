import React from 'react'
import { useDispatch } from 'react-redux'
import { quiz } from '../reducers/Quiz';
import styled from 'styled-components';

const RestartButtonStyle = styled.button`
  width: 300px;
  height: 40px;
  font-family: Outfit;
  font-weight: 500;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: #564593;
  background-color: #fff;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  margin-top: 60px;

:hover {
  background-color: #564593;
  box-shadow: 0px 15px 20px rgba(229, 46, 177, 0.4);
  color: #fff;
  transform: translateY(-7px);
}

@media (max-width: 321px) {
  width: 200px;
}`

const RestartButton = () => {
  const dispatch = useDispatch()
  const onButtonClick = () => {
    dispatch(quiz.actions.restart())
  }

  return (
    <div>
      <RestartButtonStyle onClick={onButtonClick}>Restart Quiz</RestartButtonStyle>
    </div>
  )
}

export default RestartButton
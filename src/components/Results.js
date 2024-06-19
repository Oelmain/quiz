import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import RestartButton from './RestartButton';

const ResultsH1 = styled.h1`
padding-top: 30px;
  color: #564593;
  font-size: 30px;
`
const ScoreH1 = styled.h1`
  color: #564593;
  background-color: #EFEAFE;
  font-size: 40px;
  border-radius: 50%;
  width: fit-content;
  padding: 40px 30px 40px 30px;
  margin: auto;
`

const ResultsParagraph = styled.p`
padding-top: 10px;
color: #564593;
font-size: 15px;`

export const Results = () => {
  const answers = useSelector((state) => state.quiz.answers)
  const score = answers.filter((a) => a.isCorrect).length

  const scoreMessage = () => {
    if (score < 4) {
      return 'Hey, atleast you tried. Back to studying!'
    }
    if (score === 4) {
      return 'Great job! You know your React.'
    } else {
      return 'A PERFECT SCORE! You have really put in the time and effort, great job!'
    }
  };

  return (
    <div>
      <ResultsH1>Your score is...</ResultsH1>
      <ScoreH1>{score} / {answers.length}</ScoreH1>
      <ResultsParagraph>{scoreMessage()}</ResultsParagraph>
      <RestartButton />
    </div>
  )
}
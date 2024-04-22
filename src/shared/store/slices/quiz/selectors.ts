import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../index';

const quizStateSelector = (state: RootState) => state.quiz;

const questionsSelector = (state: RootState) => quizStateSelector(state).questions;

export const timeSelector = (state: RootState) => quizStateSelector(state).time;

export const haveTimeSelector = (state: RootState) => quizStateSelector(state).haveTime;

export const withTimeSelector = (state: RootState) => quizStateSelector(state).withTime;

export const questionInfoSelector = createSelector([questionsSelector], (questions) => {
  const currentQuestionIndex = questions.findIndex(({ answer }) => (Array.isArray(answer) ? !answer.length : !answer));

  return {
    currentQuestion: questions[currentQuestionIndex],
    progress: Number((((currentQuestionIndex + 1) / questions.length) * 100).toFixed(0)),
    total: questions.length,
  };
});

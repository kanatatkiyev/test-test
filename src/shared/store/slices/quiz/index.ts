import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { setItem, removeItem, LS_QUESTIONS_KEY, LS_TIME_REMAIN_KEY } from '@/shared/services/ls';

import { initialState } from './initialState';
import { TQuestion, TSetAnswerPayload } from './types';

export type QuizState = {
  time: number;
  questions: Array<TQuestion>;
  withTime: boolean;
  haveTime: boolean;
};

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setAnswer: (state, { payload }: PayloadAction<TSetAnswerPayload>) => {
      const questionToBeAnswered = state.questions.find(({ id }) => id === payload.id);

      if (questionToBeAnswered) {
        questionToBeAnswered.answer = payload.answer;
        setItem(LS_QUESTIONS_KEY, state.questions);
      }
    },
    setHaveTime: (state, { payload }: PayloadAction<boolean>) => {
      state.haveTime = payload;
    },
    reset: () => {
      removeItem(LS_QUESTIONS_KEY);
      removeItem(LS_TIME_REMAIN_KEY);
      return initialState;
    },
  },
});

export const { setAnswer, setHaveTime, reset } = quizSlice.actions;
export default quizSlice.reducer;
export * from './types';
export * from './selectors';

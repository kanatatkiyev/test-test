import { LS_QUESTIONS_KEY, LS_TIME_REMAIN_KEY, getItem } from '@/shared/services/ls';

import { TQuestion } from './types';
import { questionsMock } from './mock';

export const initialState = {
  time: getItem(LS_TIME_REMAIN_KEY) || 300000,
  questions: getItem<Array<TQuestion>>(LS_QUESTIONS_KEY) || questionsMock,
  withTime: true,
  haveTime: true,
};

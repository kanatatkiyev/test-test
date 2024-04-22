export enum EQuestionType {
  'single' = 'single',
  'multi' = 'multi',
  'text' = 'text',
  'longText' = 'longText',
}

export type TQuestionOption = {
  value: string;
  label: string;
}

export type TQuestion = {
  id: string;
  question: string;
  options: Array<TQuestionOption> | null;
  type: EQuestionType;
  answer: string | string[]
};

export type TSetAnswerPayload = {
  id: string;
  answer: TQuestion['answer']
}
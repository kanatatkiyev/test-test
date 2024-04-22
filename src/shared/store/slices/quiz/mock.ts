import { TQuestion, EQuestionType } from './types';

export const questionsMock: TQuestion[] = [
  {
    id: '1',
    question: 'Какой город является столицей Франции?',
    options: [
      { value: '0', label: 'Милан' },
      { value: '1', label: 'Париж' },
      { value: '2', label: 'Берлин' },
      { value: '3', label: 'Лондон' },
    ],
    type: EQuestionType.single,
    answer: '',
  },
  {
    id: '2',
    question: 'Кто написал роман "Преступление и наказание"?',
    options: [
      { value: '0', label: 'Федор Достоевский' },
      { value: '1', label: 'Лев Толстой' },
      { value: '2', label: 'Александр Пушкин' },
      { value: '3', label: 'Иван Тургенев' },
    ],
    type: EQuestionType.multi,
    answer: [],
  },
  {
    id: '3',
    question: 'Что такое HTML?',
    options: null,
    type: EQuestionType.text,
    answer: '',
  },
  {
    id: '4',
    question: 'Какие языки программирования относятся к парадигме "объектно-ориентированное программирование"?',
    options: [
      { value: '0', label: 'Java' },
      { value: '1', label: 'C++' },
      { value: '2', label: 'Python' },
      { value: '3', label: 'C#' },
    ],
    type: EQuestionType.longText,
    answer: '',
  },
  {
    id: '5',
    question: 'Как называется процесс преобразования исходного кода в машинный код?',
    options: [
      { value: '0', label: 'Компиляция' },
      { value: '1', label: 'Интерпретация' },
      { value: '2', label: 'Ассемблирование' },
      { value: '3', label: 'Клонирование' },
    ],
    type: EQuestionType.single,
    answer: '',
  },
];

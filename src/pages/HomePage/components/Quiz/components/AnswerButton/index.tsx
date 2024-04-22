import { setAnswer } from '@/shared/store/slices/quiz';
import { Button } from 'antd';
import { useFormikContext } from 'formik';
import { FC } from 'react';
import { useDispatch } from 'react-redux';

type TProps = {
  currentQuestionId: string;
};

export const AnswerButton: FC<TProps> = ({ currentQuestionId }) => {
  const dispatch = useDispatch();
  const { values } = useFormikContext<Record<string, string>>();

  const handleClick = () => {
    dispatch(setAnswer({ id: currentQuestionId, answer: values[currentQuestionId] }));
  };

  return (
    <Button onClick={handleClick} disabled={!values[currentQuestionId]} type="primary">
      Ответить
    </Button>
  );
};

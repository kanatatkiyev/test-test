import { useDispatch } from 'react-redux';
import { Typography, Button } from 'antd';

import { reset } from '@/shared/store/slices/quiz';

export const FinalView = () => {
  const dispatch = useDispatch();

  const handleClickReset = () => {
    dispatch(reset());
  };

  return (
    <>
      <Typography.Title level={2}>Тест пройден!</Typography.Title>
      <Button onClick={handleClickReset} type="primary">
        Начать заново
      </Button>
    </>
  );
};

import { FC, useEffect, useState } from 'react';
import { Typography, Flex, Progress, Space } from 'antd';
import { useDispatch } from 'react-redux';

import { setHaveTime, timeSelector, withTimeSelector } from '@/shared/store/slices/quiz';
import { useAppSelector } from '@/shared/hooks/useAppSelector';
import { LS_TIME_REMAIN_KEY, setItem } from '@/shared/services/ls';

import styles from './styles.module.scss';
import { formatTime } from './utils/formatTime';

const { Title, Text } = Typography;

type TProps = {
  progress: number;
  total: number;
};

export const Header: FC<TProps> = ({ progress, total }) => {
  const dispatch = useDispatch();
  const timeInMs = useAppSelector(timeSelector);
  const withTime = useAppSelector(withTimeSelector);

  const [time, setTime] = useState(Number(timeInMs));

  useEffect(() => {
    if (!withTime) return;

    const timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime < 0) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1000;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeInMs, withTime]);

  useEffect(() => {
    if (!withTime) return;

    const handleUnload = () => {
      setItem(LS_TIME_REMAIN_KEY, time);
    };

    window.addEventListener('unload', handleUnload);

    if (!time) {
      dispatch(setHaveTime(false));
      setItem(LS_TIME_REMAIN_KEY, 0);
    }

    return () => {
      window.removeEventListener('unload', handleUnload);
    };
  }, [dispatch, time, withTime]);

  return (
    <Space direction="vertical" size={20}>
      <Flex align="center" gap={20} wrap="wrap">
        <Title level={2} style={{ margin: 0 }}>
          Тестирование
        </Title>

        {withTime && (
          <div className={styles.Timer}>
            <Text>{formatTime(time)}</Text>
          </div>
        )}
      </Flex>

      <Progress steps={total} percent={progress} showInfo={false} size={[30, 5]} />
    </Space>
  );
};

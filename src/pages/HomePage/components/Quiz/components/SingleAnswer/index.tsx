import { FC } from 'react';
import { useField } from 'formik';
import { Radio, Space } from 'antd';

import { TQuestionOption } from '@/shared/store/slices/quiz';

type TProps = {
  name: string;
  options: Array<TQuestionOption>;
};

export const SingleAnswer: FC<TProps> = ({ name, options }) => {
  const [field] = useField(name);

  const { value, onChange } = field;

  return (
    <Radio.Group onChange={onChange} value={value} name={name}>
      <Space direction="vertical">
        {options.map(({ value, label }) => (
          <Radio key={value} value={value}>
            {label}
          </Radio>
        ))}
      </Space>
    </Radio.Group>
  );
};

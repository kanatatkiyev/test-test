import { FC } from 'react';
import { useField, useFormikContext } from 'formik';
import { Checkbox, GetProp, Space } from 'antd';

import { TQuestionOption } from '@/shared/store/slices/quiz';

type TProps = {
  name: string;
  options: Array<TQuestionOption>;
};

export const MultiAnswer: FC<TProps> = ({ name, options }) => {
  const [field] = useField(name);
  const { setFieldValue } = useFormikContext();

  const { value } = field;

  const handleChange: GetProp<typeof Checkbox.Group, 'onChange'> = (checkedValues) => {
    setFieldValue(name, checkedValues);
  };

  return (
    <Checkbox.Group onChange={handleChange} value={value} name={name}>
      <Space direction="vertical">
        {options.map(({ value, label }) => (
          <Checkbox key={value} value={value}>
            {label}
          </Checkbox>
        ))}
      </Space>
    </Checkbox.Group>
  );
};

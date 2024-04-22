import { FC } from 'react';
import { useField } from 'formik';
import { Input } from 'antd';

const { TextArea } = Input;

type TProps = {
  name: string;
};

export const LongTextAnswer: FC<TProps> = ({ name }) => {
  const [field] = useField(name);

  return <TextArea {...field} name={name} placeholder="Свой ответ" />;
};

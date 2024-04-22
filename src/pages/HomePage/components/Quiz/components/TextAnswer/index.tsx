import { FC } from 'react';
import { useField } from 'formik';
import { Input } from 'antd';

type TProps = {
  name: string;
};

export const TextAnswer: FC<TProps> = ({ name }) => {
  const [field] = useField(name);

  return <Input {...field} name={name} placeholder="Свой ответ" />;
};

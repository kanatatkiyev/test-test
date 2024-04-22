import { Space, Typography } from 'antd';
import { Formik } from 'formik';

import { useAppSelector } from '@/shared/hooks/useAppSelector';
import { EQuestionType, haveTimeSelector, questionInfoSelector } from '@/shared/store/slices/quiz';

import { Header } from './components/Header';
import { SingleAnswer } from './components/SingleAnswer';
import { TextAnswer } from './components/TextAnswer';
import { LongTextAnswer } from './components/LongTextAnswer';
import { AnswerButton } from './components/AnswerButton';
import { MultiAnswer } from './components/MultiAnswer';
import { FinalView } from './components/FinalView';

const { Title } = Typography;

export const Quiz = () => {
  const { currentQuestion, progress, total } = useAppSelector(questionInfoSelector);
  const haveTime = useAppSelector(haveTimeSelector);

  if (!currentQuestion || !haveTime) return <FinalView />;

  const { question, options, type, id } = currentQuestion;

  const getAnswerComponent = () => {
    switch (type) {
      case EQuestionType.single: {
        return <SingleAnswer name={id} options={options || []} />;
      }
      case EQuestionType.multi: {
        return <MultiAnswer name={id} options={options || []} />;
      }
      case EQuestionType.text: {
        return <TextAnswer name={id} />;
      }
      case EQuestionType.longText: {
        return <LongTextAnswer name={id} />;
      }
      default: {
        return null;
      }
    }
  };

  return (
    <>
      <Header progress={progress} total={total} />
      <Title level={4}>{question}</Title>

      <Formik initialValues={{}} onSubmit={() => {}}>
        <form>
          <Space direction="vertical" size={20}>
            {getAnswerComponent()}

            <AnswerButton currentQuestionId={id} />
          </Space>
        </form>
      </Formik>
    </>
  );
};

import { Container } from '@/shared/ui/Container';
import { Quiz } from './components/Quiz';
import styles from './style.module.scss';

export const HomePage = () => {
  return (
    <Container>
      <div className={styles.HomePage}>
        <Quiz />
      </div>
    </Container>
  );
};

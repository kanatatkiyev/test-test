import { FC, PropsWithChildren } from 'react';

import styles from './style.module.scss';

export const Container: FC<PropsWithChildren> = ({ children }) => <div className={styles.Container}>{children}</div>;

import React from 'react';

import styles from './styles.module.scss';

type RowProps = {
  children: React.ReactNode;
};

const Row: React.FC<RowProps> = ({
  children
}) => (
    <div className={styles['dashboard-row']}>
      {children}
    </div>
  );

export default Row;
import React from 'react';

import styles from './styles.module.scss';

type ColumnProps = {
  children: React.ReactNode;
};

const Column: React.FC<ColumnProps> = ({
  children
}) => (
    <div className={styles['dashboard-column']}>
      {children}
    </div>
  );

export default Column;
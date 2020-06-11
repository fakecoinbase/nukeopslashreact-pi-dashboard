import React from 'react';

import styles from './styles.module.scss';

type GridProps = {
  children: React.ReactNode;
};

const Grid: React.FC<GridProps> = ({
  children
}) => (
    <div className={styles['dashboard-grid']}>
      {children}
    </div>
  );

export default Grid;
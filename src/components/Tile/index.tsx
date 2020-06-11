import React from 'react';
import { Statistic } from 'semantic-ui-react';

import styles from './styles.module.scss';

type TileProps = {
  children: React.ReactNode;
};

const Tile: React.FC<TileProps> = ({
  children
}) => (
    <div className={styles['tile']}>
      <Statistic>
        <Statistic.Value>
          {children}
        </Statistic.Value>
      </Statistic>
    </div>
  );

  export default Tile;
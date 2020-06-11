import React from 'react';
import cx from 'classnames';
import { Statistic } from 'semantic-ui-react';

import { Color } from '../types';
import styles from './styles.module.scss';

type TileProps = {
  children: React.ReactNode;
  color?: Color;
};

const Tile: React.FC<TileProps> = ({
  children,
  color = 'black'
}) => (
    <div className={cx(
      styles['tile'],
      styles[color]
    )}>
      <Statistic inverted>
        <Statistic.Value>
          {children}
        </Statistic.Value>
      </Statistic>
    </div>
  );

  export default Tile;
import React from 'react';
import cx from 'classnames';
import { Dimmer, Loader } from 'semantic-ui-react';

import { Color } from '../types';
import styles from './styles.module.scss';

export type TileProps = {
  className?: string;
  children: React.ReactNode;
  loading?: boolean;
  error?: boolean | string;
  color?: Color;
  textColor?: 'white' | 'black';
};

const Tile: React.FC<TileProps> = ({
  className,
  children,
  loading = false,
  error = false,
  color = 'black',
  textColor = 'white'
}) => (
    <div className={cx(
      className,
      styles['tile'],
      styles[color],
      styles[`${textColor}Text`]
    )}>
      <Dimmer active={loading}>
        <Loader />
      </Dimmer>
      {children}
    </div>
  );

export default Tile;
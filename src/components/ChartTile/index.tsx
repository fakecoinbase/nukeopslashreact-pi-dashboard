import React from 'react';
import _ from 'lodash';
import { Header } from 'semantic-ui-react';
import { Line } from 'react-chartjs-2';

import Tile, { TileProps } from '../Tile';
import config from './config';
import styles from './styles.module.scss';

type ChartTileProps = Omit<TileProps, 'children'> & {
  data: number[];
  title?: string;
};

const ChartTile: React.FC<ChartTileProps> = ({
  data,
  title,
  ...tileProps
}) => (
    <Tile className={styles['chart-tile']} {...tileProps}>
      <div className={styles['chart-tile-content']}>
        <Header inverted as='h1'>
          {title}
        </Header>
        <Header className={styles['chart-tile-value']} inverted as='h1'>
          { data.length > 0 ? _.round(_.last(data) as number, 2) : ''}
        </Header>
      </div>
      <Line
        data={{
          labels: _.range(0, data.length),
          datasets: [{
            ...config.datasets,
            data
          }]
        }}
        options={config.options}
      />
    </Tile>
  );

export default ChartTile;
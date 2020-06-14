import React from 'react';

import Grid from './components/Grid';
import Row from './components/Row';
import Tile from './components/Tile';
import ChartTile from './components/ChartTile';
import WeatherWidgetContainer from './containers/WeatherWidgetContainer'

import styles from './App.module.scss';

function App() {
  return (
    <div className={styles['app']}>
      <Grid>
        <Row>
          <WeatherWidgetContainer />
          <ChartTile
            color='yellow'
            data={[10, 20, 70, 30, 20, 50, 80, 40]}
            title='ETH'
          />
        </Row>
      </Grid>
    </div>
  );
}

export default App;

import React from 'react';

import Grid from './components/Grid';
import Row from './components/Row';
import Tile from './components/Tile';
import WeatherWidgetContainer from './containers/WeatherWidgetContainer'

import styles from './App.module.scss';

function App() {
  return (
    <div className={styles['app']}>
      <Grid>
        <Row>
        <WeatherWidgetContainer />
        </Row>
        <Row>
          <Tile color='red'>10</Tile>
          <Tile color='blue'>10</Tile>
          <Tile color='green'>10</Tile>
        </Row>
      </Grid>
    </div>
  );
}

export default App;

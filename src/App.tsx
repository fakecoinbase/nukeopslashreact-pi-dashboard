import React from 'react';

import Grid from './components/Grid';
import Row from './components/Row';
import WeatherWidgetContainer from './containers/WeatherWidgetContainer'
import LocalWeatherWidgetContainer from './containers/LocalWeatherWidgetContainer'
import CryptoWidgetContainer from './containers/CryptoWidgetContainer';

import styles from './App.module.scss';

function App() {
  return (
    <div className={styles['app']}>
      <Grid>
        <Row>
          <WeatherWidgetContainer />
          <LocalWeatherWidgetContainer />
        </Row>
          <CryptoWidgetContainer />
      </Grid>
    </div>
  );
}

export default App;

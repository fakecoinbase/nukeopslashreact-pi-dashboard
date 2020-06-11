import React from 'react';

import Tile from './components/Tile';

import styles from './App.module.scss';

function App() {
  return (
    <div className={styles['app']}>
<Tile>10</Tile>
    </div>
  );
}

export default App;

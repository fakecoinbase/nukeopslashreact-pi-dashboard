import React from 'react';

import ChartTile from '../../components/ChartTile';
import { PriceDataPoint } from '../../services/Coinbase';

type CryptoWidgetProps = {
  loading?: boolean;
  error?: boolean | string;
  currency: string;
  cryptoData: PriceDataPoint[];
};

const CryptoWidget: React.FC<CryptoWidgetProps> = ({
  currency,
  cryptoData,
  ...rest
}) => (
    <ChartTile
      color='green'
      data={cryptoData ? cryptoData.map(point => point.price) : []}
      title={currency.toUpperCase()}
      { ...rest }
    />
);

export default CryptoWidget;
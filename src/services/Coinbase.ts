const ethUrl = 'https://www.coinbase.com/api/v2/prices/ETH-USD/historic?period=week';

export type CoinbaseResponse = {
  data: {
    base: string;
    currency: 'USD';
    prices: PriceDataPoint[];
  };
};

export type PriceDataPoint = {
  price: number;
  time: string;
};

class CoinbaseApi {
  fetchEthData: (() => Promise<CoinbaseResponse>) = async () => {
    return (await fetch(ethUrl)).json();
  }
};

export default new CoinbaseApi();
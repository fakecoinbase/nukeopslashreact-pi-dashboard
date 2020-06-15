import React, { useEffect } from 'react';
import { AnyAction } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import CryptoWidget from '../../widgets/CryptoWidget';
import { createCurrencySelector } from '../../store/selectors/crypto';
import { CryptoStore, cryptoThunks } from '../../store/reducers/crypto';

const CryptoWidgetContainer: React.FC<{}> = () => {
  const currency = 'eth';
  const cryptoDataSelector = createCurrencySelector(currency);
  const dispatch: ThunkDispatch<CryptoStore, any, AnyAction> = useDispatch();
  const cryptoData = useSelector(cryptoDataSelector);

  useEffect(() => {
    dispatch(cryptoThunks.fetchEth())
  }, []);

  return <CryptoWidget
    currency={currency}
    loading={cryptoData?.loading}
    error={cryptoData?.error}
    cryptoData={cryptoData?.data}
  />;
}

export default CryptoWidgetContainer;
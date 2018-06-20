import { UPDATE_BTC_PRICE, FIRE_TRADE } from './types';
import axios from 'axios';

/**
 * Gets the BTC last trading price from the bitfinex api.
 */
export function getBtcPrice() {
    return function(dispatch) {
        axios.get(`/api/v1/pubticker/btcusd`)
          .then(res => res.data.last_price)
          .then(last_price => 
            dispatch({
                type: UPDATE_BTC_PRICE,
                payload: parseFloat(last_price)
            })
        );
    }
}

/**
 * Attempts to trade between 2 currencys and update account balances
 * @param: fromAmount float, in our case USD amount going into BTC
 * @param: toAmount float, relative BTC amount at current price.
 */
export function fireTrade(fromAmount, toAmount) {
    return function(dispatch) {
        dispatch({
            type: FIRE_TRADE,
            payload: {
                fromAmount: fromAmount,
                toAmount: toAmount
            }
        })
    }
}


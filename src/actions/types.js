/**
 * Gets current BTC price from bitfinex api
 */
export const UPDATE_BTC_PRICE = 'UPDATE_BTC_PRICE';

/**
 * Checks the current trade (balances and amount to trade), if all is good we
 * fire the trade and return the new balances.
 */
export const FIRE_TRADE = 'FIRE_TRADE';
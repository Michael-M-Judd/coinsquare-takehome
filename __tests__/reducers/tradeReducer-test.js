import tradeReducer from '../../src/reducers/tradeReducer';
import { UPDATE_BTC_PRICE, FIRE_TRADE } from '../../src/actions/types';

describe('Trade Reducer', () => {

    it('has default state', () => {

        expect(tradeReducer(undefined, {type: 'nothing'})).toEqual({
            accountBalance: {
                USD: 156.12,
                BTC: 0
            },
            btcPrice: 0,
            tradeSuccess: false
        })

    })

    it('will UPDATE_BTC_PRICE', () => {
        expect(tradeReducer(undefined, {
            type: UPDATE_BTC_PRICE,
            payload: 6000.57
        }))
        .toEqual({
            accountBalance: {
                USD: 156.12,
                BTC: 0
            },
            btcPrice: 6000.57,
            tradeSuccess: false
        })
    })

    it('can FIRE_TRADE when fromAmount < accountBalance', () => {
        expect(tradeReducer(undefined, {
            type: FIRE_TRADE,
            payload: {
                fromAmount: 156.12,
                toAmount: 6000
            }}))
            .toEqual({
                accountBalance: {
                    USD: 0,
                    BTC: 6000
                },
                btcPrice: 0,
                tradeSuccess: true
            })
    })

    it('will not FIRE_TRADE when fromAmount > accountBalance', () => {
        expect(tradeReducer(undefined, {
            type: FIRE_TRADE,
            payload: {
                fromAmount: 2000,
                toAmount: 6000
            }}))
            .toEqual({
                accountBalance: {
                    USD: 156.12,
                    BTC: 0
                },
                btcPrice: 0,
                tradeSuccess: false
            })
    })

})
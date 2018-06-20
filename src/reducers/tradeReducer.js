import { UPDATE_BTC_PRICE, FIRE_TRADE } from '../actions/types';

const initialState = {
    accountBalance: {
        USD: 156.12,
        BTC: 0
    },
    btcPrice: 0,
    tradeSuccess: false // keep trade of trade success
};

export default function(state = initialState, action) {
    switch (action.type) {
        
        case UPDATE_BTC_PRICE:
            return {
                ...state,
                btcPrice: action.payload
            }
        case FIRE_TRADE:
            
            let fromAmount = action.payload.fromAmount; // amount of USD to trade
            let toAmount = action.payload.toAmount; // amount of BTC to get

            //TODO: Should probably do a secondary check to see BTC price hasn't dramatically changed :'(

            // one last check for balance validation
            if (fromAmount <= state.accountBalance.USD) {
                
                // obviously toFixed would have some policy for dust trading
                let newUSD = parseFloat(state.accountBalance.USD - fromAmount).toFixed(2);
                let newBTC = parseFloat(state.accountBalance.BTC + toAmount).toFixed(8);

                return {...state, 
                    accountBalance: {
                        USD: newUSD,
                        BTC: newBTC
                    },
                    tradeSuccess: true}
            }
            return state
        default:
            return state
    }
}
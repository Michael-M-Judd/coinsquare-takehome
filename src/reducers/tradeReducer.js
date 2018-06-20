import { UPDATE_ACCOUNT_BALANCE, UPDATE_BTC_PRICE, FIRE_TRADE } from '../actions/types';

const initialState = {
    accountBalance: {
        USD: 156.12,
        BTC: 0
    },
    btcPrice: 0,
    tradeSuccess: false
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
            if (fromAmount < state.accountBalance.USD) {
                
                let newUSD = parseFloat(state.accountBalance.USD - fromAmount);
                let newBTC = parseFloat(state.accountBalance.BTC + toAmount);
                console.log('should have happened')
                return {...state, 
                    accountBalance: {
                        USD: newUSD,
                        BTC: newBTC
                    },
                    tradeSuccess: true}
            }
            return state
        default:
            console.log('DEFAULT')
            return state
    }
}
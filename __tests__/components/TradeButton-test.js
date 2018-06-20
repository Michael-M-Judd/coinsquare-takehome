import React from 'react';
import configureMockStore from 'redux-mock-store'
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TradeForm from '../../src/components/TradeForm';

Enzyme.configure({ adapter: new Adapter() });

const initialState = {
    accountBalance: {
        USD: 156.12,
        BTC: 0
    },
    btcPrice: 6000,
    tradeSuccess: false
}

// Create the mock store
const mockStore = configureMockStore();

/*
 * TODO: Currently getting a TypeError: Cannot read property 'btcPrice' of undefined
 * I'm sure it has to do with the way I'm trying to mock my store, because the error
 * is happening in mapStateToProps. I've tried implementing suggestions here
 * https://hackernoon.com/unit-testing-redux-connected-components-692fa3c4441c
 * and here https://jsramblings.com/2018/01/15/3-ways-to-test-mapStateToProps-and-mapDispatchToProps.html
 * but still have no luck.
 */

describe('TradeForm', () => {
    let wrapper, store;

    beforeEach(() => {
        store = mockStore(initialState);
        // Shallow render the container passing in the mock store
        wrapper = shallow(
            <TradeForm store={store} />
        );
    });

    it('should show current account balance', () => {
        // test that the state values were correctly passed as props
        expect(wrapper.props().accountBalance.USD).toBe(156.12);
    });

    it('should disable button when entering neg values', () => {
        // TODO
    });
});

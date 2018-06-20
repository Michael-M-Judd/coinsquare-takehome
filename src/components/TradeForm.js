import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getBtcPrice, fireTrade } from '../actions/tradeActions';

class TradeForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fromAmount: '',
            toAmount: ''
        }

        this.onFromAmountChange = this.onFromAmountChange.bind(this);
        this.onToAmountChange = this.onToAmountChange.bind(this);
        this.onTrade = this.onTrade.bind(this);
    }

    componentWillMount() {
        this.props.getBtcPrice();
    }

    /**
     * Fires when the Trade input is changed and updates the quote price
     */
    onFromAmountChange(e) {
        this.setState({ [e.target.name]: e.target.value })

        // get to 1 satoshi signifigance
        const quoteToBtc = (e.target.value / this.props.btcPrice).toFixed(8);

        this.setState({toAmount: quoteToBtc})
    }

    /**
     * Fires when the input pair trading to is changed and updates the amount needed to trade for.
     */
    onToAmountChange(e) {
        this.setState({ [e.target.name]: e.target.value });
        
        const quoteToUsd = (this.props.btcPrice * e.target.value).toFixed(2);

        this.setState({fromAmount: quoteToUsd})
    }

    /**
     * Trade button clicked logic
     */
    onTrade(e) {
        e.preventDefault();
        
        if (this.state.fromAmount && this.props.accountBalance.USD > 0) {
            if (this.props.accountBalance.USD >= this.state.fromAmount) {
                this.props.fireTrade(this.state.fromAmount, this.state.toAmount)
            }
            else {
                console.log('not enough money')
                // TODO form validation
            }
            
        }
        else {
            console.log('dont trade')
            // TODO form validation
        }
    }

    render() {

        // disable button if either amount less than 0
        const inputCheck = this.state.fromAmount > 0 && this.state.toAmount > 0;

        return(
            
            <div>
                <p>{this.inputCheck}</p>
                <form id="trade-form" onSubmit={this.onTrade}>
                    <div className="input-container">
                        <label>Trade</label>
                        <input className="form-control" type="text" name="currencyTypeFrom" value="USD" disabled/>
                    </div>
                    <div className="input-container">
                        <input className="form-control" type="number" min="0" name="fromAmount" step="0.01" placeholder="Enter your amount" value={this.state.fromAmount} onChange={this.onFromAmountChange}/>
                    </div>
                    <div className="input-container">
                        <label>For</label>
                        <input className="form-control" type="text" name="currencyTypeTo" value="BTC" disabled/>
                    </div>
                    <div className="input-container">
                        <input className="form-control" type="number" name="toAmount" placeholder="Display Quote" value={this.state.toAmount} onChange={this.onToAmountChange}/>
                    </div>
                    <div className="input-container">
                        <button className="btn btn-block" type="submit" disabled={!inputCheck}>Trade</button>
                    </div>
                </form>
            </div>
        )
    }
}

TradeForm.propTypes = {
    getBtcPrice: PropTypes.func.isRequired,
    fireTrade: PropTypes.func,
    btcPrice: PropTypes.number.isRequired,
    accountBalance: PropTypes.object.isRequired
}

// get current btc price and account balances
const mapStateToProps = state => ({
    btcPrice: state.trade.btcPrice,
    accountBalance: state.trade.accountBalance,
    tradeSuccess: state.trade.tradeSuccess
})

export default connect(mapStateToProps,  { getBtcPrice, fireTrade }) (TradeForm);
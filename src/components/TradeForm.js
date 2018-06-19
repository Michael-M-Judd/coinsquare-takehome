import React, { Component } from 'react';
import axios from 'axios';


class TradeForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lastPrice: 0,
            fromAmount: '',
            toAmount: ''
        }

        this.onFromAmountChange = this.onFromAmountChange.bind(this);
        this.onToAmountChange = this.onToAmountChange.bind(this);
    }

    onFromAmountChange(e) {
        //TODO: html5 form type="number" might need js polyfill
        this.setState({ [e.target.name]: e.target.value })

        // get to 1 satoshi signifigance
        const quoteToBtc = (e.target.value / this.state.lastPrice).toFixed(8);

        this.setState({toAmount: quoteToBtc})
    }

    onToAmountChange(e) {
        this.setState({ [e.target.name]: e.target.value });
        
        const quoteToUsd = (this.state.lastPrice * e.target.value).toFixed(2);

        this.setState({fromAmount: quoteToUsd})
    }

    componentWillMount() {
        axios(`/api/v1/pubticker/btcusd`)
          .then(res => {
            const lastPrice = res.data.last_price;
            this.setState({ lastPrice: lastPrice });
          })
      }

    render() {
        return(
            <div>
                {this.state.lastPrice}
                <form>
                    <div className="input-container">
                        <label>Trade</label>
                        <input className="form-control" type="text" name="currencyTypeFrom" value="USD" disabled/>
                    </div>
                    <div className="input-container">
                        <input className="form-control" type="number" name="fromAmount" placeholder="Enter your amount" value={this.state.fromAmount} onChange={this.onFromAmountChange}/>
                    </div>
                    <div className="input-container">
                        <label>For</label>
                        <input className="form-control" type="text" name="currencyTypeTo" value="BTC" disabled/>
                    </div>
                    <div className="input-container">
                        <input className="form-control" type="number" name="toAmount" placeholder="Display Quote" value={this.state.toAmount} onChange={this.onToAmountChange}/>
                    </div>
                    <div className="input-container">
                        <button className="btn btn-block" type="submit" onSubmit={this.onSubmit}>Trade</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default TradeForm;
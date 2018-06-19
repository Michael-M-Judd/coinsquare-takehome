import React, { Component } from 'react';


class AccountBalance extends Component {

    constructor(props) {
        super(props);
        this.state = {
            balanceUSD: 0.00,
            balanceBTC: 0.000000
        }
    }

    render() {
      return (
        <div>
          <span>Account Balance</span>
          <div className="">
            <span className="balance-type">USD</span>
            <span className="balance-text">{this.state.balanceUSD}</span> 
          </div>
          <div className="">
            <span className="balance-type">BTC</span>
            <span className="balance-text">{this.state.balanceBTC}</span> 
          </div>
        </div>
      );
    }
  }
  
  export default AccountBalance;
  
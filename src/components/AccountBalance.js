import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class AccountBalance extends Component {

  render() {
    return (
      <div>
        <span>Account Balance</span>
        <div className="balance">
          <span className="balance-type">USD</span>
          <span className="balance-text">{this.props.accountBalance.USD}</span> 
        </div>
        <div className="balance">
          <span className="balance-type">BTC</span>
          <span className="balance-text">{this.props.accountBalance.BTC}</span> 
        </div>
      </div>
    );
  }
}

AccountBalance.propTypes = {
  accountBalance: PropTypes.object.isRequired
}

// get current btc price and account balances
const mapStateToProps = state => ({
  accountBalance: state.trade.accountBalance
})

export default connect(mapStateToProps,  null) (AccountBalance);
  
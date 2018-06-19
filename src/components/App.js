import React, { Component } from 'react';
import '../sass/main.scss';

const cors = require('cors');
import AccountBalance from './AccountBalance';
import TradeForm from './TradeForm';

class App extends Component {
  render() {
    return (
      <div>
        <div className="pair-trade-container">
        <div className="flex-row">
          <div className="col-quarter">
          <AccountBalance/>
          <TradeForm/>
          
          </div>
          <div className="col-three-quarter">
           
          </div>
        </div>
          
        </div>
        
      </div>
    );
  }
}

export default App;

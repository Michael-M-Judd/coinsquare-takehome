import React, { Component } from 'react';
import '../sass/main.scss';
import { Provider } from 'react-redux';
import store from '../store';

import AccountBalance from './AccountBalance';
import TradeForm from './TradeForm';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
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
      </Provider>
    );
  }
}

export default App;

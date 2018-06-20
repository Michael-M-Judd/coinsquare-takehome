# Coinsquare Currency Pair Trading
This project is a technical take-home where I was tasked to rebuild a modified version of the "Currency Pair Trading" between USD and BTC. 
There were some basic requirements (use state managers, no frontend libs, etc) which definitely made the project interesting and definiteley made me learn a few things along the way.

## Architecture
This project was built with the following technologies:
1. React + Redux + redux-thunk
2. npm
3. webpack (with scss-loader/css compiler, babel)
4. Testing through Jest + Enzyme
5. axios for bitfinex api calls

The TradeForm.js and AccountBalance.js are the two major components that deal with the logic. Basically the TradeForm.js has a small bit of it's own state to check for valid trades etc., and then it will call the fireTrade(fromAmount, toAmount) reducer on a valid trade and update the accountBalance: { USD, BTC}.

It's also worth mentioning that I simply setup a webpack proxy to deal with the CORS issues from the bitfinex API. This obviously wouldn't work completely in production, but I'm also assuming we wouldn't be hitting the bitfinex API for price data.

## Getting started
Clone the repository and cd into the repo. From there we can:

``` bash
# Install dependencies
npm install

# Serve on localhost:8080
npm start

# Build for production
npm run build

# To test
npm test
```

## Problems and Future Work
There was lots of things I'd like to do if I had more time for such a project. My short list would be:
* Add live form validation and error indicators on each part of the form. This is crucial from a UX point of view for a project like this.
* Make the TradeForm more component based, where instead of using simply USD to BTC, we could have any currency. That could simply mean having those USD/BTC inputs as dropdowns and picking the currency which would in turn update the state and get those current balances (added from the accountBalances object)
* My testing was fairly limited and I wanted to do more. To be honest, I'm still learning how to test redux components nicely, and given a bit more time I'm sure I could figure it out.

### Author

Michael Judd
[My website](http://www.michaeljudd.ca)
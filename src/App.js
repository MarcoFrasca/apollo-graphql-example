import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import ExchangeRates from "./components/ExchangeRates";

const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io"
});

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { currency: "EUR" };
  }
  render() {
    const { currency } = this.state;
    return (
      <ApolloProvider client={client}>
        <div>
          <h2>
            {`Currency Rates `}
            <span role="img" aria-label="money" aria-hidden={false}>
              💶
            </span>
          </h2>
          <select onChange={e => this.setState({ currency: e.target.value })}>
            <option value="EUR">Euro</option>
            <option value="USD">Dollar</option>
            <option value="GBP">Pounds</option>
          </select>
          <ExchangeRates currencySelected={currency} />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;

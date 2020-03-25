import React from "react";
import { GET_RATES } from "./Queries";
import { Query } from "react-apollo";

const ExchangeRates = ({ currencySelected }) => (
  <Query query={GET_RATES} variables={{ currencySelected }}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      console.log(data);
      return data.rates.map(({ currency, rate }) => (
        <div key={currency}>
          <p>
            {currency}: {rate}
          </p>
        </div>
      ));
    }}
  </Query>
);

export default ExchangeRates;

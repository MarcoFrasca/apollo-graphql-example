import gql from "graphql-tag";

export const GET_RATES = gql`
  query rates($currencySelected: String!) {
    rates(currency: $currencySelected) {
      currency
      rate
    }
  }
`;

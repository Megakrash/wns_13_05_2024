import { gql } from "@apollo/client";

export const queryAllCountries = gql`
  query CountriesGetAll {
    items: countries {
      id
      name
      emoji
      continent {
        id
        name
      }
    }
  }
`;

export const postNewCountry = gql`
  mutation postNewCountry($data: NewCountryInput!) {
    addCountry(data: $data) {
      id
      name
      emoji
      code
    }
  }
`;

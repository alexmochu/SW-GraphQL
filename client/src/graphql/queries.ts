import { gql } from '@apollo/client';

export const GET_PEOPLE = gql`
  {
    getPeople {
      name
      height
      mass
      gender
      homeworld
    }
  }
`;

export const GET_PERSON = gql`
  query getPerson($name: String!) {
    getPerson(name: $name) {
      name
      height
      mass
      gender
      homeworld
    }
  }
`;

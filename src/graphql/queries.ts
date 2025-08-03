import { gql } from "@apollo/client";

export const GET_USER = gql`
  query GetUser($id: ID!) {
    user(id: $id) {
      id
      firstName
      lastName
      email
    }
  }
`;

export const GET_ME = gql`
  query GetMe($token: String!) {
    getMe(token: $token) {
      firstName
      lastName
      email
      city
      mobile
      school
      class
      sparkCity
    }
  }
`;

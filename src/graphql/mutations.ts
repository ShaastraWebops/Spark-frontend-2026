import { gql } from "@apollo/client";

// export const REGISTER_USER = gql`
//   mutation Register($data: RegisterInput!) {
//     register(data: $data) {
//       id
//       firstName
//       lastName
//       email
//     }
//   }
// `;

export const REGISTER_USER = gql`
  mutation Register($data: SignUpInput!) {
    registerUser(data: $data)
  }
`;

// export const LOGIN_USER = gql`
//   mutation Login($data: LoginInput!) {
//     login(data: $data) {
//       id
//       firstName
//       lastName
//       email
//     }
//   }
// `;

export const LOGIN_USER = gql`
  mutation Login($data: SignInInput!) {
    loginUser(data: $data)
  }
`;


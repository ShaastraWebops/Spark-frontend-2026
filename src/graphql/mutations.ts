import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
  mutation Register($data: SignUpInput!) {
    registerUser(data: $data)
  }
`;

export const LOGIN_USER = gql`
  mutation Login($data: SignInInput!) {
    loginUser(data: $data)
  }
`;

export const LOGOUT = gql`
  mutation Logout {
    logout
  }
`;

export const REQUEST_OTP = gql`
  mutation RequestOtp($email: String!) {
    requestOtp(email: $email)
  }
`;

export const VERIFY_OTP = gql`
  mutation VerifyOtp($email: String!, $otp: String!) {
    verifyOtp(email: $email, otp: $otp)
  }
`;

export const SET_NEW_PASSWORD = gql`
  mutation SetNewPassword($email: String!, $newPassword: String!) {
    setNewPassword(email: $email, newPassword: $newPassword)
  }
`;

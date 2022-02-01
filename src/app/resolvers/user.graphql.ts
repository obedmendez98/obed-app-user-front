import { Apollo, gql } from 'apollo-angular';

export const DELETE_USERS = gql`
mutation deleteUser($id: Int!) {
  deleteUser(id: $id) {
    id
    name
    firstname
    lastname
    address
    phone
  }
}
`;

export const REED_USERS = gql`{
    getAllUsers {
      id
      name
      firstname
      lastname
      address
      phone
    }
}
`;

export const ADD_USER =  gql`
    mutation ddUser($name: String!, $lastname: String!, $firstname: String!, $address: String!, $phone: String!) {
        addUser(name: $name, lastname: $lastname, firstname: $firstname, address: $address, phone: $phone) {
            id
            name
            firstname
            lastname
            address
            phone
        }
    }
`;

export const UPDATE_USER = gql`
    mutation updateUser($id: Int!, $name: String!, $lastname: String!, $firstname: String!, $address: String!, $phone: String!) {
        updateUser(id: $id, name: $name, lastname: $lastname, firstname: $firstname, address: $address, phone: $phone) {
            id
            name
            firstname
            lastname
            address
            phone
        }
    }
`;

export const REED_FILTER_USERS = gql`
    query GetUsers($filter: String) {
        getUsers(filter: $filter) {
            id
            name
            firstname
            lastname
            address
            phone
        }
    }

`;



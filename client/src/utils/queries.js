import { gql } from "@apollo/client";

export const GET_ME = gql`
query meQuery($id: ID!) {
  me (id: $id) {
    _id
    username
    email
    bookCount
    savedBooks {
      bookId
      title
      authors
      description
      image
    }
  }
}
`;

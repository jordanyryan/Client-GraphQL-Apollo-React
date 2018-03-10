import gql from 'graphql-tag';

export default gql`
  mutation LikeLyrics($id: ID) {
    likeLyrics(id: $id) {
      id
    }
  }
`;
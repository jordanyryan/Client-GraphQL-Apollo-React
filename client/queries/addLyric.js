import gql from 'graphql-tag';

export default gql`
  mutation AddLyricToSong($id: ID, $content: String) {
    addLyricToSong(songId: $id, content: $content) {
      lyrics {
        content
      }
    }
  }
`;
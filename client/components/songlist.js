import React, {Component} from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';

class SongList extends Component {
  
  renderSongs() {
    return this.props.data.songs.map(song => {
      return (
        <li key={song.id} className="collection-item">{song.title}</li>
      )
    })
  }

  render() {
    console.log(window.location.hash)
    if (this.props.data.loading) return <div>Loading</div> 
    return(
      <div className="collection">
        {this.renderSongs()}
      </div>
    )
  }
}

const query = gql`
  {
    songs {
      title
      id
    }
  }
`;

export default graphql(query)(SongList);
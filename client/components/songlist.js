import React, {Component} from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import {Link} from 'react-router-dom';
import fetchSongsQ from '../queries/fetchSongs';

class SongList extends Component {
  
  renderSongs() {
    return this.props.data.songs.map(song => {
      return (
        <li key={song.id} className="collection-item">{song.title}</li>
      )
    })
  }

  render() {
    if (this.props.data.loading) return <div>Loading</div> 
    return(
      <div>
        <ul className="collection">
          {this.renderSongs()}
        </ul>
        <Link className="btn-floating btn-large red right" to="/songs/new">
          <i className="material-icons">add</i>
        </Link>
      </div>
    )
  }
}



export default graphql(fetchSongsQ)(SongList);
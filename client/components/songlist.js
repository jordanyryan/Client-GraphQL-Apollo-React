import React, {Component} from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import {Link} from 'react-router-dom';
import fetchSongsQ from '../queries/fetchSongs';
import deleteSongQ from '../queries/deleteSong';

class SongList extends Component {

  onSongDelete(id) {
    this.props.mutate({ variables: {id}})
    .then(() => this.props.data.refetch());
  }

  renderSongs() {
    return this.props.data.songs.map(({id, title}) => {
      return (
        <li key={id} className="collection-item">{title}
        <i className="material-icons right"
        onClick={() => this.onSongDelete(id)}>delete</i>
        </li>
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



export default graphql(deleteSongQ)(
  graphql(fetchSongsQ)(SongList)
);
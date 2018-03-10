import React, {Component} from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import FetchSong from '../queries/fetchsong';

class SongDetail extends Component {
  render() {
    if (this.props.data.loading) return <div>Loading...</div>
    const {title, id} = this.props.data.song
    return(
      <div>
        <h3>{title}</h3>
      </div>
    )
  }
}



export default graphql(FetchSong, {
  options: (props) => {return {variables: {id: props.match.params.id}}}
})(SongDetail);
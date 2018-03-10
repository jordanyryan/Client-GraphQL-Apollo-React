import React, {Component} from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import FetchSong from '../queries/fetchsong';
import {Link} from 'react-router-dom';
import LyricList from './lyriclist';

import AddLyric from './addlyric';

class SongDetail extends Component {
  render() {
    if (this.props.data.loading) return <div></div>;
    const {title, lyrics} = this.props.data.song
    return(
      <div>
        <Link to="/">Home</Link>
        <h3>{title}</h3>
        <LyricList lyrics={lyrics}/>
        <AddLyric songId={this.props.match.params.id}/>
      </div>
    )
  }
}



export default graphql(FetchSong, {
  options: (props) => {return {variables: {id: props.match.params.id}}}
})(SongDetail);
import React, {Component} from 'react';
import {withRouter} from 'react-router';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import {Link} from 'react-router-dom';
import fetchSongsQ from '../queries/fetchSongs';

class CreateSong extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: ''
    }
  }

  onSubmit(event) {
    event.preventDefault();

    this.props.mutate({
      variables: {
        title: this.state.title
      },
      refetchQueries: [{
        query: fetchSongsQ
      }]
    })
    .then(() => this.props.history.push('/'));
  }

  render() {
    return(
      <div className="container">
        <Link to="/">Back</Link>
        <h3>Create a new song</h3>
        <form
        onSubmit={this.onSubmit.bind(this)}>
          <label>Song Title:</label>
          <input 
          onChange={event => this.setState({title: event.target.value})}
          value={this.state.title}
          type="text"/>
          <button type="submit">Add Song</button>
        </form>
      </div>
    )
  }
}

const mutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      id
      title
    }
  }
`;


export default graphql(mutation)(CreateSong);
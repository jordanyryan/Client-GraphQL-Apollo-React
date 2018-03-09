import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import ApolloClient from 'apollo-client';
import {ApolloProvider} from 'react-apollo';
import SongList from './components/songlist';
import CreateSong from './components/createsong';


const client = new ApolloClient({});

ReactDOM.render(
  <ApolloProvider client={client}>
    <HashRouter>
      <div className="container">
        <Route exact path="/" component={SongList} />
        <Route path="/songs/new" component={CreateSong} />
      </div>
    </HashRouter>
  </ApolloProvider>,
  document.getElementById('root')
);

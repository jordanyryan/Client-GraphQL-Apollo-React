import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import ApolloClient from 'apollo-client';
import {ApolloProvider} from 'react-apollo';
import App from './components/app';
import SongList from './components/songlist';
import Random from './components/random';


const client = new ApolloClient({});

ReactDOM.render(
  <ApolloProvider client={client}>
    <HashRouter>
      <App />
    </HashRouter>
  </ApolloProvider>,
  document.getElementById('root')
);

import React from 'react';
import logo from './images/logo.png';
import './App.css';
import {RegistrationForm} from './Components/RegistrationForm'
import Grid from './Components/DisplayGrid'
import Nav from './Components/Nav'
import {Footer} from './Components/Footer.jsx'
import {Table} from './Components/test'
import { ApolloClient, InMemoryCache , ApolloProvider} from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});


function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
      {/* <Nav /> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width="50%" /> */}
        <p>
          Welcome to GollemTimes page
        </p>
      {/* </header> */}
      {/* <RegistrationForm /> */}
     
      {/* <Grid /> */}
      {/* <Table /> */}
      <Grid />
      <Footer />
      </ApolloProvider>
    </div>
  );
}

export default App;

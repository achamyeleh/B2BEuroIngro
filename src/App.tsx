import React, {useState} from 'react';
import './App.css';
import Nav from './Components/Toolbar'
import {Footer} from './Components/Footer.jsx'
import {Table} from './Components/test'
import { ApolloClient, InMemoryCache , ApolloProvider} from '@apollo/client';
import SideBar from './Components/sidebar/SideBar';
import BackDrop from './Components/sidebar/BackDrop';
import { TextSpan } from 'typescript';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

const App:React.FC = () => {
  const [sideBarOpen, setSideBarOpen] = useState<boolean>(false)
  
  const sidebarToggleClickHandler = () => {
    setSideBarOpen(!sideBarOpen)
  }

  const backDropClickHandler = () => {
    setSideBarOpen(false)
  }
  let backDrop;
  if (sideBarOpen) {
    backDrop = <BackDrop click={backDropClickHandler}/>;
  }
  return (
    <div className="App" style={{height:'100%'}}>
      <ApolloProvider client={client}>
        <Nav sidebarClickHandler = {sidebarToggleClickHandler}/>
        <SideBar show={sideBarOpen} click={backDropClickHandler}/>
        {backDrop}
        <Footer />
      </ApolloProvider>
    </div>
  );
}

export default App;

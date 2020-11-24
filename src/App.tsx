import React, {useState} from 'react';
import './App.css';
import Nav from './Components/Toolbar'
import {Table} from './Components/test'
import { ApolloClient, InMemoryCache , ApolloProvider} from '@apollo/client';
import SideBar from './Components/sidebar/SideBar';
import BackDrop from './Components/sidebar/BackDrop';
import { TextSpan } from 'typescript';
import Routing from './Components/Routing';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import { RegistrationForm } from './Components/registration/RegistrationForm';
import BusinessIdea from './Components/businessIdea/BusinessIdea';
import Default from './Components/default/Default';
import Category from './Components/category/Category';


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
    <Router>
    <div className="App" >
      <ApolloProvider client={client}>
        <Nav sidebarClickHandler = {sidebarToggleClickHandler}/>
        <SideBar show={sideBarOpen} click={backDropClickHandler}/>
        <Switch>
          <Route exact path='/' component={Default} />
          <Route path='/youtubers' component={RegistrationForm} />
          <Route path="/businessIdea" component={BusinessIdea} />
          <Route path='/category' component={Category} />
        </Switch>
        {backDrop}
      </ApolloProvider>
    </div>
    </Router>
  );
}

export default App;

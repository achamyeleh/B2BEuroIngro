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
import Home from './Components/Home';
import { RegistrationForm } from './Components/registration/RegistrationForm';
import Grid from './Components/grid/DisplayGrid';
import BusinessIdea from './Components/businessIdea/BusinessIdea';
import News from './Components/news/News';
import AboutUs from './Components/aboutUs/AboutUs';
import Footer from './Components/footer/Footer';


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
          <Route  path='/'exact  component={Home} />
          <Route path='/youtubers' component={RegistrationForm} />
          <Route path='/report' component={Grid} />
          <Route path="/businessIdea" component={BusinessIdea} />
          <Route path='/news' component={News} />
          <Route path='/aboutUs' component={AboutUs} />
        </Switch>
        {backDrop}
        <Footer />
      </ApolloProvider>
    </div>
    </Router>
  );
}

export default App;

import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Grid from './DisplayGrid'
import BusinessIdea from './businessIdea/BusinessIdea'
import {RegistrationForm} from './RegistrationForm'
import AboutUs from './aboutUs/AboutUs'
import News from './news/News'
import Home from './Home'

 const Routing:React.FC = () => {
   return (
   <Router>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/youtubers' component={RegistrationForm} />
      <Route path='/report' component={Grid} />
      <Route path="/businessIdea" component={BusinessIdea} />
      <Route path='/news' component={News} />
      <Route path='/aboutUs' component={AboutUs} />
    </Switch>
    </Router>
   )
 }
 export default Routing;
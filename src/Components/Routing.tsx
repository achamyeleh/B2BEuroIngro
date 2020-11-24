import React from 'react'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import BusinessIdea from './businessIdea/BusinessIdea'
import {RegistrationForm} from './registration/RegistrationForm'
import AboutUs from './category/Category'
import Default from './default/Default'
import decode from 'jwt-decode'

interface ExpirationTime {
  exp: number;
}
const checkAuth = () => {
  const token = localStorage.getItem('token');
  const refreshToken = localStorage.getItem('refreshToken')
  if(!token || !refreshToken) {
    return false;
  }

  try {
    const { exp }: ExpirationTime = decode(refreshToken)
    if (exp < new Date().getTime()) {
      return false
    }

  } catch(e) {
    return false
  }

  return true;
}

 const Routing:React.FC = () => {
   return (
   <Router>
    <Switch>
      <Route exact path='/' component={Default} />
      <Route path='/youtubers' component={RegistrationForm} />
      <Route path="/businessIdea" component={BusinessIdea} />
      <Route path='/aboutUs' component={AboutUs} />
    </Switch>
    </Router>
   )
 }
 export default Routing;
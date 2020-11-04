import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Grid from './DisplayGrid'
import '../App.css'
import BusinessIdea from './BusinessIdea'
import {RegistrationForm} from './RegistrationForm'
import AboutUs from './AboutUs'
import News from './News'


const Nav: React.FC = () => {

    return (
        <div>
             
        <Router>
            <div className="link">
            <Link to = "/"> Home </Link>
            <Link to= "/businessIdea"> BusinessIdea </Link>
            <Link to = "/youtubers"> Youtubers </Link>
            <Link to = "/display"> Display Grid  </Link>
            <Link to= "/news"> News </Link>
            <Link to= "/aboutUs"> AboutUs </Link> 
            </div>

            <ul className="nav-links">
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/businessIdea" component={BusinessIdea} />
                    <Route path='/youtubers' component={RegistrationForm} />
                    <Route path='/display' component={Grid} />
                    <Route path='/news' component={News} />
                    <Route path='/aboutUs' component={AboutUs} />
                </Switch>
            </ul>
            </Router>
        </div>
    )
}
const Home =() => (
    <div>
        <h1>this is home page</h1>
    </div>
)

export default Nav
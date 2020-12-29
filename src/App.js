import React, { Component } from 'react';
import NavBar from './NavBar';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import {NavLink} from "react-router-dom"
import Home from './Home';
import About from './About';
import Contact from './Contact';
import HowItWorks from './HowItWorks';
import Services from './Services';
import WhoWeCouldWorkWith from './WhoWeCouldWorkWith';
import SignUp from "./SignUp"


const NotFound=()=>{
  return(
    <div>
    <center><h1 style={{marginTop:"3%"}}>404 Not Found</h1></center>
    <center><NavLink  to="/"><h1 style={{marginTop:"5%"}}>Back to home page</h1></NavLink></center>
    </div>
  )
}
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Switch>
          <Route exact path="/deliverit" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/howitworks" component={HowItWorks}/>
          <Route path="/services" component={Services}/>
          <Route path="/possiblepartners/" component={WhoWeCouldWorkWith}/>
          <Route path="/signup/" component={SignUp}/>
          <Route component={NotFound} />
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}
export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import About from './About';
import Error from './Error'
import Navbar from './components/Navbar';



ReactDOM.render(
  
<Router>
    <Navbar/>
     <Switch>
      <Route exact path="/"  component={Home}/>
      <Route path="/products"  component={Products}/>
      <Route path="/about"  component={About}/>
      <Route component={Error}/>
        
    </Switch>
</Router>

   
  
  
 
     
 ,
  document.getElementById('root')
);



import React from 'react';
import {BrowserRouter as Router, Switch,Route} from "react-router-dom"
import RestaurantdetailPage from './routes/RestaurantDetailPage';
import UpdatePage from './routes/UpdatePage';
import Home from "./routes/Home";
import { RestaurantsContextPorvider } from './context/RestaurantsContext';

const App = () =>{
    return (
        <RestaurantsContextPorvider>
            <div className ="container">
        <Router>
            <Switch>
            <Route exact path = "/" component = {Home} />
            <Route exact path = "/restaurants/:id/update" component = {UpdatePage} />
            <Route 
            exact
             path = "/restaurants/:id" component = {RestaurantdetailPage} />
            </Switch>
        </Router>
        
    </div>
        </RestaurantsContextPorvider>
  
    )
};

export default App;

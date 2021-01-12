import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
//import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";
/*import BoardModerator from "./components/BoardModerator";*/
import BoardAdmin from "./components/BoardAdmin";



import RestaurantdetailPage from './routes/RestaurantDetailPage';
import UpdatePage from './routes/UpdatePage';
import ResList from "./routes/Home";
import ResListAdmin from "./routes/HomeAdmin";
import { RestaurantsContextPorvider } from './context/RestaurantsContext';



const App = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={"/restaurants"} className="navbar-brand">
          YumYum!
        </Link>
        <div className="navbar-nav mr-auto">
          

          {showAdminBoard && (
            <li className="nav-item">
              <Link to={"/restaurantsadmin"} className="nav-link">
                Admin Board
              </Link>
            </li>
          )}


        </div>

        {currentUser ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/profile"} className="nav-link">
                {currentUser.username}
              </Link>
            </li>
            <li className="nav-item">
              <a href="/login" className="nav-link" onClick={logOut}>
                LogOut
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/register"} className="nav-link">
                Sign Up
              </Link>
            </li>
          </div>
        )}
      </nav>

      <div className="container mt-3">
        <Switch>
          <RestaurantsContextPorvider>
          <Route exact path={["/", "/home"]} component={ResList} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/profile" component={Profile} />
          <Route path="/user" component={BoardUser} />
          <Route path="/admin" component={BoardAdmin} />
          
          <div className ="container">
          <Route exact path = "/restaurants" component = {ResList} />
          <Route exact path = "/restaurantsadmin" component = {ResListAdmin} />
          <Route exact path = "/restaurants/:id/update" component = {UpdatePage} />
          <Route exact path = "/restaurants/:id" component = {RestaurantdetailPage} />
          </div>
          </RestaurantsContextPorvider>
        </Switch>
      </div>
    </div>
  );
};

export default App;

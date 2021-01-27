import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './components/App';
import Login from './components/auth/login';
import Navbar from './components/heading';
import LoginNav from './components/loginheader';
import Restaurantlist from './components/restaurantlist';
import RestaurantDetails from './components/restaurantdetails';
import Reservations from './components/reservations';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Navbar />
          <App />
        </Route>
        <Route exact path="/sign_in">
          <Navbar />
          <Login />
        </Route>
        <Route exact path="/overview">
          <LoginNav />
          <Restaurantlist />
        </Route>
        <Route exact path="/details/:restaurantId">
          <LoginNav />
          <RestaurantDetails />
        </Route>
        <Route exact path="/reservations">
          <LoginNav />
          <Reservations />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;

import React, { useEffect } from 'react';
import './index.sass';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from './Home'
import Header from './Header'
import Login from './Login'
import Checkout from './Checkout'
import Payment from './Payment'
import Orders from './Orders'
import { auth } from './firebase'
import { useStateValue } from './StateProvider'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

const promise = loadStripe(
  'pk_test_51HmI24HQoja8xMaGuaMgk8vsfqVQSCGgrvSof4h5et0yWXGae0lazA6RTCKaERpm7uXYBVvzDzAfpPrG3d4OdOkz00LxSwUnqu'
  );

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        dispatch({
          type:"SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []); 

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

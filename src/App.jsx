import React from 'react';
import './App.css';
import { DataProvider } from './components/Context';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
import Details from './Pages/ProductDetails/Details';
import Footer from './components/Footer/Footer';
import Admin from './Pages/Admin/Admin';
import Login from './Pages/Login/Login';
import Profile from './Pages/Profile/Profile';
import Wallet from './Pages/Wallet/Wallet';


function App() {
  return (
    <Router>
      <DataProvider>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/details/:id">
            <Details />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/wallet">
            <Wallet />
          </Route>
        </Switch>
        <Footer />
      </div>
      </DataProvider>
    </Router>
  );
}

export default App;

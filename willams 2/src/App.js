//import { ImageList } from './components/ImageList';
//import React from 'react';
//import './components/pages/Navbar.css';
import Login from "./components/Login.jsx";
import RegisterForm from "./components/RegisterForm";
import Exchange from "./components/Exchange";
import Game from "./components/Game";
import Privacy from "./components/Privacy";
import Terms from "./components/Terms";
import BlockChain from "./components/BlockChain";
import AboutUs from "./components/AboutUs";
import SocialNetwork from "./components/SocialNetwork";
import ContactUs from "./components/ContactUs";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={RegisterForm} />
          <Route exact path="/privacy" component={Privacy} />
          <Route exact path="/about-us" component={AboutUs} />
          <Route exact path="/contact-us" component={ContactUs} />
          <Route exact path="/blockchain" component={BlockChain} />
          <Route exact path="/exchange" component={Exchange} />
          <Route exact path="/social" component={SocialNetwork} />
          <Route exact path="/game" component={Game} />
          <Route exact path="/privacy" component={Privacy} />
          <Route exact path="/terms" component={Terms} />
          
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

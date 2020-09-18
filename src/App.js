import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import PostDetails from './components/PostDetails/PostDetails';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import FooterSecond from './components/FooterSecond/FooterSecond';
import NotFound from './components/NotFound/NotFound';
import Banner from './components/Banner/Banner';

function App() {
  return (
      <Router>
        <div className="App">
        <Navbar></Navbar>
        
          <Switch>
            <Route exact path="/">
            <Banner></Banner>
              <Home></Home>
              
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/postDetails/:postId">
              <PostDetails></PostDetails>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
          <FooterSecond></FooterSecond>
        </div>
      </Router>
  );
}

export default App;

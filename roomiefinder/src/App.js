import React from 'react';
import Header from './Header';
import Chats from './Chats';
import Profile from './Profile';
import RoomieFinderCards from './RoomieFinderCards';
import SwipeButtons from './SwipeButtons';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/profile">
            <Header />
            <Profile />
          </Route>
          <Route path="/chat">
          <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/">
            <Header />
            <RoomieFinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

{/* for roomie finder application, we will have three main parts that we will see on our main page */ }
{/* the Header */ }


{/* in the header part, we will have a button to view our profile, our logo, and a button to see the chats screen */ }
{/* in the chats screen, we will have individual chat screen to talk to people you match with */ }
{/* the roomie finder cards, where we will have a brief description of the person and its picture */ }
{/* the buttons, to either match this person or not, and a button to see his profile with the full decription */ }
import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';//for navigation bar

//import the components
import Join from './components/Join';
import Chat from './components/Chat';

function App(){
    return(
        <Router>
            <Route path="/"exact component={Join}></Route>
            <Route path="/chat"exact component={Chat}></Route>
        </Router>
    );
}

export default App;
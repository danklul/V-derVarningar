import React from 'react'
import './App.css'
import Home from './Pages/Home'
import ItemDetail from './Pages/ItemDetail'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'


const App = () => {

    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/:id" component={ItemDetail} />
                </Switch>
            </div>
        </Router>
  );
}



export default App;

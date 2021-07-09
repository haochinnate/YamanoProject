import React from 'react'
import { Router, Route } from 'react-router-dom';
import CarDb from './cars/CarDb';
import FindCars from './cars/FindCars';
import Header from './Header';
import history from '../history';

const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <div>
                    <Header />
                    <Route path="/" exact component={FindCars}/>
                    <Route path="/cars/" component={CarDb}/>
                </div>
            </Router>
        </div>
        // compare, db, find, news, pttformat
    );
};

export default App;

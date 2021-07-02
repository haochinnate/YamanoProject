import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import CarDb from './cars/CarDb';
import FindCars from './cars/FindCars';
import Header from './Header';

const App = () => {
    return (
        <div className="ui container">
            <BrowserRouter>
                <div>
                    <Header />
                    <Route path="/" exact component={FindCars}/>
                    <Route path="/cars/" component={CarDb}/>
                </div>
            </BrowserRouter>
        </div>
        // compare, db, find, news, pttformat
    );
};

export default App;

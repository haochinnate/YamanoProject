import React from 'react'
import { Router, Route, Switch } from 'react-router-dom';
import CarDb from './cars/CarDb';
import FindCars from './cars/FindCars';
import Header from './Header';
import ManufacturerCreate from './cars/manufacturers/ManufacturerCreate'
import ManufacturerDelete from './cars/manufacturers/ManufacturerDelete'
import ManufacturerEdit from './cars/manufacturers/ManufacturerEdit'
import ManufacturerList from './cars/manufacturers/ManufacturerList'
import ManufacturerShow from './cars/manufacturers/ManufacturerShow'
import CarModelCreate from './cars/carmodels/CarModelCreate'
import CarModelDelete from './cars/carmodels/CarModelDelete'
import CarModelEdit from './cars/carmodels/CarModelEdit'
import CarModelShow from './cars/carmodels/CarModelShow'
import history from '../history'
import TrimLevelCreate from './cars/trimlevels/TrimLevelCreate'
import TrimLevelEdit from './cars/trimlevels/TrimLevelEdit'
import TrimLevelDelete from './cars/trimlevels/TrimLevelDelete'
import PrivateRoute from './PrivateRoute';

const App = () => {
    return (
        <div className="container">
            <Router history={history}>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={FindCars}/>
                         {/* for Admin action */}
                        <PrivateRoute path="/cars/manufacturers/new" exact component={ManufacturerCreate}/>
                        <PrivateRoute path="/cars/manufacturers/edit/:id" exact component={ManufacturerEdit}/>
                        <PrivateRoute path="/cars/manufacturers/delete/:id" exact component={ManufacturerDelete}/>
                        <PrivateRoute path="/cars/carmodels/new" exact component={CarModelCreate}/>
                        <PrivateRoute path="/cars/carmodels/edit/:id" exact component={CarModelEdit}/>
                        <PrivateRoute path="/cars/carmodels/delete/:id" exact component={CarModelDelete}/>
                        <PrivateRoute path="/cars/trimlevels/new" exact component={TrimLevelCreate}/>
                        <PrivateRoute path="/cars/trimlevels/edit/:id" exact component={TrimLevelEdit}/>
                        <PrivateRoute path="/cars/trimlevels/delete/:id" exact component={TrimLevelDelete}/>
                        

                        {/* for display */}
                        <Route path="/cars" exact component={ManufacturerList}/>
                        <Route path="/cars/:manufacturerName/:carmodelName" component={CarModelShow}/>
                        <Route path="/cars/:manufacturerName" component={ManufacturerShow}/> 
                    </Switch>
                    {/* <Route path="/cars/" component={CarDb}/> */}
                </div>
            </Router>
        </div>
        // compare, db, find, news, pttformat
    );
};

export default App;

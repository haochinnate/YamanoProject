import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import ManufacturerCreate from './manufacturers/ManufacturerCreate'
import ManufacturerDelete from './manufacturers/ManufacturerDelete'
import ManufacturerEdit from './manufacturers/ManufacturerEdit'
import ManufacturerList from './manufacturers/ManufacturerList'
import ManufacturerShow from './manufacturers/ManufacturerShow'
import CarModelCreate from './carmodels/CarModelCreate'
import CarModelDelete from './carmodels/CarModelDelete'
import CarModelEdit from './carmodels/CarModelEdit'
import CarModelList from './carmodels/CarModelList'
import CarModelShow from './carmodels/CarModelList'
import history from '../../history'

const CarDb = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <Switch>
                    {/* <Route path="/cars" exact component={ManufacturerList}/>
                    <Route path="/cars/manufacturers/new" exact component={ManufacturerCreate}/>
                    <Route path="/cars/manufacturers/edit/:id" exact component={ManufacturerEdit}/>
                    <Route path="/cars/manufacturers/delete/:id" exact component={ManufacturerDelete}/>
                    <Route path="/cars/manufacturers/:id" component={ManufacturerShow}/> */}


                    {/* for Admin action */}
                    <Route path="/cars/manufacturers/new" exact component={ManufacturerCreate}/>
                    <Route path="/cars/manufacturers/edit/:id" exact component={ManufacturerEdit}/>
                    <Route path="/cars/manufacturers/delete/:id" exact component={ManufacturerDelete}/>
                    <Route path="/cars/carmodels/new" exact component={CarModelCreate}/>
                    <Route path="/cars/carmodels/edit/:id" exact component={CarModelEdit}/>
                    <Route path="/cars/carmodels/delete/:id" exact component={CarModelDelete}/>
                    

                    {/* for display */}
                    <Route path="/cars" exact component={ManufacturerList}/>
                    <Route path="/cars/manufacturers/:id" component={ManufacturerShow}/> 
                    <Route path="/cars/:manufacturerName" component={ManufacturerShow}/>
                    <Route path="/cars/:manufacturerName/:carmodelName" component={CarModelShow}/>



                </Switch>
            </Router>
        </div>
    )
}

export default CarDb

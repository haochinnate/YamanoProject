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
import CarModelShow from './carmodels/CarModelShow'
import history from '../../history'
import TrimLevelCreate from './trimlevels/TrimLevelCreate'
import TrimLevelEdit from './trimlevels/TrimLevelEdit'
import TrimLevelDelete from './trimlevels/TrimLevelDelete'
import PrivateRoute from '../PrivateRoute'

const CarDb = () => {
    return (
        <div className="container">
            <Router history={history}>
                <Switch>
                    {/* <Route path="/cars" exact component={ManufacturerList}/>
                    <Route path="/cars/manufacturers/new" exact component={ManufacturerCreate}/>
                    <Route path="/cars/manufacturers/edit/:id" exact component={ManufacturerEdit}/>
                    <Route path="/cars/manufacturers/delete/:id" exact component={ManufacturerDelete}/>
                    <Route path="/cars/manufacturers/:id" component={ManufacturerShow}/> */}


                    {/* for Admin action */}
                    {/* <Route path="/cars/manufacturers/new" exact component={ManufacturerCreate}/> */}
                    <PrivateRoute path="/cars/manufacturers/new" exact component={ManufacturerCreate}/>
                    <Route path="/cars/manufacturers/edit/:id" exact component={ManufacturerEdit}/>
                    <PrivateRoute path="/cars/manufacturers/delete/:id" exact component={ManufacturerDelete}/>
                    {/* <Route path="/cars/manufacturers/delete/:id" exact component={ManufacturerDelete}/> */}
                    <PrivateRoute path="/cars/carmodels/new" exact component={CarModelCreate}/>
                   
                    {/* <Route path="/cars/carmodels/new" exact component={CarModelCreate}/> */}
                    <Route path="/cars/carmodels/edit/:id" exact component={CarModelEdit}/>
                    <Route path="/cars/carmodels/delete/:id" exact component={CarModelDelete}/>
                    <Route path="/cars/trimlevels/new" exact component={TrimLevelCreate}/>
                    <Route path="/cars/trimlevels/edit/:id" exact component={TrimLevelEdit}/>
                    <Route path="/cars/trimlevels/delete/:id" exact component={TrimLevelDelete}/>
                    

                    {/* for display */}
                    <Route path="/cars" exact component={ManufacturerList}/>
                    <Route path="/cars/:manufacturerName/:carmodelName" component={CarModelShow}/>
                    <Route path="/cars/:manufacturerName" component={ManufacturerShow}/> 

                </Switch>
            </Router>
        </div>
    )
}

export default CarDb

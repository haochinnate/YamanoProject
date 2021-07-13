import React from 'react'
import { Router, Route } from 'react-router-dom'
import ManufacturerCreate from './manufacturers/ManufacturerCreate'
import ManufacturerDelete from './manufacturers/ManufacturerDelete'
import ManufacturerEdit from './manufacturers/ManufacturerEdit'
import ManufacturerList from './manufacturers/ManufacturerList'
import ManufacturerShow from './manufacturers/ManufacturerShow'
import history from '../../history'

const CarDb = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <div>
                    <Route path="/cars" exact component={ManufacturerList}/>
                    <Route path="/cars/manufacturers/new" exact component={ManufacturerCreate}/>
                    <Route path="/cars/manufacturers/edit/:id" exact component={ManufacturerEdit}/>
                    <Route path="/cars/manufacturers/delete/:id" exact component={ManufacturerDelete}/>
                    <Route path="/cars/manufacturers/show" exact component={ManufacturerShow}/>
                </div>
            </Router>
        </div>
    )
}

export default CarDb

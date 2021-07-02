import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import ManufacturerCreate from './manufacturers/ManufacturerCreate'
import ManufacturerDelete from './manufacturers/ManufacturerDelete'
import ManufacturerEdit from './manufacturers/ManufacturerEdit'
import ManufacturerList from './manufacturers/ManufacturerList'
import ManufacturerShow from './manufacturers/ManufacturerShow'

const CarDb = () => {
    return (
        <div className="ui container">
            <BrowserRouter>
                <div>
                    <Route path="/cars" exact component={ManufacturerList}/>
                    <Route path="/cars/manufacturer/new" exact component={ManufacturerCreate}/>
                    <Route path="/cars/manufacturer/edit" exact component={ManufacturerEdit}/>
                    <Route path="/cars/manufacturer/delete" exact component={ManufacturerDelete}/>
                    <Route path="/cars/manufacturer/show" exact component={ManufacturerShow}/>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default CarDb

import React, { Component } from 'react'
import { HashRouter, BrowserRouter, Switch, Route } from 'react-router-dom'

import App from './App'

const NotFound = () => <h1>404 NotFound</h1>


const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)
export default Router
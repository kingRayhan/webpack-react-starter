import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, BrowserRouter, Switch, Route } from 'react-router-dom'

import App from './App'

import './index.scss'


const NotFound = () => <h1>404 NotFound</h1>

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/dd" component={App} />
            {/* <Route exact path="/:para" component={App} /> */}
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(<Router />, document.querySelector('#app')) 
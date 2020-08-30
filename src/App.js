import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'

import Menu from './components/Menu'
import WorldMap from './components/WorldMap'
import IndiaMap from './components/IndiaMap'

function App() {
    return (
        <Router>
            <Switch>
                <Route 
                    exact 
                    path = '/'
                    render = { () => <Menu /> }
                />
                <Route 
                    exact
                    path = '/world-map'
                    render = { () =>  <WorldMap /> }
                />
                <Route 
                    exact
                    path = '/india-map'
                    render = { () =>  <IndiaMap /> }
                />
            </Switch>
        </Router>
    )
}

export default App

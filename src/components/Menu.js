import React from 'react'
import { NavLink } from 'react-router-dom'

import './Menu.css'

const Menu = () => {
    return (
        <div className = 'menu-container'>
            <NavLink to = '/world-map'>World Map</NavLink>
            <NavLink to = '/india-map'>India Map</NavLink>
        </div>
    )
}

export default Menu

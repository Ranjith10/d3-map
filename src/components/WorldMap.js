import React, { useEffect } from 'react'

import worldMapData from '../data/worldMap.json'
import './WorldMap.css'

const WorldMap = () => {

    const getWorldMap = () => {
        d3.select('#world-map-svg').remove()
        //* set margin, width and heoght
        const margin = {top: 50, left: 50, right: 50, bottom: 50 }
        const width = 700
        const height = 700

        //* Define the SVG
        let svg = d3.select('$world-map')
                    .append('svg')
                    .attr('id', 'world-map-svg')
                    .attr('width', width)
                    .attr('height', height) 
    
    }

    useEffect(() => {
        getWorldMap()
    }, [])



    return (
        <div id = 'world-map'>
            
        </div>
    )
}

export default WorldMap

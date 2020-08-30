import React, { useEffect } from 'react'
import * as d3 from 'd3'
import * as topojson from 'topojson-client'

import worldMapData from '../data/worldMap.json'
import './IndiaMap.css'

const IndiaMap = () => {
    const getWorldMap = () => {
        d3.select('#world-map-svg').remove()

        //* set margin, width and heoght
        const margin = { top: 50, left: 50, right: 50, bottom: 50 }
        const width = 800 - margin.right - margin.left
        const height = 600 - margin.top - margin.bottom

        //* topojson.feature converts RAW geo data to usable geo data
        let countries = topojson.feature(
            worldMapData,
            worldMapData.objects.countries,
        ).features

        //* Define the SVG
        let svg = d3
            .select('#world-map')
            .append('svg')
            .attr('id', 'world-map-svg')
            .attr('width', width + margin.right + margin.left)
            .attr('height', height + margin.top + margin.bottom)
            .append('g')
            .attr('transform', `translate(${margin.left}, ${margin.top})`)

        //* Create a Projection - geoMercator provides a rectangular projection of sphere (transforms)
        let projection = d3
            .geoMercator()
            .translate([width / 2, height / 2])
            .scale(100)

        //* Create a path using Projection
        let path = d3.geoPath().projection(projection)

        //* Add path for each country
        svg.selectAll('.country')
            .data(countries)
            .enter()
            .append('path')
            .attr('class', 'country')
            .attr('d', path)
            .on('mouseover', function (d) {
                // eslint-disable-next-line no-undef
                console.log({d})
                d3.select(this).classed('selected', true)
            })
            .on('mouseout', function () {
                d3.select(this).classed('selected', false)
            })
    }

    useEffect(() => {
        getWorldMap()
    }, [])

    return <div id = 'world-map'></div>
}

export default IndiaMap

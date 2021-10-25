import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'

mapboxgl.accessToken = 'pk.eyJ1IjoibXNjcmFja2VyNjYzOCIsImEiOiJja3Y0YmtkMmwxb2N1MzFxMXU4dWxpZmxiIn0.x7oAXluuqnpOhm81JKzptQ';

const MapDirection = () => {
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [91.832630, 22.330370],
                  // longitude, lattitude
            zoom: 13
        });

        map.addControl(
            new MapboxDirections({
                accessToken: mapboxgl.accessToken
            }),
            'top-left'
        );
    },[])
    return (
        <div>
            <div id="map"></div>
        </div>
    );
};

export default MapDirection;
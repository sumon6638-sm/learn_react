import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const Map = () => {
    const containerStyle = {
        width: '80vw',
        height: '100vh',
        textAlign: 'center'
    };

    const center = {
        lat: 22.330370,
        lng: 91.832626
    };

    return (
        <div>
            <h2>This is map</h2>
            <LoadScript
                googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY}
            >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}
                >
                    { /* Child components, such as markers, info windows, etc. */}
                    <></>
                </GoogleMap>
            </LoadScript>
        </div>
    );
};

export default Map;
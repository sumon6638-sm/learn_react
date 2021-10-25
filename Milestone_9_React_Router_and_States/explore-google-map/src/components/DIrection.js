import React, { useState } from 'react';
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

const location = {
    lat: 22.330370,
    lng: 91.832626
};

const DIrection = (origin, destination) => {

    const [response, setResponse] = useState(null);

    const directionsCallback = res => {
        if (res != null) {
            setResponse(res);
        }
    }

    return (
        <div>
            <LoadScript
                googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY}
            >
                <GoogleMap
                    // required
                    id='direction-example'
                    // required
                    mapContainerStyle={{
                        height: '100vh',
                        width: '100%'
                    }}
                    // required
                    zoom={14}
                    // required
                    center={{location}}
                >
                    
                        
                    <DirectionsService
                        // required
                        options={{
                            origin: origin,
                            destination: destination,
                            travelMode: "DRIVING"
                        }}
                        // required
                        callback={directionsCallback}
                    />
                
                    

                    {
                        response !== null && (
                            <DirectionsRenderer
                                // required
                                options={{ 
                                    directions: response
                                }}
                            />
                        )
                    }
                </GoogleMap>
            </LoadScript>
        </div>
    );
};

export default DIrection;
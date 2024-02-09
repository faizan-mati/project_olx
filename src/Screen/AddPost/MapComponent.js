import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapComponent = ({ defaultLocation, onLocationChange }) => {
    const handleMapClick = (event) => {
        const newLocation = {
            lat: event.latLng.lat(),
            lng: event.latLng.lng()
        };
        onLocationChange(newLocation);
    };

    return (
        <LoadScript
            googleMapsApiKey="YOUR_API_KEY"
        >
            <GoogleMap
                mapContainerStyle={{ height: "400px", width: "100%" }}
                center={defaultLocation}
                zoom={12}
                onClick={handleMapClick}
            >
                {defaultLocation && <Marker position={defaultLocation} />}
            </GoogleMap>
        </LoadScript>
    );
};

export default MapComponent;

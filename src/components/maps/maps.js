import React from "react";
import GoogleMaps from 'simple-react-google-maps'

const Map = (props) => {
    return (
        <GoogleMaps
        apiKey={'AIzaSyCBuTPF1u8IUGB9z9eWhrQz_L4mpITMATo'}
        zoom={10}
        center={{lat: -34.397, lng: 150.644}}
        />
    );
}
export default Map
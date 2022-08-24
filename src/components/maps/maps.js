import React from "react";
import GoogleMaps from 'simple-react-google-maps'

const Map = (props) => {
    return (
        <GoogleMaps
        apiKey={'AIzaSyCBuTPF1u8IUGB9z9eWhrQz_L4mpITMATo'}
        zoom={12}
        center={{lat: 3.4306965033400494, lng: -76.50713990342022}}
        style={{height: "400px", width: "100%"}}
        />
    );
}
export default Map
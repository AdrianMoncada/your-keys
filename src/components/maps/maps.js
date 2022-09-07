import React from "react";
import GoogleMaps from "simple-react-google-maps";

const Map = ({ car }) => {
  return (
    <GoogleMaps
      apiKey={"AIzaSyCBuTPF1u8IUGB9z9eWhrQz_L4mpITMATo"}
      zoom={12}
      center={{ lat: -22.3232132, lng: -52.323232 }}
      style={{ height: "400px", width: "100%" }}
    />
  );
};
export default Map;

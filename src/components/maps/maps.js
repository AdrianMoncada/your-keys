import React from "react";
import GoogleMaps from "simple-react-google-maps";

const Map = ({ car }) => {
  if ((typeof car === "object" && Array.isArray(car)) || !car) {
    return <h1>Loading</h1>;
  }
  return (
    <GoogleMaps
      apiKey={"AIzaSyCBuTPF1u8IUGB9z9eWhrQz_L4mpITMATo"}
      zoom={12}
      center={{ lat: car.latitude, lng: car.longitude }}
      style={{ height: "400px", width: "100%" }}
      markers={{ lat: car.latitude, lng: car.longitude }}
      defaultCenter={{
        lat: -31.382550707747193,
        lng: -64.17465779124078,
      }}
    />
  );
};
export default Map;

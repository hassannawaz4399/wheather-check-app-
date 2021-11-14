import React from "react";
import { useSelector } from "react-redux";
import { AppStore } from "../../store/store";
import { Button, MapContainer, MapHeader, MapStyle } from "./styled";

const Map: React.FC = () => {
  const { weather, degreeType, isInitial, isError } = useSelector(
    (store: AppStore) => ({
      weather: store.weather.weatherData,
      degreeType: store.app.tempUnit,
      isInitial: store.app.isInitial,
      isError: store.weather.isError,
    })
  );

  if (isInitial) return <></>;

  console.log(degreeType);
  return (
    <>
      {weather && (
        <MapStyle>
          <MapHeader>
            <Button>Clouds</Button>
            <Button>Precipitation</Button>
            <Button>Temp</Button>
          </MapHeader>

          <MapContainer>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPxTv9QGfd4juuck15BBymjhaGRzGld8SRlJSWjfRqYvfXcU57FoUbR5s54RNCnc1ZQ40&usqp=CAU"
              alt=""
              className="map-image"
            />
          </MapContainer>
        </MapStyle>
      )}
    </>
  );
};

export default Map;

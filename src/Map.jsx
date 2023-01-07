import { useCallback, useContext, useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup,
  useMapEvent,
} from "react-leaflet";
import L from "leaflet";
import coordinatesContext from "./coordinates.context";
import markerIcon from "./assets/icon-location.svg";

function MyComponent() {
  const map = useMapEvent("click", () => {
    map.setCenter([50.5, 30.5]);
  });
  return null;
}

const Map = () => {
  const [coordinates] = useContext(coordinatesContext);
  const [fetchLoaded, setFetchLoaded] = useState(false);

  useEffect(() => {
    // var map = L.map("map").setView([49.2, 16.62], 13);
    // L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    //   maxZoom: 19,
    //   attribution:
    //     '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    // }).addTo(map);
    // var myIcon = new L.Icon({
    //   iconUrl: markerIcon,
    //   iconRetinaUrl: markerIcon,
    //   popupAnchor: [-0, -0],
    //   iconSize: [45, 55],
    // });
    // var marker = L.marker(
    //   coordinates.length === 2
    //     ? [coordinates[0], coordinates[1]]
    //     : [49.2, 16.62],
    //   { icon: myIcon }
    // ).addTo(map);
    // setFetchLoaded(true);
  }, []);

  // useEffect(() => {
  //   console.log("map", map);
  //   if (coordinates.length === 2) {
  //     map.flyTo(coordinates, map.getZoom());
  //   }
  // }, [coordinates, map]);

  console.log("yuhbayhdbf", coordinates.length === 2);
  console.log(coordinates);
  console.log(fetchLoaded);

  return (
    <MapContainer
      eventHanlers={{
        click: () => {
          console.log("map clicked");
        },
      }}
      style={{ height: 400 }}
      center={
        coordinates.length === 2
          ? [coordinates[0], coordinates[1]]
          : [49.2, 16.62]
      }
      zoom={13}
      scrollWheelZoom={false}
    >
      {/* <MyComponent /> */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={
          coordinates.length === 2
            ? [coordinates[0], coordinates[1]]
            : [49.2, 16.62]
        }
      >
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;

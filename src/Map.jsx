import { useContext, useEffect, useState } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import coordinatesContext from "./coordinates.context";
import markerIcon from "./assets/icon-location.svg";

const Map = () => {
  const [coordinates] = useContext(coordinatesContext);
  const [fetchLoaded, setFetchLoaded] = useState(false);
  useEffect(() => {
    var map = L.map("map").setView([51.505, -0.09], 13);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    var myIcon = new L.Icon({
      iconUrl: markerIcon,
      iconRetinaUrl: markerIcon,
      popupAnchor: [-0, -0],
      iconSize: [45, 55],
    });
    var marker = L.marker(
      coordinates.length === 2
        ? [coordinates[0], coordinates[1]]
        : [37.77493, -0.09],
      { icon: myIcon }
    ).addTo(map);
    setFetchLoaded(true);
  }, []);

  console.log("yuhbayhdbf", coordinates.length === 2);
  console.log(typeof coordinates);
  console.log(fetchLoaded);

  return (
    <>
      <MapContainer
        center={
          coordinates.length === 2
            ? [coordinates[0], coordinates[1]]
            : [37.77493, -0.09]
        }
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={
            coordinates.length === 2
              ? [coordinates[0], coordinates[1]]
              : [37.77493, -0.09]
          }
        >
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

export default Map;

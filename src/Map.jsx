import { useContext, useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import coordinatesContext from "./coordinates.context";
import markerIcon from "./assets/icon-location.svg";

let defaultCenter = [49.2, 16.62];

const Map = () => {
  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState(null);
  const [coordinates] = useContext(coordinatesContext);

  useEffect(() => {
    let markerCoordinates = [];
    coordinates.length === 2
      ? [
          map.flyTo(coordinates, 13, {
            duration: 2,
          }),
          (markerCoordinates = [coordinates[0] - 0.01, coordinates[1]]),
          marker.setLatLng(markerCoordinates),
        ]
      : null;
  }, [coordinates]);

  var myIcon = new L.Icon({
    iconUrl: markerIcon,
    iconRetinaUrl: markerIcon,
    popupAnchor: [-0, -0],
    iconSize: [45, 55],
  });

  return (
    <MapContainer
      style={{ height: "65vh" }}
      ref={setMap}
      center={
        coordinates.length === 2
          ? [coordinates[0] + 0.01, coordinates[1]]
          : [defaultCenter[0] + 0.01, defaultCenter[1]]
      }
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        ref={setMarker}
        position={
          coordinates.length === 2
            ? [coordinates[0], coordinates[1]]
            : [defaultCenter[0], defaultCenter[1]]
        }
        icon={myIcon}
      />
    </MapContainer>
  );
};

export default Map;

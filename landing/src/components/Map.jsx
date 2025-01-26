import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import PropTypes from 'prop-types';
import "leaflet/dist/leaflet.css";

const MapComponent = ({ latitude = 4.6097, longitude = -74.0817, zoom = 13 }) => {
  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={zoom}
      style={{ height: "350px", width: "90%", margin: "0 auto" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      
      <Marker position={[latitude, longitude]}>
        <Popup>We are here</Popup>
      </Marker>
    </MapContainer>
  );
};
MapComponent.propTypes = {
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  zoom: PropTypes.number
};

export default MapComponent;

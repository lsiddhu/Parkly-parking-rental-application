
import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
  useMap,
} from "react-leaflet";

import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

const mumbaiCenter = [19.076, 72.8777];

function ClickHandler({ onSelect }) {
  useMapEvents({
    click(event) {
      onSelect({
        latitude: event.latlng.lat,
        longitude: event.latlng.lng,
      });
    },
  });

  return null;
}

function MapUpdater({ position }) {
  const map = useMap();

  useEffect(() => {
    if (position) {
      map.setView(position, 15);
    }
  }, [position, map]);

  return null;
}

function MapPicker({ value, onLocationSelect }) {
  const position = value
    ? [value.latitude, value.longitude]
    : null;

  return (
    <div className="map-picker">
      <p className="map-hint">
        Click on the map to place your parking marker.
        You can drag the marker to adjust its position.
      </p>

      <div className="map-box">
        <MapContainer
          center={mumbaiCenter}
          zoom={12}
          style={{ height: "360px", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <ClickHandler onSelect={onLocationSelect} />

          <MapUpdater position={position} />

          {position && (
            <Marker
              position={position}
              draggable
              eventHandlers={{
                dragend: (event) => {
                  const { lat, lng } = event.target.getLatLng();

                  onLocationSelect({
                    latitude: lat,
                    longitude: lng,
                  });
                },
              }}
            />
          )}
        </MapContainer>
      </div>

      {position && (
        <p className="map-coords">
          Selected location: {position[0].toFixed(6)},{" "}
          {position[1].toFixed(6)}
        </p>
      )}
    </div>
  );
}

export default MapPicker;

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";

import { useEffect } from "react";
import L from "leaflet";

import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

const createPriceIcon = (price) =>
  L.divIcon({
    className: "price-marker-wrapper",
    html: `
      <div class="price-marker">
        ₹${Number(price).toFixed(0)}
        <span>/hr</span>
      </div>
    `,
    iconSize: [55, 36],
    iconAnchor: [27, 36],
    popupAnchor: [0, -36],
  });



function MapUpdater({ spaces }) {
  const map = useMap();

  useEffect(() => {
    if (spaces.length > 0) {
      const bounds = L.latLngBounds(
        spaces.map((space) => [
          Number(space.latitude),
          Number(space.longitude),
        ])
      );

      map.fitBounds(bounds, { padding: [40, 40], maxZoom: 15 });
    }
  }, [spaces, map]);

  return null;
}

function ParkingMap({ spaces }) {
  const mumbaiCenter = [19.076, 72.8777];

  const spacesWithCoordinates = spaces.filter(
    (space) =>
      space.latitude !== null &&
      space.latitude !== undefined &&
      space.longitude !== null &&
      space.longitude !== undefined &&
      Number.isFinite(Number(space.latitude)) &&
      Number.isFinite(Number(space.longitude)) &&
      Number(space.latitude) >= -90 &&
      Number(space.latitude) <= 90 &&
      Number(space.longitude) >= -180 &&
      Number(space.longitude) <= 180
  );

  return (
    <MapContainer
      center={mumbaiCenter}
      zoom={11}
      style={{
        height: "500px",
        width: "100%",
        borderRadius: "12px",
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <MapUpdater spaces={spacesWithCoordinates} />

      {spacesWithCoordinates.map((space) => (
        <Marker
          key={space.id}
          position={[
            Number(space.latitude),
            Number(space.longitude),
          ]}
          icon={createPriceIcon(space.pricePerHour)}
        >
          <Popup>
            <strong>{space.name}</strong>
            <p>{space.address}</p>
            <p>{space.area}</p>
            <p>₹{space.pricePerHour} / hour</p>
            {space.contactPhone && (
              <p>
                <a href={`tel:${space.contactPhone}`}>
                  Call Provider
                </a>
              </p>
            )}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default ParkingMap;
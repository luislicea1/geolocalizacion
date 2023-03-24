import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { usePosition } from "./geolocalizacion/src/hooks/usePosition";

function MapView() {
  const { latitude, longitude, error } = usePosition();

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!latitude || !longitude) {
    return <div>Cargando...</div>;
  }

  return (
    <MapContainer center={[20.0247200, -75.8219400]} zoom={12} style={{ height: "700px" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[latitude, longitude]}>
        <Popup>Tu ubicación actual</Popup>
      </Marker>
    </MapContainer>
  );
}

export default MapView;

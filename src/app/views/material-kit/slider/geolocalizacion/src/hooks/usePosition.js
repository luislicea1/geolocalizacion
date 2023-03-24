import { useState, useEffect } from "react";

export const usePosition = () => {
  const [position, setPosition] = useState({});
  const [error, setError] = useState(null);

  const onChange = ({ coords, timestamp }) => {
    setPosition({
      latitude: coords.latitude,
      longitude: coords.longitude,
      timestamp,
      accuracy: coords.accuracy,
    });
  };

  const onError = (error) => {
    setError(error);
  };

  useEffect(() => {
    const geo = navigator.geolocation;
    if (!geo) {
      setError(new Error("Geolocation is not supported"));
      return;
    }
    geo.getCurrentPosition(onChange, onError);
    const watcher = geo.watchPosition(onChange, onError);
    return () => geo.clearWatch(watcher);
  }, []);

  return { ...position, error };
};
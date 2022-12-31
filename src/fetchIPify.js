const fetchIPify = async (ipAddress, setGeolocation, setCoordinates) => {
  const res = await fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=at_sXP3zoSHUYk0wes4j2uquqvHYEqAj&ipAddress=${ipAddress}`
  );

  if (!res.ok && res.status != 404) {
    throw new Error(`This is an HTTP error: The status is ${res.status}`);
  } else if (res.status === 404) {
    setGeolocation(res.status);
  } else {
    const json = await res.json();
    setGeolocation(json);
    setCoordinates([
      json.location.lat.toString(),
      json.location.lng.toString(),
    ]);
  }
};

export default fetchIPify;

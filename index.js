const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

fetchMyIP((error, ip) => {
  console.log('It worked! Returned IP:', ip);

  fetchCoordsByIP(ip, (err, coord) => {
    console.log('It worked! coordinates:', coord);

    fetchISSFlyOverTimes(coord, (err, location) => {
      console.log('It worked! ISS location:', location);
    });
  });
});

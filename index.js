const { fetchMyIP, fetchCoordsByIP } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log('It worked! Returned IP:', ip);

  fetchCoordsByIP(ip, (err, coord) => {
    if (err) {
      console.log("It didn't work!", err);
      return;
    }
    console.log('It worked! Returned IP:', coord);
  });
});

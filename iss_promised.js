const request = require('request-promise-native');

const fetchMyIP = function() {
  return request('https://api.ipify.org?format=json');
};

const fetchCoordsByIP = function(body) {
  const ip = JSON.parse(body).ip;
  return request(`http://ipwho.is/${ip}`);
};

const fetchISSFlyOverTimes = function(body) {
  const coords = JSON.parse(body);
  return request(`https://iss-flyover.herokuapp.com/json/?lat=${coords.latitude}&lon=${coords.longitude}`);
};

const nextISSTimesForMyLocation = function() {
  return fetchMyIP() // Start by fetching the IP
    .then(fetchCoordsByIP) // Use that IP to fetch coords
    .then(fetchISSFlyOverTimes) // Use coords to get ISS flyover times
    .then((data) => { // Parse the final step's data and return the relevant part
      const { response } = JSON.parse(data);
      return response;
    });
};


module.exports = { nextISSTimesForMyLocation };
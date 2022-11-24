const request = require('request');
const breed = process.argv[2];
const api = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

if (breed === undefined) {
  console.log("You forgot to put an input!");
  return;
}
request(api, (error, response, body) => {
  if (error) {
    console.log("Request failed due to:\n" + error.message);
    return;
  }
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log("Cannot find breed");
    return;
  }
  
  console.log(data[0].description);
});
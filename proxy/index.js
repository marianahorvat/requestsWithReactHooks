// server code created to fix the CORS policy (security policy that browser enforces) issue: No "Access-Control-Allow-Origin" header is present on the requested resource
require('dotenv').config();

const express = require('express');
const axios = require('axios');
const app = express();
const cors = require('cors');
app.use(cors());


app.get('/weather/:latitude/:longitude', (request, response) => {
  const { latitude, longitude } = request.params;
  axios.get(`https://api.darksky.net/forecast/${process.env.DARKSKY_API}/${latitude},${longitude}`).then((result) => response.json(result.data)).catch(error => console.log(error));
});

app.listen(3001, () => console.log("Listening on port 3001"));
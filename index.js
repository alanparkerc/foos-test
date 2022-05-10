const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://foo-fighters-news.p.rapidapi.com/news/antimusic',
  headers: {
    'X-RapidAPI-Host': 'foo-fighters-news.p.rapidapi.com',
    'X-RapidAPI-Key': '4b95e0a240msh26e181aa8751bc0p18a5b2jsnf8a511ffe1e8'
  }
};

axios.request(options).then(function (response) {
	response.data.print();
}).catch(function (error) {
	console.error(error);
});

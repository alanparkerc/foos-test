const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://foo-fighters-news.p.rapidapi.com/news",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Host": "foo-fighters-news.p.rapidapi.com",
		"X-RapidAPI-Key": "4b95e0a240msh26e181aa8751bc0p18a5b2jsnf8a511ffe1e8"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});
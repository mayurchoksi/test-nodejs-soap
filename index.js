var soap = require('soap');
var parser = require('node-xml2json');
var url = 'http://www.webservicex.com/globalweather.asmx?WSDL';
var args = {CityName: 'Melbourne Airport', CountryName: 'Australia'};
soap.createClient(url, function(err, client) {
    client.GetWeather(args, function(err, result) {
      var getWeatherResult = parser.parser(result.GetWeatherResult);
      console.dir(getWeatherResult);
    });

    args = {CountryName: 'Australia'};
    client.GetCitiesByCountry(args, function(err, result) {
        var citiesByCountry = parser.parser(result.GetCitiesByCountryResult);
        console.dir(citiesByCountry);
    });
});

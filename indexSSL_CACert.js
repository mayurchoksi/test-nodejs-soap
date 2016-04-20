var soap = require('soap');
var parser = require('node-xml2json');
var url = 'https://apitest.authorize.net/soap/v1/Service.asmx?WSDL';
//var url = 'http://www.webservicex.com/globalweather.asmx?WSDL';
soap.createClient(url, function(err, client) {

    var payload = {CityName: 'Melbourne Airport', CountryName: 'Australia'};
    //add soap headers
    //var soapHeader = {
    //  'AuthenticationToken': process.argv[2],
    //  'DeveloperToken': process.argv[3],
    //  'CustomerId': process.argv[4],
    //  'CustomerAccountId': process.argv[5]
    //};
    //client.addSoapHeader(soapHeader);

    //add client security
    //client.setSecurity(new soap.BasicAuthSecurity('username', 'password'));

    //ws-security
    //client.setSecurity(new soap.WSSecurity('username', 'password'))

    //ws-security with x509 certificate
    //var privateKey = fs.readFileSync(privateKeyPath);
    //var publicKey = fs.readFileSync(publicKeyPath);
    //var password = ''; // optional password
    //var wsSecurity = new soap.WSSecurityCert(privateKey, publicKey, password, 'utf8');
    //client.setSecurity(wsSecurity);

    //bearer security
    //client.setSecurity(new soap.BearerSecurity('token'));

    client.IsAlive(payload, function(err, result) {
      //var getWeatherResult = parser.parser(result.GetWeatherResult);
      console.dir(result.IsAliveResult.messages.MessagesTypeMessage);
    },{timeout: 5000},{time: true});
});

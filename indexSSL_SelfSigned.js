var soap = require('soap');
var parser = require('node-xml2json');
var url = 'https://localhost/ws/countries.wsdl';
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"
soap.createClient(url, function(err, client) {

    var payload = {name: 'Spain'};
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

    client.getCountry(payload, function(err, result) {
      //var getWeatherResult = parser.parser(result.GetWeatherResult);
      console.dir(result);
    },{timeout: 5000},{time: true});
});

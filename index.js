const fs = require('fs'); 
function CLM() {
    var clm = {};
    var rawdata = fs.readFileSync('countries.json');
    var countries = JSON.parse(rawdata);

    var countryByAlpha2Code = {};

    for(let i=0; i<countries.length; ++i) {
        countryByAlpha2Code[countries[i]['alpha2']] = countries[i];
    }

    clm.getAlpha3ByAlpha2 = function(alpha2) {
        return countryByAlpha2Code[alpha2].alpha3;
    }; 

    clm.getLocaleByAlpha2 = function(alpha2) {
        return countryByAlpha2Code[alpha2].default_local;
    }

    clm.getCountryNameByAlpha2 = function(alpha2) {
        return countryByAlpha2Code[alpha2].name;
    }

    return clm; 

}

module.export = CLM()
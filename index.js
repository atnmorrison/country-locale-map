const fs = require('fs'); 
function CLM() {
    var clm = {};
    var rawdata = fs.readFileSync(__dirname+'/countries.json');
    var countries = JSON.parse(rawdata);

    var countryByAlpha2Code = {};

    for(let i=0; i<countries.length; ++i) {
        countryByAlpha2Code[countries[i]['alpha2']] = countries[i];
    }

    clm.getAlpha3ByAlpha2 = function(alpha2) {
        if(countryByAlpha2Code[alpha2])
            return countryByAlpha2Code[alpha2].alpha3;
        else 
            return undefined;
    }; 

    clm.getLocaleByAlpha2 = function(alpha2) {
        if(countryByAlpha2Code[alpha2])
            return countryByAlpha2Code[alpha2].default_local;
        else 
            return undefined;
    };

    clm.getCountryNameByAlpha2 = function(alpha2) {
        if(countryByAlpha2Code[alpha2])
            return countryByAlpha2Code[alpha2].name;
        else 
            return undefined; 
    };

    console.log(clm);

    return clm; 

}

module.exports = CLM();
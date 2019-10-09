const fs = require('fs'); 
function CLM() {
    var clm = {};
    var rawdata = fs.readFileSync(__dirname+'/countries.json');
    var countries = JSON.parse(rawdata);

    var countryByAlpha2Code = {};
    var countryByAlpha3Code = {};
    var countryByNumericCode = {};

    for(let i=0; i<countries.length; ++i) {
        countryByAlpha2Code[countries[i]['alpha2']] = countries[i];
        countryByAlpha3Code[countries[i]['alpha3']] = countries[i];
        countryByNumericCode[countries[i]['numeric']] = countries[i];
    }

    /* get values by alpha2 */
    clm.getAlpha3ByAlpha2 = function(alpha2) {
        if(countryByAlpha2Code[alpha2])
            return countryByAlpha2Code[alpha2].alpha3;
        else 
            return undefined;
    }; 

    clm.getLocaleByAlpha2 = function(alpha2) {
        if(countryByAlpha2Code[alpha2])
            return countryByAlpha2Code[alpha2].default_locale;
        else 
            return undefined;
    };

    clm.getCountryNameByAlpha2 = function(alpha2) {
        if(countryByAlpha2Code[alpha2])
            return countryByAlpha2Code[alpha2].name;
        else 
            return undefined; 
    };

    clm.getNumericByAlpha2 = function(alpha2) {
        if(countryByAlpha2Code[alpha2])
            return countryByAlpha2Code[alpha2].numeric;
        else 
            return undefined; 
    };    

    clm.getCountryByAlpha2 = function(alpha2) {
        return countryByAlpha2Code[alpha2];
    }

    /* get values by alpha3 */
    clm.getAlpha2ByAlpha3 = function(alpha3) {
        if(countryByAlpha3Code[alpha3])
            return countryByAlpha3Code[alpha3].alpha2;
        else 
            return undefined;
    }; 

    clm.getLocaleByAlpha3 = function(alpha3) {
        if(countryByAlpha3Code[alpha3])
            return countryByAlpha3Code[alpha3].default_locale;
        else 
            return undefined;
    };

    clm.getCountryNameByAlpha3 = function(alpha3) {
        if(countryByAlpha3Code[alpha3])
            return countryByAlpha3Code[alpha3].name;
        else 
            return undefined; 
    };

    clm.getNumericByAlpha3 = function(alpha3) {
        if(countryByAlpha3Code[alpha3])
            return countryByAlpha3Code[alpha3].numeric;
        else 
            return undefined; 
    };    

    clm.getCountryByAlpha3 = function(alpha3) {
        return countryByAlpha3Code[alpha3];
    }


    /* get values by numeric */
    clm.getAlpha2ByNumeric = function(numeric) {
        if(countryByNumericCode[numeric])
            return countryByNumericCode[numeric].alpha2;
        else 
            return undefined;
    }; 

    /* get values by numeric */
    clm.getAlpha3ByNumeric = function(numeric) {
        if(countryByNumericCode[numeric])
            return countryByNumericCode[numeric].alpha3;
        else 
            return undefined;
    };     

    clm.getLocaleByNumeric = function(numeric) {
        if(countryByNumericCode[numeric])
            return countryByNumericCode[numeric].default_locale;
        else 
            return undefined;
    };

    clm.getCountryNameByNumeric = function(numeric) {
        if(countryByNumericCode[numeric])
            return countryByNumericCode[numeric].name;
        else 
            return undefined; 
    };    

    clm.getCountryByNumeric = function(numeric) {
        return countryByNumericCode[numeric];
    };

    return clm; 

}

module.exports = CLM();
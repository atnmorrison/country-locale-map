const fuzz = require('fuzzball');
function CLM() {
    var clm = {};
    var countries; 

    if((typeof process !== 'undefined') && process && process.env && process.env.CLM_MODE == 'INTL') {
        countries = require('./countries-intl.json');
    } else {
        countries = require('./countries.json');
    }

    var countryByAlpha2Code = {};
    var countryByAlpha3Code = {};
    var countryByNumericCode = {};
    var countryByName = {};
    var countryNames = [];

    for(let i=0; i<countries.length; ++i) {
        countryByAlpha2Code[countries[i]['alpha2']] = countries[i];
        countryByAlpha3Code[countries[i]['alpha3']] = countries[i];
        countryByNumericCode[countries[i]['numeric']] = countries[i];
        countryByName[countries[i]['name']] = countries[i];
        countryNames.push(countries[i]['name']);

        if(countries[i]['alternate_names']) {
            for(let j=0; j<countries[i]['alternate_names'].length; ++j) {
                countryByName[countries[i]['alternate_names'][j]] = countries[i];
                countryNames.push(countries[i]['alternate_names'][j]);
            }
        }
    }

    clm.getAllCountries = function(){
        return countries;
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
    
    clm.getCurrencyByAlpha2 = function(alpha2) {
        if(countryByAlpha2Code[alpha2])
            return countryByAlpha2Code[alpha2].currency;
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

    clm.getCurrencyByAlpha3 = function(alpha3) {
        if(countryByAlpha3Code[alpha3])
            return countryByAlpha3Code[alpha3].currency;
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

    clm.getCurrencyByNumeric = function(numeric) {
        if(countryByNumericCode[numeric])
            return countryByNumericCode[numeric].currency;
        else 
            return undefined;
    };

    clm.getCountryByNumeric = function(numeric) {
        return countryByNumericCode[numeric];
    };

    /* get values by country name */
    clm.getAlpha2ByName = function(name, fuzzy) {
        if(countryByName[name]) {
            return countryByName[name].alpha2;
        } else if(fuzzy) {
            let match = getClosestMatch(name);
            if(match) {
                return countryByName[match].alpha2;
            }
        }
        return undefined;
    }; 

    clm.getAlpha3ByName = function(name, fuzzy) {
        if(countryByName[name]) {
            return countryByName[name].alpha3;
        } else if(fuzzy) {
            let match = getClosestMatch(name);
            if(match) {
                return countryByName[match].alpha3;
            }
        }
        
        return undefined;
    };     

    clm.getLocaleByName = function(name, fuzzy) {
        if(countryByName[name]) {
            return countryByName[name].default_locale;
        } else if(fuzzy) {
            let match = getClosestMatch(name);
            if(match) {
                return countryByName[match].default_locale;
            }
        }
        
        return undefined;
    };

    clm.getNumericByName = function(name, fuzzy) {
        if(countryByName[name]) {
            return countryByName[name].numeric;
        } else if(fuzzy) {
            let match = getClosestMatch(name);
            if(match) {
                return countryByName[match].numeric;
            }
        }
        return undefined; 
    };    

    clm.getCurrencyByName = function(name, fuzzy) {
        if(countryByName[name]) {
            return countryByName[name].currency;
        } else if(fuzzy) {
            let match = getClosestMatch(name);
            if(match) {
                return countryByName[match].currency;
            }
        }
        
        return undefined;
    };

    clm.getCountryByName = function(name, fuzzy) {
        
        if(countryByName[name]) {
            return countryByName[name];
        } else if(fuzzy) {
            let match = getClosestMatch(name);
            if(match) {
                return countryByName[match];
            }
        }       

        return undefined; 

    };

    function getClosestMatch(name) {

        let result = fuzz.extract(name, countryNames);
        if(result[0][1] >= 60) {
            return result[0][0];
        }

        return undefined;

    }

    return clm; 

}

module.exports = CLM();

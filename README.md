# Country Locale Map 

This is a simple package that provides easy conversion from alpha2 to alpha3 country codes as well as a default locale for each country

## Usage

    const clm = require(country-locale-map);
    clm.getAlpha3ByAlpha2('CA') //returns 'CAN' 


## Methods

### Alpha2 
- getAlpha3ByAlpha2(alpha2) 
- getLocaleByAlpha2(alpha2)
- getCountryNameByAlpha2(alpha2) 
- getNumericByAlpha2(alpha2)
- getCountryByAlpha2(alpha2)

### Alpha3
- getAlpha2ByAlpha3(alhpa3)
- getLocaleByAlpha3(alhpa3)
- getCountryNameByAlpha3(alhpa3)
- getNumericByAlpha3(alhpa3)
- getCountryByAlpha3(alhpa3)

### Numeric
- getAlpha2ByNumeric(numeric)
- getAlpha3ByNumeric(numeric)
- getLocaleByNumeric(numeric)
- getCountryNameByNumeric(numeric)
- getCountryByNumeric(numeric) 



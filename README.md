# Country Local Map 

This is a simple package that provides easy conversion from alpha2 to alpha3 country codes as well as a default locale for each country

## Usage

const clm = require(country-locale-map);

clm.getAlpha3ByAlpha2(alpha2) 

returns the alpha3 code of a country given it's alpha2 code

clm.getLocaleByAlpha2(alpha2) 

returns a default locale for the country given it's alpha2 code

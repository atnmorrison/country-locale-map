# Country Locale Map [![Build Status](https://travis-ci.com/atnmorrison/country-locale-map.svg?branch=master)](https://travis-ci.com/atnmorrison/country-locale-map)

Provides easy conversion between country codes and names as well as a default locale for each country. Includes fuzzy matching for country name lookups. 
Methods return undefined if no matches are found 

## Usage

```javascript
const clm = require('country-locale-map');
clm.getAlpha3ByAlpha2('CA'); //returns 'CAN' 
```

If you would like locales to be returned with - instead of_ you can set an environment variable 

CLM_MODE='INTL' in a .env file using [dotenv](https://www.npmjs.com/package/dotenv) just make sure that dotenv is required before requiring the country local map library 

## Functions

### Alpha2 

- getAlpha3ByAlpha2(alpha2)

```javascript
clm.getAlpha3ByAlpha2('CA'); //returns 'CAN' 
```

- getLocaleByAlpha2(alpha2)

```javascript
clm.getLocaleByAlpha2('CA'); //returns 'en_CA' 
```

- getCountryNameByAlpha2(alpha2) 

```javascript
clm.getCountryNameByAlpha2('CA'); //returns 'Canada' 
```

- getNumericByAlpha2(alpha2)

```javascript
clm.getNumericByAlpha2('CA'); //returns '124' 
```

- getCurrencyByAlpha2(alpha2)

```javascript
clm.getCurrencyByAlpha2('CA'); //returns 'CAD' 
```

- getCountryByAlpha2(alpha2)

```javascript
clm.getCountryByAlpha2('CA'); 

/*returns 

    {
        "name":"Canada",
        "alpha2":"CA",
        "alpha3":"CAN",
        "numeric":"124",
        "locales":["en_CA","fr_CA"],
        "default_locale":"en_CA",
        "currency":"CAD",
        "languages":["en","fr"],
        "capital":"Ottawa",
        "emoji":"🇨🇦",
        "emojiU":"U+1F1E8 U+1F1E6",
        "fips":"CA",
        "internet":"CA",
        "continent":"Americas",
        "region":"North America"
    }

*/
```

### Alpha3
- getAlpha2ByAlpha3(alpha3)

```javascript
clm.getAlpha3ByAlpha2('CAN'); //returns 'CA' 
```

- getLocaleByAlpha3(alpha3)

```javascript
clm.getLocaleByAlpha3('CAN'); //returns 'en_CA' 
```

- getCountryNameByAlpha3(alpha3)

```javascript
clm.getCountryNameByAlpha3('CAN'); //returns 'Canada' 
```

- getNumericByAlpha3(alpha3)

```javascript
clm.getNumericByAlpha3('CAN'); //returns '124' 
```

- getCurrencyByAlpha3(alpha3)

```javascript
clm.getCurrencyByAlpha3('CAN'); //returns 'CAD' 
```

- getCountryByAlpha3(alpha3)

```javascript
clm.getCountryByAlpha3('CAN');


/*returns 

    {
        "name":"Canada",
        "alpha2":"CA",
        "alpha3":"CAN",
        "numeric":"124",
        "locales":["en_CA","fr_CA"],
        "default_locale":"en_CA",
        "currency":"CAD",
        "languages":["en","fr"],
        "capital":"Ottawa",
        "emoji":"🇨🇦",
        "emojiU":"U+1F1E8 U+1F1E6",
        "fips":"CA",
        "internet":"CA",
        "continent":"Americas",
        "region":"North America"
    }

*/

```

### Numeric
- getAlpha2ByNumeric(numeric)

```javascript
clm.getAlpha2ByNumeric('123'); //returns 'CA' 
```

- getAlpha3ByNumeric(numeric)

```javascript
clm.getAlpha3ByNumeric('124'); //returns 'CAN' 
```

- getLocaleByNumeric(numeric)

```javascript
clm.getLocaleByNumeric('124'); //returns 'en_CA' 
```

- getCountryNameByNumeric(numeric)

```javascript
clm.getCountryNameByNumeric('124'); //returns 'Canada' 
```

- getCurrencyByNumeric(numeric)

```javascript
clm.getCurrencyByNumeric('124'); //returns 'CAD' 
```

- getCountryByNumeric(numeric) 

```javascript
clm.getCountryByNumeric('124');


/*returns 

    {
        "name":"Canada",
        "alpha2":"CA",
        "alpha3":"CAN",
        "numeric":"124",
        "locales":["en_CA","fr_CA"],
        "default_locale":"en_CA",
        "currency":"CAD",
        "languages":["en","fr"],
        "capital":"Ottawa",
        "emoji":"🇨🇦",
        "emojiU":"U+1F1E8 U+1F1E6",
        "fips":"CA",
        "internet":"CA",
        "continent":"Americas",
        "region":"North America"
    }

*/


```


### Name
- getAlpha2ByName(country, fuzzy) 

```javascript
clm.getAlpha2ByName('Canada'); //returns 'CA' 
```

- getAlpha3ByName(country, fuzzy)

```javascript
clm.getAlpha3ByName('Canada'); //returns 'CAN' 
```

- getLocaleByName(country, fuzzy)

```javascript
clm.getLocaleByName('Canada'); //returns 'en_CA' 
```

- getNumericByName(country, fuzzy)

```javascript
clm.getNumericByName('Canada'); //returns '124' 
```

- getCurrencyByName(country, fuzzy)

```javascript
clm.getCurrencyByName('Canada'); //returns 'CAD' 
```

- getCountryByName(country, fuzzy) 

```javascript
clm.getCountryByName('Canada');

/*returns 

    {
        "name":"Canada",
        "alpha2":"CA",
        "alpha3":"CAN",
        "numeric":"124",
        "locales":["en_CA","fr_CA"],
        "default_locale":"en_CA",
        "currency":"CAD",
        "languages":["en","fr"],
        "capital":"Ottawa",
        "emoji":"🇨🇦",
        "emojiU":"U+1F1E8 U+1F1E6",
        "fips":"CA",
        "internet":"CA",
        "continent":"Americas",
        "region":"North America"
    }

*/

```

if true is passed for fuzzy these functions will do a fuzzy match if it can't find an exact match eg:

```javascript
clm.getCountryByName('Candaa', true);

/*returns 

    {
        "name":"Canada",
        "alpha2":"CA",
        "alpha3":"CAN",
        "numeric":"124",
        "locales":["en_CA","fr_CA"],
        "default_locale":"en_CA",
        "currency":"CAD",
        "languages":["en","fr"],
        "capital":"Ottawa",
        "emoji":"🇨🇦",
        "emojiU":"U+1F1E8 U+1F1E6",
        "fips":"CA",
        "internet":"CA",
        "continent":"Americas",
        "region":"North America"
    }

*/

```

- getAllCountries()

```javascript
clm.getAllCountries();

/*returns 
    the list of all countries 
*/

```


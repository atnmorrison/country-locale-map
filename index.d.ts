interface Country {
  name: string;
  alpha2: string;
  alpha3: string;
  numeric: string;
  locales: string[];
  default_locale: string;
  currency: string;
  currency_name: string;
  languages: string[];
  capital: string;
  emoji: string;
  emojiU: string;
  fips: string;
  internet: string;
  continent: string;
  region: string;
  alternate_names?: string[];
}

interface CLM {
  getAllCountries: () => Country[];
  getAlpha3ByAlpha2: (alpha2: string) => string;
  getLocaleByAlpha2: (alpha2: string) => string;
  getCountryNameByAlpha2: (alpha2: string) => string;
  getNumericByAlpha2: (alpha2: string) => string;
  getCurrencyByAlpha2: (alpha2: string) => string;
  getCountryByAlpha2: (alpha2: string) => Country;
  getAlpha2ByAlpha3: (alpha3: string) => string;
  getLocaleByAlpha3: (alpha3: string) => string;
  getCountryNameByAlpha3: (alpha3: string) => string;
  getNumericByAlpha3: (alpha3: string) => string;
  getCurrencyByAlpha3: (alpha3: string) => string;
  getCountryByAlpha3: (alpha3: string) => Country;
  getAlpha2ByNumeric: (numeric: string) => string;
  getAlpha3ByNumeric: (numeric: string) => string;
  getLocaleByNumeric: (numeric: string) => string;
  getCountryNameByNumeric: (numeric: string) => string;
  getCurrencyByNumeric: (numeric: string) => string;
  getCountryByNumeric: (numeric: string) => Country;
  getAlpha2ByName: (name: string, fuzzy?: boolean) => string;
  getAlpha3ByName: (name: string, fuzzy?: boolean) => string;
  getLocaleByName: (name: string, fuzzy?: boolean) => string;
  getNumericByName: (name: string, fuzzy?: boolean) => string;
  getCurrencyByName: (name: string, fuzzy?: boolean) => string;
  getCountryByName: (name: string, fuzzy?: boolean) => Country;
}
declare const clm: CLM;
export = clm;
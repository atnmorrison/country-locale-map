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
  getAlpha3ByAlpha2: (alpha2: string) => string | undefined;
  getLocaleByAlpha2: (alpha2: string) => string | undefined;
  getCountryNameByAlpha2: (alpha2: string) => string | undefined;
  getNumericByAlpha2: (alpha2: string) => string | undefined;
  getCurrencyByAlpha2: (alpha2: string) => string | undefined;
  getCountryByAlpha2: (alpha2: string) => Country | undefined;
  getAlpha2ByAlpha3: (alpha3: string) => string | undefined;
  getLocaleByAlpha3: (alpha3: string) => string | undefined;
  getCountryNameByAlpha3: (alpha3: string) => string| undefined;
  getNumericByAlpha3: (alpha3: string) => string | undefined;
  getCurrencyByAlpha3: (alpha3: string) => string | undefined;
  getCountryByAlpha3: (alpha3: string) => Country | undefined;
  getAlpha2ByNumeric: (numeric: string) => string | undefined;
  getAlpha3ByNumeric: (numeric: string) => string | undefined;
  getLocaleByNumeric: (numeric: string) => string | undefined;
  getCountryNameByNumeric: (numeric: string) => string | undefined;
  getCurrencyByNumeric: (numeric: string) => string | undefined;
  getCountryByNumeric: (numeric: string) => Country | undefined;
  getAlpha2ByName: (name: string, fuzzy?: boolean) => string | undefined;
  getAlpha3ByName: (name: string, fuzzy?: boolean) => string | undefined;
  getLocaleByName: (name: string, fuzzy?: boolean) => string | undefined;
  getNumericByName: (name: string, fuzzy?: boolean) => string | undefined;
  getCurrencyByName: (name: string, fuzzy?: boolean) => string | undefined;
  getCountryByName: (name: string, fuzzy?: boolean) => Country | undefined;
}
declare const clm: CLM;
export = clm;

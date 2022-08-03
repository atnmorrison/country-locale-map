/* eslint-env node, mocha */
const chai = require('chai');
const expect = chai.expect;



process.env.CLM_MODE = 'INTL';

delete require.cache[require.resolve('../index.js')];
const clm =  require('../index.js');


describe('CountryLanguageMap', function(){

    it('getAlpha3ByAlpha2 should return CAN if passed in CA', function(){
        let result = clm.getAlpha3ByAlpha2('CA');
        expect(result).to.equal('CAN');
    });

    it('getNumericByAlpha2 should return CAN if passed in CA', function(){
        let result = clm.getNumericByAlpha2('CA');
        expect(result).to.equal('124');
    });

    it('getCountryNameByAlpha2 should return Canada if passed in CA', function(){
        let result = clm.getCountryNameByAlpha2('CA');
        expect(result).to.equal('Canada');
    });

    it('getLocaleByAlpha2 should return en_CA if passed in CA', function(){
        let result = clm.getLocaleByAlpha2('CA');
        expect(result).to.equal('en-CA');
    });

    it('getCurrencyByAlpha2 should return CAD if passed in CA', function(){
        let result = clm.getCurrencyByAlpha2('CA');
        expect(result).to.equal('CAD');
    });

    it('getCountryByAlpha2 should return object if passed CA', function(){
        let result = clm.getCountryByAlpha2('CA');
        expect(result.alpha3).to.equal('CAN');
        expect(result.alpha2).to.equal('CA');
        expect(result.name).to.equal('Canada');
        expect(result.numeric).to.equal('124');
    });


    it('getAlpha2ByAlpha3 should return CA if passed in CAN', function(){
        let result = clm.getAlpha2ByAlpha3('CAN');
        expect(result).to.equal('CA');
    });

    it('getNumericByAlpha3 should return CAN if passed in CAN', function(){
        let result = clm.getNumericByAlpha3('CAN');
        expect(result).to.equal('124');
    });

    it('getCountryNameByAlpha3 should return Canada if passed in CAN', function(){
        let result = clm.getCountryNameByAlpha3('CAN');
        expect(result).to.equal('Canada');
    });

    it('getLocaleByAlpha3 should return en_CA if passed in CAN', function(){
        let result = clm.getLocaleByAlpha3('CAN');
        expect(result).to.equal('en-CA');
    });

    it('getCurrencyByAlpha2 should return CAD if passed in CAN', function(){
        let result = clm.getCurrencyByAlpha3('CAN');
        expect(result).to.equal('CAD');
    });

    it('getCountryByAlpha3 should return object if passed CAN', function(){
        let result = clm.getCountryByAlpha3('CAN');
        expect(result.alpha3).to.equal('CAN');
        expect(result.alpha2).to.equal('CA');
        expect(result.name).to.equal('Canada');
        expect(result.numeric).to.equal('124');
    });



    it('getAlpha2ByNumeric should return 124 if passed in CA', function(){
        let result = clm.getAlpha2ByNumeric('124');
        expect(result).to.equal('CA');
    });

    it('getAlpha3ByNumeric should return CAN if passed in 124', function(){
        let result = clm.getAlpha3ByNumeric('124');
        expect(result).to.equal('CAN');
    });

    it('getCountryNameByNumeric should return Canada if passed in 124', function(){
        let result = clm.getCountryNameByNumeric('124');
        expect(result).to.equal('Canada');
    });

    it('getLocaleByNumeric should return en_CA if passed in 124', function(){
        let result = clm.getLocaleByNumeric('124');
        expect(result).to.equal('en-CA');
    });

    it('getCurrencyByNumeric should return CAD if passed in 124', function(){
        let result = clm.getCurrencyByNumeric('124');
        expect(result).to.equal('CAD');
    });

    it('getCountryByNumeric should return object if passed 124', function(){
        let result = clm.getCountryByNumeric('124');
        expect(result.alpha3).to.equal('CAN');
        expect(result.alpha2).to.equal('CA');
        expect(result.name).to.equal('Canada');
        expect(result.numeric).to.equal('124');
        expect(result.currency).to.equal('CAD');
    });


    it('getAlpha3ByName should return CAN if passed in Canada', function(){
        let result = clm.getAlpha3ByName('Canada');
        expect(result).to.equal('CAN');
    });

    it('getNumericByName should return 124 if passed in Canada', function(){
        let result = clm.getNumericByName('Canada');
        expect(result).to.equal('124');
    });

    it('getAlpha2ByName should return CA if passed in Canada', function(){
        let result = clm.getAlpha2ByName('Canada');
        expect(result).to.equal('CA');
    });

    it('getLocaleByName should return en_CA if passed in Canada', function(){
        let result = clm.getLocaleByName('Canada');
        expect(result).to.equal('en-CA');
    });

    it('getCurrencyByName should return CAD if passed in Canada', function(){
        let result = clm.getCurrencyByName('Canada');
        expect(result).to.equal('CAD');
    });

    it('getCountryByName should return object if passed Canada', function(){
        let result = clm.getCountryByName('Canada');
        expect(result.alpha3).to.equal('CAN');
        expect(result.alpha2).to.equal('CA');
        expect(result.name).to.equal('Canada');
        expect(result.numeric).to.equal('124');
        expect(result.currency).to.equal('CAD');
        expect(result.capital).to.equal('Ottawa');
        expect(result.emoji).to.equal('🇨🇦');
    });


    it('getAlpha3ByName should return CAN if passed in Canaad', function(){
        let result = clm.getAlpha3ByName('Canaad', true);
        expect(result).to.equal('CAN');
    });

    it('getNumericByName should return 124 if passed in Canaad', function(){
        let result = clm.getNumericByName('Canaad', true);
        expect(result).to.equal('124');
    });

    it('getAlpha2ByName should return CA if passed in aCnaad', function(){
        let result = clm.getAlpha2ByName('aCnada', true);
        expect(result).to.equal('CA');
    });

    it('getLocaleByName should return en_CA if passed in Cnaada', function(){
        let result = clm.getLocaleByName('Cnaada', true);
        expect(result).to.equal('en-CA');
    });

    it('getCurrencyByName should return CAD if passed in Canaa', function(){
        let result = clm.getCurrencyByName('Canaa', true);
        expect(result).to.equal('CAD');
    });

    it('getCountryByName should return object if passed Caada', function(){
        let result = clm.getCountryByName('Caada', true);
        expect(result.alpha3).to.equal('CAN');
        expect(result.alpha2).to.equal('CA');
        expect(result.name).to.equal('Canada');
        expect(result.numeric).to.equal('124');
        expect(result.currency).to.equal('CAD');
        expect(result.capital).to.equal('Ottawa');
        expect(result.emoji).to.equal('🇨🇦');
    });

    it('getCountryByAlpha3 should return object if passed USA', function(){
        let result = clm.getCountryByAlpha3('USA');
        expect(result.alpha3).to.equal('USA');
        expect(result.alpha2).to.equal('US');
        expect(result.name).to.equal('United States');
        expect(result.default_locale).to.equal('en-US');
        expect(result.numeric).to.equal('840');
        expect(result.currency).to.equal('USD');
    });


    it('getCountryByName should return Russia if passed Russia', function(){

        let result = clm.getCountryByName('Russia', false)        
        expect(result.alpha3).to.equal('RUS')
        expect(result.currency).to.equal('RUB')

    });

    it('getCountryByName should return United Kingdom if passed United Kingdom', function(){

        let result = clm.getCountryByName('United Kingdom', true)        
        expect(result.alpha3).to.equal('GBR')
        expect(result.currency).to.equal('GBP')

    });


    it('getCountryByName should return Australia if passed United Kingdom', function(){

        let result = clm.getCountryByName('Australia', true)        
        expect(result.alpha3).to.equal('AUS')
        expect(result.currency).to.equal('AUD')

    });

    it('getAllCountries should return 251 countries', function(){

        let result = clm.getAllCountries();     
        expect(result.length).to.equal(251)

    });

    it('getCountryByName should return Taiwan if passed Taiwan', function(){
        let result = clm.getCountryByName('Taiwan', true);        
        expect(result.currency).to.equal('TWD');
    });


    it('getCountryByName should return Romania if passed Romania', function(){
        let result = clm.getCountryByName('Romania', true);        
        expect(result.currency).to.equal('RON');
    });


    it('getCountryByName should return Kosovo if passed Kosovo', function(){
        let result = clm.getCountryByName('Kosovo', true);        
        expect(result.currency).to.equal('EUR');
    });
    

    it('getCurrencyByName should return UYW if passed in Uruguay', function(){
        let result = clm.getCurrencyByName('Uruguay');
        expect(result).to.equal('UYU');
    });
})
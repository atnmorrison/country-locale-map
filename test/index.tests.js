const chai = require('chai');
const expect = chai.expect;
const clm = require('../index.js');

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
        expect(result).to.equal('en_CA');
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
        expect(result).to.equal('en_CA');
    });

    it('getCountryByAlpha2 should return object if passed CAN', function(){
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
        expect(result).to.equal('en_CA');
    });

    it('getCountryByNumeric should return object if passed 124', function(){
        let result = clm.getCountryByNumeric('124');
        expect(result.alpha3).to.equal('CAN');
        expect(result.alpha2).to.equal('CA');
        expect(result.name).to.equal('Canada');
        expect(result.numeric).to.equal('124');
    });





})
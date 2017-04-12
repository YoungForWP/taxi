/**
 * Created by wangpu on 17-4-12.
 */
describe('dateTime',() =>{
    it('should print true if input date format like \'xxxx-xx-xx\'',() => {
        const date = '2017-3-2';
        const expectValue = true;
        const actualOutput = isDate(date);
        expect(actualOutput).toBe(expectValue);
    });

    it('should print false if input date format is not validity',() => {
        const date = '2013/12/3';
        const expectValue = false;
        const actualOutput = isDate(date);
        expect(actualOutput).toBe(expectValue);
    });

    it('should print false if input date format is not validity',() => {
        const date = '2013-12-3-6';
        const expectValue = false;
        const actualOutput = isDate(date);
        expect(actualOutput).toBe(expectValue);
    });

    it('should print false if year is not validity', () => {
        const date = '12-3-2';
        const expectValue = false;
        const actualOutput = isDate(date);
        expect(actualOutput).toBe(expectValue);
    });

    it('should print false if month is not validity',() => {
        const date = '2013-99-7';
        const expectValue = false;
        const actualOutput = isDate(date);
        expect(actualOutput).toBe(expectValue);
    });

    it('should print false if day is not validity',() => {
        const date = '2013-15-99';
        const expectValue = false;
        const actualOutput = isDate(date);
        expect(actualOutput).toBe(expectValue);
    });

    it('should print false if input is empty', () => {
        const date = '';
        const expectValue = false;
        const actualOutput = isDate(date);
        expect(actualOutput).toBe(expectValue);
    });

    it('should return true if year is leap year',() => {
        const date = '2016-3-16';
        const expectValue = true;
        const actualOutput = isLeapYear(date);
        expect(actualOutput).toBe(expectValue);
    });

    it('should return false if year is not leap year',() => {
       const date = '2017-4-5';
       const expectValue = false;
       const actualOutput = isLeapYear(date);
       expect(actualOutput).toBe(expectValue);
    });

    it('should return lessThan if input is less than today',() =>{
        const date = '2016-2-3';
        const expectValue = 'lessThan';
        const actualOutput = yearComprision(date);
        expect(actualOutput).toBe(expectValue);
    });

    it('should return greatThan if input is greater than today', () => {
        const date = '2019-3-5';
        const expectValue = 'greatThan';
        const actualOutput = yearComprision(date);
        expect(actualOutput).toBe(expectValue);
    });

    it('should return equal if input is equal with today', () => {
        const date = '2017-4-12';
        const expectValue = 'equal';
        const actualOutput = yearComprision(date);
        expect(actualOutput).toBe(expectValue);
    });

   it('should return object', () => {
       const date = '2019-3-5';
       const expectValue = { input:false, today:false, compare:'greatThan' };
       const actualOutput = generateDateObj(date);
       expect(actualOutput).toEqual(expectValue);
   });

    it('should throw exception if input is not correct format', () => {
        const date = '2013-99-3';
        const expectValue = '请输入正确的日期!';
        const actualOutput = generateDateObj(date);
        expect(actualOutput).toBe(expectValue);
    });



});
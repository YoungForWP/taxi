/**
 * Created by wangpu on 17-4-13.
 */
describe('test taxi price', () => {
    it('should return 9 yuan if input distance < 2 km and waitMinute is 13 min', () => {
        const result = calculateTaxiFee(1,13);
        expect(result).toEqual(9);
    });

    it('should 11 return yuan if input distance big than 2 km but less than 8 km', () => {
        const result = calculateTaxiFee(6,25);
        expect(result).toEqual(11);
    });
});

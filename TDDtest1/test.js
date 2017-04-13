/**
 * Created by wangpu on 17-4-13.
 */
descripe('', () => {

    it('should return isEven if input is a even number', () =>{
       const actualValue = checkString(2);
       expect(actualValue).toBe('isEven');
    });

    it('should return isOdd if input is odd number', () =>{
        const actualValue = checkString(3);
        expect(actualValue).toBe('isOdd');
    });
    
})

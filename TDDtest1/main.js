/**
 * Created by wangpu on 17-4-13.
 */
function checkInput(inputStr){
    let result = '';
    const inputNum = Number(inputStr);
    if(inputNum === NaN){
        result = 'isStr';
    }else if(inputNum / 2 === 0){
        result = 'isEven';
    }else{
        result = 'isOdd';
    }
    return result;
}
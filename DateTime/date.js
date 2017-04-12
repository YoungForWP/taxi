/**
 * Created by wangpu on 17-4-12.
 */


function generateDateObj(dateString){
    const isTrue = isDate(dateString);
     if(isTrue){
         const isInputLeap = isLeapYear(dateString,0);
         const isTodayLesp = isLeapYear(new Date(),1);
         const comprisionValue = yearComprision(dateString);
         const dateObj = {};
         dateObj.input = isInputLeap;
         dateObj.today = isTodayLesp;
         dateObj.compare = comprisionValue;
         return dateObj;
     }else{
         return '请输入正确的日期!';
     }
}
function isDate(dateString){
    if(dateString.trim() == '')
        return false;
    const reg = dateString.match(/^(\d{1,4})(-)(\d{1,2})\2(\d{1,2})$/);
    if(reg == null){
        return false;
    }
    const date = new Date(reg[1],reg[3]-1,reg[4]);
    const num = (date.getFullYear() == reg[1] && (date.getMonth()+1) == reg[3] && date.getDate() == reg[4] );
    if(num == 0){
        return false;
    }
    return (num != 0);
}


function isLeapYear(dateTime,flag){
    if(flag === 1){
        year = dateTime.getFullYear();
    }else{
        const dateSplit = dateTime.split('-');
        year = dateSplit[0];
    }
    if((year % 4 === 0 && year % 100 != 0) || (year % 400 == 0)){
        return true;
    }else
    {
        return false;
    }
}

function yearComprision(inputDate){
    const today = new Date();
    todayDate = today.toLocaleDateString();
    if(Date.parse(inputDate) > Date.parse(todayDate)){
        return 'greatThan';
    }else if(Date.parse(inputDate) < Date.parse(todayDate)){
        return 'lessThan';
    }else{
        return 'equal';
    }
}





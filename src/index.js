module.exports = function toReadable (number) {

        // let result;

        Object.prototype.getKeyByValue = function( value ) {
            for( var prop in this ) {
                if( this.hasOwnProperty( prop ) ) {
                     if( this[ prop ] === value )
                         return prop;
                }
            }
        }
        
        var test = {
            'zero': 0,
            'one': 1,
            'two': 2,
            'three': 3, 
            'four': 4,
            'five': 5,
            'six': 6,
            'seven': 7,
            'eight': 8, 
            'nine': 9,
            'ten': 10,
            'eleven': 11, 
            'twelve': 12,
            'thirteen': 13, 
            'fourteen': 14, 
            'fifteen': 15, 
            'sixteen': 16, 
            'seventeen': 17, 
            'eighteen': 18, 
            'nineteen': 19, 
            'twenty': 20,
            'thirty': 30,
            'forty': 40, 
            'fifty': 50, 
            'sixty': 60,
            'seventy': 70,
            'eighty': 80,
            'ninety': 90,
            'hundred': 100
        };



        if(typeof(number) == "undefined") return;

        if (number >= 0 && number <=20) { // числа от 0 включительно до 20
            return test.getKeyByValue( number );
        } else if (number > 20 && number < 100) { // числа от 21 до 99 

            let slicedFirstNum = Number((number).toString().slice(0, 1)); // если входит число "20", забираем первое число (2)
            let decFirstNum = Number(slicedFirstNum + '0'); // делаем первое число из 2 в 20
            let firstNum = test.getKeyByValue( decFirstNum ); // кидаем число в функцию и получаем "двадцать" (на английском)

            let slicedSecNum = Number((number).toString().slice(1)); // если входит число "20", забираем второе число (0)
            let secNum = test.getKeyByValue( slicedSecNum ); // кидаем число в функцию и получаем второе число (на английском)

            return firstNum + ' ' + secNum; // связываем два полученых числа вместе
        } 
}


/* 

else if (number >= 100 && number < 1000) { // числа от 100 включительно и до 999

    let slicedFirstHun = Number((number).toString().slice(0, 1)); // если входит число "100", забираем первое число (1)
    let firstNumHun = test.getKeyByValue( slicedFirstHun ); // достаем из функции прописную первую сотню (284 - "two" и тд)
    let decFirstHun = Number(slicedFirstHun + '00'); // делаем первое число из 1 в 100
    let firstHun = test.getKeyByValue( decFirstHun ); // кидаем число в функцию и получаем "сто" (на английском)


    let slicedSecHun = Number((number).toString().slice(1,2)); // если входит число "123", забираем второе число (2)
    if (slicedSecHun = 0) { // если второе число (204) равно 0, то получаем пустую строку
        let secHunZero = "";
        return decSecHun = secHunZero; // сюда вернули пустую строку
    } else if (slicedSecHun != 0) { // если у нас таки не ноль, то типа делаем из 220 например 20, закидаем в функцию и такие получаем "двадцать"
        let decSecHun = Number(slicedSecHun + '0'); // делаем первое число из 2 в 20
        return secHun = test.getKeyByValue( decSecHun ); // кидаем число в функцию и получаем второе число (на английском)
    }             

    let slicedThirdHun = Number((number).toString().slice(2)); // если входит число "123", забираем третье число (3)
    console.log(slicedThirdHun)
    if (slicedThirdHun != 0) {
        return thirdHun = test.getKeyByValue( slicedThirdHun ); // кидаем число в функцию и получаем третье число (на английском)
    } else {
        return thirdHun = ""; // типа если третье число - ноль, то ничего (дальше, по идее, должен пройти только варик с предыдущего этапа, то есть 120 - одна сотня двадцать)
    }


    return firstNumHun + ' ' + firstHun + ' ' + secHun + " " + thirdHun; // связываем три полученых числа вместе
}
*/

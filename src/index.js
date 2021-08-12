module.exports = function toReadable (number) {

        let result;

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

        if (number >= 0 && number <=20) {
            return test.getKeyByValue( number );
        } else if (number > 20 && number <=90) {
            let num = test.getKeyByValue( number );
            let slicedNum = parseInt(num.toString().slice(0, -1).concat('0'));
            return result = num + " three";
        }
}


        // if(number % 100 >= 11 && number % 100 <= 13)
        //       return num + "th";
              
        //       switch(num % 10) {
        //           case 1: return num + "st";
        //           case 2: return num + "nd";
        //           case 3: return num + "rd";
        //       }
        //       return num + "th";
        //   }

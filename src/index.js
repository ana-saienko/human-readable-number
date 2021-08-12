module.exports = function toReadable (number) {

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
            'twenty one': 21, 
            'twenty two': 22, 
            'twenty three': 23, 
            'twenty four': 24, 
            'twenty five': 25, 
            'twenty six': 26, 
            'twenty eight': 28, 
            'twenty nine': 29, 
            'twenty seven': 27, 
            'thirty': 30, 
            'thirty one': 31, 
            'thirty two': 32, 
            'thirty three': 33, 
            'thirty four': 34, 
            'thirty five': 35, 
            'thirty six': 36, 
            'thirty seven': 37, 
            'thirty eight': 38, 
            'thirty nine': 39, 
            'forty': 40, 
            'forty one': 41, 
            'forty two': 42, 
            'forty three': 43, 
            'forty four': 44, 
            'forty five': 45, 
            'forty six': 46, 
            'forty seven': 47, 
            'forty eight': 48, 
            'forty nine': 49, 
            'fifty': 50, 
            'fifty one': 51, 
            'fifty two': 52, 
            'fifty three': 53, 
            'fifty four': 54, 
             'fifty five': 55,
             'fifty six': 56,
             'fifty seven': 57,
            'fifty eight': 58,
             'fifty nine': 59,
             'sixty': 60,
            'sixty one': 61,
             'sixty two': 62,
             'sixty three': 63,
             'sixty four': 64,
             'sixty five': 65,
             'sixty six': 66,
             'sixty seven': 67,
            'sixty eight': 68,
             'sixty nine': 69,
             'seventy': 70,

            'nine hundred ninety one': 991, 
            'nine hundred ninety two': 992, 
            'nine hundred ninety three': 993, 
            'nine hundred ninety four': 994, 
            'nine hundred ninety five': 995, 
            'nine hundred ninety six': 996, 
            'nine hundred ninety seven': 997, 
            'nine hundred ninety eight': 998, 
            'nine hundred ninety nine': 999
        };
        

        if (number => 0) {
                return test.getKeyByValue( number );
        } else {
        return null;
        }    
}

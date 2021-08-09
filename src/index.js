module.exports = function toReadable (number) {

    let numBase = {
        'one': 1,
        'two': 2,
        'three': 3
    }

    Object.prototype.getKeyByValue = function( value ) {
        for( var prop in this ) {
            if( this.hasOwnProperty( prop ) ) {
                 if( this[ prop ] === value )
                     return prop;
            }
        }
    }

    return number;

}
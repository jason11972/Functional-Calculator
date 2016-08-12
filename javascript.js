/**
 * Created by Jason Wilson on 4/26/2016.
 */
//callback function defined
function callback(type, value, item) {
    switch (value) {
        case undefined:
            $('#total').html("");
            break;
        default:
            $('#total').html(value);
            break;
    }
}
// my_calculator - creates a new calculator object
var my_calculator = new calculator(callback);
// add click handlers to all buttons//
$(document).ready(function () {
    $('.button').on('click', function () {
        var val = $(this).text();
        var isnum = parseInt(val);
        var disLen =  $('#total').html().length;

        if (!isNaN(isnum) && disLen >=10) {
            return;
        }
        
        switch (val) {
            case 'CE':
                my_calculator.allClear();
                break;
            case 'C':
                my_calculator.allClear();
                break;
            default:
                my_calculator.addItem($(this).text());
                break;
        }
    });
});




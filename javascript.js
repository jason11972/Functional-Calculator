/**
 * Created by Jason Wilson on 4/26/2016.
 */
var num_array = ['',''];
var operator = null;
var index = 0;
var display ;
var decimal = false;

// my_calculator - creates a new calculator object
// add click handlers to all buttons//
//LF START

$(document).ready(function () { //this is the document ready and function line
    display = $("#total");  // the area that numbers are shown is equal to the jquery pointing to the 'total'div

    $('#calculator').on('click', '.num',function () {  //jquery points to the calculator div, then looks at what was clicked, then looks for number button, then function begins

        num_array[index] += $(this).html(); //the array is targeted, then the index and added to it is jquery,this from the html
        display.html(num_array[index]);  //the display is updated to show the array and the index
    }).on('click', '.op', function(){  // the clicked item is looked for again, specifically the operator, then function starts
        operator = $(this).html(); // the math function defined above is equal to the html that was clicked
        index = 1;  // the index is updated to show the item in position 1
        decimal = false;  // the decimal point is declared false here because it hasnt been touched yet
    }).on('click', '.decimal', function(){  //upon being clicked the button is checked to see if it was the decimal point, then function
        if(!decimal){  //my first if statement-it checks to see if this is NOT a decimal point
            num_array[index] += $(this).html();  // the array is indexed and added to it is the html button
            display.html(num_array[index]);  //the display on html is updated to reflect the status of the array and its index
            decimal = true;  // the decimal point is changed to true;
        } //space(end of function)
    }).on('click', '.equal', function(){  //the click handler checks that the button clicked was the equal sign, if so then function called
        calculate();  //function from previous line here....it's calculate.
    });  //end of function here


}); //end of function here
//LF END
function calculate() {
    var answer = null;
    switch(operator) {
        case '+':
            answer = parseFloat(num_array[0]) + parseFloat(num_array[1]);
            break;
        case '-':
            answer = parseFloat(num_array[0]) - parseFloat(num_array[1]);
            break;
        case 'x':
            answer = parseFloat(num_array[0]) * parseFloat(num_array[1]);
            break;
        case '/':
            answer = parseFloat(num_array[0]) / parseFloat(num_array[1]);
    }
    display.html(answer);
}
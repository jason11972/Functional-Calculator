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

//this is the document ready and function line
 // the area that numbers are shown is equal to the jquery pointing to the 'total'div

 //jquery points to the calculator div, then looks at what was clicked, then looks for number button, then function begins

  //the array is targeted, then the index and added to it is jquery,this from the html
       //the display is updated to show the array and the index
  // the clicked item is looked for again, specifically the operator, then function starts
   // the math function defined above is equal to the html that was clicked
    // the index is updated to show the item in position 1
      // the decimal point is declared false here because it hasnt been touched yet
 //upon being clicked the button is checked to see if it was the decimal point, then function
    //my first if statement-it checks to see if this is NOT a decimal point
 // the array is indexed and added to it is the html button
    //the display on html is updated to reflect the status of the array and its index
  // the decimal point is changed to true;
//space(end of function)
   //the click handler checks that the button clicked was the equal sign, if so then function called
//function from previous line here....it's calculate.
 //end of function here


 //end of function here
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
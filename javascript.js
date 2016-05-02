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


$(document).ready(function () {
    display = $("#total");

    $('#calculator').on('click', '.num',function () {
        num_array[index] += $(this).html();
        display.html(num_array[index]);
    })
        .on('click', '.op', function() {
            operator = $(this).html();
            index = 1;
            decimal = false;
            calculate();



    }).on('click', '.decimal', function(){
        if(!decimal){
            num_array[index] += $(this).html();
            display.html(num_array[index]);
            decimal = true;
        }




    }).on('click', '.equal', function(){
        calculate();
    })
      .on('click', '.clear', function(){
          num_array = ['',''];
          operator = null;
          index = 0;
          decimal = false;
          display.html(num_array);
      })
      .on('click', '.ce', function() {
          num_array.pop();
          num_array.push('');
          display.html(num_array[index]);
        })

});


function calculate() {
    var answer = null;
    switch (operator) {
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



            switch (operator) {
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
                    break;
            }
            display.html(answer);
    }
}

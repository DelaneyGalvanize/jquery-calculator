$(document).ready(function() {


  var $screen = $('#screen');
  var displayText = $screen.text();
  var currentOperator = '';
  var currentTotal=0;
  var numArray= [];


  $('.buttons').on('click', function() {
      var input = $(event.target).text()
      if (input >= 0 && input<10) {
        displayText += input
        $screen.text(displayText)
      } else if (input === '+') {
        currentOperator = '+'
        displayText += input
        $screen.text(displayText)
      }  else if (input === 'C') {
          displayText = '';
          $screen.text('');
      } else if (input === '-') {
        currentOperator = '-'
        displayText += input
        $screen.text(displayText)
      } else if (input === 'x') {
        currentOperator = 'x'
        displayText += input
        $screen.text(displayText)
      } else if (input === '÷') {
        currentOperator = '÷'
        displayText += input
        $screen.text(displayText)
      } else if (input === "=") {
        numArray = displayText.split(/[x÷+-]/);
          if (currentOperator === '+') {
            displayText=Number(numArray[0])+ Number(numArray[1]);
            $screen.text(displayText)
        } else if (currentOperator === '-') {
          displayText=Number(numArray[0])- Number(numArray[1]);
          $screen.text(displayText)
        } else if (currentOperator === 'x') {
          displayText=Number(numArray[0]) * Number(numArray[1]);
          $screen.text(displayText)
        } else if (currentOperator === '÷') {
          displayText=Number(numArray[0]) / Number(numArray[1]);
          $screen.text(displayText)
        }

}
})

})

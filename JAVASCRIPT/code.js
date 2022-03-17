var buttonvalue = document.querySelectorAll("button");
var screen = document.querySelector(".displayBar"); 

buttonvalue.forEach(function(button) {
    button.addEventListener('click', calculate);
  });


  function calculate(event) {
    let clickedButton = event.target.value;
    if (clickedButton === '=') {
      if (screen.value !== '') {
        screen.value = eval(screen.value);
      }
    } else if (clickedButton === 'C') {
      screen.value = '';
    } else {
      screen.value += clickedButton;
    }
  }

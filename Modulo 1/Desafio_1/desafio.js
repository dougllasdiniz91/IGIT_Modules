window.addEventListener('change', changeColor);

function changeColor() {
  var arrayColor = setValueInput();
  var div = document.querySelector('#color');
  div.style.background = `rgb(${arrayColor[0]},${arrayColor[1]},${arrayColor[2]})`;
}

function setValueInput() {
  var rangeRed = document.querySelector('#rangeRed');
  var inputRed = document.querySelector('#red');
  inputRed.value = rangeRed.value;

  var rangeGreen = document.querySelector('#rangeGreen');
  var inputGreen = document.querySelector('#green');
  inputGreen.value = rangeGreen.value;

  var rangeBlue = document.querySelector('#rangeBlue');
  var inputBlue = document.querySelector('#blue');
  inputBlue.value = rangeBlue.value;

  var arrayColor = [rangeRed.value, rangeGreen.value, rangeBlue.value];
  return arrayColor;
}

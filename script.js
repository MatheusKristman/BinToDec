const binaryInput = document.getElementById('binaryInput');
const matchNumbers = /^[0-1]*$/

let binary = '';

function getTextFromInput(e) {
  if(e.target.value.match(matchNumbers)) {
    binary = e.target.value;
  } else {
    binary = '';
  }
}

binaryInput.addEventListener('change', getTextFromInput);

const binaryBtn = document.getElementById('binaryBtn');

function calculateBinaryToNumber(bin) {
  let decimal = 0;
  binaryInput.value = '';

  for(let i = bin.length - 1; i >= 0; i--) {
    decimal += parseInt(bin[i]) * Math.pow(2, bin.length - 1 - i);
  }

  return decimal
}

function showDecimalOnScreen(dec) {
  const resultBox = document.getElementById('resultBox');

  if(resultBox.children.length > 0) {
    resultBox.children[0].remove();
  }

  const span = document.createElement('span');
  const decimalText = document.createTextNode(dec);

  span.appendChild(decimalText);
  resultBox.appendChild(span);
}

const errorElement = document.getElementById('errorElement');
const errorNode = document.createTextNode('Favor inserir somente valor binário. (ex: 0110)');

binaryBtn.addEventListener('click', () => {
  if (binary !== '') {
    const decimal = calculateBinaryToNumber(binary);

    if(errorElement.hasChildNodes()) {
      errorElement.removeChild(errorNode);
      console.log('rodei');
    }

    showDecimalOnScreen(decimal);
  } else {
    binaryInput.value = '';
    errorElement.appendChild(errorNode)
  }
});

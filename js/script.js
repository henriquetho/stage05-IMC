import { Modal } from './modal.js';
import { AlertError } from './alert-error.js';
import {calculeteIMC, notANumber} from './utils.js'

const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeigth = document.querySelector('#height');

form.onsubmit = function() {
  event.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeigth.value;

  const weightHorHeigthIsNotNumber = notANumber(weight) || notANumber(height);

  if (weightHorHeigthIsNotNumber) {
    AlertError.open();
    return;
  }

 AlertError.close();

  const result = calculeteIMC(weight, height);
  displayResultMessage(result);
}

function displayResultMessage(result) {
  const message = `Seu IMC é de ${result}`;
  
  Modal.message.innerText = message
  Modal.open();  
}

inputWeight.oninput = () => AlertError.close()
inputHeigth.oninput = () => AlertError.close()

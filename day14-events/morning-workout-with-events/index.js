let result = 0;

const onEquals = () => {
  const resultElm = document.querySelector('.calc__result');
  const inputElm = document.querySelector('.calc__input');

  result += Number(inputElm.value);

  inputElm.value = 0;
  inputElm.focus();
  resultElm.textContent = result;
}

document.addEventListener('DOMContentLoaded', () => {
  const equalsBtn = document.querySelector('.calc__btn-equals');
  equalsBtn.addEventListener('click', onEquals);
});
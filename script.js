const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const resultBox = document.getElementById('result');
const warningBox = document.getElementById('warning');

let count = 0;

// Функция обновления состояния: цвет окна, доступность кнопок, предупреждение
function updateUI() {
  resultBox.textContent = count;

  // Цвет фона окна результата
  if (count > 0) {
    resultBox.style.backgroundColor = 'yellow';
  } else if (count < 0) {
    resultBox.style.backgroundColor = 'green';
  } else {
    resultBox.style.backgroundColor = 'red';
  }

  // Блокировка кнопок на границах ±10
  plusBtn.disabled = (count === 10);
  minusBtn.disabled = (count === -10);

  // Окно предупреждения
  if (count === 10 || count === -10) {
    warningBox.textContent = 'вы достигли экстремального значения';
  } else {
    warningBox.textContent = '';
  }
}

// Слушатели событий
plusBtn.addEventListener('click', () => {
  count++;
  updateUI();
});

minusBtn.addEventListener('click', () => {
  count--;
  updateUI();
});

// Начальное состояние
updateUI();

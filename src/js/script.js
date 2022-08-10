const radioBtnFirst = document.querySelectorAll('.radio-btn__first');
const radioBtnSecond = document.querySelectorAll('.radio-btn__second');
const sliderText = document.querySelectorAll('.card');
const sliderTextSecond = document.querySelectorAll('.card__second');

//нашел все кнопки карточке переключения
const radioBtn = document.querySelectorAll('.radio-btn');

radioBtn.forEach((item) => {
  item.addEventListener('click', (evt) => {
    console.log('ya');
    radioBtnFirst.classList.remove('active');
    item.classList.add('active');
  });
});

// PRESS RADIO BUTTON
// radioBtnSecond.addEventListener('click', () => {
//   console.log('ya');
//   radioBtnFirst.classList.remove('active');
//   radioBtnSecond.classList.add('active');
//   sliderText[0].style.display = 'none';
//   sliderText[1].style.display = 'block';
//   sliderTextSecond[0].style.display = 'none';
//   sliderTextSecond[1].style.display = 'block';
// });
//
//
// radioBtnFirst.addEventListener('click', () => {
//   radioBtnSecond.classList.remove('active');
//   radioBtnFirst.classList.add('active');
//   sliderText[1].style.display = 'none';
//   sliderText[0].style.display = 'block';
//   sliderTextSecond[1].style.display = 'none';
//   sliderTextSecond[0].style.display = 'block';
// });

// radioBtnSecond.forEach((item) => {
//   item.addEventListener('click', () => {
//     console.log('p');
//     toggleCard(radioBtnSecond);
//   });
// });
//
// function toggleCard(radioBtnSecond) {
//   radioBtnSecond.classList.add('active');
// }

// function removeClass(toggle) {
//   toggle.classList.add('active');
// }

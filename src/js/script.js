const radioBtnFirst = document.querySelector('.radio-btn__first');
const radioBtnSecond = document.querySelector('.radio-btn__second');
const sliderText = document.querySelectorAll('.card');
const sliderTextSecond = document.querySelectorAll('.card__second');

// PRESS RADIO BUTTON
radioBtnSecond.addEventListener('click', () => {
  console.log('ya');
  radioBtnFirst.classList.remove('active');
  radioBtnSecond.classList.add('active');
  sliderText[0].style.display = 'none';
  sliderText[1].style.display = 'block';
  sliderTextSecond[0].style.display = 'none';
  sliderTextSecond[1].style.display = 'block';
});

radioBtnFirst.addEventListener('click', () => {
  radioBtnSecond.classList.remove('active');
  radioBtnFirst.classList.add('active');
  sliderText[1].style.display = 'none';
  sliderText[0].style.display = 'block';
  sliderTextSecond[1].style.display = 'none';
  sliderTextSecond[0].style.display = 'block';
});

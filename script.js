'use strict';

// ----------> Variables <---------- //
const popUpModal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// ----------> Functions <---------- //
const openModal = function () {
  console.log('Button clicked');
  popUpModal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  popUpModal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// ----------> Code <---------- //
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (event) {
  console.log(event.key); // click escape key on the page

  if (event.key === 'Escape' && !popUpModal.classList.contains('hidden')) {
    closeModal();
  }
});

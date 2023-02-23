const throttle = require('lodash.throttle');

const LOCAL_STORAGE = "feedback-form-state";
const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');

dataInput();

function getFormData() {
  return { email: email.value.trim(), message: message.value.trim() };
};

function onClickSubmit(e) {
  e.preventDefault();

  if (email.value.trim() === '' || message.value.trim() === '') {
    return alert('Please fill in all fields');
  };

  console.log(getFormData());
  form.reset();
  localStorage.removeItem(LOCAL_STORAGE);
};

function onSaveLocalStorage() {
  try {
    localStorage.setItem(LOCAL_STORAGE, JSON.stringify(getFormData()));
  } catch (e) {
    console.error('Error saving to local storage:', e);
  };
};

function dataInput() {
  try {
    const localStorageKey = localStorage.getItem(LOCAL_STORAGE);
    const formData = JSON.parse(localStorageKey);
  
    if (formData) {
      email.value = formData.email || '';
      message.value = formData.message || '';
    };
  } catch (e) {
    console.error('Error loading from local storage:', e);
  };
};

form.addEventListener('submit', onClickSubmit);
form.addEventListener('input', throttle(onSaveLocalStorage, 500));
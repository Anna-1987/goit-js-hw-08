import  throttle  from 'lodash.throttle';

    
const formEl = document.querySelector('.feedback-form');
const LOCAL_STORAGE_KEY = 'feedback-form-state';

let formData = {};

populateTextOutput();

formEl.addEventListener('input', throttle(onFormInput, 500));

formEl.addEventListener('submit', onFormSubmit);

function onFormInput(event) {
  formData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || {};

  formData[event.target.name] = event.target.value;

  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();
  if (!event.target.email.value || !event.target.message.value) {
    alert('Enter all data');
    return;
  }

  event.target.reset();
  console.log(formData);
  localStorage.removeItem(LOCAL_STORAGE_KEY);
}

function populateTextOutput() {
    let saveData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (!saveData) {
      return;
    }

    formData = saveData;
    formEl.email.value = formData.email || '';
    formEl.message.value = formData.message || '';
}



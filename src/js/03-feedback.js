import  throttle  from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
// const inputEl = document.querySelector('.feedback-form input');
// const textareaEl = document.querySelector('.feedback-form textarea');
//STORAGE_KEY = 'feedback-form-state';
const formData = {};


formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onFormInput, 500));

populateTextOutput();

function onFormSubmit(event){
    event.preventDefault();
    console.log('forma');

    event.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
}

function onFormInput(event){

     formData[event.target.name] = event.target.value;
    console.log(formData);

   localStorage.setItem('feedback-form-state', JSON.stringify(formData));
   
}
    function populateTextOutput(){
        const saveData = JSON.parse(localStorage.getItem('feedback-form-state'));
        const email = document.querySelector('.feedback-form input');
        const message = document.querySelector('.feedback-form textarea');
        if (saveData) {
          email.value = saveData.email;
          message.value = saveData.message;
        }
           
     }
    



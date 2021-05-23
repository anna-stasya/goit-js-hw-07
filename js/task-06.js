const InputValidationEl = document.getElementById('validation-input');

//=========Blur=============
function onInputBlur (event){
    if (event.currentTarget.value.length == InputValidationEl.getAttribute('data-length')){
         InputValidationEl.classList.add('valid');
         InputValidationEl.classList.remove('invalid');
        
    } else {
        InputValidationEl.classList.add('invalid');
        InputValidationEl.classList.remove('valid');
    }
    
}
InputValidationEl.addEventListener('blur', onInputBlur);

//=========Input===========
function onInputEl (){
    InputValidationEl.classList.remove('valid', 'invalid');
}
InputValidationEl.addEventListener('input', onInputEl);


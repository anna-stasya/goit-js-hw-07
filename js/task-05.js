const refs = {
    input: document.getElementById('name-input'),
    span: document.getElementById('name-output'),
};

const defoltEl = refs.span.textContent;

function onInputChange(event){

   if (event.currentTarget.value === ''){
        return refs.span.textContent = 'незнакомец';
    }
     refs.span.textContent = event.currentTarget.value;
    //  else { 
    //      refs.span.textContent = event.currentTarget.value;
    //     }
}

refs.input.addEventListener('input', onInputChange)






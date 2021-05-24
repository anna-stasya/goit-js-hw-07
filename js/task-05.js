const refs = {
    input: document.getElementById('name-input'),
    span: document.getElementById('name-output'),
};

 console.log(refs.input.value);

function onInputChange(event){

     refs.span.textContent = event.currentTarget.value.trim() === '' 
     ? 'незнакомец'
     :  event.currentTarget.value;    
      
 }
 refs.input.addEventListener('input', onInputChange);
 






//===================вариант с пробелом и через иф=======================

//   const defoltEl = refs.span.textContent;

 // function onInputChange(event){

//    if (event.currentTarget.value === ''){
//         return refs.span.textContent = defoltEl;    //'незнакомец';
//     }
//      refs.span.textContent = event.currentTarget.value;

// }

// refs.input.addEventListener('input', onInputChange)

//==========================================

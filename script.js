const emailInput = document.getElementById('emailInput');
const countrySelect = document.getElementById('countrySelect');
const zipcodeInput = document.getElementById('zipcodeInput');
const passwordInput = document.getElementById('passwordInput');
const passwordConfirmationInput = document.getElementById('passwordConfirmationInput');

const inputArray = [
  emailInput,
  countrySelect,
  zipcodeInput,
  passwordInput,
  passwordConfirmationInput
];

function addCheckValidity(inputs){
  for(let i=0;i<inputs.length-1;i+=1){
    inputs[i].addEventListener('focusout',(e)=>{
      if(!e.target.checkValidity()){
        e.target.setCustomValidity('Please fill this field out.');
      }
      else{
        e.target.setCustomValidity('');
      }
      e.target.reportValidity();
    })
    inputs[i].addEventListener('input',(e)=>{
      e.target.setCustomValidity('');
    })
  }
}

passwordInput.addEventListener('input',(e)=>{
  validatePasswordConfirmation();
  passwordInput.focus();
});
passwordConfirmationInput.addEventListener('focusout',(e)=>{
  validatePasswordConfirmation();
});
passwordConfirmationInput.addEventListener('input',(e)=>{
  e.target.setCustomValidity('');
})

//for validating password confirmation field
function validatePasswordConfirmation(){
  if(!(passwordInput.validity.valid)||passwordConfirmationInput.value!==passwordInput.value){
    passwordConfirmationInput.setCustomValidity('This must match your password.');
  }
  else{
    passwordConfirmationInput.setCustomValidity('');
  };
  passwordConfirmationInput.reportValidity();
}

function submissionCheck(inputs){
  console.log()
  if(inputs.every((element)=>{return element.validity.valid})){
    alert('All fields validated! High five!');
  }
  else{
    alert('Cannot submit your information, please make sure each field is filled out correctly');
  }
}

function clearInputs(inputs){
  for(let i=0;i<inputs.length;i+=1){
    inputs[i].value = null;
  }
}

function addLogFunc(inputs){
  for(let i=0;i<inputs.length;i+=1){
    inputs[i].addEventListener('click',(e)=>{
      console.log(inputs[i]);
    })
  }
};

function passwordToggle(input){
  if(input.type==='password'){
    input.type = 'text';
  }
  else{
    input.type = 'password';
  }
}

clearInputs(inputArray);
addLogFunc(inputArray);
addCheckValidity(inputArray);
console.log(passwordInput.validity.patternMismatch);

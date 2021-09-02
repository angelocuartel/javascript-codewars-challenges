
window.onload =InputValidation('sdf','sdf');



function InputValidation(input,errorHandler){
    let test ="hello owrld";
   validateSymbols = function () {
        let symbols ='!@#$%^&*()_+-={}[]:;/|"?><,.';
    
        for(s in this.symbols){
            if(input.includes(s)){
                this.invalidInput('should not contain symbols!');
               break;
            }
            else this.validInput();
        }  
    }
    
    validateNumbers = function () {
        let numbers ='1234567890';
        for(n in this.numbers){
            if(this.input.includes(n)){
                this.invalidInput('should not contain numbers');
                break;
            }
            else this.validInput();
        }
    }

    validInput = function(){
        document.getElementById(this.errorHandler).style = 'green';
        document.getElementById(this.errorHandler).innerHTML ='Valid Input';
    }

  invalidInput = function (errorMessage) {
      document.getElementById(this.errorHandler).style = 'red';
      document.getElementById(this.errorHandler).innerHTML =errorMessage;
  }

  validateInput = function () {
      this.validateSymbols();
      this.validateNumbers();
      
  }


  
}



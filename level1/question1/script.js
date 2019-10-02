//Use RegEx to validate form

//Names not empty

function validateForm(){  
    var phone = document.form.phoneNumber.value;  
    var numPat = /\d{8}/; //assuming we are targeting norwegian users.

    var mailTxt = document.form.emailAddress.value; 
    var mailPat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
      
    var firstName = document.form.firstName.value;
    var lastName = document.form.lastName.value;
    var namePattern = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;

    
    if (!namePattern.test(firstName) || !firstName){
        alert('Invalid First Name');
        return false;
    } else if (!namePattern.test(lastName) || !lastName){
        alert('Invalid Last Name');
    } else if (!numPat.test(phone) || !phone){  
      alert('Number is invalid');  
      return false;  
    } else if (!mailPat.test(mailTxt) || !mailTxt){  
        alert('E-mail address is invalid');  
      return false;  
      } else {
          document.getElementById('btnAns').innerHTML = 'Submitted!';
      };
    };

    
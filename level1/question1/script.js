//Use RegEx to validate form

//Names not empty
function validateNames() {
    var x = document.forms["form"]["formName"].value;
    if (x == "") {
      alert("Names must be filled out");
      return false;
    }
  };


  

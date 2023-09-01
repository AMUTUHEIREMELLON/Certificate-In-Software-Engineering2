const Validate = () => {
  let firstName = document.register.firstname;
  let lastName = document.register.lastname;
  let dateOfBirth = document.register.dateofbirth;
  let gender = document.register.gender;
  let country = document.register.country;
  let district = document.register.district;
  let town = document.register.town;
  let zipcode = document.register.zipcode;
  let phoneNumber1 = document.register.phonenumber1;
  let phoneNumber2 = document.register.phonenumber2;
  let email = document.register.email;


  let firstNameError = document.getElementById("firstnameError");
  let lastNameError = document.getElementById("lastnameError");
  let dateOfBirthError = document.getElementById("dateofbirthError");
  let genderError = document.getElementById("genderError");
  let countryError = document.getElementById("countryError");
  let districtError = document.getElementById("districtError");
  let townError = document.getElementById("townError");
  let zipcodeError = document.getElementById("zipcodeError");
  let phoneNumber1Error = document.getElementById("phonenumber1Error");
  let phoneNumber2Error = document.getElementById("phonenumber2Error");
  let emailError = document.getElementById("emailError");
  
  
  
  
  if (firstName.value == "") {
    firstName.style.border = "2px solid red";
    firstNameError.textContent = "please provide your firstname";
    firstNameError.style =
      "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
    firstName.focus();
    return false;
  } else if (firstName.value.length < 2) {
    firstName.style.border = "2px solid red";
    firstNameError.textContent = "First name must be atleast 2 characters long";
    firstNameError.style =
      "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
    firstName.focus();
    return false;
  }
  else if (firstName.value.length > 255) {
    firstName.style.border = "1px solid red";
    firstNameError.textContent = "First name should be less than 255 characters";
    firstNameError.style =
      "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
    firstName.focus();
    return false;
  }

  let firstNameRegex = /^[A-Z][a-zA-Z]*$/
  if (!firstName.value.match(firstNameRegex)) {
    firstName.style.border = "2px solid red";
    firstNameError.textContent = "First name must start with a capital letter and should not have numbers";
    firstNameError.style =
      "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
    firstName.focus();
    return false;
  }
  else {
    firstName.style.border = "2px solid green";
    firstNameError.textContent = "";
    lastName.focus();
  }

  if (lastName.value == "") {
    lastName.style.border = "2px solid red";
    lastNameError.textContent = "please provide your lastname";
    lastNameError.style =
      "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
    lastName.focus();
    return false;
  } else if (lastName.value.length < 2) {
    lastName.style.border = "2px solid red";
    lastNameError.textContent = "Last name should be atleast 2 characters long";
    lastNameError.style =
      "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
    lastName.focus();
    return false;
  } else if (lastName.value.lenth > 255) {
    lastName.style.border = "1px solid red";
    lastNameError.textContent = "Last name should be more than 225 characters";
    lastNameError.style = "color: red; fontsize:11px; font-size:";
  } 
  
  let lastNameRegex = /^[A-Z][a-zA-Z]*$/
  if (!lastName.value.match(lastNameRegex)) {
    lastName.style.border = "2px solid red";
    lastNameError.textContent = "Last name must start with a capital letter and should not have numbers";
    lastNameError.style =
      "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
    lastName.focus();
    return false;
  }
  else {
    lastName.style.border = "2px solid green";
    lastNameError.textContent = "";

    dateOfBirth.focus();
  }
  
  if (dateOfBirth.value.length == "") {
    dateOfBirth.style.border = "2px solid red";
    dateOfBirthError.textContent = "please provide your date of birth";
    dateOfBirthError.style =
      "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
    dateOfBirth.focus();
    return false;
  } 
  else {
    dateOfBirth.style.border = "2px solid green";
    dateOfBirthError.textContent = "";
    gender.focus();
  }

  if (gender.value == "") {
    gender.style.border = "2px solid red";
    genderError.textContent = "please provide your gender";
    genderError.style =
      "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
    gender.focus();
    return false;
  }
  else {
    gender.style.border = "2px solid green";
    genderError.textContent = "";
    country.focus();
  }
  if (country.value == "") {
    country.style.border = "2px solid red";
    countryError.textContent = "please provide your country";
    countryError.style =
      "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
    country.focus();
    return false;
  }
  else if (country.value.length < 2) {
    country.style.border = "2px solid red";
    countryError.textContent = "Country should be atleast 2 characters long";
    countryError.style =
      "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
    country.focus();
    return false;


  }
  else {
    country.style.border = "2px solid green";
    countryError.textContent = "";
    district.focus();
  }
  if (district.value.length == "") {
    district.style.border = "2px solid red";
    districtError.textContent = "please provide your district";
    districtError.style =
      "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
    district.focus();
    return false;
  }
  else if (district.value.length < 2){
    district.style.border = "2px solid red";
    districtError.textContent = "District should be atleast 2 characters long";
    districtError.style =
      "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
    district.focus();
    return false;
  }
  else if (district.value.length > 255){
    district.style.border = "1px solid red";
    districtError.textContent = "District should be less than 255 characters";
    districtError.style = "color: red; fontsize:11px; font-size:";
  }
  else {
    district.style.border = "2px solid green";
    districtError.textContent = "";
    town.focus();
  }
  if (town.value.length =="") {
    town.style.border = "2px solid red";
    townError.textContent = "please provide your town";
    townError.style =
      "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
    town.focus();
    return false;
  }
  else if (town.value.length < 2){
    town.style.border = "2px solid red";
    townError.textContent = "Town should be atleast 2 characters long";
    townError.style =
      "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
    town.focus();
    return false;
  }
  else if (town.value.length > 255){
    town.style.border = "1px solid red";
    townError.textContent = "Town should be less than 255 characters";
    townError.style = "color: red; fontsize:11px; font-size:";
  }
  else {
    town.style.border = "2px solid green";
    townError.textContent = "";
  }
  if (zipcode.value.length == "") {
    zipcode.style.border = "2px solid red";
    zipcodeError.textContent = "please provide your zipcode";
    zipcodeError.style =
      "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
    zipcode.focus();
    return false;
  }
  else if (zipcode.value.length < 2){
    zipcode.style.border = "2px solid red";
    zipcodeError.textContent = "Zipcode should be atleast 2 characters long";
    zipcodeError.style =
      "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
    zipcode.focus();
    return false;
  }
  else if (zipcode.value.length > 255){
    zipcode.style.border = "1px solid red";
    zipcodeError.textContent = "Zipcode should be less than 255 characters";
    zipcodeError.style = "color: red; fontsize:11px; font-size:";
  }
  else {
    zipcode.style.border = "2px solid green";
    zipcodeError.textContent = "";
    phoneNumber1.focus();
  }
  if (phoneNumber1.value.length == "") {
    phoneNumber1.style.border = "2px solid red";
    phoneNumber1Error.textContent = "please provide your phone number";
    phoneNumber1Error.style =
      "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
    phoneNumber1.focus();
    return false;
  }
  else {
    phoneNumber1.style.border = "2px solid green";
    phoneNumber1Error.textContent = "";
    phoneNumber2.focus();
  }
  if (phoneNumber2.value.length == "") {
    phoneNumber2.style.border = "2px solid red";
    phoneNumber2Error.textContent = "please provide your phone number";
    phoneNumber2Error.style =
      "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
    phoneNumber2.focus();
    return false;
  }
  else {
    phoneNumber2.style.border = "2px solid green";
    phoneNumber2Error.textContent = "";
    email.focus();
  }
  if (email.value.length =="") {
    email.style.border = "2px solid red";
    emailError.textContent = "please provide your email";
    emailError.style =
      "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
    email.focus();
    return false;
  }
  else {
    email.style.border = "2px solid green";
    emailError.textContent = "";
  }


}
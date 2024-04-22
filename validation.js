//Name
const firstName = document.querySelector("#fname");
const lastName = document.querySelector("#lname");
const nameErrorMsg = document.querySelector("#name_error");

//Email
const email = document.querySelector("#usr_email");
const emailErrorMsg = document.querySelector("#email_error");

//Phone
const phone = document.querySelector("#usr_phone");
const phoneErrorMsg = document.querySelector("#phone_error");

const gender = document.querySelector('input[name="gender"]:checked');
const genderErrorMsg = document.querySelector("#gender_error");

const dob = document.querySelector("#dob");
const dobErrorMsg = document.querySelector("#dob_error");

firstName.addEventListener("keyup", () => {
  nameErrorMsg.textContent = nameVerification(firstName.value);
});
lastName.addEventListener("keyup", () => {
  nameErrorMsg.textContent = nameVerification(lastName.value);
});
email.addEventListener("keyup", () => {
  emailErrorMsg.textContent = emailVerification(email.value);
});
phone.addEventListener("keyup", () => {
  phoneErrorMsg.textContent = phoneVerification(phone.value);
});
dob.addEventListener("change", () => {
  dobErrorMsg.textContent = dobVerification(dob.value);
});
// form.addEventListener("submit", () =>{
//   genderErrorMsg.textContent=genderVerification(gender.value);
// });

function nameVerification(value) {
  for (let index = 0; index < value.length; index++) {
    if (!isNaN(value[index])) {
      return "Error";
    }
  }
}

function emailVerification(email) {
  if (!/\S+@\S+\.\S+/.test(email)) {
    return "Error";
  }
}
function phoneVerification(phone) {
  if (!/^[0-9]{10}$/.test(phone)) {
    return "Error";
  }
}

function dobVerification(dob) {
  if (!dob) {
    return "Please enter your date of birth";
  }
  return "";
}

// function genderVerification(gender){
//   if(!gender){
//     return "Please select your gender";
//   }
// }

var email = document.getElementById("field1");
var pas = document.getElementById("field2");
var err1 = document.getElementById("err1");
var err2 = document.getElementById("err2");
var regex = /^([A-Z a-z 0-9 \-#_.]+)@([A-Za-z0-9\-]+).([a-z]{2,3}).([a-z]{2,3})?$/;
var ph = document.getElementById("field3") ;
var err3= document.getElementById("err3");
var hd=document.getElementById("head");
var regex1=/^([0-9])$/;
var user =document.getElementById('field4');
var err0=document.getElementById('err0')
var regex2=/^([a-z A-Z])$/;


console.log(hd)
hd.style.color="purple"

function validateuser() {
  if (user.value.trim() == "") {
    err0.innerText = "field cannot be empty";
    user.style.border = "1px solid red";
    return false;
  } else if (user.value.match(regex2)) {
    err0.innerText = "invalid username";
  } else {
    err0.innerText = "";
    user.style.border = "1px solid green";
    return true;
  }
}

function validateemail() {
  if (email.value.trim() == "") {
    err1.innerText = "field cannot be empty";
    email.style.border = "1px solid red";
    return false;
  } else if (!email.value.match(regex)) {
    err1.innerText = "Email is not in correct format";
  } else {
    err1.innerText = "";
    email.style.border = "1px solid green";
    return true;
  }
}

function validatepass() {
  if (pas.value.trim() == "") {
      console.log("hii");
    err2.innerText = "field cannot be empty";
    return false;
  } else if (pas.value.length < 3) {
    pas.style.border = "1px solid red";
    err2.innerText = "password should be greater than 3";
    return false;
  } else {
    err2.innerText = "";
    pas.style.border = "1px solid green";
    return true;
  }
}
function validatephone() {
    if (ph.value.match(regex1)) {
        console.log("hii");
      err3.innerText = "Use digits only";
      return false;
    } else if (ph.value.length >10 ) {
      ph.style.border = "1px solid red";
      err3.innerText = "Phone number should be only 10 digits";
      return false;
    } else {
      err3.innerText = "";
      ph.style.border = "1px solid green";
      return true;
    }
  }
  function verify() {
    if (!validateemail() || !validatepass()) {
      return false;
    } else {
    return true;
    }
  }
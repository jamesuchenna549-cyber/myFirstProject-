/* 04-login.js*/

import {studentInfo} from './03-array.js';

let indexUsername = 
document.querySelector('.index-username');

let indexPassword = 
document.querySelector('.index-password');
let indexDisplay = 
document.querySelector('.index-display');

let loginButton = 
document.querySelector('.login-btn');


loginButton.addEventListener('click', function(){

let loginUsername = indexUsername.value;
let loginPassword = indexPassword.value;

if(loginUsername==='' && loginPassword === '' ){
  indexDisplay.textContent ='Please Fill All The Fields';
  indexDisplay.classList.add("displayrotate");
  return ;
}

  let studentInArray = false;

  

  studentInfo.forEach(function(student){

    if(
      loginUsername === student.email &&
      loginPassword === student.password
    ){
      studentInArray = true;
      
        localStorage.setItem(
    'newStudent',
    JSON.stringify(student)
  );  
      }
   
    
    
  
  });

  if(studentInArray){
    indexDisplay.textContent = 'Login Successful';
    
    indexDisplay.classList.add("displayrotate");
    
    
  
    location.href='user-dashboard.html';
  } else {
    indexDisplay.textContent = 'Incorrect Password or Username';
    indexDisplay.classList.add("displayrotate");
  }

});

























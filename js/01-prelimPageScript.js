
/*01-prelimPageScript file*/
import {studentInfo} from './03-array.js'
import {updateUI} from './02-database.js'


let programOfStudy = document.querySelector(".level");
let courseOfStudy = document.querySelector(".courseOfStudy");
let modeOfStudy = document.querySelector(".modeOfStudy");

let surname = document.querySelector('.surname');
let otherNames= document.querySelector('.otherNames');

let phoneNumber = document.querySelector('.phone-number');
let email = document.querySelector('.email');

let password = document.querySelector('.password');
let retypePassword = document.querySelector('.retypePassword');

let pinRadio = document.querySelector('.pinRadio');
let remitaRadio = document.querySelector('.remitaRadio');

let remitaButton = document.querySelector('.remita-text');
let requestButton = document.querySelector('.text');

let display =
document.getElementById('display');
let rotate =
document.querySelector('.displays');


let studentDetails;




remitaButton.addEventListener('click', function () {
if(remitaButton.textContent!=='Generate Remita Payment Reference (RRR)...' && !remitaRadio.checked){
return ;
}
 
    studentDetails = {
      programOfStudy: programOfStudy.value,
      courseOfStudy: courseOfStudy.value,
      modeOfStudy: modeOfStudy.value,

      surname: surname.value.trim().toLowerCase(),

      otherNames: otherNames.value.trim().toLowerCase(),

      phoneNumber: phoneNumber.value,
      email: email.value,
      password: password.value,
      retypePassword: retypePassword.value
    };
  

   logic();
   
  
});







requestButton.addEventListener('click', function () {

 if(remitaButton.textContent!=='Submit Request' && !pinRadio.checked){
return ;
}

    studentDetails = {
      programOfStudy: programOfStudy.value,
      courseOfStudy: courseOfStudy.value,
      modeOfStudy: modeOfStudy.value,

      surname: surname.value.trim().toLowerCase(),

      otherNames: otherNames.value.trim().toLowerCase(),

      phoneNumber: phoneNumber.value,
      email: email.value,
      password: password.value,
      retypePassword: retypePassword.value
    };

logic();
   
  
});



function logic(){

 if(surname.value===''||email.value===''   ||otherNames.value===''|| phoneNumber.value===''||password.value ===''){
    display.textContent="Please Fill out the Fields";
    rotate.classList.add("displayrotate");
    return;
} 

 if(password.value!==retypePassword.value){
    display.textContent="Incorrect Retyped Password";
    rotate.classList.add("displayrotate");
   return;
} 


  let foundStudent=false;

studentInfo.forEach(function(student,i){
  if(student.surname===studentDetails.surname&& student.password===studentDetails.password&&student.otherNames===studentDetails.otherNames ){
    foundStudent=true ;
  }
  
});
  



 if(foundStudent){


    
    display.textContent="Already Signed up Login Instead";
   rotate.classList.add("displayrotate");
    
  } else{
    studentInfo.push(studentDetails);
    localStorage.setItem('studentInfo',JSON.stringify(studentInfo));
    localStorage.setItem('newStudent',JSON.stringify(studentDetails));
    
    
    /*
    display.textContent="Sign Up Successful ";
    rotate.classList.add("displayrotate");
    
    */
    
    
    setTimeout(function(){
      display.textContent="checking payment details, please wait 🤚....";
    rotate.classList.add("displayrotate");
    },1000);
    
    setTimeout(function(){
      display.textContent="payment successful!!";
    rotate.classList.add("displayrotate");
    location.href = "index.html";
    },8000);
 
    updateUI();
    
    
  }
  
  

};




remitaRadio.addEventListener('change', function(event){
  
  if(remitaRadio.checked){
    remitaButton.classList.add('bright');
    remitaButton.classList.remove('dim');
    
    requestButton.classList.remove('bright');
    requestButton.classList.add('dim');
    
  }
  
  
    
  
});


pinRadio.addEventListener('click', function(event){
  
 if(pinRadio.checked){
    requestButton.classList.add('bright');
    requestButton.classList.remove('dim');
   
   remitaButton.classList.remove('bright');
    remitaButton.classList.add('dim');
  
  
    
  }
});






































/*02.database.js file*/
let newStudent = JSON.parse(localStorage.getItem('newStudent'));
import {studentInfo} from './03-array.js';


export function updateUI(){
let dashboard =
document.querySelector('.application-detail');

if(! dashboard ){
  return;
}



  let html='';
  /*
let newStudent= studentInfo[studentInfo.length-1];
*/
html+=`
 
  <div>${newStudent.programOfStudy}</div>
  <div>${newStudent.courseOfStudy} </div>
  
  <div>${newStudent.modeOfStudy} </div>
  <div>${newStudent.surname}</div> 
  
 <div>${newStudent.otherNames}</div>
 
 <div>${newStudent.phoneNumber}</div>
 <div>${newStudent.email}</div> 
 
 <div>${newStudent.password}</div>
 <div>${newStudent.retypePassword}</div> 
 <div>PAID</div> 

 
    

`

  


dashboard.innerHTML=html;

  
}


updateUI();

function unique(){
let uniqueUser = document.querySelector('.john');
if(!uniqueUser){
  return;
}
uniqueUser.innerHTML=`welcome ${newStudent.surname} !!`;
uniqueUser.classList.add('displayrotate');

}


unique();


let application = document.querySelector('.app-number');




export function userApplicationNum(studentAppNumber){
  
  


/*let studentAppNumber=newStudent.password;*/


 

let applicationNumber='';

let randomNumber =Math.random();


let roundedValue=Math.round(randomNumber * 20);


if(studentAppNumber.length < 3){
  applicationNumber='AP/2026/0802';
} else if(studentAppNumber.length < 5){
  applicationNumber='AP/2026/1008';
} else if(studentAppNumber.length < 8){
  applicationNumber='AP/2026/0149';
} else if(studentAppNumber.length < 10){
  applicationNumber='AP/2026/9067';
} else if(studentAppNumber.length < 15){
  applicationNumber='AP/2026/0986';
} else {
  applicationNumber='AP/2026/0009';
} 

/*application.textContent= `${applicationNumber}`;*/

  return applicationNumber;
}

 if(application){
  application.textContent= userApplicationNum(newStudent.password);
 
}




function dateUpdate(){
  let todayDate= document.querySelector('.app');
if(!todayDate){
  return;
}

let date= new Date()

let day= date.getDate();
let month= date.getMonth()+1;
let year= date.getFullYear();
  
 todayDate.textContent=`${day}/${month}/${year} `
}
 

dateUpdate();














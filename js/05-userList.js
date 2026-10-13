import {studentInfo} from './03-array.js'
import {userApplicationNum} from './02-database.js'


let admissionName = document.querySelector(".listApplication-detail");



let html="";

studentInfo.forEach(function(student){
 html +=`
 

   
 <table>

  <tr>
    <td> ${student.surname}  ${student.otherNames}</td>
    <td> <b>${userApplicationNum(student.password)}
   </b>
   
   </td>
    
  </tr>

</table>

 
    
    
 
 `
 localStorage.setItem(
    'studentInfo',
    JSON.stringify(studentInfo)
  );  
 
})


admissionName.innerHTML=html;
  
  
  
  
  
  
  

  
  
  
  
  
  
  
  
  
  
  
  
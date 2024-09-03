//step1 : add clicked event handelar with the sumit button 
document.getElementById('btn-submit').addEventListener('click',function(){
   // step2: get the emile address inside the emaile inpute filed 
   // always remember to use .value to get text from an input field
   const emailField = document.getElementById('user-emile');
   const email = emailField.value;

   //step 3 : 
   // get password 
   // set id on the html element 
   // get the element 
   // get the value form the element 

   const passwordField =  document.getElementById('user-password');
    const password = passwordField.value;


    console.log(email)
    console.log(passwordField)
//Dnger : donot veryfy email password on the client side 
//step 4 : veryfy emil and password 

if(email === 'sontan@bap.com' && password ==='secret'){
    window.location.href='js/bank.html';
   
}
else{
    alert('invaild user ');
}





})











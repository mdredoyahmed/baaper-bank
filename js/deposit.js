// step 1: add event listener to the btn
document.getElementById('btn-deposit').addEventListener('click',function(){
   //step 2 : get the deposite amount frome the deposite inpute field 
   // for input field use value t the value inside the inpute field 
   const depositField = document.getElementById('deposite-field');
   const depositAmounnt = depositField.value ;

   // step 3 : get the current deposite total
   // for non inpute (element other then inpute text area) use inner text to get the text 
    const depositTotalElement = document.getElementById('deposit-total');
    const depositTtotal = depositTotalElement.innerText;
    depositTotalElement.innerText = depositAmounnt;
   console.log(depositTtotal);


})
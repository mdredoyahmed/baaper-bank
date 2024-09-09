// step 1: add event listener to the deposite btn  btn
document.getElementById('btn-deposit').addEventListener('click',function(){
   //step 2 : get the deposite amount from the deposite input field 
   // for input field use value t the value inside the inpute field 
   const depositField = document.getElementById('deposite-field');
   const newDepositAmounntString = depositField.value ;
   const  newDepositAmounnt = parseFloat(newDepositAmounntString);

// step 7 : Clear the deposite field 
depositField.value = '';


   if(isNaN(newDepositAmounnt)){
      alert('please valid number ')
      return;
   }

   // step 3 : get the current deposite total
   // for non inpute (element other then inpute text area) use inner text to get the text 
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTtotalString = depositTotalElement.innerText;
    const   previousDepositTtotal = parseFloat(previousDepositTtotalString);
      
    // step 4 : add numbers to set the total deposit 
    const currentDepositTotal = previousDepositTtotal + newDepositAmounnt
    depositTotalElement.innerText = currentDepositTotal;
    
    // step : 5
    // get ballence current total 
     const ballenceTotalElement = document.getElementById('Balance-total');
     const previousBallenceTotalString = ballenceTotalElement.innerText;
     const previousBallenceTotal = parseFloat(previousBallenceTotalString);
     // step-6 : calculate currenent total balance 
     const currrentBalanceTotal = previousBallenceTotal + newDepositAmounnt ;
     // set the balance total 

     ballenceTotalElement.innerText =  currrentBalanceTotal;

      
       // step 7 : Clear the deposite field 
       depositField.value = '';



   console.log(depositTtotal);

   

})
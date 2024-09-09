/* 
1. add event handler with the withdraw btn 
2. get the withdraw amount from the withdraw input field 
3. also make sure to convert the inpute into a number by using parse float
4. get previous withdraw total   
5. calculate total withedraw amount 
5-1. set total withdraw amount 
6. get the previous balance total 
7. calculate new balance total 
   1. set the new balance total 
*/
//step1: 
document.getElementById('btn-withdraw').addEventListener('click',function(){
  
    // step 2: 
    const withdrawField = document.getElementById('withdraw-field');
   const  newWithdrawAmounntString = withdrawField.value;
   const newWithdrawAmounnt = parseFloat(newWithdrawAmounntString);

   // step 7 : cler input field 
   withdrawField.value = '';

   if(isNaN(newWithdrawAmounnt)){
      alert('please provaid a vaild number ')
      return;
   }
   
  // step 3 :
   const withdrawTotalElement = document.getElementById('withdraw-total');
   const previousWithdrawTotalString = withdrawTotalElement.innerText;
   const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

   

   // step 5 : 
   const balanceTotalElement = document.getElementById('Balance-total');
   const previousBalanceTotalString = balanceTotalElement.innerText;
   const previousBalanceTotal = parseFloat(previousBalanceTotalString);

   

   if(newWithdrawAmounnt > previousBalanceTotal){
      alert('taka nai ');
      return;
   }

   // step 4 : 
    
   const currenentTotalWithdraw = previousWithdrawTotal + newWithdrawAmounnt ;
   withdrawTotalElement.innerText = currenentTotalWithdraw ;
   
   
      // step 6 : 
      const newBalanceTotal = previousBalanceTotal - newWithdrawAmounnt;
      balanceTotalElement.innerText = newBalanceTotal ;




})



document.getElementById('btn deposit').addEventListener('click', function(){
    /*
    1.get the element by id.
    2.get the value from the element.
    3.convert string value to a number.

    */ 

    const newDepositAmount = getInputFieldValueById('deposit field');

    /*
    1.get previous deposit total by id.

    */ 
   const previousDepositTotal = getTextElementValueById('deposit total');

   // Calculate new deposit total.

   const newDepositTotal = previousDepositTotal + newDepositAmount;

   // Set deposit total.

   setTextElementValueById('deposit total', newDepositTotal);

   // Get previous balance by using the function.

   const previousBalanceTotal = getTextElementValueById('balance total');

   const newBalanceTotal = previousBalanceTotal + newDepositAmount;

   setTextElementValueById('balance total', newBalanceTotal);
});
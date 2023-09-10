/*
1. Add event handler withdraw button.

2.gwt withdraw amount by using getInputFieldValueById function.

3. get previous withdraw amount by using getTextElementValueById function.

4. Calculate new withdraw total and set the value.

4.5 set new withdraw total by using setTextElementValueById function.

5. Get previous balance total by using getTextElementValueById function.

6. Calculate new balance total.

7.set balance total using setTextElementValueById function.

*/ 

document.getElementById('btn withdraw').addEventListener('click', function(){

    const newWithdrawAmount = getInputFieldValueById('withdraw field');


    const previousWithdrawTotal = getTextElementValueById('withdraw total');

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    setTextElementValueById('withdraw total',newWithdrawTotal );

    const previousBalanceTotal = getTextElementValueById('balance total');

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    setTextElementValueById('balance total', newBalanceTotal);


});
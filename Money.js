//Handle Calculate button event
let finalBalanceAmount = 0;
document.getElementById('calculate-button').addEventListener('click' , function(){


    //Display Income
    const incomeInput = document.getElementById('income-input');
    const newIncomeAmountText = incomeInput.value;
    const newIncomeAmount = parseInt(newIncomeAmountText);
    
    


    //Food calculation

    const foodCostInput = document.getElementById('food-input');
    const newFoodCostText = foodCostInput.value;
    const newFoodCost = parseInt(newFoodCostText);
    


    //Rent calculation

    const rentCostInput = document.getElementById('rent-input');
    const newRentCostText = rentCostInput.value;
    const newRentCost = parseInt(newRentCostText);
    


    //Cloth Calculation

    const clothCostInput = document.getElementById('cloth-input');
    const newClothCostText = clothCostInput.value;
    const newClothCost = parseInt(newClothCostText);
    


    //Total Expense Calculation

    const totalExpense = document.getElementById('total-expense');
    const totalExpenseAmountText = totalExpense.value;
    const totalExpenseAmount = parseInt(totalExpenseAmountText)
    const newExpenseAmount = newFoodCost + newRentCost + newClothCost;
    totalExpense.value = newExpenseAmount;


    //Balance Calculation

    const balanceTotal = document.getElementById('balance');
    const previousBalanceTotal =  parseInt(balanceTotal.value);
    const newBalanceTotalAmount =  newIncomeAmount - newExpenseAmount;
    balanceTotal.value = newBalanceTotalAmount;
    finalBalanceAmount = previousBalanceTotal + newBalanceTotalAmount;
     

    
}); 

document.getElementById('save-button').addEventListener('click' , function(){

    //Get Save %

    const percentage = document.getElementById('save-input');
    const percentageText = percentage.value;
    const newPercentage = parseInt(percentageText);
    percentage.value = newPercentage;
    
    // Calculate Percentage
 

    const savingTotal = document.getElementById('save-amount');
    const previousSaving = parseInt(savingTotal.value);
    // const newSaving = previousSaving + newSaving;
    const newSavingAmount = (newPercentage/100) * finalBalanceAmount;
    const newSavingTotal = previousSaving + newSavingAmount;
    savingTotal.value = newSavingTotal;


        
    });
    



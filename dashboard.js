function calculateDashboard() {

  const data = getData();

  let incomeTotal = 0;
  let expenseTotal = 0;

  data.income.forEach(item => {
    incomeTotal += Number(item.amount || 0);
  });

  data.expenses.forEach(item => {
    expenseTotal += Number(item.amount || 0);
  });

  let profit = incomeTotal - expenseTotal;

  document.getElementById("todayIncome").innerText =
    "₹" + incomeTotal;

  document.getElementById("todayExpense").innerText =
    "₹" + expenseTotal;

  document.getElementById("todayProfit").innerText =
    "₹" + profit;
}

calculateDashboard();

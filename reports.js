const data = getData();

let totalIncome = 0;
let totalExpense = 0;
let accountTotal = 0;
let idTotal = 0;
let cashTotal = 0;
let upiTotal = 0;
let udhaarTotal = 0;

data.income.forEach(item => {
  totalIncome += Number(item.amount || 0);
});

data.expenses.forEach(item => {
  totalExpense += Number(item.amount || 0);
});

data.accounts.forEach(item => {
  accountTotal += Number(item.balance || 0);
});

data.ids.forEach(item => {
  idTotal += Number(item.balance || 0);
});

data.upi.forEach(item => {
  upiTotal += Number(item.amount || 0);
});

data.udhaar.forEach(item => {
  if (item.status === "Pending") {
    udhaarTotal += Number(item.amount || 0);
  }
});

cashTotal =
  Number(data.cash.shop || 0) +
  Number(data.cash.galla || 0) +
  Number(data.cash.coins || 0) +
  Number(data.cash.home || 0);

const profit =
  totalIncome - totalExpense;

const worth =
  accountTotal +
  idTotal +
  cashTotal +
  upiTotal +
  udhaarTotal;

document.getElementById(
  "todayIncomeReport"
).innerText = "₹" + totalIncome;

document.getElementById(
  "todayExpenseReport"
).innerText = "₹" + totalExpense;

document.getElementById(
  "weeklyIncome"
).innerText = "₹" + totalIncome;

document.getElementById(
  "weeklyExpense"
).innerText = "₹" + totalExpense;

document.getElementById(
  "monthlyIncome"
).innerText = "₹" + totalIncome;

document.getElementById(
  "monthlyExpense"
).innerText = "₹" + totalExpense;

document.getElementById(
  "overallProfit"
).innerText = "₹" + profit;

document.getElementById(
  "businessWorthReport"
).innerText = "₹" + worth;

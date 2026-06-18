const data = getData();

let todayIncome = 0;
let todayExpense = 0;

let weeklyIncome = 0;
let weeklyExpense = 0;

let monthlyIncome = 0;
let monthlyExpense = 0;

let totalIncome = 0;
let totalExpense = 0;

let accountTotal = 0;
let idTotal = 0;
let cashTotal = 0;
let upiTotal = 0;
let udhaarTotal = 0;

const today = new Date();

const todayString = today.toDateString();

const weekAgo = new Date();
weekAgo.setDate(today.getDate() - 7);

const currentMonth = today.getMonth();
const currentYear = today.getFullYear();


// ---------- Income ----------
data.income.forEach(item => {

  const amount =
    Number(item.amount || 0);

  totalIncome += amount;

  const entryDate =
    new Date(item.date);

  // Today
  if (
    entryDate.toDateString() ===
    todayString
  ) {
    todayIncome += amount;
  }

  // Last 7 Days
  if (
    entryDate >= weekAgo
  ) {
    weeklyIncome += amount;
  }

  // Current Month
  if (
    entryDate.getMonth() ===
      currentMonth &&
    entryDate.getFullYear() ===
      currentYear
  ) {
    monthlyIncome += amount;
  }

});


// ---------- Expense ----------
data.expenses.forEach(item => {

  const amount =
    Number(item.amount || 0);

  totalExpense += amount;

  const entryDate =
    new Date(item.date);

  // Today
  if (
    entryDate.toDateString() ===
    todayString
  ) {
    todayExpense += amount;
  }

  // Last 7 Days
  if (
    entryDate >= weekAgo
  ) {
    weeklyExpense += amount;
  }

  // Current Month
  if (
    entryDate.getMonth() ===
      currentMonth &&
    entryDate.getFullYear() ===
      currentYear
  ) {
    monthlyExpense += amount;
  }

});


// ---------- Accounts ----------
data.accounts.forEach(item => {
  accountTotal +=
    Number(item.balance || 0);
});


// ---------- IDs ----------
data.ids.forEach(item => {
  idTotal +=
    Number(item.balance || 0);
});


// ---------- Cash ----------
cashTotal =
  Number(data.cash.shop || 0) +
  Number(data.cash.galla || 0) +
  Number(data.cash.coins || 0) +
  Number(data.cash.home || 0);


// ---------- UPI ----------
data.upi.forEach(item => {
  upiTotal +=
    Number(item.amount || 0);
});


// ---------- Udhaar ----------
data.udhaar.forEach(item => {

  if (
    item.status === "Pending"
  ) {
    udhaarTotal +=
      Number(item.amount || 0);
  }

});


// ---------- Profit ----------
const overallProfit =
  totalIncome -
  totalExpense;


// ---------- Business Worth ----------
const businessWorth =
  accountTotal +
  idTotal +
  cashTotal +
  upiTotal +
  udhaarTotal;


// ---------- Update Screen ----------
document.getElementById(
  "todayIncomeReport"
).innerText =
"₹" + todayIncome;

document.getElementById(
  "todayExpenseReport"
).innerText =
"₹" + todayExpense;

document.getElementById(
  "weeklyIncome"
).innerText =
"₹" + weeklyIncome;

document.getElementById(
  "weeklyExpense"
).innerText =
"₹" + weeklyExpense;

document.getElementById(
  "monthlyIncome"
).innerText =
"₹" + monthlyIncome;

document.getElementById(
  "monthlyExpense"
).innerText =
"₹" + monthlyExpense;

document.getElementById(
  "overallProfit"
).innerText =
"₹" + overallProfit;

document.getElementById(
  "businessWorthReport"
).innerText =
"₹" + businessWorth;

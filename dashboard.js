// Balaji Business Manager Dashboard

function calculateDashboard() {

  const data = getData();

  // Income Total
  let incomeTotal = data.income.reduce(
    (sum, item) => sum + Number(item.amount || 0),
    0
  );

  // Expense Total
  let expenseTotal = data.expenses.reduce(
    (sum, item) => sum + Number(item.amount || 0),
    0
  );

  // Profit
  let profit = incomeTotal - expenseTotal;

  // Accounts Total
  let accountTotal = data.accounts.reduce(
    (sum, item) => sum + Number(item.balance || 0),
    0
  );

  // IDs Total
  let idTotal = data.ids.reduce(
    (sum, item) => sum + Number(item.balance || 0),
    0
  );

  // Cash Total
  let cashTotal =
    Number(data.cash.shop || 0) +
    Number(data.cash.galla || 0) +
    Number(data.cash.coins || 0) +
    Number(data.cash.home || 0);

  // UPI Total
  let upiTotal = data.upi.reduce(
    (sum, item) => sum + Number(item.amount || 0),
    0
  );

  // Udhaar Total
  let udhaarTotal = data.udhaar.reduce(
    (sum, item) => sum + Number(item.amount || 0),
    0
  );

  // Business Worth
  let businessWorth =
    accountTotal +
    idTotal +
    cashTotal +
    upiTotal +
    udhaarTotal;

  // Update Dashboard
  document.getElementById("todayIncome").innerText =
    "₹" + incomeTotal;

  document.getElementById("todayExpense").innerText =
    "₹" + expenseTotal;

  document.getElementById("todayProfit").innerText =
    "₹" + profit;

  document.getElementById("totalAccounts").innerText =
    "₹" + accountTotal;

  document.getElementById("totalIds").innerText =
    "₹" + idTotal;

  document.getElementById("totalCash").innerText =
    "₹" + cashTotal;

  document.getElementById("totalUpi").innerText =
    "₹" + upiTotal;

  document.getElementById("totalUdhaar").innerText =
    "₹" + udhaarTotal;

  document.getElementById("businessWorth").innerText =
    "₹" + businessWorth;
}

// Run Dashboard
calculateDashboard();

function calculateDashboard() {
  const data = getData();

  // Income
  let incomeTotal = data.income.reduce(
    (sum, item) => sum + Number(item.amount || 0),
    0
  );

  // Expense
  let expenseTotal = data.expenses.reduce(
    (sum, item) => sum + Number(item.amount || 0),
    0
  );

  // Accounts
  let accountTotal = data.accounts.reduce(
    (sum, item) => sum + Number(item.balance || 0),
    0
  );

  // IDs
  let idTotal = data.ids.reduce(
    (sum, item) => sum + Number(item.balance || 0),
    0
  );

  // Cash
  let cashTotal =
    Number(data.cash.shop || 0) +
    Number(data.cash.galla || 0) +
    Number(data.cash.coins || 0) +
    Number(data.cash.home || 0);

  // UPI
  let upiTotal = data.upi.reduce(
    (sum, item) => sum + Number(item.amount || 0),
    0
  );

  // Udhaar
  let udhaarTotal = data.udhaar.reduce(
    (sum, item) =>
      item.status === "Pending"
        ? sum + Number(item.amount || 0)
        : sum,
    0
  );

  // Profit
  let profit = incomeTotal - expenseTotal;

  // Worth
  let worth =
    accountTotal +
    idTotal +
    cashTotal +
    upiTotal +
    udhaarTotal;

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
    "₹" + worth;
}

calculateDashboard();

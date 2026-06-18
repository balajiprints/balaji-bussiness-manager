function saveExpense() {

  const category =
    document.getElementById("expenseCategory").value;

  const amount =
    Number(
      document.getElementById("expenseAmount").value
    );

  if (!amount || amount <= 0) {
    alert("Enter valid amount");
    return;
  }

  const data = getData();

  data.expenses.push({
    category,
    amount,
    date: new Date().toISOString()
  });

  saveData(data);

  alert("Expense Saved");

  document.getElementById(
    "expenseAmount"
  ).value = "";
}

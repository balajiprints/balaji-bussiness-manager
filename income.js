function saveIncome() {

  const category =
    document.getElementById("incomeCategory").value;

  const amount =
    Number(document.getElementById("incomeAmount").value);

  if (!amount || amount <= 0) {
    alert("Enter valid amount");
    return;
  }

  const data = getData();

  data.income.push({
    category,
    amount,
    date: new Date().toISOString()
  });

  saveData(data);

  alert("Income Saved");

  window.location.href = "dashboard.html";
}

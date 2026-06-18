function loadHistory() {

  const data = getData();

  let incomeHtml = "";
  let expenseHtml = "";

  data.income.forEach((item, index) => {

    const date =
      new Date(item.date)
      .toLocaleDateString();

    incomeHtml += `
      <div style="
      padding:10px;
      border-bottom:1px solid #ddd;
      ">

      ${date}
      <br>

      ${item.category}
      <br>

      ₹${item.amount}

      <br><br>

      <button
      onclick="editIncome(${index})">
      Edit
      </button>

      <button
      onclick="deleteIncome(${index})">
      Delete
      </button>

      </div>
    `;
  });

  data.expenses.forEach((item, index) => {

    const date =
      new Date(item.date)
      .toLocaleDateString();

    expenseHtml += `
      <div style="
      padding:10px;
      border-bottom:1px solid #ddd;
      ">

      ${date}
      <br>

      ${item.category}
      <br>

      ₹${item.amount}

      <br><br>

      <button
      onclick="editExpense(${index})">
      Edit
      </button>

      <button
      onclick="deleteExpense(${index})">
      Delete
      </button>

      </div>
    `;
  });

  document.getElementById(
    "incomeHistory"
  ).innerHTML = incomeHtml;

  document.getElementById(
    "expenseHistory"
  ).innerHTML = expenseHtml;
}

function deleteIncome(index) {

  const data = getData();

  if (
    confirm("Delete Income?")
  ) {
    data.income.splice(
      index,
      1
    );

    saveData(data);

    loadHistory();
  }
}

function deleteExpense(index) {

  const data = getData();

  if (
    confirm("Delete Expense?")
  ) {
    data.expenses.splice(
      index,
      1
    );

    saveData(data);

    loadHistory();
  }
}

function editIncome(index) {

  const data = getData();

  const amount =
    prompt(
      "New Amount",
      data.income[index].amount
    );

  if (amount !== null) {

    data.income[index].amount =
      Number(amount);

    saveData(data);

    loadHistory();
  }
}

function editExpense(index) {

  const data = getData();

  const amount =
    prompt(
      "New Amount",
      data.expenses[index].amount
    );

  if (amount !== null) {

    data.expenses[index].amount =
      Number(amount);

    saveData(data);

    loadHistory();
  }
}

loadHistory();

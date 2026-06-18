function loadAccounts() {

  const data = getData();

  let html = "";
  let total = 0;

  data.accounts.forEach((a, index) => {

    total += Number(a.balance);

    html += `
      <div style="
        padding:10px;
        border-bottom:1px solid #ddd;
      ">
        <b>${a.name}</b>
        <br>
        ₹${a.balance}

        <br><br>

        <button
          onclick="deleteAccount(${index})">
          Delete
        </button>

      </div>
    `;
  });

  document.getElementById(
    "accountList"
  ).innerHTML = html;

  document.getElementById(
    "totalBalance"
  ).innerText = "₹" + total;
}

function saveAccount() {

  const name =
    document.getElementById(
      "accountName"
    ).value;

  const balance =
    Number(
      document.getElementById(
        "accountBalance"
      ).value
    );

  if (!name || balance < 0) {
    alert("Enter Details");
    return;
  }

  const data = getData();

  data.accounts.push({
    name,
    balance
  });

  saveData(data);

  document.getElementById(
    "accountName"
  ).value = "";

  document.getElementById(
    "accountBalance"
  ).value = "";

  loadAccounts();
}

function deleteAccount(index) {

  const data = getData();

  data.accounts.splice(index, 1);

  saveData(data);

  loadAccounts();
}

loadAccounts();

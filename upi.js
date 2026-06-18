function loadUpi() {

  const data = getData();

  let html = "";
  let total = 0;

  data.upi.forEach((item, index) => {

    total += Number(item.amount);

    html += `
      <div style="
        padding:10px;
        border-bottom:1px solid #ddd;
      ">
        <b>${item.name}</b>
        <br>
        ₹${item.amount}

        <br><br>

        <button
          onclick="moveToAccount(${index})">
          Move To Account
        </button>

        <button
          onclick="deleteUpi(${index})">
          Delete
        </button>

      </div>
    `;
  });

  document.getElementById(
    "upiList"
  ).innerHTML = html;

  document.getElementById(
    "upiTotal"
  ).innerText = "₹" + total;
}

function saveUpi() {

  const name =
    document.getElementById(
      "upiName"
    ).value;

  const amount =
    Number(
      document.getElementById(
        "upiAmount"
      ).value
    );

  if (!name || amount <= 0) {
    alert("Enter Details");
    return;
  }

  const data = getData();

  data.upi.push({
    name,
    amount,
    date: new Date().toISOString()
  });

  saveData(data);

  document.getElementById(
    "upiName"
  ).value = "";

  document.getElementById(
    "upiAmount"
  ).value = "";

  loadUpi();
}

function moveToAccount(index) {

  const data = getData();

  if (data.accounts.length === 0) {
    alert("First Add Account");
    return;
  }

  data.accounts[0].balance +=
    Number(
      data.upi[index].amount
    );

  data.upi.splice(index, 1);

  saveData(data);

  loadUpi();

  alert(
    "Amount Added To First Account"
  );
}

function deleteUpi(index) {

  const data = getData();

  data.upi.splice(index, 1);

  saveData(data);

  loadUpi();
}

loadUpi();

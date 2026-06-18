function loadUdhaar() {

  const data = getData();

  let html = "";
  let total = 0;

  data.udhaar.forEach((item, index) => {

    if (item.status === "Pending") {
      total += Number(item.amount);
    }

    html += `
      <div style="
      padding:10px;
      border-bottom:1px solid #ddd;
      ">

      <b>${item.name}</b>
      <br>

      ${item.reason}

      <br>

      ₹${item.amount}

      <br>

      ${item.type === "receive"
      ? "Mujhe Lena Hai"
      : "Mujhe Dena Hai"}

      <br>

      Status :
      ${item.status}

      <br><br>

      <button
      onclick="markPaid(${index})">
      Mark Paid
      </button>

      <button
      onclick="deleteUdhaar(${index})">
      Delete
      </button>

      </div>
    `;
  });

  document.getElementById(
    "udhaarList"
  ).innerHTML = html;

  document.getElementById(
    "totalUdhaar"
  ).innerText =
  "₹" + total;
}

function saveUdhaar() {

  const name =
  document.getElementById(
    "udhaarName"
  ).value;

  const reason =
  document.getElementById(
    "udhaarReason"
  ).value;

  const amount =
  Number(
    document.getElementById(
      "udhaarAmount"
    ).value
  );

  const type =
  document.getElementById(
    "udhaarType"
  ).value;

  if (
    !name ||
    !reason ||
    amount <= 0
  ) {
    alert("Enter Details");
    return;
  }

  const data = getData();

  data.udhaar.push({
    name,
    reason,
    amount,
    type,
    status: "Pending",
    date: new Date().toISOString()
  });

  saveData(data);

  document.getElementById(
    "udhaarName"
  ).value = "";

  document.getElementById(
    "udhaarReason"
  ).value = "";

  document.getElementById(
    "udhaarAmount"
  ).value = "";

  loadUdhaar();
}

function markPaid(index) {

  const data = getData();

  data.udhaar[index].status =
  "Paid";

  saveData(data);

  loadUdhaar();
}

function deleteUdhaar(index) {

  const data = getData();

  data.udhaar.splice(index, 1);

  saveData(data);

  loadUdhaar();
}

loadUdhaar();

function loadIds() {

  const data = getData();

  let html = "";
  let total = 0;

  data.ids.forEach((item, index) => {

    total += Number(item.balance);

    html += `
      <div style="
      padding:10px;
      border-bottom:1px solid #ddd;
      ">

      <b>${item.name}</b>
      <br>

      ${item.type}

      <br>

      ₹${item.balance}

      <br><br>

      <button
      onclick="deleteId(${index})">
      Delete
      </button>

      </div>
    `;
  });

  document.getElementById(
    "idList"
  ).innerHTML = html;

  document.getElementById(
    "totalIdsBalance"
  ).innerText =
  "₹" + total;
}

function saveId() {

  const name =
  document.getElementById(
    "idName"
  ).value;

  const type =
  document.getElementById(
    "idType"
  ).value;

  const balance =
  Number(
    document.getElementById(
      "idBalance"
    ).value
  );

  if (!name || balance < 0) {
    alert("Enter Details");
    return;
  }

  const data = getData();

  data.ids.push({
    name,
    type,
    balance
  });

  saveData(data);

  document.getElementById(
    "idName"
  ).value = "";

  document.getElementById(
    "idBalance"
  ).value = "";

  loadIds();
}

function deleteId(index) {

  const data = getData();

  data.ids.splice(index, 1);

  saveData(data);

  loadIds();
}

loadIds();

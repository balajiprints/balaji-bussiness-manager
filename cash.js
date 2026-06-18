function loadCash() {

  const data = getData();

  document.getElementById("shopCash").value =
    data.cash.shop || 0;

  document.getElementById("gallaCash").value =
    data.cash.galla || 0;

  document.getElementById("coinsCash").value =
    data.cash.coins || 0;

  document.getElementById("homeCash").value =
    data.cash.home || 0;

  calculateTotal();
}

function calculateTotal() {

  const shop =
    Number(document.getElementById("shopCash").value) || 0;

  const galla =
    Number(document.getElementById("gallaCash").value) || 0;

  const coins =
    Number(document.getElementById("coinsCash").value) || 0;

  const home =
    Number(document.getElementById("homeCash").value) || 0;

  const total =
    shop + galla + coins + home;

  document.getElementById(
    "totalCashDisplay"
  ).innerText = "₹" + total;
}

function saveCash() {

  const data = getData();

  data.cash.shop =
    Number(document.getElementById("shopCash").value) || 0;

  data.cash.galla =
    Number(document.getElementById("gallaCash").value) || 0;

  data.cash.coins =
    Number(document.getElementById("coinsCash").value) || 0;

  data.cash.home =
    Number(document.getElementById("homeCash").value) || 0;

  saveData(data);

  calculateTotal();

  alert("Cash Saved Successfully");
}

document
.getElementById("shopCash")
.addEventListener("input", calculateTotal);

document
.getElementById("gallaCash")
.addEventListener("input", calculateTotal);

document
.getElementById("coinsCash")
.addEventListener("input", calculateTotal);

document
.getElementById("homeCash")
.addEventListener("input", calculateTotal);

loadCash();

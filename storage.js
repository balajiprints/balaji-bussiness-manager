// Balaji Business Manager Storage System

// First Time Setup
if (!localStorage.getItem("bbm_pin")) {
  localStorage.setItem("bbm_pin", "1234");
}

// Create Main Data Object
if (!localStorage.getItem("bbm_data")) {
  const appData = {
    income: [],
    expenses: [],
    accounts: [],
    ids: [],
    cash: {
      shop: 0,
      galla: 0,
      coins: 0,
      home: 0
    },
    upi: [],
    udhaar: []
  };

  localStorage.setItem(
    "bbm_data",
    JSON.stringify(appData)
  );
}

// Helper Functions
function getData() {
  return JSON.parse(
    localStorage.getItem("bbm_data")
  );
}

function saveData(data) {
  localStorage.setItem(
    "bbm_data",
    JSON.stringify(data)
  );
}

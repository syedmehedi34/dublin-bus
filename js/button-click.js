// h call A1    .
let isClickedA1 = false; // Track if the button has been clicked
document.getElementById("btn-a1").addEventListener("click", function () {
  if (!isClickedA1) {
    getButtonByID("btn-a1");

    // Update the total value
    const newTotalMoney = sumTotalMoney("btn-a1");
    document.getElementById("total-price").innerText = newTotalMoney;

    // count down

    // Set the flag to true
    isClickedA1 = true;
  } else {
    alert("You Have selected this seat already");
  }
});

// h call A2    .
let isClickedA2 = false; // Track if the button has been clicked
document.getElementById("btn-a2").addEventListener("click", function () {
  if (!isClickedA2) {
    getButtonByID("btn-a2");

    // Update the total value
    const newTotalMoney = sumTotalMoney("btn-a2");
    document.getElementById("total-price").innerText = newTotalMoney;

    // Set the flag to true
    isClickedA2 = true;
  } else {
    alert("You Have selected this seat already");
  }
});

// h call A3     .
let isClickedA3 = false; // Track if the button has been clicked
document.getElementById("btn-a3").addEventListener("click", function () {
  if (!isClickedA3) {
    getButtonByID("btn-a3");

    // Update the total value
    const newTotalMoney = sumTotalMoney("btn-a3");
    document.getElementById("total-price").innerText = newTotalMoney;

    // Set the flag to true
    isClickedA3 = true;
  } else {
    alert("You Have selected this seat already");
  }
});

// h call A4     .
let isClickedA4 = false; // Track if the button has been clicked
document.getElementById("btn-a4").addEventListener("click", function () {
  if (!isClickedA4) {
    getButtonByID("btn-a4");

    // Update the total value
    const newTotalMoney = sumTotalMoney("btn-a4");
    document.getElementById("total-price").innerText = newTotalMoney;

    // Set the flag to true
    isClickedA4 = true;
  } else {
    alert("You Have selected this seat already");
  }
});

// ? hey

//   document
//     .getElementById("phone-number")
//     .addEventListener("input", function (event) {
//       event.preventDefault();

//       const phoneNumber = document.getElementById("phone-number").value;
//       console.log(phoneNumber);

//       if (phoneNumber.length === 11) {
//         document.getElementById("submit-btn").removeAttribute("disabled");
//       } else {
//         document.getElementById("submit-btn").setAttribute("disabled", "true");
//       }
//     });

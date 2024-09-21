// * updating the selected seats     .
let functionRunCount = 0;
function getButtonByID(id) {
  document.getElementById("no-seat-text").setAttribute("hidden", true);
  const clickedID = document.getElementById(id).innerText;

  const newEntrySeat = document.createElement("div");
  newEntrySeat.innerHTML = `
        <div class="flex justify-between text-[#03071299]">
                <h3>${clickedID}</h3>
                <p>Economy</p>
                <p>550</p>
        </div>
  `;
  document.getElementById("update-clicked-seat").appendChild(newEntrySeat);

  // counter
  functionRunCount++;
  document.getElementById("seat-selected-count").innerText = functionRunCount;

  //   counter - 2
  let availableSeat = Number(
    document.getElementById("seat-selected-count-2").innerText
  );
  availableSeat = 40 - functionRunCount;
  document.getElementById("seat-selected-count-2").innerText = availableSeat;

  // if the function is run 4 times
  if (functionRunCount === 4) {
    // document.getElementById("ok-message").innerText = "OK";
    document.getElementById("disabled-field").removeAttribute("disabled");
    document.getElementById("coupon-btn").removeAttribute("disabled");
  }

  // button click ,, and hide all the coupon field
  document.getElementById("coupon-btn").addEventListener("click", function () {
    document.getElementById("coupon-section").classList.add("hidden");
    document.getElementById("hidden-portion").classList.remove("hidden");
  });

  // button hidden, --> amount calculation [ coupon check ]
  document
    .getElementById("coupon-btn")
    .addEventListener("click", function (event) {
      event.preventDefault();
      const totalPrice = Number(
        document.getElementById("total-price").innerText
      );
      const couponCode = document.getElementById("disabled-field").value;
      //   console.log(couponCode);
      let discount = 0;
      if (couponCode === "NEW15") {
        discount = totalPrice * 0.15;
      } else if (couponCode === "couple20") {
        discount = totalPrice * 0.2;
      }
      document.getElementById("coupon-discount-money").innerText = discount;
      document.getElementById("grand-total").innerText = totalPrice - discount;
    });

  // check number length
  document
    .getElementById("phone-number")
    .addEventListener("input", function () {
      const phoneNumber = document.getElementById("phone-number").value;

      if (phoneNumber.length === 11) {
        document.getElementById("submit-btn").removeAttribute("disabled");
      } else {
        document.getElementById("submit-btn").setAttribute("disabled", "true");
      }
    });
}

// * sum of the total money     .

function sumTotalMoney(id) {
  const clickedID = document.getElementById(id);

  let totalPrice = Number(document.getElementById("total-price").innerText);

  //   console.log(totalPrice);
  totalPrice += 550;
  return totalPrice;
}

// * phone number check   .

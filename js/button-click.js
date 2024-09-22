//* get by id     .

const totalPriceElement = document.getElementById("total-price");
const grandTotalElement = document.getElementById("grand-total");
const selectedSeatCounter = document.getElementById("seat-selected-count");
const availableSeatCount = document.getElementById("seat-selected-count-2");
const noSeatBooked = document.getElementById("no-seat-text");
const selectedUpdate = document.getElementById("update-clicked-seat");
const disabledCouponField = document.getElementById("disabled-field");
const couponButton = document.getElementById("coupon-btn");
const couponSection = document.getElementById("coupon-section");
const hiddenPortion = document.getElementById("hidden-portion");
const discountAmount = document.getElementById("coupon-discount-money");
const phoneNumber = document.getElementById("phone-number");
const submitButton = document.getElementById("submit-btn");

// * functions

let checkedButton = [];
let priceSum = 0;

function clickedButton(event) {
  const clicked = event.innerText;

  // * if condition
  if (checkedButton.includes(clicked)) {
    // alert("Already Selected");
    event.classList.remove("bg-teal-800");
    event.classList.remove("text-white");

    //
    const index = checkedButton.indexOf(clicked);
    if (index !== -1) {
      checkedButton.splice(index, 1); // Remove the item at the found index
    }

    // h delete the div
    const removeDiv = document.getElementById(clicked);
    removeDiv.remove();
  }

  // * else condition
  else {
    if (checkedButton.length < 4) {
      event.classList.add("bg-teal-800");
      event.classList.add("text-white");

      //! update the checked button array
      checkedButton.push(clicked);

      // update the total price
      priceSum += 550;
      totalPriceElement.innerText = priceSum.toFixed(2);
      grandTotalElement.innerText = priceSum.toFixed(2);

      /*
      // no seat booked hide
      console.log(checkedButton.length);
      if (checkedButton.length > 0) {
        noSeatBooked.classList.add("hidden");
      }
        */

      // update the selected seats
      const newElement = document.createElement("div");
      newElement.innerHTML = `
              <div id="${clicked}" class="flex justify-between text-[#03071299]">
                <h3>${clicked}</h3>
                <p>Economy</p>
                <p>550</p>
              </div>
      `;
      selectedUpdate.appendChild(newElement);

      // active the coupon portion
      if (checkedButton.length >= 4) {
        disabledCouponField.removeAttribute("disabled");
        couponButton.removeAttribute("disabled");

        // ? coupon functions .

        document
          .getElementById("coupon-btn")
          .addEventListener("click", function () {
            //
            const couponCode = disabledCouponField.value;
            let discount = 0;
            if (couponCode === "NEW15") {
              discount = Number(totalPriceElement.innerText) * 0.15;
            } else if (couponCode === "couple20") {
              discount = Number(totalPriceElement.innerText) * 0.2;
            } else {
              alert("Invalid Coupon");
            }

            couponSection.classList.add("hidden", true);
            hiddenPortion.classList.remove("hidden");
            // calculate discount amount and show it
            discountAmount.innerText = discount.toFixed(2);
            const grandTotal =
              Number(totalPriceElement.innerText).toFixed(2) -
              discount.toFixed(2);
            grandTotalElement.innerText = grandTotal.toFixed(2);
          });
      }

      // phone number check
      document
        .getElementById("phone-number")
        .addEventListener("input", function () {
          //
          // const inputValue = e.target.value;

          if (phoneNumber.value.length == 11) {
            submitButton.removeAttribute("disabled");
          } else {
            submitButton.setAttribute("disabled", true);
          }
        });
    } else {
      alert("already picked 4 seat ");
    }
  }

  // h count section
  //count selected seat
  let seatCount = checkedButton.length;
  selectedSeatCounter.innerText = seatCount;
  // count available seat
  let availSeat = 40 - checkedButton.length;
  availableSeatCount.innerText = availSeat;

  //
  // no seat booked hide
  if (checkedButton.length > 0) {
    noSeatBooked.classList.add("hidden");
  } else {
    noSeatBooked.classList.remove("hidden");
  }
}

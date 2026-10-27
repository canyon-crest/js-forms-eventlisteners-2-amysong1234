// ============================================
//  Unit 8.7 – Forms & Event Listeners
// ============================================
//  Complete each section below by following
//  the STEP comments.
//
//  IMPORTANT: Use addEventListener() to wire your
//  buttons — do NOT add onclick in the HTML.
// ============================================


// ============================================
//  WARM-UP: Shout It!
// ============================================
// When the user types text and clicks "Shout",
// display the text in ALL CAPS with "!" at the end.

// STEP 1: Get the "Shout" button by its ID ("btnShout")
//         using document.getElementById()
let btn = document.getElementById("btnShout");
btn.addEventListener("click", function() {
    let shoutInput = document.getElementById("shoutInput");
    let outShout = document.getElementById("outShout");
    
    outShout.innerHTML = shoutInput.value.toUpperCase();
});

// STEP 2: Add a click event listener to the button.
//         Inside the listener function:
//         a) Get the text from the input with ID "shoutInput"
//            using .value
//         b) Convert the text to uppercase using .toUpperCase()
//         c) Add "!" to the end
//         d) Display the result in the element with ID "outShout"
//            using .innerHTML
//
//         Example: "hello" → "HELLO!"


// ============================================
//  MAIN: Pizza Builder
// ============================================
// Calculate the total price of a pizza based on:
//   - Size (radio buttons): Small $7.50, Medium $10.00,
//     Large $12.50, XL $15.00
//   - Toppings (checkboxes): $0.50 each
//   - Service (dropdown): Dine In $0, Take Out $1.50,
//     Delivery $3.00
// ============================================
// MAIN: Pizza Builder
// ============================================
// Calculate the total price of a pizza based on:
// - Size (radio buttons): Small $7.50, Medium $10.00, Large $12.50, XL $15.00
// - Toppings (checkboxes): $0.50 each
// - Service (dropdown): Dine In $0, Take Out $1.50, Delivery $3.00

document.getElementById("btnCalc").addEventListener("click", function() {
    
    let sizePrice = 0;
    const sizes = document.getElementsByName("rg");
    for (let i = 0; i < sizes.length; i++) {
        if (sizes[i].checked) {
            sizePrice = parseFloat(sizes[i].value);
        }
    }

    let toppingCount = 0;
    const toppings = document.getElementsByName("cb");
    for (let i = 0; i < toppings.length; i++) {
        if (toppings[i].checked) {
            toppingCount++;
        }
    }
    const toppingPrice = toppingCount * 0.50;

    const serviceType = document.getElementById("serviceSelect").value;
    let serviceFee = 0;
    
    if (serviceType === "dinein") {
        serviceFee = 0;
    } else if (serviceType === "takeout") {
        serviceFee = 1.50;
    } else if (serviceType === "delivery") {
        serviceFee = 3.00;
    }

    const total = sizePrice + toppingPrice + serviceFee;

    let customerName = document.getElementById("myInput").value.trim();
    if (customerName === "") {
        customerName = "Customer";
    }

    // f) Display the result formatted to 2 decimal places
    document.getElementById("myPara").innerHTML = customerName + ", your total is $" + total.toFixed(2);
});

// STEP 4: Get the "Clear" button by ID ("clearBtn") and add click listener
document.getElementById("clearBtn").addEventListener("click", function() {
    
    // a) Set the name input value to ""
    document.getElementById("myInput").value = "";

    // b) Set the Large radio (id "r3") to checked = true
    document.getElementById("r3").checked = true;
// jjjjjjj
    // c) Uncheck ALL topping checkboxes
    const toppings = document.getElementsByName("cb");
    for (let i = 0; i < toppings.length; i++) {
        toppings[i].checked = false;
    }

    // d) Set the service dropdown value to "dinein"
    document.getElementById("serviceSelect").value = "dinein";

    // e) Set the output paragraph innerHTML to ""
    document.getElementById("myPara").innerHTML = "";
});

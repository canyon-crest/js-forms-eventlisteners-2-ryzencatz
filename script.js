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

btnShout.addEventListener("click", function() {
    outShout.innerHTML = shoutInput.value.toUpperCase() + "!";
});

// ============================================
//  MAIN: Pizza Builder
// ============================================
// Calculate the total price of a pizza based on:
//   - Size (radio buttons): Small $7.50, Medium $10.00,
//     Large $12.50, XL $15.00
//   - Toppings (checkboxes): $0.50 each
//   - Service (dropdown): Dine In $0, Take Out $1.50,
//     Delivery $3.00

// STEP 3: Get the "Calculate Total" button by ID ("btnCalc")
//         Add a click event listener.
//         Inside the listener:

//   a) Get the selected size price:
//      Use document.getElementsByName("rg") to get all
//      size radio buttons. Loop through them to find the
//      one that is .checked, and read its .value.
//      Convert to a number with parseFloat().

//   b) Count checked toppings:
//      Use document.getElementsByName("cb") to get all
//      topping checkboxes. Loop through and count how
//      many are .checked. Multiply count by 0.50.

//   c) Get the service fee:
//      Use document.getElementById("serviceSelect").value
//      to get the selected option value ("dinein", "takeout",
//      or "delivery").
//      Use if/else if/else to set the fee:
//        "dinein"   → 0
//        "takeout"  → 1.50
//        "delivery" → 3.00

btnCalc.addEventListener("click", function(){
    radios = document.getElementsByName("rg");
    for (let i=0; i<radios.length; i++) {
        if (sizeRadios[i].checked) {
            let size = parseFloat(sizeRadios[i].value);
            break;
        }
    }

    cbs = document.getElementsByName("cb");
    let count = 0;
    for (let i=0; i<cbs.length;i++) {
        if (cbs[i].checked) {count++;}
    }
    count *= 0.5

    let val = serviceSelect.value
    if (val="dinein") {let fee=0.0;}
    else if (val="takeout") {let fee=1.5}
    else if (val="delivery") {let fee=3.0}

    let total = size + count + fee;
    if (myInput.value == "") {let name = "Customer"}
    else {name = myInput.value}
    document.getElementById("myPara").innerHTML = name + ", your total is $" + String(total.toFixed(2));
});

//   d) Calculate total: size + toppings + service fee

//   e) Get the customer name from the input with ID "myInput"

//   f) Display the result in the element with ID "myPara":
//      "[name], your total is $[total]"
//      Use .toFixed(2) to format the total.
//      Example: "Alice, your total is $13.50"
//      If name is empty, use "Customer" as the default.


// STEP 4: Get the "Clear" button by ID ("clearBtn")
//         Add a click event listener.
//         Inside the listener:
//         a) Set the name input value to ""
//         b) Set the Large radio (id "r3") to checked = true
//         c) Uncheck ALL topping checkboxes (loop through them)
//         d) Set the service dropdown value to "dinein"
//         e) Set the output paragraph innerHTML to ""

document.getElementById("clearBtn").addEventListener("click", function() {
    name.value = ""
    r3.checked = true
    for (let i=0; i<cbs.length; i++) {
        cbs[i].checked = false
    }

    document.getElementById("serviceDrop").value = "dinein"; 
    document.getElementById("outTotal").innerHTML = "";
});
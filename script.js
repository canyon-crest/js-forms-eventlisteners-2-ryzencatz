// ============================================
//  Unit 8.7 – Forms & Event Listeners
// ============================================

// ============================================
//  WARM-UP: Shout It!
// ============================================
const btnShout = document.getElementById("btnShout");
const shoutInput = document.getElementById("shoutInput");
const outShout = document.getElementById("outShout");

btnShout.addEventListener("click", function() {
    outShout.innerHTML = shoutInput.value.toUpperCase() + "!";
});

// ============================================
//  MAIN: Pizza Builder
// ============================================
const btnCalc = document.getElementById("btnCalc");
const myInput = document.getElementById("myInput");
const serviceSelect = document.getElementById("serviceSelect");
const myPara = document.getElementById("myPara");

btnCalc.addEventListener("click", function(){
    // a) Get the selected size price
    let size = 0; // Declare OUTSIDE the loop so it can be used later
    const radios = document.getElementsByName("rg");
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) { // Fixed: changed sizeRadios to radios
            size = parseFloat(radios[i].value);
            break;
        }
    }

    // b) Count checked toppings
    const cbs = document.getElementsByName("cb");
    let count = 0;
    for (let i = 0; i < cbs.length; i++) {
        if (cbs[i].checked) {
            count++;
        }
    }
    let toppingsTotal = count * 0.50; // Use a clean variable name

    // c) Get the service fee
    let fee = 0; // Declare OUTSIDE the if/else so it can be used later
    let val = serviceSelect.value;
    if (val === "dinein") { // Fixed: changed = to ===
        fee = 0.0;
    } else if (val === "takeout") {
        fee = 1.50;
    } else if (val === "delivery") {
        fee = 3.00;
    }

    // d) Calculate total
    let total = size + toppingsTotal + fee;

    // e) Get the customer name
    let name = "Customer";
    if (myInput.value.trim() !== "") { // Fixed: checks if it is NOT empty
        name = myInput.value;
    }

    // f) Display the result
    myPara.innerHTML = name + ", your total is $" + total.toFixed(2);
});

// STEP 4: Get the "Clear" button by ID ("clearBtn")
document.getElementById("clearBtn").addEventListener("click", function() {
    // Select elements explicitly to avoid global variable issues
    const myInput = document.getElementById("myInput");
    const r3 = document.getElementById("r3");
    const cbs = document.getElementsByName("cb");
    
    myInput.value = "";
    r3.checked = true;
    
    for (let i = 0; i < cbs.length; i++) {
        cbs[i].checked = false;
    }

    // Fixed: Matches your HTML IDs ("serviceSelect" and "myPara")
    document.getElementById("serviceSelect").value = "dinein"; 
    document.getElementById("myPara").innerHTML = "";
});

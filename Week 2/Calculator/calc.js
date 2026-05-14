function loadNormal() {

    document.getElementById("app").innerHTML = `
        <h2>Normal Calculator</h2>

        <input type="number" id="n1" placeholder="First Number">
        <input type="number" id="n2" placeholder="Second Number">

        <button onclick="normalCalc('+')">+</button>
        <button onclick="normalCalc('-')">-</button>
        <button onclick="normalCalc('*')">*</button>
        <button onclick="normalCalc('/')">/</button>

        <div id="result">Result: 0</div>
    `;
}

function normalCalc(op) {

    let a = Number(document.getElementById("n1").value);
    let b = Number(document.getElementById("n2").value);

    let res = 0;

    if (op === "+") res = a + b;
    else if (op === "-") res = a - b;
    else if (op === "*") res = a * b;
    else if (op === "/") res = b !== 0 ? a / b : "Cannot divide by 0";

    document.getElementById("result").innerText = "Result: " + res;
}


// ADVANCED MODE
function loadAdvanced() {

    document.getElementById("app").innerHTML = `
        <h2>Advanced Calculator</h2>

        <input type="text" id="expr" placeholder="Example: 10+5*2">

        <button onclick="advancedCalc()">Calculate</button>

        <div id="result">Result: 0</div>
    `;
}

function advancedCalc() {

    let expr = document.getElementById("expr").value;

    try {
        let res = eval(expr); // simple JS expression engine
        document.getElementById("result").innerText = "Result: " + res;
    } 
    catch {
        document.getElementById("result").innerText = "Invalid Expression";
    }
}
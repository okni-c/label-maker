var body = document.body;

var barcodeInput = document.getElementById("text1");

var checkbox = document.querySelector("#auto-print");

var defaultCode = "1234567890";


barcodeInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        var elem = document.getElementById("main-num");
        elem.textContent = "";

        var barcodeValue = document.getElementById("text1").value;
        event.preventDefault();


        var mainCode = document.getElementById("main-num");
        console.log(barcodeValue);
        mainCode.textContent = barcodeValue;
        console.log(barcodeValue);
        mainCode.textContent = barcodeValue;
    }
})

// Clean up event listener/ Still prints after uncheck
checkbox.addEventListener('change', function () {
    if (this.checked) {
        barcodeInput.addEventListener("keyup", function (event) {
            if (event.key === "Enter") {
                window.print();
            }
        })
    }
});
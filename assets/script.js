// var input = document.getElementById("text1");
// input.addEventListener("keyup", function(event) {
//     if (input.keyCode === 13) {
//         event.preventDefault();
//         document.getElementById("input-1").click();
//         console.log("I made it");
//     }
// })

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

checkbox.addEventListener('change', function () {
    if (this.checked) {
        barcodeInput.addEventListener("keyup", function (event) {
            if (event.key === "Enter") {
                window.print();
            }
        })
    }
});





// var checkbox = document.querySelector("input[name=checkbox]");

// checkbox.addEventListener('change', function() {
//   if (this.checked) {
//     console.log("Checkbox is checked..");
//   } else {
//     console.log("Checkbox is not checked..");
//   }
// });
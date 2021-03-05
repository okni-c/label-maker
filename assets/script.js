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


barcodeInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        var barcodeValue = document.getElementById("text1").value;
        event.preventDefault();
        console.log("BRUH");
        var mainCode = document.createElement("h2");
        mainCode.textContent = barcodeValue;
        console.log(barcodeValue);
        document.body.appendChild(mainCode);
        mainCode.setAttribute('style', 'margin:auto; width:50%; text-align:center;');
    }
})

checkbox.addEventListener('change', function () {
    if (this.checked) {
        barcodeInput.addEventListener("keyup", function (event) {
            if (event.key === "Enter") {
                var barcodeValue = document.getElementById("text1").value;
                event.preventDefault();
                console.log("BRUH");
                var mainCode = document.createElement("h2");
                mainCode.textContent = barcodeValue;
                console.log(barcodeValue);
                document.body.appendChild(mainCode);
                mainCode.setAttribute('style', 'margin:auto; width:50%; text-align:center;');
                window.print();
            }
        })
    } else {
        console.log("in else");
        barcodeInput.addEventListener("keyup", function (event) {
            if (event.key === "Enter") {
                var barcodeValue = document.getElementById("text1").value;
                event.preventDefault();
                console.log("BRUH");
                var mainCode = document.createElement("h2");
                mainCode.textContent = barcodeValue;
                console.log(barcodeValue);
                document.body.appendChild(mainCode);
                mainCode.setAttribute('style', 'margin:auto; width:50%; text-align:center;');
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
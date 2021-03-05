// var input = document.getElementById("text1");
// input.addEventListener("keyup", function(event) {
//     if (input.keyCode === 13) {
//         event.preventDefault();
//         document.getElementById("input-1").click();
//         console.log("I made it");
//     }
// })



var barcodeInput = document.getElementById("text1");

barcodeInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        window.print();
    }
});


function input() {
    var barcodeValue = document.getElementById("text1").value;
    alert("Text box got: " + barcodeValue);
};

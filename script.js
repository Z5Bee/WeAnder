//this shows a hidden fun fact when the button is clicked
const button = document.getElementById("factButton");
const fact = document.getElementById("funFact");

button.addEventListener("click", function () {

    if (fact.style.display === "none") {
        fact.style.display = "block";
    } else {
        fact.style.display = "none";
    }

});
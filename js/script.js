document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("click", function() {
            card.classList.toggle("flipped");
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("theme-toggle");
    const body = document.body;

        // tarkistaa localstoragesta teeman 
    if (localStorage.getItem("theme") === "light") {
        body.classList.add("light-mode");
    }

    toggleButton.addEventListener("click", function () {
        body.classList.toggle("light-mode");

        // tallentaa teeman logalstorageen
        if (body.classList.contains("light-mode")) {
            localStorage.setItem("theme", "light");
        } else {
            localStorage.setItem("theme", "dark");
        }
    });
});
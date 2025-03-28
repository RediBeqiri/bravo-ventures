document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("Navn").value.trim();
    let email = document.getElementById("E-post").value.trim();
    let message = document.getElementById("Melding").value.trim();
    let responseMessage = document.getElementById("responseMessage");

    if (name === "" || email === "" || message === "") {
        responseMessage.textContent = "Vennligst fyll ut alle feltene.";
        responseMessage.style.color = "red";
        return;
    }

    responseMessage.textContent = "Meldingen ble sendt!";
    responseMessage.style.color = "green";

    document.getElementById("contactForm").reset();
});

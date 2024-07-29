document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    const responseMessage = document.getElementById("response-message");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const formData = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "process_contact.php", true);
        xhr.onload = function() {
            if (xhr.status === 200) {
                responseMessage.textContent = xhr.responseText;
                form.reset();
            } else {
                responseMessage.textContent = "Error sending message. Please try again later.";
            }
        };
        xhr.onerror = function() {
            responseMessage.textContent = "Error sending message. Please try again later.";
        };
        xhr.send(formData);
    });
});

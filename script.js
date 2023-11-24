document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // In a real application, you would make an AJAX request to the server for authentication
        // For this example, we'll use a hardcoded username and ID for demonstration purposes
        const idNumber = document.getElementById("id-number").value;
        const password = document.getElementById("password").value;

        // Simulate server authentication (replace with your own authentication logic)
        if (idNumber === "88032500588" && password === "1988") {
            // Redirect to the dashboard page
            window.location.href = `fines.html`;
        } else {
            alert("Invalid credentials. Please try again.");
        }
    });
});

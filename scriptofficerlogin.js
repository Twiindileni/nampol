document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // In a real application, you would make an AJAX request to the server for authentication
        // For this example, we'll use an object to store user credentials and redirect URLs
        const userDatabase = {
            "88032500588": { password: "1988", username: "Johannes Shilongo", redirectUrl: "List.html" },
            "12345": { password: "123", username: "Jonas Donglass", redirectUrl: "List.html" },
            // Add more users as needed
        };

        const idNumber = document.getElementById("id-number").value;
        const password = document.getElementById("password").value;

        // Check if the entered credentials match any user in the database
        if (userDatabase.hasOwnProperty(idNumber) && userDatabase[idNumber].password === password) {
            const username = userDatabase[idNumber].username;
            alert(`Welcome, ${username}`);

            // Redirect to the specified URL after successful login
            window.location.href = userDatabase[idNumber].redirectUrl;
        } else {
            alert("Invalid credentials. Please try again.");
        }
    });
});

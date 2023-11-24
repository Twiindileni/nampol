document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // User database with ID, Password, and Username
        const userDatabase = {
            "88032500588": { password: "1988", username: "John Doe" },
            "1234": { password: "123", username: "Jane Doe" },
            // Add more users as needed
        };

        const idNumber = document.getElementById("id-number").value;
        const password = document.getElementById("password").value;

        // Check if the entered credentials match any user in the database
        if (userDatabase.hasOwnProperty(idNumber) && userDatabase[idNumber].password === password) {
            const username = userDatabase[idNumber].username;
            alert(`Welcome, ${username}!`);

            // Redirect to the dashboard page or perform other actions
            // window.location.href = `fines.html`;
        } else {
            alert("Invalid credentials. Please try again.");
        }
    });
});
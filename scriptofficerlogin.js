document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // In a real application, you would make an AJAX request to the server for authentication
        // For this example, we'll use an array to store user credentials and redirect URLs
        const users = [
            { idNumber: "88032500588", password: "1988", redirectUrl: "List.html" },
            { idNumber: "12345", password: "123", redirectUrl: "List.html" },
            // Add more users as needed with their corresponding redirect URLs
        ];

        const idNumber = document.getElementById("id-number").value;
        const password = document.getElementById("password").value;

        // Simulate server authentication by checking against the array
        const user = users.find(u => u.idNumber === idNumber && u.password === password);

        if (user) {
            // Redirect to the specified URL for the authenticated user
            window.location.href = user.redirectUrl;
        } else {
            alert("Invalid credentials. Please try again.");
        }
    });
});
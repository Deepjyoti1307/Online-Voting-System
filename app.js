
    // Array of elections


    // Populate elections dynamically
    const electionsContainer = document.getElementById("elections");
    elections.forEach((election) => {
        const card = document.createElement("div");
        card.className = "election-card";
        card.innerHTML = `
            <h3>${election.name}</h3>
            <p>Status: ${election.status}</p>
            ${
                election.status === "Active"
                    ? '<button class="vote-btn">Vote Now</button>'
                    : '<button class="vote-btn" disabled>Not Available</button>'
            }
        `;
        electionsContainer.appendChild(card);
    });

  

    // Add interactivity to buttons
    document.addEventListener("click", (event) => {
        if (event.target.classList.contains("vote-btn")) {
            const electionName = event.target.parentElement.querySelector("h3").textContent;
            if (!event.target.disabled) {
                alert(`You have voted for: ${electionName}`);
            } else {
                alert("This election is not active.");
            }
        }
    });

document.addEventListener("DOMContentLoaded", () => {
    // Login Form Handling
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            if (email === "user@example.com" && password === "password123") {
                alert("Login successful!");
                window.location.href = "index.html"; // Redirect to homepage
            } else {
                alert("Invalid email or password.");
            }
        });
    }

    // Register Form Handling
    const registerForm = document.getElementById("registerForm");
    if (registerForm) {
        registerForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            const confirmPassword = document.getElementById("confirmPassword").value;

            if (password !== confirmPassword) {
                alert("Passwords do not match!");
            } else {
                alert(`Registration successful for ${name}!`);
                window.location.href = "login.html"; // Redirect to login page
            }
        });
    }
});
document.getElementById("createVoteForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const title = document.getElementById("eventTitle").value;
    const description = document.getElementById("eventDescription").value;
    const startDate = document.getElementById("startDate").value;
    const endDate = document.getElementById("endDate").value;

    if (new Date(startDate) > new Date(endDate)) {
        alert("Start date cannot be after the end date.");
        return;
    }

    alert(`Event "${title}" created successfully!\nDescription: ${description}\nStart: ${startDate}\nEnd: ${endDate}`);
    document.getElementById("createVoteForm").reset();
});
// Smooth Scroll for Navigation Links
document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
    });
});
document.getElementById('voteForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for voting for John Doe!');
    this.reset(); // Clears the form after submission
});
document.getElementById('feedbackForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    const satisfaction = document.getElementById('satisfaction').value;
    const comments = document.getElementById('comments').value;
    const email = document.getElementById('email').value;

    // For now, just log the form data to the console
    console.log("Satisfaction:", satisfaction);
    console.log("Comments:", comments);
    console.log("Email:", email);

    // Show a success message (you can replace this with actual server logic)
    alert("Thank you for your feedback!");

    // Clear the form fields
    document.getElementById('feedbackForm').reset();
});

document.addEventListener("DOMContentLoaded", () => {
    const notifyButton = document.getElementById("notifyButton");
    const interestForm = document.getElementById("interestForm");

    notifyButton.addEventListener("click", () => {
        if (interestForm.style.display === "none" || interestForm.style.display === "") {
            interestForm.style.display = "block";
        } else {
            interestForm.style.display = "none";
        }
    });
});

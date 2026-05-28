const form = document.getElementById("jobForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const application = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        position: document.getElementById("position").value,
        experience: document.getElementById("experience").value,
        message: document.getElementById("message").value,
        submittedAt: new Date().toLocaleString()
    };

    let applications =
        JSON.parse(localStorage.getItem("applications")) || [];

    applications.push(application);

    localStorage.setItem(
        "applications",
        JSON.stringify(applications)
    );

    successMessage.textContent =
        "✅ Application submitted successfully!";

    form.reset();

});

document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let userData = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        gender: document.getElementById("gender").value,
        altPhone: document.getElementById("altPhone").value
    };

    // Save user data in localStorage (This acts like an invisible database)
    localStorage.setItem("userDetails", JSON.stringify(userData));

    // Redirect to welcome page
    window.location.href = "welcome.html";
});

function handleRegister() {
    const username = document.getElementById('registerUsername').value.trim();
    const email = document.getElementById('registerEmail').value.trim();
    const password = document.getElementById('registerPassword').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
    const errorDiv = document.getElementById('registerError');

    if (!username || !email || !password || !confirmPassword) {
        errorDiv.textContent = "All fields are required.";
        return;
    }

    if (password !== confirmPassword) {
        errorDiv.textContent = "Passwords do not match.";
        return;
    }

    localStorage.setItem('user', JSON.stringify({ username, email, password }));

    window.location.href = 'confirm.html';
}

function handleLogin() {
    const username = document.getElementById('loginUsername').value.trim();
    const password = document.getElementById('loginPassword').value.trim();
    const errorDiv = document.getElementById('loginError');

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (!storedUser || storedUser.username !== username || storedUser.password !== password) {
        errorDiv.textContent = "Invalid username or password.";
        return;
    }

    window.location.href = 'index.html';
}

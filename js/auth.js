// Simple authentication using localStorage
let users = JSON.parse(localStorage.getItem('users')) || {};

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (users[username] && users[username].password === password) {
        localStorage.setItem('currentUser', username);
        window.location.href = 'INDEX.HTML';
    } else {
        alert('Invalid credentials');
    }
}

function register() {
    const username = document.getElementById('regUsername').value;
    const password = document.getElementById('regPassword').value;
    const email = document.getElementById('email').value;
    if (username && password && email) {
        if (users[username]) {
            alert('User already exists');
        } else {
            users[username] = { password, email, profile: { rank: 'Beginner', points: 0, lessonsCompleted: 0 } };
            localStorage.setItem('users', JSON.stringify(users));
            alert('Registered successfully');
            showLogin();
        }
    } else {
        alert('Fill all fields');
    }
}

function showRegister() {
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('registerForm').classList.remove('hidden');
}

function showLogin() {
    document.getElementById('registerForm').classList.add('hidden');
    document.getElementById('loginForm').classList.remove('hidden');
}

function clearData() {
    if (confirm('This will clear all user data and log you out. Are you sure?')) {
        localStorage.clear();
        alert('All data cleared. Please refresh the page.');
        window.location.reload();
    }
}

// Check if user is logged in
if (localStorage.getItem('currentUser')) {
    // Already logged in, redirect to main
    window.location.href = 'INDEX.HTML';
}
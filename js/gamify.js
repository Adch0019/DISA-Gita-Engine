// Gamification logic
let currentUser = localStorage.getItem('currentUser');
let users = JSON.parse(localStorage.getItem('users')) || {};

function updateUserData() {
    if (currentUser && users[currentUser]) {
        let rankEl = document.getElementById('rankDisplay');
        let pointsEl = document.getElementById('pointsDisplay');
        if (rankEl) rankEl.innerText = users[currentUser].profile.rank;
        if (pointsEl) pointsEl.innerText = users[currentUser].profile.points;
    }
}

function addPoints(points) {
    if (currentUser && users[currentUser]) {
        users[currentUser].profile.points += points;
        updateRank();
        localStorage.setItem('users', JSON.stringify(users));
        updateUserData();
        
        // Log activity
        let activity = JSON.parse(localStorage.getItem('activity') || '[]');
        activity.push(`${currentUser} earned ${points} points - ${new Date().toLocaleString()}`);
        localStorage.setItem('activity', JSON.stringify(activity));
    }
}

function updateRank() {
    let points = users[currentUser].profile.points;
    if (points < 100) users[currentUser].profile.rank = 'Beginner';
    else if (points < 500) users[currentUser].profile.rank = 'Seeker';
    else if (points < 1000) users[currentUser].profile.rank = 'Warrior';
    else users[currentUser].profile.rank = 'Enlightened';
}

function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'login.html';
}

// Initialize
if (!currentUser) {
    window.location.href = 'login.html';
} else {
    updateUserData();
}
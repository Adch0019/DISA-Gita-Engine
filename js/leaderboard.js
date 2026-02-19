let users = JSON.parse(localStorage.getItem('users')) || {};
let currentUser = localStorage.getItem('currentUser');

if (!currentUser) {
    window.location.href = 'login.html';
}

// Simulate online users by adding mock data if not present
if (!localStorage.getItem('mockUsersAdded')) {
    let mockUsers = {
        'KrishnaDevotee': { email: 'krishna@example.com', nation: 'IN', profile: { rank: 'Enlightened', points: 1500, lessonsCompleted: 18 } },
        'ArjunaWarrior': { email: 'arjuna@example.com', nation: 'IN', profile: { rank: 'Warrior', points: 800, lessonsCompleted: 10 } },
        'WesternSeeker': { email: 'seeker@example.com', nation: 'US', profile: { rank: 'Seeker', points: 300, lessonsCompleted: 5 } }
    };
    Object.assign(users, mockUsers);
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('mockUsersAdded', 'true');
}

let allUsers = Object.entries(users).map(([username, data]) => ({ username, ...data.profile, nation: data.nation })).sort((a, b) => b.points - a.points);

let tbody = document.getElementById('leaderboardBody');
allUsers.forEach((user, index) => {
    let row = tbody.insertRow();
    row.insertCell(0).innerText = index + 1;
    row.insertCell(1).innerText = user.username;
    row.insertCell(2).innerText = user.points;
    row.insertCell(3).innerText = user.rank;
    let flagCell = row.insertCell(4);
    flagCell.innerText = getFlag(user.nation);
    if (user.username === currentUser) {
        row.style.fontWeight = 'bold';
    }
});

function getFlag(nation) {
    const flags = { IN: '🇮🇳', US: '🇺🇸', GB: '🇬🇧' };
    return flags[nation] || '🌍';
}
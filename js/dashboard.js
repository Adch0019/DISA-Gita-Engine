let currentUser = localStorage.getItem('currentUser');
let users = JSON.parse(localStorage.getItem('users')) || {};

if (!currentUser) {
    window.location.href = 'login.html';
} else {
    let user = users[currentUser];
    document.getElementById('rank').innerText = user.profile.rank;
    document.getElementById('points').innerText = user.profile.points;
    document.getElementById('lessons').innerText = user.profile.lessonsCompleted;

    // Calculate world rank
    let allUsers = Object.values(users).sort((a, b) => b.profile.points - a.profile.points);
    let rank = allUsers.findIndex(u => u === user) + 1;
    document.getElementById('worldRank').innerText = rank;

    // Recent activity (simplified)
    let activity = JSON.parse(localStorage.getItem('activity') || '[]');
    let list = document.getElementById('activityList');
    activity.slice(-5).forEach(act => {
        let li = document.createElement('li');
        li.innerText = act;
        list.appendChild(li);
    });
}
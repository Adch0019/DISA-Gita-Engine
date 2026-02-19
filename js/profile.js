let currentUser = localStorage.getItem('currentUser');
let users = JSON.parse(localStorage.getItem('users')) || {};

if (!currentUser) {
    window.location.href = 'login.html';
} else {
    let user = users[currentUser];
    document.getElementById('username').innerText = currentUser;
    document.getElementById('email').innerText = user.email;
    document.getElementById('rank').innerText = user.profile.rank;
    document.getElementById('points').innerText = user.profile.points;
    document.getElementById('lessons').innerText = user.profile.lessonsCompleted;
    
    // Load DOB and astrology info
    loadAstrologyInfo();
}

function loadAstrologyInfo() {
    const dob = localStorage.getItem('userDOB');
    if (dob) {
        document.getElementById('dobInput').value = dob;
        displayAstrologyInfo(dob);
    }
}

function calculateAstrology() {
    const dobInput = document.getElementById('dobInput').value;
    if (!dobInput) {
        alert('Please select a date of birth');
        return;
    }
    
    localStorage.setItem('userDOB', dobInput);
    document.getElementById('editDob').value = dobInput;
    displayAstrologyInfo(dobInput);
}

function displayAstrologyInfo(dob) {
    try {
        const date = new Date(dob);
        if (isNaN(date.getTime())) {
            return;
        }
        
        // Calculate astrology
        const sunSign = calculateSunSign(date);
        const nakshatra = calculateNakshatra(date);
        const horoscope = generateHoroscope(date);
        
        // Display Info
        document.getElementById('sunSign').innerText = sunSign ? `${sunSign.name} (${sunSign.vedic})` : '--';
        document.getElementById('nakshatra').innerText = nakshatra ? nakshatra.name : '--';
        document.getElementById('rulingPlanet').innerText = nakshatra ? nakshatra.ruler : '--';
        document.getElementById('deity').innerText = nakshatra ? nakshatra.deity : '--';
        
        // Display Horoscope
        if (horoscope) {
            document.getElementById('horscopePrediction').innerText = horoscope.general_prediction;
            document.getElementById('luckyColor').innerText = horoscope.lucky_color;
            document.getElementById('luckyNumber').innerText = horoscope.lucky_number;
            document.getElementById('luckyTime').innerText = horoscope.lucky_time;
            document.getElementById('luckyDir').innerText = horoscope.lucky_direction;
            document.getElementById('horsecopeAdvice').innerText = horoscope.daily_advice;
            document.getElementById('horoscopeBox').classList.remove('hidden');
            
            localStorage.setItem('userHoroscope', JSON.stringify(horoscope));
        }
    } catch (e) {
        console.error('Error calculating astrology:', e);
    }
}

function showEdit() {
    document.getElementById('editProfile').classList.remove('hidden');
    document.getElementById('editEmail').value = users[currentUser].email;
    document.getElementById('editDob').value = localStorage.getItem('userDOB') || '';
    document.getElementById('languageSelect').value = localStorage.getItem('language') || 'en';
    document.getElementById('nationSelect').value = users[currentUser].nation || 'IN';
}

function updateProfile() {
    let newEmail = document.getElementById('editEmail').value;
    let newDob = document.getElementById('editDob').value;
    let newLang = document.getElementById('languageSelect').value;
    let newNation = document.getElementById('nationSelect').value;
    
    if (newEmail) {
        users[currentUser].email = newEmail;
        users[currentUser].nation = newNation;
        localStorage.setItem('language', newLang);
        localStorage.setItem('users', JSON.stringify(users));
        
        if (newDob) {
            localStorage.setItem('userDOB', newDob);
            displayAstrologyInfo(newDob);
        }
        
        document.getElementById('email').innerText = newEmail;
        document.getElementById('editProfile').classList.add('hidden');
        alert('Profile updated! Page will reload with new language.');
        changeLanguage(newLang); // Reload with new language
    }
}

function cancelEdit() {
    document.getElementById('editProfile').classList.add('hidden');
}
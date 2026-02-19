function startJourney() {
    const age = document.getElementById("ageInput").value;

    if (!age || age <= 0) {
        alert("Please enter valid age");
        return;
    }

    const result = calculateLife(age);

    document.getElementById("lifeClock").classList.remove("hidden");
    document.getElementById("emotionSection").classList.remove("hidden");

    document.getElementById("lifeResult").innerHTML =
        `You have lived approximately ${result.daysLived} days.<br>
         You have used ${result.percentUsed}% of an average life.<br>
         Approx days remaining: ${result.daysRemaining}.<br>
         Use your time wisely.`;
         document.getElementById("lifeBar").style.width = result.percentUsed + "%";

    addPoints(5); // Points for starting journey
}

function showGuidance() {
    const emotion = document.getElementById("emotionSelect").value;

    if (!emotion) {
        alert("Please select an emotion first");
        return;
    }

    // Show loading state
    const button = event.target;
    const originalText = button.innerText;
    button.innerText = "⏳ Loading...";
    button.disabled = true;
    
    // Small delay to show loading state
    setTimeout(() => {
        try {
            const guidance = getGitaGuidance(emotion);
            
            if (!guidance) {
                alert("Could not find guidance for this emotion. Please try another emotion.");
                console.error("GITA_DATA:", typeof GITA_DATA, Object.keys(GITA_DATA || {}));
                button.innerText = originalText;
                button.disabled = false;
                return;
            }

            document.getElementById("guidanceBox").classList.remove("hidden");

            document.getElementById("sanskrit").innerText = guidance.sanskrit || "Sanskrit text not available";
            document.getElementById("hindi").innerText = guidance.hindi || "Hindi translation not available";
            document.getElementById("meaning").innerText = guidance.meaning || "Meaning not available";
            document.getElementById("example").innerText = guidance.example || "Example not available";
            document.getElementById("action").innerText = guidance.action || "Action not available";

            // Scroll to guidance with smooth behavior
            setTimeout(() => {
                document.getElementById("guidanceBox").scrollIntoView({ behavior: "smooth", block: "start" });
            }, 100);

            addPoints(10); // Points for seeking guidance
            
            console.log("✅ Guidance loaded successfully for emotion:", emotion);
        } catch (e) {
            console.error("Error in showGuidance:", e);
            alert("An error occurred while loading guidance. Please check the console.");
        } finally {
            button.innerText = originalText;
            button.disabled = false;
        }
    }, 300);
}

function getGitaGuidance(emotion) {
    if (typeof GITA_DATA !== 'undefined' && GITA_DATA && GITA_DATA[emotion]) {
        return GITA_DATA[emotion];
    }
    console.warn("GITA_DATA not found or emotion not recognized:", emotion);
    return null;
}

// ===== CHARACTER CAROUSEL SYSTEM =====
const GITA_CHARACTERS = [
    {
        name: "🕉️ Krishna",
        emoji: "🕉️",
        teaching: "I am the source of all spiritual and material worlds. Everything emanates from Me... focus on performing your duty with complete devotion and surrender all fruits to Me."
    },
    {
        name: "⚔️ Arjuna",
        emoji: "⚔️",
        teaching: "From confusion to clarity. My journey teaches us that when we face our fears and perform our duty with faith, victory is assured. Embrace your Dharma!"
    },
    {
        name: "👴 Bhishma",
        emoji: "👴",
        teaching: "Knowledge of duty is the foundation of all actions. Perform your duty with wisdom and without attachment to results. True strength lies in righteousness."
    },
    {
        name: "👑 Draupadi",
        emoji: "👑",
        teaching: "Patience and righteousness are the true crowns of nobility. Truth always prevails in the end. Stand firm in your principles, no matter how difficult the path."
    },
    {
        name: "👨‍⚖️ Yudhishthira",
        emoji: "👨‍⚖️",
        teaching: "Dharma (righteousness) is the ultimate law. Even in adversity, upholding dharma brings eternal peace. Justice and honesty are the pillars of a just ruler."
    },
    {
        name: "💪 Bhima",
        emoji: "💪",
        teaching: "Strength combined with righteousness overcomes evil. Use your power to protect the virtuous and uphold dharma. Physical power without moral values is destructive."
    },
    {
        name: "📚 Drona",
        emoji: "📚",
        teaching: "True education includes moral values and duty. A teacher's guidance shapes the future of disciples and society. Knowledge without ethics is incomplete."
    },
    {
        name: "👩 Kunti",
        emoji: "👩",
        teaching: "A mother's love and wisdom guide her children through life. Compassion and strength go hand in hand. Sacrifice for the welfare of others brings eternal blessings."
    },
    {
        name: "👁️ Sanjaya",
        emoji: "👁️",
        teaching: "A witness to truth sees the divine plan unfolding. Understanding the eternal brings clarity to worldly affairs. True vision goes beyond what the eyes can see."
    }
];

let currentCharacterIndex = -1;

function initializeCharacter() {
    // Check if today's character has been loaded
    const today = new Date().toDateString();
    const savedDate = localStorage.getItem('characterDate');
    
    if (savedDate !== today) {
        // New day - pick a random character
        currentCharacterIndex = Math.floor(Math.random() * GITA_CHARACTERS.length);
        localStorage.setItem('characterDate', today);
        localStorage.setItem('currentCharacterIndex', currentCharacterIndex);
    } else {
        // Same day - use saved character
        const savedIndex = localStorage.getItem('currentCharacterIndex');
        currentCharacterIndex = savedIndex ? parseInt(savedIndex) : 0;
    }
    
    displayCharacter();
}

function displayCharacter() {
    if (currentCharacterIndex < 0 || currentCharacterIndex >= GITA_CHARACTERS.length) {
        currentCharacterIndex = 0;
    }
    
    const character = GITA_CHARACTERS[currentCharacterIndex];
    const imgEl = document.getElementById('characterImg');
    const teachingEl = document.getElementById('characterTeaching');
    
    if (imgEl) {
        imgEl.innerHTML = `<div class="character-emoji">${character.emoji}</div>`;
    }
    
    if (teachingEl) {
        teachingEl.innerHTML = `<h3>${character.name}</h3><p>"${character.teaching}"</p>`;
    }
}

function nextCharacter() {
    currentCharacterIndex = (currentCharacterIndex + 1) % GITA_CHARACTERS.length;
    localStorage.setItem('currentCharacterIndex', currentCharacterIndex);
    displayCharacter();
}

function previousCharacter() {
    currentCharacterIndex = (currentCharacterIndex - 1 + GITA_CHARACTERS.length) % GITA_CHARACTERS.length;
    localStorage.setItem('currentCharacterIndex', currentCharacterIndex);
    displayCharacter();
}

// Initialize character carousel on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeCharacter);
} else {
    initializeCharacter();
}

function saveReflection() {
    const text = document.getElementById("reflection").value;
    localStorage.setItem("dailyReflection", text);
    alert("Reflection saved for today.");
    addPoints(5); // Points for reflection
}

function lostMode() {
    alert("Pause. Breathe. Take 3 deep breaths.\nNow write what is disturbing your mind.");
    addPoints(2); // Points for lost mode
}

function showMentor(message) {
    const panel = document.getElementById("mentorPanel");
    const text = document.getElementById("mentorMessage");

    text.innerText = message;
    panel.classList.remove("hidden");

    setTimeout(() => {
        panel.classList.add("hidden");
    }, 6000);
}

// ===== REAL-TIME CLOCK AND THEME SYSTEM =====
function updateClock() {
    const clockEl = document.getElementById('realTimeClock');
    if (clockEl) {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        clockEl.innerText = `${hours}:${minutes}:${seconds}`;
    }
}

function initClockAndTheme() {
    // Update clock immediately and then every second
    updateClock();
    setInterval(updateClock, 1000);
    
    // Apply theme immediately and periodically check for changes (every minute)
    if (typeof applyTheme !== 'undefined') {
        const currentTheme = getTimeBasedTheme();
        applyTheme(currentTheme);
        
        setInterval(() => {
            const newTheme = getTimeBasedTheme();
            applyTheme(newTheme);
        }, 60000); // Check every minute
    }
}

// Initialize clock and theme on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initClockAndTheme);
} else {
    initClockAndTheme();
}




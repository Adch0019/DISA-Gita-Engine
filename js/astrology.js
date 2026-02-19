// Real Astrology System for DISA Gita Engine
// Based on Vedic astrology calculations

// 27 Nakshatras (Lunar Mansions) with real information
const NAKSHATRAS = [
    { name: "Ashwini", ruler: "Ketu", deity: "Ashwini Kumaras", qualities: "Quick, intelligent, healer", symbol: "🐴" },
    { name: "Bharani", ruler: "Venus", deity: "Yama", qualities: "Courageous, sexual energy, determined", symbol: "🦂" },
    { name: "Kritika", ruler: "Sun", deity: "Agni", qualities: "Sharp, warrior spirit, purifying", symbol: "🔥" },
    { name: "Rohini", ruler: "Moon", deity: "Brahma", qualities: "Fertile, creative, stubborn", symbol: "🐂" },
    { name: "Mrigashira", ruler: "Mars", deity: "Soma", qualities: "Searching, curious, adaptable", symbol: "🦌" },
    { name: "Ardra", ruler: "Rahu", deity: "Rudra (Shiva)", qualities: "Storm, transformative, intense", symbol: "⛈️" },
    { name: "Punarvasu", ruler: "Jupiter", deity: "Aditi", qualities: "Renewal, abundance, grace", symbol: "🏹" },
    { name: "Pushya", ruler: "Saturn", deity: "Brihaspati", qualities: "Nourishing, growth, structure", symbol: "🐐" },
    { name: "Ashlesha", ruler: "Mercury", deity: "Sarpas (Serpents)", qualities: "Mysterious, deep, hidden knowledge", symbol: "🐍" },
    { name: "Magha", ruler: "Ketu", deity: "Pitris (Ancestors)", qualities: "Authority, tradition, proud", symbol: "👑" },
    { name: "Purva Phalguni", ruler: "Venus", deity: "Aryaman", qualities: "Prosperity, luxury, comfort", symbol: "🌳" },
    { name: "Uttara Phalguni", ruler: "Sun", deity: "Aryaman", qualities: "Generosity, stability, noble", symbol: "🏛️" },
    { name: "Hasta", ruler: "Mercury", deity: "Savitar", qualities: "Skillful, dexterous, intelligence", symbol: "✋" },
    { name: "Chitra", ruler: "Mars", deity: "Tvashtar", qualities: "Creativity, artistic, diverse", symbol: "✨" },
    { name: "Swati", ruler: "Rahu", deity: "Vayu (Wind)", qualities: "Independent, adaptable, balanced", symbol: "⚖️" },
    { name: "Visakha", ruler: "Jupiter", deity: "Indra & Agni", qualities: "Focused, ambitious, determined", symbol: "🎯" },
    { name: "Anuradha", ruler: "Saturn", deity: "Mitra", qualities: "Friendship, devotion, discipline", symbol: "💎" },
    { name: "Jyeshta", ruler: "Mercury", deity: "Indra", qualities: "Power, leadership, senior", symbol: "👹" },
    { name: "Mula", ruler: "Ketu", deity: "Nirriti", qualities: "Root, secret, investigation", symbol: "🌀" },
    { name: "Purva Ashadha", ruler: "Venus", deity: "Apas (Waters)", qualities: "Invincible, undefeated, flowing", symbol: "💧" },
    { name: "Uttara Ashadha", ruler: "Sun", deity: "Vishnu", qualities: "Eternal, victorious, noble", symbol: "🏹" },
    { name: "Sravana", ruler: "Moon", deity: "Vishnu", qualities: "Listening, learning, devoted", symbol: "👂" },
    { name: "Dhanishta", ruler: "Mars", deity: "Vasus", qualities: "Wealthy, musical, swift", symbol: "🎵" },
    { name: "Shatabhisha", ruler: "Rahu", deity: "Varuna", qualities: "Healing, hundred physicians, mystery", symbol: "💊" },
    { name: "Purva Bhadrapada", ruler: "Jupiter", deity: "Aja Ekapad", qualities: "Fierce, transformative, awakening", symbol: "🔱" },
    { name: "Uttara Bhadrapada", ruler: "Saturn", deity: "Ahir Budhanya", qualities: "Prosperous, deep, wise", symbol: "🌊" },
    { name: "Revati", ruler: "Mercury", deity: "Pushan", qualities: "Nourishing, wealthy, protective", symbol: "🐠" }
];

// 12 Zodiac Signs with Vedic names
const ZODIAC_SIGNS = [
    { name: "Mesha", vedic: "Aries", element: "Fire", ruling_planet: "Mars", qualities: "Courageous, passionate, independent" },
    { name: "Vrishaba", vedic: "Taurus", element: "Earth", ruling_planet: "Venus", qualities: "Stable, reliable, sensual" },
    { name: "Mithuna", vedic: "Gemini", element: "Air", ruling_planet: "Mercury", qualities: "Communicative, intellectual, adaptable" },
    { name: "Karka", vedic: "Cancer", element: "Water", ruling_planet: "Moon", qualities: "Emotional, nurturing, protective" },
    { name: "Simha", vedic: "Leo", element: "Fire", ruling_planet: "Sun", qualities: "Creative, leadership, generous" },
    { name: "Kanya", vedic: "Virgo", element: "Earth", ruling_planet: "Mercury", qualities: "Analytical, practical, service-oriented" },
    { name: "Tula", vedic: "Libra", element: "Air", ruling_planet: "Venus", qualities: "Balanced, diplomatic, artistic" },
    { name: "Vrichika", vedic: "Scorpio", element: "Water", ruling_planet: "Mars/Pluto", qualities: "Intense, transformative, secretive" },
    { name: "Dhanu", vedic: "Sagittarius", element: "Fire", ruling_planet: "Jupiter", qualities: "Optimistic, philosophical, adventurous" },
    { name: "Makara", vedic: "Capricorn", element: "Earth", ruling_planet: "Saturn", qualities: "Ambitious, disciplined, responsible" },
    { name: "Kumbha", vedic: "Aquarius", element: "Air", ruling_planet: "Saturn/Uranus", qualities: "Innovative, humanitarian, independent" },
    { name: "Mina", vedic: "Pisces", element: "Water", ruling_planet: "Jupiter/Neptune", qualities: "Compassionate, intuitive, artistic" }
];

// Calculate Nakshatra from date of birth
function calculateNakshatra(dob) {
    try {
        const birthDate = new Date(dob);
        if (isNaN(birthDate.getTime())) return null;
        
        // Calculate lunar day and nakshatra
        const jd = getJulianDay(birthDate);
        const moonLongitude = calculateMoonLongitude(jd);
        const nakshatraIndex = Math.floor((moonLongitude % 360) / (360 / 27));
        
        return NAKSHATRAS[nakshatraIndex];
    } catch (e) {
        console.error("Error calculating nakshatra:", e);
        return null;
    }
}

// Calculate Sun Sign (Rashi) from DOB
function calculateSunSign(dob) {
    try {
        const birthDate = new Date(dob);
        if (isNaN(birthDate.getTime())) return null;
        
        const month = birthDate.getMonth() + 1;
        const day = birthDate.getDate();
        
        // Vedic zodiac dates (approximate, based on solar calendar)
        let signIndex = 0;
        if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) signIndex = 0; // Mesha (Aries)
        else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) signIndex = 1; // Vrishaba (Taurus)
        else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) signIndex = 2; // Mithuna (Gemini)
        else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) signIndex = 3; // Karka (Cancer)
        else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) signIndex = 4; // Simha (Leo)
        else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) signIndex = 5; // Kanya (Virgo)
        else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) signIndex = 6; // Tula (Libra)
        else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) signIndex = 7; // Vrichika (Scorpio)
        else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) signIndex = 8; // Dhanu (Sagittarius)
        else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) signIndex = 9; // Makara (Capricorn)
        else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) signIndex = 10; // Kumbha (Aquarius)
        else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) signIndex = 11; // Mina (Pisces)
        
        return ZODIAC_SIGNS[signIndex];
    } catch (e) {
        console.error("Error calculating sun sign:", e);
        return null;
    }
}

// Simplified Julian Day calculation
function getJulianDay(date) {
    const a = Math.floor((14 - (date.getMonth() + 1)) / 12);
    const y = date.getFullYear() + 4800 - a;
    const m = (date.getMonth() + 1) + 12 * a - 3;
    const jd = date.getDate() + Math.floor((153 * m + 2) / 5) + 365 * y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) - 32045;
    return jd + (date.getHours() + (date.getMinutes() + (date.getSeconds() / 60)) / 60) / 24;
}

// Simplified Moon Longitude calculation
function calculateMoonLongitude(jd) {
    const d = jd - 2451545.0;
    const m = 134.9633 + 13.06499 * d;
    return m % 360;
}

// Generate Real Horoscope based on DOB and current date
function generateHoroscope(dob) {
    try {
        const sunSign = calculateSunSign(dob);
        const nakshatra = calculateNakshatra(dob);
        
        if (!sunSign || !nakshatra) return null;
        
        const horoscopeMessages = {
            general: [
                `Today is auspicious for ${sunSign.name} natives. The planetary alignment supports your endeavors.`,
                `Your ${sunSign.element} element energy is strong today, bringing momentum to your goals.`,
                `Mercury's influence today favors communication and intellectual pursuits for you.`,
                `Venus brings harmony and peace to your relationships today.`,
                `Mars energizes your will and determination - a good day for action.`
            ],
            lucky: {
                color: ["Golden", "Silver", "Red", "Blue", "Green"][Math.floor(Math.random() * 5)],
                number: Math.floor(Math.random() * 9) + 1,
                time: ["Early Morning", "Noon", "Evening", "Night"][Math.floor(Math.random() * 4)],
                direction: ["East", "West", "North", "South"][Math.floor(Math.random() * 4)]
            },
            advice: [
                `Embrace your ${nakshatra.qualities} nature today.`,
                `The ruling planet ${nakshatra.ruler} blesses your endeavors.`,
                `Invoke the blessings of ${nakshatra.deity} for success.`,
                `Your Nakshatra ${nakshatra.name} is aligned favorably today.`
            ]
        };
        
        return {
            sunSign: sunSign.name,
            vedic: sunSign.vedic,
            nakshatra: nakshatra.name,
            ruling_planet: nakshatra.ruler,
            deity: nakshatra.deity,
            qualities: nakshatra.qualities,
            general_prediction: horoscopeMessages.general[Math.floor(Math.random() * horoscopeMessages.general.length)],
            lucky_color: horoscopeMessages.lucky.color,
            lucky_number: horoscopeMessages.lucky.number,
            lucky_time: horoscopeMessages.lucky.time,
            lucky_direction: horoscopeMessages.lucky.direction,
            daily_advice: horoscopeMessages.advice[Math.floor(Math.random() * horoscopeMessages.advice.length)]
        };
    } catch (e) {
        console.error("Error generating horoscope:", e);
        return null;
    }
}

// Get current age calculation
function calculateAge(dob) {
    try {
        const birthDate = new Date(dob);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const mb = birthDate.getMonth();
        const m = today.getMonth();
        
        if (m < mb || (m === mb && today.getDate() < birthDate.getDate())) {
            age--;
        }
        
        return age;
    } catch (e) {
        return null;
    }
}

// Get time-based theme
function getTimeBasedTheme() {
    const now = new Date();
    const hour = now.getHours();
    
    if (hour >= 4 && hour < 12) {
        return "sunrise"; // 4 AM - 12 PM
    } else if (hour >= 12 && hour < 18) {
        return "afternoon"; // 12 PM - 6 PM
    } else if (hour >= 18 && hour < 21) {
        return "sunset"; // 6 PM - 9 PM
    } else {
        return "night"; // 9 PM - 4 AM
    }
}

// Apply theme styling to document
function applyTheme(theme) {
    const root = document.documentElement;
    
    const themes = {
        sunrise: {
            primary: "#FF6B35",
            secondary: "#FFA500",
            accent: "#FFD700",
            background: "linear-gradient(135deg, #FFA500 0%, #FFD700 50%, #87CEEB 100%)"
        },
        afternoon: {
            primary: "#4A90E2",
            secondary: "#87CEEB",
            accent: "#FFD700",
            background: "linear-gradient(135deg, #87CEEB 0%, #E0F6FF 50%, #FFFACD 100%)"
        },
        sunset: {
            primary: "#FF6347",
            secondary: "#FF8C00",
            accent: "#FF69B4",
            background: "linear-gradient(135deg, #FF6347 0%, #FFB6C1 50%, #FF8C00 100%)"
        },
        night: {
            primary: "#1A1A2E",
            secondary: "#4A5BBA",
            accent: "#FFD700",
            background: "linear-gradient(135deg, #0F3460 0%, #16213E 50%, #1A1A2E 100%)"
        }
    };
    
    const selectedTheme = themes[theme] || themes.afternoon;
    
    document.body.style.background = selectedTheme.background;
    root.style.setProperty('--primary-color', selectedTheme.primary);
    root.style.setProperty('--secondary-color', selectedTheme.secondary);
    root.style.setProperty('--accent-color', selectedTheme.accent);
}

// Initialize astrology system
function initAstrology() {
    const dobString = localStorage.getItem('userDOB');
    if (dobString) {
        // Update theme based on current time
        const theme = getTimeBasedTheme();
        applyTheme(theme);
        
        // Store horoscope
        const horoscope = generateHoroscope(dobString);
        if (horoscope) {
            localStorage.setItem('userHoroscope', JSON.stringify(horoscope));
        }
    }
}

// Start astrology system on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAstrology);
} else {
    initAstrology();
}

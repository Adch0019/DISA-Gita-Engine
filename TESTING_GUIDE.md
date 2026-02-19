# Testing Guide for DISA Gita Engine Astrology System

## Quick Start Testing

### 1. Test Real-Time Clock 🕐
**Where**: Home page (INDEX.HTML) - Top left corner
**What to look for**:
- Clock display with format HH:MM:SS
- Updates every second
- Glowing animation effect
- Golden/yellow color

**Test steps**:
1. Load INDEX.HTML
2. Look at top-left corner
3. Verify time updates every second
4. Check if animation is smooth

---

### 2. Test Time-Based Theme 🎨
**Where**: Home page - Background colors change based on time
**Themes by time**:
- **Sunrise** (4 AM - 12 PM): Orange/Gold theme
- **Afternoon** (12 PM - 6 PM): Blue theme
- **Sunset** (6 PM - 9 PM): Red/Pink theme
- **Night** (9 PM - 4 AM): Dark Blue theme

**Test steps**:
1. Open browser console
2. Type: `getTimeBasedTheme()`
3. Should return one of: "sunrise", "afternoon", "sunset", "night"
4. Current time determines the theme
5. To manually test, modify time in astrology.js `getTimeBasedTheme()` function

---

### 3. Test Get Guidance Button ✨
**Where**: Home page - Section 3 (How are you feeling?)
**What to test**:
- Button shows loading state
- Options: Confused, Fear of Failure, Lack of Discipline
- Displays Gita verse with Sanskrit, Hindi, Meaning, Example, Action

**Test steps**:
1. Scroll down to "How are you feeling?" section
2. Click "Calculate" on the age input first (to show the emotion section)
3. Select an emotion from dropdown
4. Click "Get Guidance from Gita"
5. Should see loading indicator
6. Guidance section appears with full Gita verse
7. Page scrolls to guidance section
8. User gets 10 points

**Expected results**:
- ✅ All three emotions work (confused, fear, lazy)
- ✅ Proper Sanskrit text displays
- ✅ Hindi translation appears
- ✅ Modern understanding shows
- ✅ Real-life example provided
- ✅ Action step described

**If it doesn't work**:
- Check browser console for errors
- Verify gitaData.js is loaded
- Check that GITA_DATA object exists: `console.log(GITA_DATA)`

---

### 4. Test Profile Page - DOB & Astrology 👤
**Where**: Profile page
**Section**: "Your Cosmic Profile" (top of page, orange/gold border)

**Test steps**:
1. Navigate to Profile page
2. Look for "Your Cosmic Profile" section
3. Enter a date of birth (e.g., 1990-01-15)
4. Click "Calculate" button
5. Check if the following appear:
   - ✅ Sun Sign shows both Vedic name and Western name (e.g., "Mesha (Aries)")
   - ✅ Nakshatra shows correct lunar mansion (27 options)
   - ✅ Ruling Planet shows the planet governing the nakshatra
   - ✅ Presiding Deity shows the deity of that nakshatra
   - ✅ Daily Horoscope section appears below

**Test with sample dates** (to verify accuracy):
```
1990-01-15 -> Sun Sign: Makara (Capricorn), Nakshatra: Will vary
2000-07-20 -> Sun Sign: Karka (Cancer), Nakshatra: Will vary
1985-10-02 -> Sun Sign: Tula (Libra), Nakshatra: Will vary
```

---

### 5. Test Horoscope Display 🔮
**Where**: Profile page - Under astrology info cards
**What to check**:
- 4 info cards with colors:
  - Lucky Color: Yellow card
  - Lucky Number: Green card
  - Lucky Time: Blue card
  - Lucky Direction: Pink card
- Prediction text
- Daily advice

**Test steps**:
1. After entering DOB and calculating astrology
2. Scroll down slightly
3. See "🔮 Daily Horoscope" section
4. Verify all fields are populated:
   - General Prediction (tied to planetary position)
   - Lucky Color (random but consistent)
   - Lucky Number (1-9)
   - Lucky Time (Early Morning, Noon, Evening, Night)
   - Lucky Direction (East, West, North, South)
   - Daily Advice (based on nakshatra)

---

### 6. Test DOB Persistence 💾
**Where**: Profile page
**What to test**: DOB is saved and remembered

**Test steps**:
1. Enter DOB on Profile page
2. Click Save Changes in Edit Settings (optional: also edit DOB there)
3. Navigate to another page
4. Come back to Profile page
5. ✅ DOB should still be there
6. ✅ Astrology info should be displayed
7. Refresh page (F5)
8. ✅ DOB should still be there
9. ✅ Astrology info should display again

---

### 7. Test All Pages Are Linked 🔗
**Where**: All pages should have astrology system available
**Pages to check**:
- ✅ INDEX.HTML
- ✅ dashboard.html
- ✅ lessons.html
- ✅ tasks.html
- ✅ profile.html
- ✅ leaderboard.html

**Test steps**:
1. Open browser console on each page
2. Type: `typeof calculateSunSign`
3. Should return: "function"
4. Type: `typeof NAKSHATRAS`
5. Should return: "object"

---

## Console Testing Commands

### Check Astrology System
```javascript
// Check if astrology.js is loaded
console.log("NAKSHATRAS count:", NAKSHATRAS.length);  // Should be 27
console.log("ZODIAC_SIGNS count:", ZODIAC_SIGNS.length);  // Should be 12

// Test sun sign calculation
const sign = calculateSunSign(new Date("1990-01-15"));
console.log("Sun sign for 1990-01-15:", sign);

// Test nakshatra calculation
const nakshatra = calculateNakshatra(new Date("1990-01-15"));
console.log("Nakshatra for 1990-01-15:", nakshatra);

// Test horoscope generation
const horoscope = generateHoroscope(new Date("1990-01-15"));
console.log("Horoscope:", horoscope);

// Check current theme
console.log("Current theme:", getTimeBasedTheme());

// Check if age calculation works
console.log("Age from 1990-01-15:", calculateAge("1990-01-15"));
```

### Check Data Persistence
```javascript
// Check stored DOB
console.log("Stored DOB:", localStorage.getItem('userDOB'));

// Check stored horoscope
const stored = JSON.parse(localStorage.getItem('userHoroscope') || '{}');
console.log("Stored horoscope:", stored);

// List all localStorage keys
console.log("All localStorage keys:");
for(let i = 0; i < localStorage.length; i++) {
    console.log(localStorage.key(i), ":", localStorage.getItem(localStorage.key(i)));
}
```

### Check Gita Data
```javascript
// Check if GITA_DATA is loaded
console.log("GITA_DATA loaded:", typeof GITA_DATA !== 'undefined');
console.log("Available emotions:", Object.keys(GITA_DATA || {}));

// Get specific guidance
const guidance = GITA_DATA['confused'];
console.log("Confused guidance:", guidance);
```

---

## Common Issues & Solutions

### Clock Not Showing
- **Issue**: Real-time clock doesn't appear
- **Solution**: 
  1. Check if #realTimeClock div exists in HTML
  2. Run in console: `document.getElementById('realTimeClock')`
  3. Should return the clock element
  4. Check if `initClockAndTheme()` function exists

### Astrology Info Not Showing
- **Issue**: After entering DOB, nothing shows up
- **Solution**:
  1. Check browser console for errors
  2. Verify astrology.js is loaded: `typeof calculateSunSign`
  3. Verify calculateAstrology() function works
  4. Check if DOB is valid format (YYYY-MM-DD)
  5. Try a different DOB

### Get Guidance Not Working
- **Issue**: Button doesn't respond or no guidance displays
- **Solution**:
  1. Check console for errors
  2. Verify gitaData.js loaded: `typeof GITA_DATA`
  3. Verify GITA_DATA not undefined
  4. Test emotions: `console.log(Object.keys(GITA_DATA))`
  5. Try refreshing page
  6. Check script loading order in INDEX.HTML

### Theme Not Changing
- **Issue**: Background color doesn't change
- **Solution**:
  1. Open console: `getTimeBasedTheme()`
  2. See what theme is returned
  3. Check what time of day it actually is
  4. Verify `applyTheme()` function runs
  5. Check CSS variables applied: `getComputedStyle(document.documentElement).getPropertyValue('--primary-color')`

---

## Verification Checklist

- [ ] Real-time clock shows on home page
- [ ] Clock updates every second
- [ ] Clock has glowing animation
- [ ] Can enter DOB on Profile page
- [ ] Astrology cards populate correctly
- [ ] Horoscope shows with all fields
- [ ] Get Guidance button works
- [ ] All three emotions (confused, fear, lazy) return guidance
- [ ] Theme changes based on time of day
- [ ] DOB persists after page refresh
- [ ] All pages have astrology system loaded
- [ ] Console shows no errors
- [ ] Points added when guidance accessed
- [ ] Horoscope data stored in localStorage
- [ ] Edit Settings allows editing DOB

---

## Data Validation

### Valid DOB Formats
- ✅ 1990-01-15 (YYYY-MM-DD) - Preferred
- ✅ January 15, 1990
- ✅ 01/15/1990
- ❌ 15-01-1990 (not valid in browser date picker)

### Age Range
- Recommended: 1930-2024
- System works with any valid date
- Future dates also work (for testing)

### Expected Date Ranges for Sun Signs
- **Mesha (Aries)**: March 21 - April 19
- **Vrishaba (Taurus)**: April 20 - May 20
- **Mithuna (Gemini)**: May 21 - June 20
- **Karka (Cancer)**: June 21 - July 22
- **Simha (Leo)**: July 23 - August 22
- **Kanya (Virgo)**: August 23 - September 22
- **Tula (Libra)**: September 23 - October 22
- **Vrichika (Scorpio)**: October 23 - November 21
- **Dhanu (Sagittarius)**: November 22 - December 21
- **Makara (Capricorn)**: December 22 - January 19
- **Kumbha (Aquarius)**: January 20 - February 18
- **Mina (Pisces)**: February 19 - March 20

---

## Browser Compatibility
- ✅ Chrome/Edge (Recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers
- ⚠️ IE11 (some features may not work)

---

**Last Updated**: 2024
**Status**: Ready for Testing ✅

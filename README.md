# DISA Gita Engine - Feature Guide

## ✨ New Features Added

### 1. **Multi-Language Support** 🌍

The entire website now supports 9 languages:

- **English** 🇬🇧
- **Hindi** 🇮🇳
- **Tamil** 🇮🇳
- **Kannada** 🇮🇳
- **Urdu** 🇵🇰
- **Russian** 🇷🇺
- **French** 🇫🇷
- **Portuguese** 🇵🇹
- **Sanskrit** 🇮🇳

**How to Change Language:**

1. Go to Profile
2. Click "Edit Profile"
3. Select your preferred language
4. Click "Update"
5. Page reloads with new language

### 2. **10 Daily Tasks with Point System** 📋

- **10 different tasks** appear every 24 hours
- Each task has **specific points** (8-20 points per task)
- Tasks automatically refresh every 24 hours
- Track completion status visually
- Examples:
  - Meditate (15 pts)
  - Read Gita verse (10 pts)
  - Help someone (20 pts)
  - Exercise (15 pts)
  - Journal thoughts (12 pts)
  - Practice gratitude (12 pts)
  - Study (10 pts)
  - Breathe deeply (8 pts)
  - Share wisdom (15 pts)

### 3. **Point Values Display** 💎

- Each task shows its point value clearly
- Points add up to increase rank
- Ranks: Beginner (0-99) → Seeker (100-499) → Warrior (500-999) → Enlightened (1000+)

### 4. **All 18 Bhagavad Gita Chapters** 📚

- Complete information for all 18 chapters
- Each chapter includes:
  - Title & Summary
  - Key Verse
  - Detailed Information
  - Quiz after each chapter

### 5. **Gamification System** 🎮

- **Points for Actions:**
  - Starting journey: +5 pts
  - Getting guidance: +10 pts
  - Reflection: +5 pts
  - Using lost mode: +2 pts
  - Completing lesson: +20 pts
  - Quiz answers: 5 pts per correct answer
  - Daily tasks: 8-20 pts each

- **Rank System:**
  - Beginner: 0-99 points
  - Seeker: 100-499 points
  - Warrior: 500-999 points
  - Enlightened: 1000+ points

### 6. **Global Leaderboard with Nations** 🌐

- See worldwide rankings
- Country flags displayed (IN, US, UK, FR, RU, PT, PK, CA, AU)
- Direct comparison with other users
- Simulated online users for testing

### 7. **User Profiles** 👤

- Set preferred language
- Choose nation/country
- Edit email
- Track personal stats:
  - Rank
  - Points
  - Lessons completed
  - World rank

## 📁 File Structure

```
DISA GITA ENGINE/
├── INDEX.HTML              (Home page)
├── login.html              (Login/Register)
├── dashboard.html          (User stats)
├── lessons.html            (18 chapters + quizzes)
├── tasks.html              (Daily tasks)
├── leaderboard.html        (Global rankings)
├── profile.html            (User profile & settings)
├── css/
│   ├── style.css           (Main styles)
│   ├── animations.css      (Animations)
│   └── responsive.css      (Mobile responsive)
├── js/
│   ├── app.js              (Main functionality)
│   ├── auth.js             (Login/Register)
│   ├── gamify.js           (Gamification)
│   ├── dashboard.js
│   ├── lessons.js
│   ├── tasks.js
│   ├── profile.js
│   ├── leaderboard.js
│   ├── lifecalc.js
│   └── languageSwitcher.js (Multi-language support)
└── data/
    ├── languages.js        (All language translations)
    ├── tasksData.js        (Daily tasks data)
    ├── gitaData.js         (Gita verses)
    └── gitaVersus.json
```

## 🔄 How Tasks Work

### Daily Task Refresh

- **3 new random tasks** appear every 24 hours
- Tasks refresh at midnight
- You can see next refresh time on Tasks page
- Task data stored in localStorage

### Point Calculation

- Each task has individual point value
- Completing task adds points immediately
- Points contribute to your rank
- Rank appears in navigation and dashboard

## 🌐 Language System

All pages now support language switching:

- Navigation menu updates
- All labels update
- Content displays in selected language
- Language preference saved in localStorage

## 🎯 How to Test

1. **Login:** Create account on login.html
2. **Change Language:** Go to Profile → Edit Profile
3. **Complete Tasks:** Go to Tasks page, click "Complete"
4. **Read Lessons:** Go to Lessons, select chapter
5. **Take Quiz:** After lesson, click "Take Quiz"
6. **Check Rank:** Dashboard shows your rank and points
7. **View Leaderboard:** See global rankings with countries

## 💡 Advanced Features

### Automatic Rank Updates

- Ranks update automatically when points change
- Visual feedback with colors and animations

### Task System Smart Features

- Prevents double completion
- Shows completion time
- Tracks history in localStorage
- 24-hour automatic reset

### Leaderboard Integration

- Real-time user ranking by points
- Country-based grouping possible (future)
- Mock users for testing
- Your rank highlighted in yellow

## 🚀 Future Enhancements

- Backend integration for real online users
- Database sync for all data
- Push notifications for tasks
- Social sharing
- Achievements & badges
- Meditation timer integration
- Progress analytics

## 📱 Responsive Design

- Works on desktop, tablet, mobile
- Grid layout for tasks
- Responsive tables
- Touch-friendly buttons

## 🔐 Data Storage

All user data stored in browser localStorage:

- User profiles & credentials
- Task completion status
- Daily task rotation
- Points & ranks
- Activity logs
- Language preferences

---

**Built with Love for Bhagavad Gita Learning** ✨

const TASKS_DATA = {
    en: [
        { id: 1, title: "Meditate for 10 minutes", points: 15, description: "Focus on your breath and center your mind." },
        { id: 2, title: "Read one Gita verse", points: 10, description: "Read and reflect on a verse from Bhagavad Gita." },
        { id: 3, title: "Journal your thoughts", points: 12, description: "Write down your thoughts and emotions." },
        { id: 4, title: "Practice discipline", points: 8, description: "Do one thing that requires discipline." },
        { id: 5, title: "Help someone", points: 20, description: "Perform an act of kindness." },
        { id: 6, title: "Exercise for 20 minutes", points: 15, description: "Stay physically active and healthy." },
        { id: 7, title: "Study for 30 minutes", points: 10, description: "Focus on learning something new." },
        { id: 8, title: "Practice gratitude", points: 12, description: "Write 5 things you're grateful for." },
        { id: 9, title: "Breathe deeply 50 times", points: 8, description: "Practice deep breathing exercises." },
        { id: 10, title: "Share wisdom", points: 15, description: "Share a meaningful quote or lesson." }
    ],
    hi: [
        { id: 1, title: "10 मिनट ध्यान करें", points: 15, description: "अपनी सांस पर ध्यान केंद्रित करें।" },
        { id: 2, title: "गीता की एक आयत पढ़ें", points: 10, description: "भगवद्गीता से एक श्लोक पढ़ें और चिंतन करें।" },
        { id: 3, title: "अपने विचार लिखें", points: 12, description: "अपने विचारों और भावनाओं को लिखें।" },
        { id: 4, title: "अनुशासन का अभ्यास करें", points: 8, description: "कोई एक अनुशासनमय काम करें।" },
        { id: 5, title: "किसी की मदद करें", points: 20, description: "कोई दयालु कार्य करें।" },
        { id: 6, title: "20 मिनट व्यायाम करें", points: 15, description: "शारीरिक रूप से सक्रिय रहें।" },
        { id: 7, title: "30 मिनट अध्ययन करें", points: 10, description: "कुछ नया सीखने पर ध्यान दें।" },
        { id: 8, title: "कृतज्ञता का अभ्यास करें", points: 12, description: "5 चीजें लिखें जिनके लिए आभारी हैं।" },
        { id: 9, title: "50 गहरी सांसें लें", points: 8, description: "गहरी श्वास का अभ्यास करें।" },
        { id: 10, title: "ज्ञान साझा करें", points: 15, description: "कोई सार्थक उद्धरण साझा करें।" }
    ],
    ta: [
        { id: 1, title: "10 நிமிடம் தியானம் செய்யவும்", points: 15, description: "உங்கள் சுவாசத்தில் கவனம் செலுத்துங்கள்." },
        { id: 2, title: "கீதையின் ஒரு வசனம் படிக்கவும்", points: 10, description: "பகவத் கீதையிலிருந்து ஒரு சுலோகத்தைப் படிக்கவும்." },
        { id: 3, title: "உங்கள் சிந்தனைகளைக் குறிப்பிடவும்", points: 12, description: "உங்கள் எண்ணங்கள் மற்றும் உணர்வுகளை எழுதவும்." },
        { id: 4, title: "கட்டுப்பாட்டை பயிற்சி செய்யவும்", points: 8, description: "ஒன்று செய்ய கட்டுப்பாட்டு தேவை." },
        { id: 5, title: "யாரையும் உதவிக்க", points: 20, description: "அன்பு செயல் செய்யவும்." },
        { id: 6, title: "20 நிமிடம் உடற்பயிற்சி செய்யவும்", points: 15, description: "உடல்ரீதியாக செயல்படுங்கள்." },
        { id: 7, title: "30 நிமிடம் படிக்கவும்", points: 10, description: "புதியதை கற்பதில் கவனம் செலுத்துங்கள்." },
        { id: 8, title: "நன்றியை பயிற்சி செய்யவும்", points: 12, description: "நன்றிக்குரிய 5 விஷயங்களை எழுதவும்." },
        { id: 9, title: "50 ஆழமான சுவாசத்தை செய்யவும்", points: 8, description: "ஆழமான சுவாસம் பயிற்சி செய்யவும்." },
        { id: 10, title: "ஞானத்தைப் பகிர்ந்து கொள்ளவும்", points: 15, description: "அர্థপूर்ண மேற்கோள் பகிர்ந்து கொள்ளவும்." }
    ],
    kn: [
        { id: 1, title: "10 ನಿಮಿಷ ಧ್ಯಾನ ಮಾಡಿ", points: 15, description: "ನಿಮ್ಮ ಶ್ವಾಸದಲ್ಲಿ ಫೋಕಸ ಮಾಡಿ." },
        { id: 2, title: "ಗೀತೆಯ ಒಂದು ಪದ್ಯ ಓದಿ", points: 10, description: "ಭಗವದ್‌ಗೀತೆಯಿಂದ ಒಂದು ಶ್ಲೋಕ ಓದಿ." },
        { id: 3, title: "ನಿಮ್ಮ ಆಲೋಚನೆಗಳನ್ನು ಲಿಖಿತಗೊಳಿಸಿ", points: 12, description: "ನಿಮ್ಮ ಆಲೋಚನೆಗಳು ಮತ್ತು ಸಂವೇದನೆಗಳನ್ನು ಬರೆಯಿರಿ." },
        { id: 4, title: "ಶಿಸ್ತು ಅಭ್ಯಾಸ ಮಾಡಿ", points: 8, description: "ಶಿಸ್ತು ಬೇಕಾದ ಒಂದು ಕೆಲಸ ಮಾಡಿ." },
        { id: 5, title: "ಯಾರಾದರೂ ಸಹಾಯ ಮಾಡಿ", points: 20, description: "ದಯೆಯ ಕೆಲಸ ಮಾಡಿ." },
        { id: 6, title: "20 ನಿಮಿಷ ವ್ಯಾಯಾಮ ಮಾಡಿ", points: 15, description: "ದೈಹಿಕವಾಗಿ ಸক್ರಿಯ ಉಳಿಯಿರಿ." },
        { id: 7, title: "30 ನಿಮಿಷ ಅಧ್ಯಯನ ಮಾಡಿ", points: 10, description: "ಹೊಸದನ್ನು ಕಲಿಯುವುದರಲ್ಲಿ ಫೋಕಸ ಮಾಡಿ." },
        { id: 8, title: "ಕೃತಜ್ಞತೆಯ ಅಭ್ಯಾಸ ಮಾಡಿ", points: 12, description: "ನೀವು ಕೃತಜ್ಞರಿರುವ 5 ಜಿನಿಸುಗಳನ್ನು ಬರೆಯಿರಿ." },
        { id: 9, title: "50 ಬಾರಿ ಆಳವಾದ ಶ್ವಾಸ ಮಾಡಿ", points: 8, description: "ಆಳವಾದ ಶ್ವಾಸಾಭ್ಯಾಸ ಮಾಡಿ." },
        { id: 10, title: "ಜ್ಞಾನ ಹಂಚಿಕೊಳ್ಳಿ", points: 15, description: "ಅರ್ಥಪೂರ್ಣ ಉದ್ಧರಣ ಹಂಚಿಕೊಳ್ಳಿ." }
    ]
};

function getDailyTasks() {
    let today = new Date().toDateString();
    let taskData = JSON.parse(localStorage.getItem('taskData') || '{}');
    
    if (taskData.date !== today) {
        // Get random 10 tasks from the list
        let lang = localStorage.getItem('language') || 'en';
        let langTasks = TASKS_DATA[lang] || TASKS_DATA.en;
        let allTasks = [...langTasks];
        let selectedTasks = [];
        
        while (selectedTasks.length < 10 && allTasks.length > 0) {
            let randomIndex = Math.floor(Math.random() * allTasks.length);
            selectedTasks.push(allTasks[randomIndex]);
            allTasks.splice(randomIndex, 1);
        }
        
        taskData = {
            date: today,
            tasks: selectedTasks,
            completed: []
        };
        
        localStorage.setItem('taskData', JSON.stringify(taskData));
    }
    
    return taskData;
}
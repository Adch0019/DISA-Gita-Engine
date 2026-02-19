let currentUser = localStorage.getItem('currentUser');
let users = JSON.parse(localStorage.getItem('users')) || {};
let currentLanguage = localStorage.getItem('language') || 'en';
let currentChapter = null;
let quizQuestions = [];
let currentQuestionIndex = 0;
let quizScore = 0;
let currentShlokaIndex = 0;
let currentChapterShlokas = [];

if (!currentUser) {
    window.location.href = 'login.html';
}

function loadChapters() {
    let chapters = GITA_CHAPTERS[currentLanguage];
    let list = document.getElementById('lessonList');
    list.innerHTML = '';
    chapters.forEach(ch => {
        let div = document.createElement('div');
        div.className = 'lesson';
        div.onclick = () => loadLesson(ch.chapter);
        div.innerHTML = `<h3>Chapter ${ch.chapter}: ${ch.title}</h3><p>${ch.summary}</p>`;
        list.appendChild(div);
    });
}

function loadLesson(chapterNum) {
    currentChapter = chapterNum;
    let ch = GITA_CHAPTERS[currentLanguage].find(c => c.chapter === chapterNum);
    document.getElementById('lessonTitle').innerText = `Chapter ${ch.chapter}: ${ch.title}`;
    document.getElementById('lessonDetailed').innerText = ch.detailed || "Detailed information loading...";
    document.getElementById('lessonSummary').innerText = ch.summary || "Summary not available";
    document.getElementById('lessonVerse').innerText = ch.keyVerse || "Key verse not available";
    document.getElementById('lessonThemes').innerText = (ch.themes || []).join(", ") || "Themes not available";
    document.getElementById('lessonVerses').innerText = ch.verses || "N/A";
    document.getElementById('lessonTeachings').innerText = ch.teachings || "Key teachings not available";
    document.getElementById('lessonContent').classList.remove('hidden');
    document.getElementById('quizSection').classList.add('hidden');
    
    // Initialize shlokas
    if (ch.shlokas && ch.shlokas.length > 0) {
        currentChapterShlokas = ch.shlokas;
        currentShlokaIndex = 0;
        displayShloka();
        document.getElementById('shlokaSection').classList.remove('hidden');
    } else {
        document.getElementById('shlokaSection').classList.add('hidden');
    }
    
    // Scroll to the top of lesson content
    setTimeout(() => {
        document.getElementById('lessonContent').scrollIntoView({ behavior: "smooth" });
    }, 100);
}

function displayShloka() {
    if (currentChapterShlokas.length === 0) return;
    
    const shloka = currentChapterShlokas[currentShlokaIndex];
    document.getElementById('shlokaVerseNum').innerText = `Verse ${shloka.verse}`;
    document.getElementById('shlokaText').innerText = shloka.sanskrit;
    document.getElementById('shlokaMeaning').innerText = shloka.meaning;
    document.getElementById('shlokaCounter').innerText = `Shloka ${currentShlokaIndex + 1} of ${currentChapterShlokas.length}`;
}

function nextShloka() {
    if (currentChapterShlokas.length === 0) return;
    currentShlokaIndex = (currentShlokaIndex + 1) % currentChapterShlokas.length;
    displayShloka();
}

function previousShloka() {
    if (currentChapterShlokas.length === 0) return;
    currentShlokaIndex = (currentShlokaIndex - 1 + currentChapterShlokas.length) % currentChapterShlokas.length;
    displayShloka();
}

function completeLesson() {
    if (currentUser && users[currentUser]) {
        users[currentUser].profile.lessonsCompleted += 1;
        addPoints(20);
        localStorage.setItem('users', JSON.stringify(users));
        alert('Lesson completed! Points added.');
        document.getElementById('lessonContent').classList.add('hidden');
    }
}

function startQuiz() {
    // Simple quiz questions for each chapter
    quizQuestions = [
        { question: "What is the main theme of this chapter?", options: ["Duty", "Devotion", "Knowledge", "Action"], answer: 0 },
        { question: "Who is speaking in the Gita?", options: ["Arjuna", "Krishna", "Dhritarashtra", "Sanjaya"], answer: 1 },
        { question: "What should one focus on?", options: ["Results", "Action", "Fear", "Laziness"], answer: 1 }
    ];
    currentQuestionIndex = 0;
    quizScore = 0;
    showQuestion();
    document.getElementById('lessonContent').classList.add('hidden');
    document.getElementById('quizSection').classList.remove('hidden');
}

function showQuestion() {
    let q = quizQuestions[currentQuestionIndex];
    document.getElementById('question').innerText = q.question;
    let optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';
    q.options.forEach((opt, i) => {
        let btn = document.createElement('button');
        btn.innerText = opt;
        btn.onclick = () => selectAnswer(i);
        optionsDiv.appendChild(btn);
    });
}

function selectAnswer(index) {
    if (index === quizQuestions[currentQuestionIndex].answer) {
        quizScore++;
    }
    nextQuestion();
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        showQuestion();
    } else {
        document.getElementById('quizResult').innerText = `Quiz completed! Score: ${quizScore}/${quizQuestions.length}`;
        addPoints(quizScore * 5);
        document.getElementById('quizSection').classList.add('hidden');
        document.getElementById('lessonContent').classList.remove('hidden');
    }
}

loadChapters();
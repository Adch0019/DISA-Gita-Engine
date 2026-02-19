// Language switcher functionality
function updatePageLanguage() {
    const lang = localStorage.getItem('language') || 'en';
    
    // Update all elements with data-lang attribute
    document.querySelectorAll('[data-lang]').forEach(el => {
        const key = el.getAttribute('data-lang');
        el.innerText = t(key);
    });
}

function changeLanguage(lang) {
    localStorage.setItem('language', lang);
    location.reload(); // Reload to apply language changes
}

// Call on page load
document.addEventListener('DOMContentLoaded', function() {
    updatePageLanguage();
});
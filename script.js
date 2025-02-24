const quotes = {
    happy: [
        { text: "Your smile makes my day brighter! 😊", image: "images/happy1.jpg" },
        { text: "Seeing you happy is the best gift ever. 🎁", image: "images/happy2.jpg" },
        { text: "You bring joy wherever you go! 🌞", image: "images/happy3.jpg" },
        { text: "Your happiness is contagious! 😍", image: "images/happy4.jpg" },
        { text: "I love the way you light up the world. ✨", image: "images/happy5.jpg" },
        { text: "You are my sunshine! ☀️", image: "images/happy6.jpg" },
        { text: "Happiness looks good on you. 💖", image: "images/happy7.jpg" },
        { text: "You deserve every bit of happiness! 🎉", image: "images/happy8.jpg" },
        { text: "Your laughter is the sweetest sound. 💕", image: "images/happy9.jpg" },
        { text: "Smile, because I love you so much! ❤️", image: "images/happy10.jpg" }
    ],
    angry: [
        { text: "I understand you, and I'm here for you. 💖", image: "images/angry1.jpg" },
        { text: "Breathe in, breathe out. You got this! 🌿", image: "images/angry2.jpg" },
        { text: "It’s okay to feel angry. I'm always here. ❤️", image: "images/angry3.jpg" },
        { text: "Take your time, love. No rush. 💕", image: "images/angry4.jpg" },
        { text: "Even in anger, I love you. Always. 😘", image: "images/angry5.jpg" },
        { text: "You are stronger than this moment. 💪", image: "images/angry6.jpg" },
        { text: "Let’s calm down together. 🤗", image: "images/angry7.jpg" },
        { text: "Your feelings are valid, my love. ❤️", image: "images/angry8.jpg" },
        { text: "I'm here to listen whenever you're ready. 🎧", image: "images/angry9.jpg" },
        { text: "You are loved, no matter what. 💞", image: "images/angry10.jpg" }
    ],
    sad: [
        { text: "You are never alone, my love. 💖", image: "images/sad1.jpg" },
        { text: "I am here to hold you, always. 🤗", image: "images/sad2.jpg" },
        { text: "It's okay to cry. I'm here for you. ❤️", image: "images/sad3.jpg" },
        { text: "Let me wipe your tears, my love. 😘", image: "images/sad4.jpg" },
        { text: "Sad days don’t last forever. 💕", image: "images/sad5.jpg" },
        { text: "You are stronger than you know. 💪", image: "images/sad6.jpg" },
        { text: "I love you on good and bad days. ❤️", image: "images/sad7.jpg" },
        { text: "You matter so much to me. 🌟", image: "images/sad8.jpg" },
        { text: "Come here, let me hug you. 🫂", image: "images/sad9.jpg" },
        { text: "Your sadness won’t push me away. 💞", image: "images/sad10.jpg" }
    ]
};

function showQuotes(feeling) {
    document.getElementById("feelings-container").style.display = "none";
    document.getElementById("quote-container").style.display = "block";

    let randomIndex = Math.floor(Math.random() * 10);
    let selectedQuote = quotes[feeling][randomIndex];

    document.getElementById("quote-image").src = selectedQuote.image;
    document.getElementById("quote-text").innerText = selectedQuote.text;
}

function resetPage() {
    document.getElementById("feelings-container").style.display = "block";
    document.getElementById("quote-container").style.display = "none";
}

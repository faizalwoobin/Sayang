document.addEventListener("DOMContentLoaded", function () {
    const quotes = {
        happy: [
            { text: "You're like a little ball of sunshine 🌞", image: "images/happy1.jpg" },
            { text: "Your happiness is contagious! 😄", image: "images/happy2.jpg" },
            { text: "Seeing you smile makes my whole day. 💖", image: "images/happy3.jpg" },
            { text: "Your joy is my favorite melody. 🎶", image: "images/happy4.jpg" },
            { text: "Keep shining, my love. 🌟", image: "images/happy5.jpg" }
        ],
        angry: [
            { text: "Take a deep breath, I'm here for you. ❤️", image: "images/angry1.jpg" },
            { text: "It's okay to feel this way, I understand. 🤗", image: "images/angry2.jpg" }
        ],
        sad: [
            { text: "You're not alone. I'm always here for you. 💙", image: "images/sad1.jpg" },
            { text: "Even on tough days, you are loved. 🤗", image: "images/sad2.jpg" }
        ],
        unmotivated: [
            { text: "Believe in yourself, I do. 💪", image: "images/unmotivated1.jpg" },
            { text: "You’ve come so far. Keep going. 🚀", image: "images/unmotivated2.jpg" }
        ],
        tired: [
            { text: "Rest, my love. You deserve it. 💤", image: "images/tired1.jpg" },
            { text: "Take it easy, recharge. I’ll be here. ☕", image: "images/tired2.jpg" }
        ]
    };

    const music = {
        happy: "music/happy.mp3",
        angry: "music/angry.mp3",
        sad: "music/sad.mp3",
        unmotivated: "music/unmotivated.mp3",
        tired: "music/tired.mp3"
    };

    const feelingButtons = document.getElementById("feeling-buttons");
    const quoteDisplay = document.getElementById("quote-display");
    const audio = document.getElementById("background-music");

    function showQuote(feeling) {
        // Hide other buttons
        for (let btn of feelingButtons.getElementsByTagName("button")) {
            if (btn.dataset.feeling !== feeling) {
                btn.style.display = "none";
            } else {
                btn.style.display = "inline-block";
            }
        }

        // Pick a random quote
        const randomIndex = Math.floor(Math.random() * quotes[feeling].length);
        const selectedQuote = quotes[feeling][randomIndex];

        // Display the quote & image
        quoteDisplay.innerHTML = `
            <p>${selectedQuote.text}</p>
            <img src="${selectedQuote.image}" alt="${feeling}">
        `;
        quoteDisplay.classList.remove("hidden");

        // Play music
        audio.src = music[feeling];
        audio.classList.remove("hidden");
        audio.play();
    }

    // Add event listeners to each button
    for (let btn of feelingButtons.getElementsByTagName("button")) {
        btn.addEventListener("click", function () {
            showQuote(this.dataset.feeling);
        });
    }
});

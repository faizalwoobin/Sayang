const quotes = {
    happy: [
        { text: "Your smile is my favorite thing in the world 💛", image: "quotes/happy1.jpg" },
        { text: "Seeing you happy makes my heart so full ❤️", image: "quotes/happy1.jpg" },
        { text: "Your happiness is contagious, and I love catching it! 😊", image: "quotes/happy1.jpg" },
        { text: "Even on the brightest days, you make everything shine brighter ✨", image: "quotes/happy1.jpg" },
        { text: "Your laughter is my favorite melody 🎶", image: "quotes/happy1.jpg" },
        { text: "Happiness looks so good on you 💕", image: "quotes/happy1.jpg" },
        { text: "You're like a little ball of sunshine ☀️", image: "quotes/happy1.jpg" },
        { text: "You make my world a better place just by being in it 💖", image: "quotes/happy1.jpg" },
        { text: "Your joy is my joy, always 💓", image: "quotes/happy1.jpg" },
        { text: "Keep smiling, my love, it suits you perfectly 💗", image: "quotes/happy1.jpg" }
    ],
    angry: [
        { text: "It's okay to be mad, I'm here for you 🫂", image: "quotes/angry1.jpg" },
        { text: "Take a deep breath, my love, I'm always by your side ❤️", image: "quotes/angry2.jpg" },
        { text: "Even when you're upset, I love you just the same 💕", image: "quotes/angry3.jpg" },
        { text: "You can rant to me anytime, I'm always listening 👂", image: "quotes/angry4.jpg" },
        { text: "I'm hugging you in my heart right now 🤗", image: "quotes/angry5.jpg" },
        { text: "You're strong, my love. This feeling will pass 💖", image: "quotes/angry6.jpg" },
        { text: "Let it out, don't bottle it up. I'm here 🌸", image: "quotes/angry7.jpg" },
        { text: "Anger is just a storm, and I’m your shelter ☔", image: "quotes/angry8.jpg" },
        { text: "No matter what, I’ve got you ❤️", image: "quotes/angry9.jpg" },
        { text: "You are loved, even when you feel like you aren't 💙", image: "quotes/angry10.jpg" }
    ],
    sad: [
        { text: "If I could take your sadness away, I would in a heartbeat 💛", image: "quotes/sad1.jpg" },
        { text: "You're never alone, I'm always here for you 🤍", image: "quotes/sad2.jpg" },
        { text: "I wish I could hold you right now and make everything better 🫂", image: "quotes/sad3.jpg" },
        { text: "Your feelings are valid, let yourself feel them 💙", image: "quotes/sad4.jpg" },
        { text: "You're stronger than you know, my love ❤️", image: "quotes/sad5.jpg" },
        { text: "No matter what, you are loved 💗", image: "quotes/sad6.jpg" },
        { text: "Sadness comes and goes, but my love for you stays forever 💕", image: "quotes/sad7.jpg" },
        { text: "Cry if you need to, I'm always here to wipe your tears 💖", image: "quotes/sad8.jpg" },
        { text: "You're my everything, and I'll always support you 💛", image: "quotes/sad9.jpg" },
        { text: "The world is brighter because you're in it 💜", image: "quotes/sad10.jpg" }
    ]
};

const music = {
    happy: "https://drive.google.com/file/d/1SEnbL-7WiCXS8bScQqtIkZjuF7gwgy0z/view?usp=drive_link",
    angry: "https://drive.google.com/file/d/1SEnbL-7WiCXS8bScQqtIkZjuF7gwgy0z/view?usp=drive_link",
    sad: "https://drive.google.com/file/d/1SEnbL-7WiCXS8bScQqtIkZjuF7gwgy0z/view?usp=drive_link",
    unmotivated: "https://drive.google.com/file/d/1SEnbL-7WiCXS8bScQqtIkZjuF7gwgy0z/view?usp=drive_link",
    tired: "https://drive.google.com/file/d/1SEnbL-7WiCXS8bScQqtIkZjuF7gwgy0z/view?usp=drive_link"
};

function showQuote(feeling) {
    const quoteList = quotes[feeling];
    const randomQuote = quoteList[Math.floor(Math.random() * quoteList.length)];
    
    document.getElementById("quoteDisplay").innerHTML = `
        <p>${randomQuote.text}</p>
        <img src="${randomQuote.image}" alt="${feeling}">
    `;
    
    const musicPlayer = document.getElementById("musicPlayer");
    musicPlayer.src = music[feeling];
    musicPlayer.play();
}

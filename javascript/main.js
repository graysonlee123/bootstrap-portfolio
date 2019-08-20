console.log("Hello world")

const dropdown = $("#dropdown");

const projLinks = [
    {
        name: "Hearthstone Helper",
        url: "https://github.com/graysonlee123/Hearthsone-Helper",
        description: "An all-in-one site for watching and learning about Hearthstone.",
        imagePath: "./images/hearthstone-helper.jpg"
    },
    {
        name: "Liri Node App",
        url: "https://github.com/graysonlee123/liri-node-app",
        description: "A CLI app in which users can search songs, concerts, and movies.",
        imagePath: "./images/liriNodeApp.jpg"
    },
    {
        name: "Giphy Search",
        url: "https://github.com/graysonlee123/Giphy-Search",
        description: "Search for Gifs using the Giphy API",
        imagePath: "./images/giphy.jpg"
    },
    {
        name: "Google Trivia",
        url: "https://github.com/graysonlee123/Google-Trivia",
        description: "A trivia game. Topic: Google.",
        imagePath: "./images/googleTrivia.jpg"
    },
    {
        name: "Music Hangman",
        url: "https://github.com/graysonlee123/Music-Hangman",
        description: "Hang-man like game about guessing song titles.",
        imagePath: "./images/musicHangman.jpg"
    },
    {
        name: "Crystal Collector",
        url: "https://github.com/graysonlee123/Crystal-Collector",
        description: "Mathematical memory game about lining up numbers.",
        imagePath: "./images/crystalCollector.jpg"
    }
];

projLinks.forEach(function(item, i) {
    dropdown.append(`<a href="${projLinks[i].url}"target="_blank" class="dropdown-item">${projLinks[i].name}</a>`)
})


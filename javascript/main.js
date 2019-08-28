const dropdown = $("#dropdown");

const projects = [
    {
        name: "Bamazon",
        url: "https://github.com/graysonlee123/Bamazon",
        description: "Bamazon is a reatil website that allows interaction with fake products and departments in a MySQL database.",
        imagePath: "./images/bamazon.jpg"
    },
    {
        name: "Friend Match",
        url: "https://github.com/graysonlee123/Friend-Finder",
        description: "Full-stack app to match with common friends based on a survey. Utilizes a custom API and DOM manipulation.",
        imagePath: "./images/friendMatch.jpg"
    },
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

projects.forEach(function(item, i) {
    dropdown.append(`<a href="${projects[i].url}"target="_blank" class="dropdown-item">${projects[i].name}</a>`)
})


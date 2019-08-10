console.log("Hello world")

const dropdown = $("#dropdown");

const projLinks = [
    {
        name: "Giphy Search",
        url: "https://github.com/graysonlee123/Giphy-Search"
    },
    {
        name: "Google Trivia",
        url: "https://github.com/graysonlee123/Google-Trivia"
    },
    {
        name: "Music Hangman",
        url: "https://github.com/graysonlee123/Music-Hangman"
    },
    {
        name: "Crystal Collector",
        url: "https://github.com/graysonlee123/Crystal-Collector"
    }
];

projLinks.forEach(function(item, i) {
    dropdown.append(`<a href="${projLinks[i].url}"target="_blank" class="dropdown-item">${projLinks[i].name}</a>`)
})
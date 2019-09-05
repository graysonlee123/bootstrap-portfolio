projects.forEach(function(item, i) {
    $("#dropdown").append(`
        <a href="${projects[i].url}"target="_blank" class="dropdown-item">
            ${projects[i].name}
        </a>
    `);
});
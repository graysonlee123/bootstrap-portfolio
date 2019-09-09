$(document).ready(function() {
    generateProjects();
})

function generateProjects() {
    projects.forEach( project => {
        const bgColor = project.color || "#343A40";
        $("#projectsContainer").append(
            `<div class="card">
                <img class="card-img-top" src="${project.imagePath}" alt="${project.name}">
                <div class="card-body">
                    <h5 class="card-title">${project.name}</h5>
                    <p class="card-text">${project.description}</p>
                </div>
                <div class="card-footer">
                    <a class="btn btn-primary" href="${project.url.github}" target="_blank">GitHub</a>
                    ${ project.url.live ? '<a class="btn btn-primary" href="' + project.url.live + '" target="_blank">Live</a>' : ""}
                </div>
            </div>`
        )
    });
};
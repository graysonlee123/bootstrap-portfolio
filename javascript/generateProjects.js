function generateProjects() {
    projects.forEach( item => {
        const bgColor = item.color || "#343A40";
        $("#projectsContainer").append(
        `<div class="col-12 col-sm-6">
            <a href="${item.url}" target="_blank" class="single-project-container">
                <figure class="mb-4" style="background-color: ${bgColor}; border-radius: 3px;">
                    <img src="${item.imagePath}" alt="${name}">
                    <figcaption>
                        <h2>${item.name}</h2>
                        <p class="text-muted">${item.description}</p>
                    </figcaption>
                </figure>
            </a>
        </div>`
        );
    });
};
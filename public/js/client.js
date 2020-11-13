// here is my async fetch for my gallery.
fetch(`${window.location.origin}/api/v0/gallery`)
    .then((response) => {
        return response.json(); // this makes my json returned from the server, but the return response.json makes it so it becomes a JS object.
    })
    .then((naturePhotos) => {
        console.log(naturePhotos);
        let output = "";
        naturePhotos.forEach((naturePhotos) => { // creating a forEach to go through the array 
            output += `<figure class="gallery-card">
            <img src=${naturePhotos.image_path} alt="${naturePhotos.title} Photo of: ${naturePhotos.description}">
            <figcaption>
                <h2>${naturePhotos.description}</h2>
            </figcaption>
            </figure>
            `;
        });
        document.querySelector(".gallery").innerHTML = output;
    });
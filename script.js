async function loadGallery() {
    let galleryItemsParent = document.getElementById("gallery_items")

    const galleryHtmlResponse = await fetch("templates/gallery.html")
    const galleryHtmlText = await galleryHtmlResponse.text()

    const galleryConfigResponse = await fetch("config/gallery.txt")
    const galleryConfigText = await galleryConfigResponse.text()

    const urls = galleryConfigText.split("\n")

    let galleryItems = ""
    urls.forEach(element => {
        galleryItems += galleryHtmlText.replaceAll("{url}", element).trim()
    });

    galleryItemsParent.innerHTML = galleryItems;
}

function viewFullScreen(url) {
    let fullScreenElement = document.getElementById("gallery-fullscreen");
    fullScreenElement.style.display = "block"

    let fullScreenImage = document.getElementById("gallery-fullscreen-image")
    fullScreenImage.src = url

    let content = document.getElementById("gallery-fullscreen-content");
    content.classList.add("fade-in")
}

function disableFullScreen() {
    let fullScreenElement = document.getElementById("gallery-fullscreen");
    fullScreenElement.style.display = "none"
    
}

loadGallery()




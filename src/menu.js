const createMenuPage = () => {
    const content = document.querySelector(".content-box");
    const pageContent = document.createElement("div");
    pageContent.classList.add("content");

    const titleMenu = document.createElement("h1");
    titleMenu.textContent = "Menu";
    pageContent.appendChild(titleMenu);
    
    const detailsMenu = document.createElement("p");
    detailsMenu.textContent = "Whatever my bro likes";
    pageContent.appendChild(detailsMenu);
    
    const imageMenu = document.createElement("img");
    imageMenu.src = "https://www.kulturportali.gov.tr/repoKulturPortali/large/19032013/fa4413af-45d5-42c4-a5be-d188b7bb5a71.JPG?format=jpg&quality=50";
    imageMenu.width = "400";
    pageContent.appendChild(imageMenu);

    content.appendChild(pageContent);
}

export default createMenuPage;
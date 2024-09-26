
const createHomePage = () => {
    const content = document.querySelector(".content-box");
    const pageContent = document.createElement("div");
    pageContent.classList.add("content");
    pageContent.classList.add("active");

    const titleHome = document.createElement("h1");
    titleHome.textContent = "Yunus' Meatballs";
    pageContent.appendChild(titleHome);
    
    const detailsHome = document.createElement("p");
    detailsHome.textContent = "Try delicious meatballs with our special pepper sauce";
    pageContent.appendChild(detailsHome);
    
    const imageHome = document.createElement("img");
    imageHome.src = "https://www.kulturportali.gov.tr/repoKulturPortali/large/19032013/c0cee3d0-75e1-48f1-9cae-887751316b60.JPG?format=jpg&quality=50";
    imageHome.width = "400";
    pageContent.appendChild(imageHome);

    content.appendChild(pageContent);
}

export default createHomePage;
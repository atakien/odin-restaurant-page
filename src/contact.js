const createContactPage = () => {
    const content = document.querySelector(".content-box");
    const pageContent = document.createElement("div");
    pageContent.classList.add("content");

    const titleContact = document.createElement("h1");
    titleContact.textContent = "Contact";
    pageContent.appendChild(titleContact);
    
    const detailsContact = document.createElement("p");
    detailsContact.textContent = "Phone: +905056266739";
    pageContent.appendChild(detailsContact);
    

    content.appendChild(pageContent);
}

export default createContactPage;
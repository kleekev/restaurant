const contactPage = () => {
    const main = document.getElementById("main");
    main.textContent = "";

    const contact = document.createElement("div");
    contact.id = "contact";
    const map = document.createElement("img");
    map.src = "img/map.png";

    const para = document.createElement("p");
    para.textContent = "Contact us at 226-261-COZY";

    contact.appendChild(para);
    contact.appendChild(map);

    main.append(contact);
}

export default contactPage
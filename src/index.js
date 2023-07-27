import contactPage from "./contact";
import homePage from "./home";
import menuPage from "./menu";

const createHeader = () => {
    const header = document.createElement("div");
    header.classList.add("header");

    const restaurantName = document.createElement("p");
    restaurantName.textContent = "Cozy Cafe";

    header.appendChild(restaurantName);
    header.appendChild(navBar());
    
    return header;
};

const navBar = () => {
    const nav = document.createElement("div");
    nav.classList.add("nav");

    const homeBtn = document.createElement("button");
    homeBtn.textContent = "Home";
    homeBtn.id = "home-btn";
    homeBtn.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        changeActivePage(homeBtn);
        homePage();
    });
    
    const menuBtn = document.createElement("button");
    menuBtn.textContent = "Menu";
    menuBtn.id = "menu-btn";
    menuBtn.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        changeActivePage(menuBtn);
        menuPage();
    });

    const contactBtn = document.createElement("button");
    contactBtn.textContent = "Contact";
    contactBtn.id = "contact-btn";
    contactBtn.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        changeActivePage(contactBtn);
        contactPage();
    });

    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);

    return nav;
};

const createMain = () => {
    const main = document.createElement("div");
    main.classList.add("main");
    main.id = "main";
    return main;
}

const createFooter = () => {
    const footer = document.createElement("div");
    footer.classList.add("footer");

    const myName = document.createElement("p");
    myName.textContent = "Copyright © 2023 kleekev";

    const githubLink = document.createElement("a");
    githubLink.href = "https://github.com/kleekev";

    const githubImg = document.createElement("img");
    githubImg.src = "img/git-img.png";

    footer.appendChild(myName);
    footer.appendChild(githubLink);
    footer.appendChild(githubImg);

    return footer;
}

const changeActivePage = (page) => {
    const buttons = document.querySelectorAll("button");

    buttons.forEach((button) => {
        if (button !== page) {
            button.classList.remove("active");
        }
    });

    page.classList.add("active");
}

const initialPage = () => {
    const contentDiv = document.getElementById("content");

    contentDiv.appendChild(createHeader());
    contentDiv.appendChild(createMain());
    contentDiv.appendChild(createFooter());

    changeActivePage(document.getElementById("contact-btn"));
    contactPage();
}

initialPage();
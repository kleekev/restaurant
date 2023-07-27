const menuPage = () => {
    const main = document.getElementById("main");
    main.textContent = "";

    const menu = document.createElement("div");
    menu.id = "menu";
    menu.appendChild(createMenuItem("Latte", "A creamy top layer of milk foam seeps into Asian imported tea to create a lightly sweetened beverage with a dash of sea salt."));
    menu.appendChild(createMenuItem("Matcha Tea", "A creamy top layer of milk foam seeps into Asian imported tea to create a lightly sweetened beverage with a dash of sea salt."));
    menu.appendChild(createMenuItem("Coffee Cake", "Coffee cream with layers of chocolate cake."));
    menu.appendChild(createMenuItem("Chocolate Cake", "Layers of flourless dark chocolate cake, milk chocolate, and light white chocolate mousse."));
    main.appendChild(menu);
};

const createMenuItem = (name, description) => {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");
    const foodName = document.createElement("h1");
    const foodDsptn = document.createElement("p");
    const img = document.createElement("img");

    foodName.textContent = name;
    foodDsptn.textContent = description;
    img.src = `img/${name.toLowerCase().replaceAll(" ", "")}.jpg`;

    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDsptn);
    menuItem.appendChild(img);

    return menuItem;
}

export default menuPage
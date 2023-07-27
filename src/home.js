const homePage = () => {
    const main = document.getElementById("main");
    main.textContent = "";
    const div = document.createElement("div");

    div.appendChild(createP("Coziest cafe in the city!"));
    div.appendChild(createP("We have pillows and blankets so you can take a nap"));

    const coffeeImg = document.createElement("img");
    coffeeImg.src = "img/coffee.jpg";
    coffeeImg.id = "coffee-img";
    div.appendChild(coffeeImg);
    main.appendChild(div);
};

const createP = (text) => {
    const pElement = document.createElement("p");
    pElement.textContent = text;
    return pElement;
}
export default homePage
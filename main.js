(()=>{"use strict";const e=()=>{const e=document.getElementById("main");e.textContent="";const t=document.createElement("div");t.id="contact";const n=document.createElement("img");n.src="img/map.png";const a=document.createElement("p");a.textContent="Contact us at 226-261-COZY",t.appendChild(a),t.appendChild(n),e.append(t)},t=e=>{const t=document.createElement("p");return t.textContent=e,t},n=(e,t)=>{const n=document.createElement("div");n.classList.add("menu-item");const a=document.createElement("h1"),c=document.createElement("p"),d=document.createElement("img");return a.textContent=e,c.textContent=t,d.src=`img/${e.toLowerCase().replaceAll(" ","")}.jpg`,n.appendChild(a),n.appendChild(c),n.appendChild(d),n},a=()=>{const a=document.createElement("div");a.classList.add("nav");const d=document.createElement("button");d.textContent="Home",d.id="home-btn",d.addEventListener("click",(e=>{e.target.classList.contains("active")||(c(d),(()=>{const e=document.getElementById("main");e.textContent="";const n=document.createElement("div");n.appendChild(t("Coziest cafe in the city!")),n.appendChild(t("We have pillows and blankets so you can take a nap"));const a=document.createElement("img");a.src="img/coffee.jpg",a.id="coffee-img",n.appendChild(a),e.appendChild(n)})())}));const o=document.createElement("button");o.textContent="Menu",o.id="menu-btn",o.addEventListener("click",(e=>{e.target.classList.contains("active")||(c(o),(()=>{const e=document.getElementById("main");e.textContent="";const t=document.createElement("div");t.id="menu",t.appendChild(n("Latte","A creamy top layer of milk foam seeps into Asian imported tea to create a lightly sweetened beverage with a dash of sea salt.")),t.appendChild(n("Matcha Tea","A creamy top layer of milk foam seeps into Asian imported tea to create a lightly sweetened beverage with a dash of sea salt.")),t.appendChild(n("Coffee Cake","Coffee cream with layers of chocolate cake.")),t.appendChild(n("Chocolate Cake","Layers of flourless dark chocolate cake, milk chocolate, and light white chocolate mousse.")),e.appendChild(t)})())}));const i=document.createElement("button");return i.textContent="Contact",i.id="contact-btn",i.addEventListener("click",(t=>{t.target.classList.contains("active")||(c(i),e())})),a.appendChild(d),a.appendChild(o),a.appendChild(i),a},c=e=>{document.querySelectorAll("button").forEach((t=>{t!==e&&t.classList.remove("active")})),e.classList.add("active")};(()=>{const t=document.getElementById("content");t.appendChild((()=>{const e=document.createElement("div");e.classList.add("header");const t=document.createElement("p");return t.textContent="Cozy Cafe",e.appendChild(t),e.appendChild(a()),e})()),t.appendChild((()=>{const e=document.createElement("div");return e.classList.add("main"),e.id="main",e})()),t.appendChild((()=>{const e=document.createElement("div");e.classList.add("footer");const t=document.createElement("p");t.textContent="Copyright © 2023 kleekev";const n=document.createElement("a");n.href="https://github.com/kleekev";const a=document.createElement("img");return a.src="img/git-img.png",e.appendChild(t),e.appendChild(n),e.appendChild(a),e})()),c(document.getElementById("contact-btn")),e()})()})();
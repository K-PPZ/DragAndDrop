const divs = document.querySelectorAll("div");
const section = document.querySelector("section");


for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener("dragend", () => {
        let newdiv = document.createElement("div");
        newdiv.classList.add(divs[i].classList[0]);
        section.appendChild(newdiv);
    });
}
const button = document.getElementById("sol");
const body = document.querySelector("body");
const img = document.getElementById("sol");
const borda = document.getElementById("bord");
const bordaDois = document.getElementById("bord-2");

button.addEventListener("click", () => {
    const temaAtivo = body.classList.contains("sol");

    if (temaAtivo) {
        body.classList.remove("sol");
        body.style.background = "url(imagens/racoon-city-night.png) no-repeat";
        body.style.backgroundColor = "black";
        body.style.backgroundSize = "cover";
        body.style.backgroundPosition = "center-top";
        img.src = "imagens/lua.png";
        img.style.width = "50px";
        img.style.marginLeft = "200px";
        img.style.marginBottom = "40px";
        borda.style.borderColor = "rgb(54, 18, 78)";
        bordaDois.style.borderColor = "rgb(54, 18, 78)";
    } else {
        body.style.transition = "0.2s ease-in-out"
        body.classList.add("sol");
        body.style.background = "url(imagens/racoon-city-day.png) no-repeat";
        body.style.backgroundColor = "black";
        body.style.backgroundSize = "cover";
        body.style.backgroundPosition = "center-top";
        img.src = "imagens/sol.png";
        borda.style.borderColor = "lightblue";
        bordaDois.style.borderColor = "lightblue";
    }
});

// function mudarTema() {
//     body.style.background = "url(imagens/racoon-city-day.png) no-repeat";
//     body.style.backgroundColor = "black";
//     body.style.backgroundSize = "cover";
//     body.style.backgroundPosition = "center-top";
//     img.src = "imagens/sol.png";
//     img.style.width = "100px";
//     img.style.marginTop = "20px";
//     img.style.marginLeft = "183px";
// }
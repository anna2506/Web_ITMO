const second = require('./second');

let start = function(){
    if (localStorage.id == 2){
        while (document.body.firstElementChild)
        {
            document.body.removeChild(document.body.firstElementChild);
        }
        return second.render();
    }
    while (document.body.firstElementChild)
    {
        document.body.removeChild(document.body.firstElementChild);
    }
    localStorage.id = 1;
    document.body.setAttribute("style", "background: #9477e4; margin: 0; padding: 0");
    let photo = document.createElement('div');
    let img = document.createElement('img');
    photo.style.margin = "10px";
    photo.style.display = "flex";
    photo.style.justifyContent = "center";
    img.src = "images/me.JPG";
    img.style.borderRadius = "45%";
    photo.appendChild(img);
    document.body.appendChild(photo);

    const list = document.createElement("li");
    const ul = document.createElement('ul');
    list.innerHTML = "Дощенко Анна";
    ul.appendChild(list);


    const name = document.createElement('h1');
    const info = document.createElement("div");
    info.style.display = "flex";
    info.style.flex = "1";
    info.style.justifyContent = "center";
    info.style.flexWrap = "wrap";
    name.innerHTML = "Дощенко Анна";
    name.style.color = "#bf0d3d";
    name.style.display = "flex";
    name.style.width = "100%";
    name.style.justifyContent = "center";
    name.style.margin = "3px";
    name.style.fontFamily = "Brush Script Std, cursive";
    info.appendChild(name);
    let restInfo = document.createElement("p");
    restInfo.className = "personal.info";
    restInfo.style.display = "flex";
    restInfo.style.justifyContent = "center";
    restInfo.style.flex = "1";
    restInfo.style.textAlign = "center";
    restInfo.style.padding = "5px";
    restInfo.innerHTML = "Студентка группы М3307. Член сборной по алтимат-фрисби. </br> В свободное время люблю проводить время с друзьями и заниматься спортом.";
    info.appendChild(restInfo);
    restInfo.style.color = "#070311";
    restInfo.style.fontSize = "16pt";
    restInfo.style.margin = "0";
    restInfo.style.fontFamily = "Brush Script Std, cursive";
    document.body.appendChild(info);


    let button = document.createElement("div");
    let pockemonButton = document.createElement("button");
    pockemonButton.innerHTML = "Get pockemon";
    pockemonButton.style.background = "none";
    pockemonButton.style.border = "3px solid #070311";
    pockemonButton.style.fontWeight = "bold";
    pockemonButton.style.cursor = "pointer";
    pockemonButton.style.borderRadius = "15px";
    pockemonButton.style.height = "50px";
    pockemonButton.style.width = "150px";
    pockemonButton.style.color = "#070311";
    pockemonButton.style.fontSize = "12pt";
    hover = pockemonButton.addEventListener("mouseenter", function () {
        pockemonButton.style.transitionDuration = "0.3s";
        pockemonButton.style.backgroundColor = "#bf0d3d";
        pockemonButton.style.border = "3px solid #bf0d3d";
        pockemonButton.style.color = "white";
    });
    leave = pockemonButton.addEventListener("mouseleave", function () {
        pockemonButton.style.transitionDuration = "0.3s";
        pockemonButton.style.background = "none";
        pockemonButton.style.border = "3px solid #070311";
        pockemonButton.style.color = "#070311";
    });
    button.style.margin = "30px";
    button.style.display = "flex";
    button.style.justifyContent = "center";
    button.appendChild(pockemonButton);
    document.body.appendChild(button);

    click = pockemonButton.addEventListener("click", async function () {
        second.render();
    });

};

start();

module.exports.start = start;







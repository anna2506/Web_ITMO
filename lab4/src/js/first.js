import {render} from './second';

export function start(){
    if (localStorage.id == 2){
        while (document.body.firstElementChild)
        {
            document.body.removeChild(document.body.firstElementChild);
        }
        return render();
    }
    while (document.body.firstElementChild)
    {
        document.body.removeChild(document.body.firstElementChild);
    }
    localStorage.id = 1;
    document.body.setAttribute("style", "background: #9477e4; margin: 0; padding: 0");
    let photo = document.createElement('div');
    photo.className = 'photo';
    let img = document.createElement('img');
    img.className = 'img';
    img.src = "images/me.JPG";
    photo.appendChild(img);
    document.body.appendChild(photo);

    let list = document.createElement("li");
    let ul = document.createElement('ul');
    list.innerHTML = "Дощенко Анна";
    ul.appendChild(list);


    let name = document.createElement('h1');
    name.className = 'name';
    let info = document.createElement("div");
    info.className = 'info';
    name.innerHTML = "Дощенко Анна";
    info.appendChild(name);
    let restInfo = document.createElement("p");
    restInfo.className = 'rest-info';
    restInfo.innerHTML = "Студентка группы М3307. Член сборной по алтимат-фрисби. </br> В свободное время люблю проводить время с друзьями и заниматься спортом.";
    info.appendChild(restInfo);

    document.body.appendChild(info);


    let button = document.createElement("div");
    button.className = 'button';
    let pockemonButton = document.createElement("button");
    pockemonButton.className = "pockemon-button";
    pockemonButton.innerHTML = "Get pockemon";
    button.appendChild(pockemonButton);
    document.body.appendChild(button);

    let second =  function(){
        render();
    };

    pockemonButton.addEventListener("click", async function () {
        second();
    });
    pockemonButton.removeEventListener("click", async function() {
        second()
    });

}

start();








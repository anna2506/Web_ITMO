import {render} from './second';

export function start(){
    const content = document.getElementById('root');
    if(localStorage.id == 2){
        while(content.firstElementChild){
            content.removeChild(content.firstElementChild);
        }
        return render();
    }
    while (content.firstElementChild)
    {
        content.removeChild(content.firstElementChild);
    }
    localStorage.id = 1;
    content.className = 'first-page';
    localStorage.id = 1;
    document.body.className = 'first';
    let photo = document.createElement('div');
    photo.className = 'photo';
    let img = document.createElement('img');
    img.className = 'img';
    img.src = "images/me.JPG";
    photo.appendChild(img);
    content.appendChild(photo);
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
    content.appendChild(info);
    let button = document.createElement("div");
    button.className = 'button';
    let pockemonButton = document.createElement("button");
    pockemonButton.className = "pockemon-button";
    pockemonButton.innerHTML = "Get pockemon";
    button.appendChild(pockemonButton);
    content.appendChild(button);
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








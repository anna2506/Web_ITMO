export function start(){
    const content = document.getElementById('root');
    let pokemonButton = document.getElementById('pockemon-button');
    let infoButton = document.getElementById('info-button');
    pokemonButton.className = 'first-button';
    infoButton.className = 'first-button';
    content.innerHTML = '';
    content.className = 'first-page';
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
}








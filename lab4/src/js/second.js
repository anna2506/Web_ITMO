import {start} from './first';

export function render() {
    localStorage.id = 2;
    const content = document.getElementById('root');
    while (content.firstElementChild)
    {
        content.removeChild(content.firstElementChild);
    }
    content.className = 'second-page';
    document.body.className = 'second';
    let name = document.createElement('span');
    name.className = 'pocke-name';
    let abilities = document.createElement('div');
    let header = document.createElement('h1');
    header.className = 'header';
    header.innerHTML = "Abilities";
    async function getPockemon() {
        let id = Math.floor(Math.random() * (808));
        const url = 'https://pokeapi.co/api/v2/pokemon/' + id.toString() + '/';
        const response = await fetch(url, {method: 'GET'});
        const json = await response.json();
        name.innerHTML = json.name;
        let array = [];
        for (let i = 0; i < json.abilities.length; i++) {
            console.log(i);
            array.push(json.abilities[i]);
            let abilityName = json.abilities[i].ability.name;
            let abilityURL = json.abilities[i].ability.url;
            let div = document.createElement('div');
            div.className = 'div';
            let ability = document.createElement('span');
            ability.className = 'ability';
            let description = document.createElement('p');
            description.className = 'description';
            ability.innerHTML = abilityName;
            div.appendChild(ability);
            content.appendChild(div);
            async function apiCall(url) {
                const response = await fetch(url, {method: 'GET'});
                const json = await response.json();
                let desr = json.effect_entries[0].effect;
                console.log(desr);
                description.innerHTML = desr;
                div.appendChild(description);
            }

            await apiCall(abilityURL);
            abilities.appendChild(div);
        }
    }
    getPockemon();
    content.appendChild(name);
    abilities.appendChild(header);
    content.appendChild(abilities);
    let button = document.createElement("div");
    button.className = 'button';
    let personalInfoButton = document.createElement("button");
    personalInfoButton.className = 'info-button';
    personalInfoButton.innerHTML = "Get personal Info";
    button.appendChild(personalInfoButton);
    content.appendChild(button);
    let click = function(){
        localStorage.id = 1;
        start();
    };
    personalInfoButton.addEventListener("click", async function () {
        localStorage.id = 1;
        return click();
    });
    personalInfoButton.removeEventListener("click", async function() {
        return click();
    })

}

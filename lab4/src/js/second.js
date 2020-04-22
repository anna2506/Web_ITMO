export function render() {
    const content = document.getElementById('root');
    content.className = 'second-page';
    content.innerHTML = '';
    let pokemonButton = document.getElementById('pockemon-button');
    let infoButton = document.getElementById('info-button');
    pokemonButton.className = 'second-button';
    infoButton.className = 'second-button';
    document.body.className = 'second';
    let name = document.createElement('span');
    name.className = 'pocke-name';
    let abilities = document.createElement('div');
    let header = document.createElement('h1');
    header.className = 'header';
    header.innerHTML = "Abilities";
    async function getPokemon() {
        let id = Math.floor(Math.random() * (808));
        const url = 'https://pokeapi.co/api/v2/pokemon/' + id.toString() + '/';
        const response = await fetch(url, {method: 'GET'});
        const json = await response.json();
        name.innerHTML = json.name;
        let array = [];
        for (let i = 0; i < json.abilities.length; i++) {
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
                description.innerHTML = desr;
                div.appendChild(description);
            }
            await apiCall(abilityURL);
            abilities.appendChild(div);
        }
    }
    getPokemon().then();
    content.appendChild(name);
    abilities.appendChild(header);
    content.appendChild(abilities);
}

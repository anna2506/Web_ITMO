const first = require('./first');

var render = function() {
    localStorage.id = 2;
    while (document.body.firstElementChild)
    {
        document.body.removeChild(document.body.firstElementChild);
    }
    document.body.setAttribute("style", "background: #02ded3; margin: 0; padding: 0");
    var name = document.createElement('span');
    name.style.display = "flex";
    name.style.justifyContent = "center";
    name.style.padding = "20px";
    name.style.fontWeight = "bold";
    name.style.fontSize = "30pt";
    name.style.color = "#6a2bfc";
    name.style.fontFamily = "Brush Script Std, cursive";
    var abilities = document.createElement('div');
    const header = document.createElement('h1');
    header.style.color = "#0c013c";
    header.style.display = "flex";
    header.style.justifyContent = "center";
    header.style.margin = "0";
    header.style.fontFamily = "Brush Script Std, cursive";
    header.innerHTML = "Abilities";

    async function getPockemon() {
        let id = Math.floor(Math.random() * (808));
        let url = 'https://pokeapi.co/api/v2/pokemon/' + id.toString() + '/';
        const response = await fetch(url, {method: 'GET'});
        const json = await response.json();
        name.innerHTML = json.name;
        const array = [];
        for (let i = 0; i < json.abilities.length; i++) {
            console.log(i);
            array.push(json.abilities[i]);
            abilityName = json.abilities[i].ability.name;
            abilityURL = json.abilities[i].ability.url;
            var div = document.createElement('div');
            div.style.display = "flex";
            div.style.justifyContent = "center";
            div.style.flex = "1";
            div.style.alignItems = "center";
            div.style.flexWrap = "wrap";
            div.style.width = "300px";
            div.style.border = "2px solid #6a2bfc";
            div.style.borderRadius = "15px";
            div.style.margin = "10px auto";
            div.style.padding = "5px";
            var ability = document.createElement('span');
            ability.style.display = "flex";
            ability.style.justifyContent = "center";
            ability.style.color = "#6a2bfc";
            ability.style.margin = '5px';
            ability.style.fontWeight = 'bold';
            ability.style.fontSize = '14pt';
            ability.style.fontFamily = "Brush Script Std, cursive";
            var description = document.createElement('p');
            description.style.margin = "0";
            description.style.textAlign = "center";
            description.style.color = "#0c013c";
            description.style.fontFamily = "Brush Script Std, cursive";
            ability.innerHTML = abilityName;
            div.appendChild(ability);
            document.body.appendChild(div);

            async function apiCall(url) {
                const response = await fetch(url, {method: 'GET'});
                const json = await response.json();
                var desr = json.effect_entries[0].effect;
                console.log(desr);
                description.innerHTML = desr;
                div.appendChild(description);
            }

            await apiCall(abilityURL);
            abilities.appendChild(div);
        }
    }

    getPockemon();
    document.body.appendChild(name);
    abilities.appendChild(header);
    document.body.appendChild(abilities);

    var button = document.createElement("div");
    var personalInfoButton = document.createElement("button");
    personalInfoButton.innerHTML = "Get personal Info";
    personalInfoButton.style.background = "none";
    personalInfoButton.style.border = "3px solid #0c013c";
    personalInfoButton.style.fontWeight = "bold";
    personalInfoButton.style.cursor = "pointer";
    personalInfoButton.style.borderRadius = "15px";
    personalInfoButton.style.height = "50px";
    personalInfoButton.style.width = "150px";
    personalInfoButton.style.color = "#0c013c";
    personalInfoButton.style.fontSize = "12pt";
    hover = personalInfoButton.addEventListener("mouseenter", function () {
        personalInfoButton.style.transitionDuration = "0.3s";
        personalInfoButton.style.backgroundColor = "#6a2bfc";
        personalInfoButton.style.border = "3px solid #6a2bfc";
        personalInfoButton.style.color = "white";
    });
    leave = personalInfoButton.addEventListener("mouseleave", function () {
        personalInfoButton.style.transitionDuration = "0.3s";
        personalInfoButton.style.background = "none";
        personalInfoButton.style.border = "3px solid #0c013c";
        personalInfoButton.style.color = "#0c013c";
    });
    button.style.margin = "30px";
    button.style.display = "flex";
    button.style.justifyContent = "center";
    button.appendChild(personalInfoButton);
    document.body.appendChild(button);

    click = personalInfoButton.addEventListener("click", async function () {
        localStorage.id = 1;
        first.start();
    });

};


module.exports.render = render;

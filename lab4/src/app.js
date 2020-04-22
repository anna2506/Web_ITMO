import {start} from './js/first.js'
import {render} from'./js/second.js'


const second = function () {
    render();
};
if(localStorage.id == 2){
    second();
}
else{
    start();
}

const pokemonButton = document.getElementById('pockemon-button');
const infoButton = document.getElementById('info-button');

pokemonButton.onclick = function(){
    second();
    localStorage.id = 2;
};

infoButton.onclick = function(){
    start();
    localStorage.id = 1;
};


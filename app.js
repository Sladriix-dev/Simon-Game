// Initialisation des boutons
const startBtn = document.querySelector('#start');
const green = document.querySelector('.green');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const blue = document.querySelector('.blue');
const reset = document.querySelector('#reset');
const roundCount = document.querySelector('#level')

let player = [];
let simon = [];
let rounds = 0;
let color;
let id;
let totalRounds = 20;

// Cette function commence après avoir cliqué sur le bouton start et check le nombre aléatoire qui a été ajouté au tableau simons
const simonSequence = () => {
    startBtn.setAttribute('disabled,', disabled);
    rounds++;
    roundCount.innerHTML = rounds;
    randomNumber();
    let i = 0;
    let interval = setInterval(() => {
        id = simon[i];
        if (id === 0) {
            color = document.querySelector('.green').getAttribute('class').split(' ')[1];
        }
        else if (id === 1) {
            color = document.querySelector('.red').getAttribute('class').split(' ')[1];
        }
        else if (id === 2) {
            color = document.querySelector('.yellow').getAttribute('class').split(' ')[1];
        }
        else if (id === 3) {
            color = document.querySelector('.blue').getAttribute('class').split(' ')[1];
        } else {
            return
        }
        activateColor(id, color);
        i++;
        if (simon.length === i) {
            clearTimeout(interval)
        }
    }, 800)
}

// Génère un nombre random a chaque fois que la fonction est appelé et l'ajoute dans le tableau simons
const randomNumber = () => {
    let random = Math.floor(Math.random() * 4);
    simon.push(random);
}

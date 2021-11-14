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
let soundEffects = [
    "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3", // Green
    "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3", // Red
    "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3", // Yellow
    "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3", // Blue
]

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

// Ajout d'une couleur plus claire après un clique
const activateColor = (id, color) => {
    document.getElementById(id).classList.add(color + '-active');
    playSound(id);
    setTimeout(() => {
        document.getElementById(id).classList.remove(color + '-active');
    }, 500);
}

// Vérifie la séquence du joueur après chaque click
const playerSequence = () => {
    if (checkSequence() === false) {
        wrongColor();
        simonSequence();
    } else if (player.length === simon.length && player.length < totalRounds) {
        simonSequence();
        player = [];
    } if (player.length === totalRounds) {
        alert('Vous avez gagné !')
        resetGame();
    }
}

// Vérifie si l'array simon est le meme que celui du joueur
const checkSequence = () => {
    for (let i = 0; i < player.length; i++) {
        if (player[i] != simon[i]) {
            return false
        }
    }
    return true
}

// Reset le jeu
const resetGame = () => {
    player = [];
    simon = [];
    rounds = 0;
    roundCount.innerHTML = rounds;
    startBtn.removeAttribute('disabled', disabled);
}

// Click sur la mauvaise couleur
const wrongColor = () => {
    let wrong = setInterval(() => {
        alert('OUPS!!! Vous avez cliqué sur la mauvaise couleur ! Recommencez')
        resetGame();
        clearInterval(wrong);
    }, 150)
}

// Sound function
const playSound = (id) => {
    let sound = new Audio(soundEffects[id]);
    sound.play();
}


/////// Event listeners //////////

window.addEventListener('DOMContentLoaded', () => {
    //Rules
    const openBtn = document.querySelector('#open-rules');
    const rules = document.querySelector('#rules');
    const closeBtn = document.querySelector('#close');
    openBtn.addEventListener('click', openRules);
    closeBtn.addEventListener('click', closeRules);

    // Start & Reset
    startBtn.addEventListener('click', simonSequence);
    reset.addEventListener('click', resetGame);

    // Green
    green.addEventListener('click', () => {
        id = green.getAttribute('id');
        color = green.getAttribute('class').split(' ')[1];
        green.classList.add('color' + '-active');
        setTimeout(() => {
            green.classList.remove(color + '-active');
        }, 300);
        player.push(parseInt(id));
        activateColor(id, color);
        playerSequence();
    });

    // Red
    red.addEventListener('click', () => {
        id = red.getAttribute('id');
        color = red.getAttribute('class').split(' ')[1];
        red.classList.add('color' + '-active');
        setTimeout(() => {
            red.classList.remove(color + '-active');
        }, 300);
        player.push(parseInt(id));
        activateColor(id, color);
        playerSequence();
    });

    // Yellow
    yellow.addEventListener('click', () => {
        id = yellow.getAttribute('id');
        color = yellow.getAttribute('class').split(' ')[1];
        yellow.classList.add('color' + '-active');
        setTimeout(() => {
            yellow.classList.remove(color + '-active');
        }, 300);
        player.push(parseInt(id));
        activateColor(id, color);
        playerSequence();
    });

    // Blue
    blue.addEventListener('click', () => {
        id = blue.getAttribute('id');
        color = blue.getAttribute('class').split(' ')[1];
        blue.classList.add('color' + '-active');
        setTimeout(() => {
            blue.classList.remove(color + '-active');
        }, 300);
        player.push(parseInt(id));
        activateColor(id, color);
        playerSequence();
    });

});

const openRules = () => {
    rules.style.display = 'block';
}

const closeRules = () => {
    rules.style.display = 'none';
}

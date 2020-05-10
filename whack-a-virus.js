// on va chercher les éléments boxes, scoreBoard, viruses dans
//  leurs nodeList statiques respectives (.box, .virus ...)
URL = "https://api.whatdoestrumpthink.com/api/v1/quotes";

const list = document.getElementById("quotes");

function start() {
    axios
        .get(URL)
        .then(res => {
            console.log(res.data);
            display(res.data.results)
        })
        .catch((err) => console.error(err))
}

const boxes = document.querySelectorAll('.box');
const scoreBoard = document.querySelector('.score');
const viruses = document.querySelectorAll('.virus');

let lastBox;
let timeUp = false;
let score = 0;

// faire apparaître les virus pendant une durée aléatoire
//  (comprise entre un min et un max)
function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
// math.round = retourne un nbr de millisecondes arrondi


// faire apparaître des virus de manière aléatoire
function randomBox(boxes) {
    const i = Math.floor(Math.random() * boxes.length);
    const box = boxes[i];

}

function infect() {
    // fourchette de durées possibles
    const time = randomTime(500, 1200);
    // boîtes qu'on peut appeler
    const box = randomBox(boxes);
    // faire en sorte qu'une boîte pop up
    box.classList.add('up');
    // et redescende une fois le time lapse passé
    setTimeout(() => {
        box.classList.remove('up');
        // répéter l'opération avec une nouvelle boîte
        if (!timeUp) {
            infect();
        }
        // jusqu'à ce que le temps du jeu soit écoulé
    }, time);
}


// on relance la partie
function pandemicBegins() {
    // conditions de départ
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    // c'est parti
    infect();
    // jusqu'à la fin choisie : au bout de 30s
    setTimeout(() => timeUp = true, 30000)
}

// actions suite au clic sur un virus
function hit(e) {
    // vérification auto de la fiabilité du clic (pour s'assurer qu'il n'a pas été généré en JS)
    if (!e.isTrusted) return;
    // si c'est bon on incrémente le score
    score++;
    // le virus cliqué redescend dans le nuage
    this.parentNode.classList.remove('up');
    // nouveau score incrémenté affiché
    scoreBoard.textContent = score;
}
// pour savoir quand un virus est cliqué
viruses.forEach(virus => virus.addEventListener('click', hit))
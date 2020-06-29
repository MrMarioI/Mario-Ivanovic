URL = "https://api.whatdoestrumpthink.com/api/v1/quotes";

const list = document.getElementById("quotes");
//const boxes = document.querySelectorAll('.box');


function start() {
    axios
        .get(URL)
        .then(res => {
            console.log(res.data);
            display(res.data.results)
        })
        .catch((err) => console.error(err))
}


function display(quotes) {
    list.innerHTML = "";

<<<<<<< HEAD
    quote.forEach(quotes => {
        console.log(quotes);
        list.innerHTML += `<button class="btn" data-url="${quotes.url}">Random</button>
=======
    pokemons.forEach(pokemon => {
        console.log(pokemon);
        list.innerHTML += `<li class="item"><span>${pokemon.name}</span><br>
        <button class="btn" data-url="${pokemon.url}">More</button>
>>>>>>> parent of 76c69cf... new one
        </li>`;

    });
    const btns = list.querySelectorAll(".btn");
    btns.forEach((btn) => (btn.onclick = displayMore));
}

function displayMore(evt) {
    const URLOne = evt.target.getAttribute("data-url");
    const details = document.getElementById("details");
    details.classList.remove("is-hidden");
    axios
        .get(URLOne)
        .then((res) => {
            const quotes = res.data;
            console.log(quotes);

        })

    .catch((err) => console.error(err));
}
// function randomBox(boxes) {
//     const i = Math.floor(Math.random() * boxes.length);
//     const box = boxes[i];

// }

// function hit(e) {
// vérification auto de la fiabilité du clic (pour s'assurer qu'il n'a pas été généré en JS)
//     if (!e.isTrusted) return;
// si c'est bon on incrémente le score
//     score++;
// le virus cliqué redescend dans le nuage
//     this.parentNode.classList.remove('up');
// nouveau score incrémenté affiché
//     scoreBoard.textContent = score;
// }
// pour savoir quand un virus est cliqué
// viruses.forEach(virus => virus.addEventListener('click', hit))

document.getElementById("start").onclick = start;



//const userAction = async() => {
//  const response = await fetch('https://api.whatdoestrumpthink.com/api/v1/quotes');
//  const myJson = await response.json();
//}

//const get = async() => {
// const response = await fetch('https://api.whatdoestrumpthink.com/api/v1/quotes', {
//    method: 'POST',
//    body: myBody, // string or object
//    headers: {
//       'Content-Type': 'application/json'
//    }
//});
//const MYJson = await response.json(); //extract JSON from the http response
// do something with MYJson
//}
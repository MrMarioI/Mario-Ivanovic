URL = "https://api.whatdoestrumpthink.com/api/v1/quote/random/";


function start() {
    axios
        .get(URL)
        .then(res => display(res.data.results))
        .catch((err) => console.error(err))
}


function display(quotes) {
    list.innerHTML = "";

    pokemons.forEach(pokemon => {
        console.log(pokemon);
        list.innerHTML += `<li class="item"><span>${pokemon.name}</span><br>
        <button class="btn" data-url="${pokemon.url}">More</button>
        </li>`;

    });
    const btns = list.querySelectorAll(".btn");
    btns.forEach((btn) => (btn.onclick = displayMore));
}
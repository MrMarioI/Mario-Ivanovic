URL = "https://api.whatdoestrumpthink.com/api/v1/quotes";

const list = document.getElementById("quotes");

function start() {
    axios
        .get(URL)
        .then(res => {
            console.log(res.data);
            display(res.data)
        })
        .catch((err) => console.error(err))
}


function getQuotes(quotes) {
    list.innerHTML = "";

    quote.forEach(quotes => {
        console.log(quotes);
        list.innerHTML += `<button class="btn" data-url="${quotes.url}">Random</button>
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
 URL = "https://api.whatdoestrumpthink.com/api/v1/quotes";

 //const URL = "https://api.whatdoestrumpthink.com/api/v1/quotes";

 const list = document.getElementById("quote");
 const click = document.getElementById("button")

 // on va chercher la quote 
 function start() {
     axios
         .get(URL)
         .then((res) => {
             console.log(res.data.messages)
             display(res.data.messages);
         })
         .catch((err) => console.error(err));
     var messages = {
         non_personalized: [0, 49],
         personnalized: [0, 574]
             //console.log(messages[0]);
     }
 };

 //let img = [trump1.gif, trump2.gif, trump3.gif]

 //var quotes = ['Apple', 'Banana'];
  
 //var quotes = ['apple', 'banana', 'candies', 'dots', 'error', 'fruits'];
 //var randomQuotes = quotes[Math.floor(quotes.length * Math.random())];
  
 // console.log(randomQuotes)


 // là je crois qu'on met le tableau dans le "HTML"
 function display(quotes) {
     // reset le HTML au cas où il y aurait qqch dans l'ul
     list.innerHTML = "";

     //appliquer le random
     const i = Math.floor(Math.random() * quotes.length);
     const quote = quotes[i];
     return quotes;

 }

 //TEST
 //const person1 = {};
 //person1['firstname'] = 'Mario';
 //person1['lastname'] = 'Rossi';

 //console.log(person1.firstname);
 // expected output: "Mario"

 //const person2 = {
 //    firstname: 'John',
 //    lastname: 'Doe'
 //};

 //console.log(person2['lastname']);




 function getQuotes(quotes) {
     list.innerHTML = "";

     quote.Random(quotes => {
         console.log(quotes);
         list.innerHTML += `<button class="btn" data-url="${quotes.url}">Random</button>
        </li>`;

     })
 }


 document.getElementById("start").onclick = start;


 // TO DO

 // Quote
 // Aller chercher la liste.
 // Appliquer le random.
 // Renvoyer résultat correspondant à index random.

 // GIFS
 // Générer index random pour gif
 // Display le gif

 // Quotes + gifs = onclick
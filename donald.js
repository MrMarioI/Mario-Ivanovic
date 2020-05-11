 URL = "https://api.whatdoestrumpthink.com/api/v1/quotes";

 //const URL = "https://api.whatdoestrumpthink.com/api/v1/quotes";

 const quoteElement = document.getElementById("quote");
 const imgElement = document.getElementById("gifs");
 const click = document.getElementById("button");
 const gifs = [
     "trump1.gif",
     "trump2.gif",
     "trump3.gif",
     "trump4.gif",
     "trump5.gif",
     "trump6.gif",
     "trump7.gif",
     "trump8.gif",
     "trump9.gif",
     "trump10.gif",
     "trumpd.gif",
     "giphy.gif",
 ];


 // on va chercher la quote 
 function start() {
     axios
         .get(URL)
         .then((res) => {
             // passe l'ensemble des messages non personnalisés à la fonction display ...
             display(res.data.messages.non_personalized);
         }) //console.log(display);
         .catch((err) => console.error(err));
 }

 function getRandomNumber(quotesLength) {
     // cette fonction retourne un nombre entre 0 et quotesLength
     return Math.floor(Math.random() * Math.floor(quotesLength));
 }

 function getRandomGifs(gifsElementsLength) {
     // cette fonction retourne un nombre entre 0 et quotesLength
     return Math.floor(Math.random() * Math.floor(gifsElementsLength));
 }

 function display(quotes) {
     // reset le HTML au cas où il y aurait qqch dans l'ul
     const randomQuoteIndex = getRandomNumber(quotes.length);
     const randomGifIndex = getRandomNumber(gifs.length);
     // récup un nombre random entre 0 et la longueur de quotes
     console.log(">>>", randomQuoteIndex);
     console.log(quotes[randomQuoteIndex])
     console.log(gifs[randomGifIndex])
         //appliquer le random
     quoteElement.innerHTML = quotes[randomQuoteIndex];
     imgElement.src = gifs[randomGifIndex];
 }



 document.getElementById("start").onclick = start;
'use strict';

// 1. Etsitään form-lomake sivulta
const formElem = document.querySelector('#norris')

// 2. Etsitää form-lomakkeen hakukenttä
const searchElem = document.querySelector('input[name=q]')

// 3. Etsitään tulostuksen paikka sivulta
const divElem = document.querySelector('#results')

// 4. Nettiin lähetettävän hakukyselyn vakio-osa
let searchUrl = "https://api.chucknorris.io/jokes/search?query=";



// 5. Määritellään tapahtumankäsittelijä eli eventlistener syöttölomakkeelle
formElem.addEventListener('submit',async function(evt){
    // 6. Estetään lomakkeen vakiotoiminta
    evt.preventDefault();

    // 7. Luetaan tarvittavien syöttökenttien arvot
    const searchValue = searchElem.value;

    // 8. Muodostetaan lopullinen nettiin lähetettävä hakukysely
    searchUrl += searchValue
    console.log(searchUrl)

    // 9. Kutsutaan funktiota, joka tekee varsinaisen nettihaun
    searchData(searchUrl);
});



// 10. Tehdään nettihakufunktio
async function searchData(searchQuery) {

    try {

        const response = await fetch(searchQuery)
        const jsonData = await response.json()

        // 11. Kutsutaan oma funktiota, joka hoitaa tulosten käsittelyn
        defineData(jsonData)

    } catch (error) {
        console.log(error.message)
    }


}

// 12. Tehdään datankäsittelyfunktio

function defineData(jsonData) {
    /*
       Kun laitetaan hakulause selaimeen, niin nähdään että nyt vitsit ovat listassa avaimen 'result' arvona
     */

    // 13. Käytetään for looppia käymään läpi kaikki vitsit
    for (let vitsi of jsonData.result) {
        let htmlkoodi =
            `<article>
                <p>${vitsi.value}</p>
             </article>`
        // 14. Lisätään vitsi HTML-sivulle entisten perään
        divElem.innerHTML += htmlkoodi
    }
}




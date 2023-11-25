'use strict';

console.log('the script starts');
// etsitään form elementti html-sivulta
const showForm = document.querySelector('#tv');

// etsitään tulostuksen paikka web-sivulta
const resultsElem = document.querySelector('#results')

/* Async funktio on funktio joka toimii asynkronisesti. Eli se mahdollistaa ohjelman jatkuvan suorituksen
 muiden koodien kanssa odottaessaan tietyn toiminnon valmistumista
 'async'-avainsanaa käytetään asynkronisten funktioiden määrittelyyn
 kun funktio on julistetettu 'async'-sanalla se tarkoittaa että funktio palauttaa aina lupauksen
 async avainsanaa voidaan käyttää funktion sisällä, jolloin se odottaa tietyn lupauksen täyttymistä ennen
 seuraavan koodirivin suorittamista */


/* määritellään syöttölomakkeelle tapahtumankäsittelijä
 tapahtumankäsittelijä eli EventListener on JavaScriptin konsepti, joka mahdollistaa koodin liittämisen
 erilaisiin tapahtumiin (events) DOM(Document Object Model)- elementeissä
 Tapahtumat voivat olla käyttäjän toimia kuten klikkaus, näppäimen painallus, hiiren liike,
 lomakkeen lähettäminen ja niin edelleen
 EventListener mahdollistaa sen, että voit määrittää toiminnallisuuden(esim funktion) joka käynnistyy
 kun tietty tapahtuma tapahtuu (esim klikkaus) */

showForm.addEventListener('submit', function (evt) {

    // estetään oletustoiminta eli action komennon suoritus

    evt.preventDefault()

    // luetaan lomakkeen syöttökentästä, sinne syötetty hakusana

    const hakuArvo = document.querySelector('input[name=q]').value;

    // muodostetaan hakukysely, jossa käytämme query muuttujjaamme oikeassa kohdassa urlia
    // jotta siihen tulee lomakkeesta haettu hakusanamme

    const hakuKysely = `https://api.tvmaze.com/search/shows?q=${hakuArvo}`;

    // tulostetaan nettiin lähetettävä hakukysely

    console.log("-- Hakukysely: " + hakuKysely);

    //kutsutaan funktiota, joka tekee varsinaisen nettihaun

    haeData(hakuKysely);
});

// tehdään async funktio, joka hakee datan netistä

async function haeData(nettikysely){
    try {

        /* fetch palauttaa raakadatan netistä (response-tyyppinä)
     'await' on avainsana JavaScriptissä, ja sitä käytetään asynkronisten funktioiden sisällä odottamaan toisen
     asynkronisen operaation valmistumista enne kuin suoritus jatkuu seuraavaan riviin
     await lauseen edessä oleva ilmaisu (esim 'fetch) on lupaus/promise-objekti
     await avainsana estää suorituksen siirtymisen eteenpäin kunnes kyseinen promise on ratkennut (hylätty/täyttynyt)
     Kun käytetään 'await' -lausetta 'fetch'-funktion kanssa, odottaa funktio täten, että verkosta tuleva data
     on haettu ennenkuin sen käsittelyä jatketaan*/

        const response = await fetch(nettikysely);

        /* kun promise on täytetty voimme jatkaa sen käsittelyä
        .json()-funktio muuttaa vastauksemme raakadatasta json-muotoon */
        const jsonData = await response.json()

        // kutsutaan omaa funktiota, joka hoitaa tulosten käsittelyn

        datanKasittely(jsonData);

          /* seuraavaksi napataan mahdollinen virhe ja logataan se konsoliin
          console.log -funktio saa parametreiksi virheen sekä sen sisältämän viestin error.message */

         } catch (error) {
              console.log(error.message)
          }
}

function datanKasittely(jsonData) {
    /*
           Tulokset ovat listassa, kaikki data löytyy 'show' avaimen alta
           Yhden sarjan tiedot laitetaan 'article' elementin sisään
     */

    // Tyhjennetään mahdollisen edellisen haun tulokset

    resultsElem.innerHTML = '';

    // seuraavaksi käydään json-listan jokainen tv-sarja läpi
    for (const tvSarja of jsonData) {

        // luodaan article-elementti, jonka sisään sarjan tiedot tulevat
        // article-elementti on yksi HTML-elementeistä, ja sitä käytetään kuvaamaan itsenäistä sisältöä
        const articleElem = document.createElement('article')

        // luodaan articlen sisään tulevat elementit
        const h2Elem = document.createElement('h2');
        // laitetaan h2 elementtiin tv-sarjan nimi käyttämällä 'show'-avainta
        // innerText on ominaisuus joka palauttaa näkyvän tekstin ottaen huomioon CSS-tyylit
        // se käsittelee tekstiä HTML-tulkinnan kanssa
        h2Elem.innerText = tvSarja.show.name;

        // luodaan kuvaElementit käyttämällä json-datan show.image avainta
        const imgElem = document.createElement('img')
        // luodaan src polku sekä alt-teksti
        // käytetään ternary operaattoria hakemaan vaihtoehtoinen jos tv-sarjan kuvaa ei löydy

        /*
               Ternary-operaattori on tiivis tapa kirjoittaa 'if-else'-lauseke yhdellä rivillä.
               Ternary operaattorin syntaksi on seuraava:
               [ehto ? lausekeJosTosi : lausekeJosEpätosi]
               Jos ehto on True, suoritetaan ennen kaksoispistettä oleva lauseke
               Jos ehto on False, suoritetaan kaksoispisteen jälkienne lauseke

       */

        imgElem.src = tvSarja.show.image.medium ? tvSarja.show.image.medium : 'https://via.placeholder.com/210x295?text=Not%20Found';
        imgElem.alt = tvSarja.show.name;

        /*  Seuraavaksi luodaan <a>-elementti, joka on HTML-hyperlinkki elementti
            Sitä käytetään luomaan linkkejä muihin sivuihin, dokumentteihin, tiedostoihin tai eri osiin samalla sivulla

            href-attribuutti määrittelee linkin kohdeosoitteen

            .target-attribuutti määrittelee, miten linkki avataan tai mihin selain siirtyy, kun käyttäjä napsauttaa
            linkkiä

            käytämme tässä tehtävässä:
            '_blank'-arvoa, joka avaa linkin uudessa selainikkunassa tai välilehdessä
         */

        const aElem = document.createElement('a')
        aElem.href = tvSarja.show.url
        aElem.innerText = 'Go to TV Show';
        aElem.target = '_blank';

        /* Seuraavaksi luodaan div -elementti, jonka avulla luodaan divisioita tai osioita HTML -dokumentissa
           Se on yleiskäyttöinen 'tyhjä'-elementti, jotai käyttää ryhmittelemään muita HTML-elementtejä yhteen
           ja luomaan loogista rakennetta sivulle
         */

        const divElem = document.createElement('div')
        divElem.innerHTML = tvSarja.show.summary;

        // lisätään kaikki elementit kerrallaan articlen sisään
        articleElem.append(h2Elem, imgElem, aElem, divElem)

        // lisätään luotu article results-elementin perään
        resultsElem.append(articleElem);
    }



}




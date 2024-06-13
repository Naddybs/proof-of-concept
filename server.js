// Dit is het startpunt van de applicatie. Hierin wordt de express server opgestart en worden de benodigde middleware en routes ingesteld.

import express from 'express';
const app = express();
const port = 3000;
console.log('Server is gestart op poort 3000');

// Hier importeer je de fetchJson functie die je hebt gemaakt in de fetchJson.js file.
import fetchJson from './helpers/fetch-json.js';



// Hiermee zet je de view engine van de express applicatie op ejs en zorg je ervoor dat de views in de map views worden opgeslagen.
// Daarnaast maak je de public map statisch zodat de bestanden in deze map kunnen worden opgehaald.
// Ook gebruik je de express.urlencoded middleware om het werken met request data makkelijker te maken.
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Hiermeer haal je de mp3 en articles data op van de BNR API. 
// Eerst defiieer je constante variabelen voor de mp3 en articles data.
// Vervolgens haal je de data op met de fetchJson functie die eerder is geimporteerd.
const mp3 = 'http://playerservices.streamtheworld.com/api/livestream-redirect/BNR_BUSINESS_BEATS.mp3';
const articles = await fetchJson('https://api.mobile.bnr.nl/v1/articles');
console.log(articles);
console.log(mp3);

// Hiermee zorg je ervoor dat de index.ejs file wordt gerenderd wanneer de root van de server wordt aangeroepen.
// Je geeft de mp3 en articles data mee aan de index.ejs file.
// In de ejs tempate kun je deze data dan gebruiken om de mp3 en articles weer te geven.
app.get('/', (req, res) => {
    res.render('index', { mp3: mp3, 
        articles: articles });
});


 // Dit zorgt ervoor dat de server start op poort 3000 en dat er een bericht wordt gelogd in de console wanneer de server is gestart.
 app.set('port', process.env.PORT || 3000);
     app.listen(app.get('port'), function () {
        console.log(`Application started on http://localhost:${app.get('port')}`);
    });


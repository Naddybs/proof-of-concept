// Eerst definieer ik de variabelen audio, playPauseButton en volumeControl.
// Vervolgens definieer ik de variabele isPlaying en geef ik deze de waarde false. Dit zorgt ervoor dat de audio niet automatisch wordt afgespeeld wanneer de pagina wordt geladen.
// Daarna definieer ik de variabelen playIcon en pauseIcon. Deze bevatten de SVG iconen voor de play en pause knop.
// Vervolgens geef ik de innerHTML van de playPauseButton de waarde van het playIcon. Dit zorgt ervoor dat de play knop wordt weergegeven.
// Ik voeg een event listener toe aan de playPauseButton die wordt geactiveerd wanneer er op de knop wordt geklikt.
// In de event listener controleer ik of de audio aan het afspelen is. Als dit het geval is, wordt de audio gepauzeerd en wordt de innerHTML van de playPauseButton veranderd naar het playIcon. Als de audio niet aan het afspelen is, wordt de audio afgespeeld en wordt de innerHTML van de playPauseButton veranderd naar het pauseIcon.
// Tot slot voeg ik een event listener toe aan de volumeControl die wordt geactiveerd wanneer de waarde van de volumeControl wordt veranderd. In de event listener wordt de volume van de audio aangepast aan de hand van de waarde van de volumeControl.
// Dit script zorgt ervoor dat de audio kan worden afgespeeld, gepauzeerd en het volume kan worden aangepast op de website.
const audio = document.getElementById("audio");
        const playPauseButton = document.getElementById("play-pause-button");
        const volumeControl = document.getElementById("volume");
        let isPlaying = false;

        const playIcon = `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FFD200" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-player-play">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M7 4v16l13 -8z" />
            </svg>`;
        const pauseIcon = `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FFD200" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-player-pause">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M6 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
                <path d="M14 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
            </svg>`;

        playPauseButton.innerHTML = playIcon;

        playPauseButton.addEventListener("click", () => {
            if (isPlaying) {
                audio.pause();
                playPauseButton.innerHTML = playIcon;
            } else {
                audio.play();
                playPauseButton.innerHTML = pauseIcon;
            }
            isPlaying = !isPlaying;
        });

        volumeControl.addEventListener("input", () => {
            audio.volume = volumeControl.value / 100;
        });
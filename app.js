import sanger from "./sanger.json" with { "type": "json" }

const sangliste = document.querySelector("#sangliste")
sanger.forEach(sang => {
    sangliste.innerHTML += `

               <div class="song-images">
            <img src="${sang.artistBilde}" alt="Bilde av ${sang.artist}" class="artist-bilde">
            <img src="${sang.albumBilde}" alt="Albumcover: ${sang.album}" class="album-bilde">
          </div>
    </div>
        <div class="song-item">
            <p>${sang.tittel}</p>
            <p>${sang.artist}</p>
            <p>${sang.album}</p>
            <p>${sang.sjanger}</p>
            <p>${sang.link}</p>
            <p>${sang.anmeldelse}</p>
        </div>

 `;

})
sanger.sort((a, b) => new Date(b.dato) - new Date(a.dato));
const ukensSanger = sanger.slice(0, 5);
const arkivSanger = sanger.slice(5).sort(() => 0.5 - Math.random()); 
console.log(sanger)
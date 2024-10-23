let sounds = [
    "NIEEE KURWA JEP JEP JEP",
    "Co ja tu muszę zrobić!",
    "Bełkot z okazji 100k"
  
];

sounds.forEach((sound) => {
  console.log(sound);
  document.querySelector(".sounds").innerHTML += `
        <div>
          <div><button onClick="
            if (!this.audio) {
              this.audio = new Audio('src/audio/${sound}.mp3');

              // Add event listener for 'ended' event to reset icon
              this.audio.addEventListener('ended', () => {
                this.innerHTML = '<img src=\\'src/play.png\\'>';
              });
            }

            if (this.audio.paused || this.audio.currentTime === 0) {
              this.audio.play();
              this.innerHTML = '<img src=\\'src/pause.png\\'>';
            } else {
              this.audio.pause();
              this.audio.currentTime = 0;
              this.innerHTML = '<img src=\\'src/play.png\\'>';
            }
          "><img src='src/play.png'></button></div>
          <p>${sound}</p>
          <a style="color: gold;" href="src/audio/${sound}.mp3" download>Pobierz Dźwięk</a>
        </div>
  `;
});
window.addEventListener('load', (e) => {
  const strings = document.querySelectorAll(".string"); // Select all strings

  strings.forEach((elem) => {
    elem.addEventListener("click", () => {
      const audio = elem.getAttribute('data-note');
      const playedNote = document.querySelector('audio[data-note="' + audio + '"]');
      playedNote.currentTime = 0; // Rewind the sound to the start each time clicked
      playedNote.play();
    })
  })
})

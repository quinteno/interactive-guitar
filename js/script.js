window.addEventListener('load', function(e) {
  const lowEString = document.querySelector("line[data-note='1']");
  const lowEStringSound = document.querySelector("audio[data-note='1']")
  lowEString.addEventListener('click', function() {
    console.log("clicked");
    lowEStringSound.play();
  })

})

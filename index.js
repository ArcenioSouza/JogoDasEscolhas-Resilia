let audio = document.querySelector(".sound1")

setTimeout(
   function () {
       audio.muted = false;
       audio.autoplay()
   }
, 1000);
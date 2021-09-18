const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j'];
const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];

const $ = selector => document.querySelectorAll(selector);

const keys = $('.key');
const keysBlack = $('.key.black');
const keysWhite = $('.key.white');

keys.forEach(key => {
    key.addEventListener('click', () => playNote(key));
})

document.addEventListener('keydown', e => {
    if (e.repeat) return true;
    const keysBlackIndex = BLACK_KEYS.indexOf(e.key);
    const keysWhiteIndex = WHITE_KEYS.indexOf(e.key);
    if (keysBlackIndex > -1) playNote(keysBlack[keysBlackIndex]);
    if (keysWhiteIndex > -1) playNote(keysWhite[keysWhiteIndex]);
})

function playNote(key) {
    const sound = document.getElementById(key.dataset.note);
    sound.currentTime = 0;
    sound.play();
    key.classList.add('active');
    sound.addEventListener('ended', () => {
        key.classList.remove('active');
    })
}

 document.getElementById("toggle-fs").addEventListener("click", function() {
    toggleFS()
  });
  
  function isFullScreen() {
    return (document.fullScreenElement && document.fullScreenElement !== null) ||
      (document.msFullscreenElement && document.msFullscreenElement !== null) ||
      (document.mozFullScreen || document.webkitIsFullScreen);
  }
  
  function enterFS() {
    var page = document.documentElement
    if (page.requestFullscreen) page.requestFullscreen();
    else if (page.mozRequestFullScreen) page.mozRequestFullScreen();
    else if (page.msRequestFullscreen) page.msRequestFullscreen();
    else if (page.webkitRequestFullScreen) page.webkitRequestFullScreen();
  }
  
  function exitFS() {
    if (document.exitFullScreen) return document.exitFullScreen();
    else if (document.webkitExitFullscreen) return document.webkitExitFullscreen();
    else if (document.msExitFullscreen) return document.msExitFullscreen();
    else if (document.mozCancelFullScreen) return document.mozCancelFullScreen();
  }
  
  function toggleFS() {
    if (!isFullScreen()) {
      enterFS();
      document.getElementById("toggle-fs").innerHTML = '<img src="images/fullscreen-exit.svg">';
    } else {
      exitFS();
      document.getElementById("toggle-fs").innerHTML = '<img src="images/fullscreen-open.svg">';
    }
  }

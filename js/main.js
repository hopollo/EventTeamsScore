getClock()

function getClock() {
    let clockContainer = document.querySelector('.clock-container');
    let clockElement = document.createElement('span');
    clockElement.className = 'clock';
    clockContainer.appendChild(clockElement);
  
    setInterval(() => {
      let currentTime = new Date();
      let hours = currentTime.getHours() < 10 ? '0' + currentTime.getHours() : currentTime.getHours();
      let minutes = currentTime.getMinutes() < 10 ? '0' + currentTime.getMinutes() : currentTime.getMinutes();
      let seconds = currentTime.getSeconds() < 10 ? '0' + currentTime.getSeconds() : currentTime.getSeconds();
      
      clock = `${hours}:${minutes}:${seconds}`;
  
      clockElement.innerHTML = clock;
    }, 1000);
  }

/* Listen to keyborad */
document.addEventListener("keypress", function(event){
    const keyName = event.code;
    switch(keyName) {
        case 'Numpad4':
            addLeft();
            break;
        case 'Numpad6':
            addRight();
            break;
        case 'Numpad7':
        case 'Numpad1':
            removeLeft();
            break;
        case 'Numpad9':
        case 'Numpad3':
            removeRight();
            break;
    }
});

function addLeft() {
    let currentLeftScore = parseInt($('.localsCounter').text());
    currentLeftScore = currentLeftScore + 1;
    $('.localsCounter').text(currentLeftScore);
}

function addRight() {
    let currentRightScore = parseInt($('.visitorsCounter').text());
    currentRightScore = currentRightScore + 1;
    $('.visitorsCounter').text(currentRightScore);
}

function removeLeft() {
    let currentLeftScore = parseInt($('.localsCounter').text());
    if (currentLeftScore > 0) { 
        currentLeftScore = currentLeftScore - 1;
        $('.localsCounter').text(currentLeftScore);
    }
}

function removeRight() {
    let currentRightScore = parseInt($('.visitorsCounter').text());
    if (currentLeftScore > 0) {
        currentRightScore = currentRightScore - 1;
        $('.visitorsCounter').text(currentRightScore);
    }
}

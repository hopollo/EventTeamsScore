/* Listen to keyborad */
document.addEventListener("keypress", function(event){
    const keyName = event.code;
    console.log(keyName)
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
        case 'NumpadEnter':
            finish();
            break;
        case 'NumpadDecimal':
            start();
    }
});

function start() {
    getClock()
}

function getClock() {
    setInterval(() => {
      let currentTime = new Date();
      let hours = currentTime.getHours() < 10 ? '0' + currentTime.getHours() : currentTime.getHours();
      let minutes = currentTime.getMinutes() < 10 ? '0' + currentTime.getMinutes() : currentTime.getMinutes();
      let seconds = currentTime.getSeconds() < 10 ? '0' + currentTime.getSeconds() : currentTime.getSeconds();
      
      clock = `${hours}:${minutes}:${seconds}`;
  
      $('.clock-container').addClass('clock').text(clock);
    }, 1000);
}

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
    if (currentRightScore > 0) {
        currentRightScore = currentRightScore - 1;
        $('.visitorsCounter').text(currentRightScore);
    }
}

function finish() {
    console.log('Game is finished');
}

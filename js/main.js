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
    if (keyName == "Numpad4") { addLeft() }
    if (keyName == "Numpad6") { addRight() }
});

function addLeft() {
    console.log('addLeftCalled');
    let currentLeftScore = parseInt($('.localsCounter').text());
    currentLeftScore = currentLeftScore + 1;
    $('.localsCounter').text(currentLeftScore);
}

function addRight() {
    console.log('addRightCalled');
    let currentRightScore = parseInt($('.visitorsCounter').text());
    currentRightScore = currentRightScore + 1;
    $('.visitorsCounter').text(currentRightScore);
}

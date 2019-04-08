/* Listen to keyborad */
$(document).keydown(function() {
    const keyName = event.code;
    console.log(keyName);
    switch(keyName) {
        case 'Numpad4':
        case 'ArrowLeft':
            addLeft();
            break; 
        case 'Numpad6':
        case 'ArrowRight':
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
        case 'KeyF':
        case 'Slash':
            finish();
            break;
        case 'NumpadDecimal':
        case 'KeyS':
        case 'BracketRight':
            start();
            break;
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
  
      $('.clock').text(clock);
    }, 1000);
}

function addLeft() {
    let currentLeftScore = parseInt($('.scoreA').text());
    currentLeftScore = currentLeftScore + 1;
    $('.scoreA').text(currentLeftScore);
}

function addRight() {
    let currentRightScore = parseInt($('.scoreB').text());
    currentRightScore = currentRightScore + 1;
    $('.scoreB').text(currentRightScore);
}

function removeLeft() {
    let currentLeftScore = parseInt($('.scoreA').text());
    if (currentLeftScore > 0) { 
        currentLeftScore = currentLeftScore - 1;
        $('.scoreA').text(currentLeftScore);
    }
}

function removeRight() {
    let currentRightScore = parseInt($('.scoreB').text());
    if (currentRightScore > 0) {
        currentRightScore = currentRightScore - 1;
        $('.scoreB').text(currentRightScore);
    }
}

function finish() {
    console.log('Game is finished');
    const teamA = $('.teamA').text();
    const teamB = $('.teamB').text();
    const scoreA = parseInt($('.scoreA').text());
    const scoreB = parseInt($('.scoreB').text());
    
    if (scoreA == scoreB) {
        winner('aux deux équipes', 'egalitée');
    }
    if (scoreA > scoreB && scoreA != 0 && scoreB !=0) {
        winner(teamA, scoreA);
    } 
    if (scoreA < scoreB && scoreA != 0 && scoreB !=0) {
        winner(teamB, scoreB);
    }
}

function winner(team, score) {
    $('.content').css('display', 'none');
    $('.endMatch').css('display', 'block');

    $('.winningTeamName').text(team);
    $('.winningTeamScore').text(score);

    $('.endMatch').fireworks();
}

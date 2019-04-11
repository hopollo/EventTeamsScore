$(document).ready(() => {
    init();
});
  
function init() {
    getClock();
    
    $('.clock').append(`
        <button class="startBtn">GO</button>
    `);

    $('.startBtn').click(() => {
        startCount();
    });
}

$('.nextBtnC').click(() => {
    $('.content').css('display', 'none');
    $('.leaderboard').css('display', 'block');
});

$('.nextBtnL').click(() => {
    $('.leaderboard').css('display', 'none');
    $('.content').css('display', 'block');
});

$('.scoreA').click(() => {
    addLeft();
});

$('.scoreB').click(() => {
    addRight();
});

$('.celebrationText').click(() => {
    location.reload();
});

function startCount() {
    $('.startBtn').css('display','none');
    
    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    setInterval(() => {
        seconds = seconds + 1;

        if (seconds == 60) { 
            minutes = minutes + 1;
            seconds = 0;
        }
        if (minutes == 60) {
            hours = hours + 1;
            minutes = 0;
        }

        s = seconds < 10 ? '0' + seconds : seconds;
        m = minutes < 10 ? '0' + minutes : minutes;
        h = hours < 10 ? '0' + hours : hours;

        clock = `${m}:${s}`;

        $('.clock').text(clock);

        $('.clock').click(() => {
            finish();
        });
    }, 1000);
}

function getClock() {
    setInterval(() => {
        let currentTime = new Date();
        let currentHours = currentTime.getHours() < 10 ? '0' + currentTime.getHours() : currentTime.getHours();
        let currentMinutes = currentTime.getMinutes() < 10 ? '0' + currentTime.getMinutes() : currentTime.getMinutes();
        let currentSeconds = currentTime.getSeconds() < 10 ? '0' + currentTime.getSeconds() : currentTime.getSeconds();
        
        currentClock = `${currentHours}:${currentMinutes}:${currentSeconds}`;

        $('.currentClock').text(currentClock);
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
        winner('aux deux équipes', 'egalité');
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

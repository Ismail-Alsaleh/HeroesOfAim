var listenersEnabled =true;



var hCombo = document.getElementById('combo');
var combo =0;
var comboResetterTimer=0;
function increaseCombo(){
    combo++;
    comboResetterTimer=0;

    if(combo<10){
        hCombo.textContent='0'+combo;
    }else{
        hCombo.textContent=combo;
    }
}
function resetCombo(){
    combo=0;
    comboResetterTimer=0;
    hCombo.textContent='0'+combo;
}
var hScore =document.getElementById('score');
var score =0;
function increaseScore(){
    score=score+100*(Math.floor(combo/10)+1);   

    if(score<1000){
        hScore.textContent='0'+score;
    }else{
        hScore.textContent=score;
    }
}


function leftRandomPercentage(){
    var rand = Math.random() * 97.9;
    return rand.toFixed(1) + '%';
}
function topRandomPercentage(){
    var rand = Math.random() * 93.9;
    return rand.toFixed(1) + '%';
}

target = document.getElementById('target');
function changeTargetLocation(){
    target.style.top = topRandomPercentage();
    target.style.left = leftRandomPercentage();
}

var h1Timer = document.getElementById("countdown");
var timer = parseInt(h1Timer.textContent);
function updateTimer() {
    h1Timer.textContent = timer;
    comboResetterTimer++;
    if(comboResetterTimer == 3){
        resetCombo();            
    }


        
    if (timer > 0) {
        timer--;
    } else {
        listenersEnabled = false;
        clearInterval(intervalId); // Stop the interval when the timer reaches 0
    }
}
// Start the countdown interval
var intervalId = setInterval(updateTimer, 1000);

// Start the countdown
updateTimer();






changeTargetLocation();
target.addEventListener('click', function(){
    if(!listenersEnabled){
        return;
    }
    console.log("clicked");
    increaseScore();
    increaseCombo();


    changeTargetLocation();
});
document.addEventListener('click', function(event) {
    var clickedElement = event.target;
    if (clickedElement !== target) {
        resetCombo();
    }
  });
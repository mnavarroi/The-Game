    var timeleft = 61;
    var timer = setInterval(function(){
    timeleft--;
    document.getElementById("timer_numbers").textContent = timeleft;
    if(timeleft <= 0)
        clearInterval(timer);
    },1000);
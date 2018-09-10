    var timeleft = 61;
    var downloadTimer = setInterval(function(){
    timeleft--;
    document.getElementById("timer_numbers").textContent = timeleft;
    if(timeleft <= 0)
        clearInterval(downloadTimer);
    },1000);
document.getElementById("full-canvas").onLoad = function(){
    offsetTop = document.getElementById("full-canvas").height / 2;
    offsetLeft = document.getElementById("full-canvasC").width / 2;
    document.getElementById("full-canvas").style.marginTop="-"+offsetTop+"px";
    document.getElementById("full-canvas").style.marginLeft="-"+offsetLeft+"px";
  }

  function FULL_IMAGE(fimage){
    document.getElementById("full-canvas").src=fimage;
    document.getElementById("full-canvas").style.display="block";
  }
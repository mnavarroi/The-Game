//Modal
document.getElementById("como_jugar").addEventListener("click", function(){
    document.querySelector(".instrucciones-modal").style.display = "flex";
  });
  
  document.querySelector(".close").addEventListener("click", function(){
    document.querySelector(".instrucciones-modal").style.display = "none";
  });
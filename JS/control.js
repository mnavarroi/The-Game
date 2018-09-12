// Parte de los controles

var controller = {

    left:false,
    right:false,
    up:false,
    keyListener:function(event) {
  
      var key_state = (event.type == "keydown")?true:false;
  
      
      switch(event.keyCode) {
  
        case 37:// izquierda
          controller.left = key_state;
        break;
        case 38:// arriba
          controller.up = key_state;
        break;
        case 39:// derecha
          controller.right = key_state;
        break;
      }
    }
};
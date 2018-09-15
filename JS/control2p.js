// Parte de los controles

var controller = {

    left:false,
    right:false,
    up:false,
    keyListener:function(event) {
  
      var key_state = (event.type == "keydown")?true:false;
  
      
      switch(event.keyCode) {
  
        case 65:// izquierda //37
          controller.left = key_state;
        break;
        case 87:// arriba //38
          controller.up = key_state;
        break;
        case 68:// derecha //39
          controller.right = key_state;
        break;
      }
    }
};
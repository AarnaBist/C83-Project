
 var last_position_of_x, last_position_of_y;
 var current_position_of_x, current_position_of_y;
 canvas = document.getElementById('myCanvas');
 ctx = canvas.getContext("2d");
 color = "black";
 width_of_line = 1;

 var width= screen.width;
 new_width= screen.width - 70;
 new_height= screen.height - 300; 

 canvas.addEventListener("mousedown", my_mousedown);

  function my_mousedown(e)
  {
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;

    mouseEvent = "mouseDown";
  }

  canvas.addEventListener("mousemove", my_mousemove);
  function my_mousemove(e)

  {
    current_position_of_x = e.clientX - canvas.offsetLeft;
    current_position_of_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.lineWidth = width_of_line;

    console.log("Last position of x and y coordinates =");
    console.log("x= "+ last_position_of_x + "y= "+ last_position_of_y);
    ctx.moveTo(last_position_of_x, last_position_of_y);

    ctx.lineTo(current_position_of_x, current_position_of_y);
    ctx.stroke();
   
    }
   last_position_of_x = current_position_of_x;
   last_position_of_y = current_position_of_y;
  }

canvas.addEventListener("touchstart", my_touchstart);

  function my_touchstart(e)
  {
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    last_position_of_x= e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y= e.touches[0].clientY - canvas.offsetTop;
  }

  canvas.addEventListener("touchmove", my_touchmove);
  function my_touchmove(e)
  {
    current_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_y = e.touches[0].clientY - canvas.offsetTop;

   
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;

    console.log("Last position of x and y coordinates =");
    console.log("x= "+ last_position_of_x + "y= "+ last_position_of_y);
    ctx.moveTo(last_position_of_x, last_position_of_y);

    ctx.lineTo(current_position_of_x, current_position_of_y);
    ctx.stroke();
                         

   last_position_of_x = current_position_of_x;
   last_position_of_y = current_position_of_y;
  }

  function cleararea()
  {
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
  }
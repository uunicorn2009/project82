var radius="empty" ;
var last_postion_ofX,last_postion_ofY ;
canvas=document.getElementById("myCanvas") ;
ctx=canvas.getContext("2d");
color="black";
width_of_line=2;
radius="3"

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color=document.getElementById("colour").value ;
    width_of_line=document.getElementById("width_of_line").value ; 
  radius = document.getElementById("radius").value ;
    
    mouse_event ="mouseDown";
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousedown(e){
    mouse_x=e.clientX - canvas.offsetLeft;
    mouse_y=e.clientY - canvas.offsetTop;
    circle(mouse_x,mouse_y);
  if(mouse_event="mouseDown")
    console.log("current position of x and y coordinates = ");
  console.log("x = "+ mouse_x+"y = "+ mouse_y);

    ctx.beginPath();
    ctx.strokeStyle=colour;
    ctx.lineWidth=2;
    ctx.arc(mouse_x,mouse_y,radius,0,2*Math.PI);
    ctx.stroke();
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouse_event ="mouseLeave";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouse_event ="mouseUp";
}
canvas = document.getElementById("my_canvas");
color = "black";
ctx=canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle= "blue";
ctx.lineWidth= 5;
ctx.arc(246 , 231 , 45 , 0 , 2*Math.PI);
ctx.stroke();

canvas = document.getElementById("my_canvas");
color = "black";
ctx=canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle= "yellow";
ctx.lineWidth= 5;
ctx.arc(296 , 291 , 45 , 0 , 2*Math.PI);
ctx.stroke();


canvas = document.getElementById("my_canvas");
color = "black";
ctx=canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle= color;
ctx.lineWidth= 5;
ctx.arc(346 , 231 , 45 , 0 , 2*Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle= "green";
ctx.lineWidth= 5;
ctx.arc(396 , 291 , 45 , 0 , 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "red";
ctx.lineWidth= 5;
ctx.arc(446 , 231 , 45 , 0 , 2*Math.PI);
ctx.stroke();
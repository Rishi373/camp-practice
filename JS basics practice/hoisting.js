xy();
function xy(){
		console.log("manan");
}

zy();                           // hoisting function..this one will not execute as function is called before initialization.
var zy = function(){
		console.log("manan");
}
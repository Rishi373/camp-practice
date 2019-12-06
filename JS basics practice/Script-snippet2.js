var a = prompt("X enter your age");
var b = prompt("X enter your height in cm");
var c = Number(a) + Number(b);
var d = prompt("Y enter your age");
var e = prompt("Y enter your height in cm");
var f = Number(d)+ Number(e);
var g = prompt("Z enter your age");
var h = prompt("Z enter your height in cm");
var i = Number(g) + Number (h);

if((c>f)&(c>i)){
    console.log("X is "+ Number(c));
}
else if ((f>c)&(f>i)) {
    console.log("Y is "+ Number(f));
}
else{
console.log("Z is " + Number(i));
}

//pass by value

var a = 10;

a = b;

now, b = 10; // separate data is alloted to b now we can change the value of a without effecting the value of b




//pass by reference

var a = {
    language: "JS"
}

var b=a;

console.log(a);  // {language: "JS"}

console.log(b);  // {language: "JS"}

a.language="ruby";

console.log(a);  // {language: "ruby"}

console.log(b);  // {language: "ruby"}
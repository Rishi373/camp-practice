Objects 

var a = {
    language: "JS"      // key:value (pairs)
}



//calling objects by reference

var b=a;

console.log(a);  // {language: "JS"}

console.log(b);  // {language: "JS"}

a.language="ruby";

console.log(a);  // {language: "ruby"}

console.log(b);  // {language: "ruby"}
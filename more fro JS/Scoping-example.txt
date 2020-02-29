var a = "hello";
first();

function first(){
    var b = 'hi';
    second();

    function second(){
        var c = 'hey';
        third();
    }
}

function third(){
    var d = 'john';
    //console.log(c);           /* this will show error because of function scope as c is declared inside function second and we are trying to call it in function third..which is not correct.
    console.log(a+d);
}
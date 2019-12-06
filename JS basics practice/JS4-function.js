var m = function(){

    var a = prompt("how many people are going today!");

    if(a<=2){
        alert("we can use a bike");
        var b = prompt("how is the whether!");
        if(b=='sunny'){
            alert('we can go take to the market');
        }
        if(b!='sunny' || b=='rainy'){
            alert('we should sit back and have a coffee');
        }
        else{
            alert('invalid input');
        }
    }

    else if((a>2)&&(a<=5)){
        alert("we can take my car");
        var b = prompt("how is the whether!");
        if(b=='sunny'){
            alert('we can go to picnic');
        }
        if(b!='sunny' || b=='rainy'){
            alert('we can watch a movie');
        }
        else{
            alert('invalid input');
        }
    }

    else{
        alert("we should take a bus!");
    }



};

m();

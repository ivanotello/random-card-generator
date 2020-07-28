window.onload = () => {
    function randomNumber(){
        let number = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
        let randomIndexN = Math.floor(Math.random()*number.length);
        return number[randomIndexN];
    };
    function randomSymbol(){
        let symbol = ["hearts", "diamonds", "spades", "clubs"];
        let randomIndexS = Math.floor(Math.random()*symbol.length);
        return symbol[randomIndexS];
    };
    
    document.querySelector('.number').innerHTML = randomNumber();
    var addStyleOne = document.getElementById("firstSymbol");
    var addStyleTwo = document.getElementById("secondSymbol");
    var chosenSymbol = randomSymbol();

    if (chosenSymbol=="hearts"){
        addStyleOne.innerHTML= "♥";
        addStyleTwo.innerHTML="♥";
    } else if (chosenSymbol=="diamonds"){
        addStyleOne.innerHTML='♦';
        addStyleTwo.innerHTML='♦';
    } else if (chosenSymbol=="spades"){
        addStyleOne.innerHTML='♠';
        addStyleTwo.innerHTML='♠';
    } else if (chosenSymbol=="clubs"){
        addStyleOne.innerHTML='♣';
        addStyleTwo.innerHTML='♣';
    };

        if (chosenSymbol=="hearts"){
        addStyleOne.style.color = "red";
        addStyleTwo.style.color= "red";
    } else if (chosenSymbol=="diamonds"){
        addStyleOne.style.color='red';
        addStyleTwo.style.color='red';
    };
    

    addStyleOne.classList.add(chosenSymbol);
    addStyleTwo.classList.add(chosenSymbol);
};
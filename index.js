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
    document.querySelector('.symbol').classList.add(randomSymbol());
};
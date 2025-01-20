<script>
    let cards = [
        {img:"https://cdn-icons-png.flaticon.com/512/12427/12427674.png", flipped: false, matched: false},
        {img:"https://cdn-icons-png.flaticon.com/512/12427/12427674.png", flipped: false, matched: false},
        {img:"https://cdn-icons-png.flaticon.com/512/12427/12427631.png", flipped: false, matched: false},
        {img:"https://cdn-icons-png.flaticon.com/512/12427/12427631.png", flipped: false, matched: false},
        {img:"https://cdn-icons-png.flaticon.com/128/12427/12427645.png", flipped: false, matched: false},
        {img:"https://cdn-icons-png.flaticon.com/128/12427/12427645.png", flipped: false, matched: false},
        {img:"https://cdn-icons-png.flaticon.com/128/12427/12427660.png", flipped: false, matched: false},
        {img:"https://cdn-icons-png.flaticon.com/128/12427/12427660.png", flipped: false, matched: false},
        {img:"https://cdn-icons-png.flaticon.com/128/12427/12427687.png", flipped: false, matched: false},
        {img:"https://cdn-icons-png.flaticon.com/128/12427/12427687.png", flipped: false, matched: false},
        {img:"https://cdn-icons-png.flaticon.com/128/12427/12427644.png", flipped: false, matched: false},
        {img:"https://cdn-icons-png.flaticon.com/128/12427/12427644.png", flipped: false, matched: false}]

    let backCard = "https://cdn-icons-png.flaticon.com/128/12427/12427690.png"

    let bluePoints = 0
    let redPoints = 0

    let blueTurn = true

    let endText = ""
    let wait = false

    shuffle()
    
    function flip(card) {
        let flippedCards = cards.filter(kort => kort.flipped == true && kort.matched == false)

        if (flippedCards.length >= 2 || wait) {
            console.log(flippedCards)
            return
        }
        else if (card.flipped == false) {
            card.flipped = !card.flipped
            cards = [...cards]
            flippedCards = cards.filter(kort => kort.flipped == true && kort.matched == false)
            if (flippedCards.length == 2) {
                wait = true
                if (flippedCards[0].img == flippedCards[1].img) {
                    flippedCards[0].matched=true
                    flippedCards[1].matched=true

                    if (blueTurn == true) bluePoints += 1
                    else redPoints += 1

                    if (redPoints > 3) endText = "Red is winner"
                    else if (bluePoints > 3) endText = "Blue is winner"
                    else if (bluePoints == 3 && redPoints == 3) endText = "Draw"
                    else endText = ""
                }
                blueTurn = !blueTurn

                setTimeout(() => {
                    cards.forEach((card) => {
                        card.flipped = card.matched;
                    });
                    wait = false
                    cards = [...cards];
                }, 1000);
            }
        }
    }

    function restart(){
        cards = [
            {img:"https://cdn-icons-png.flaticon.com/512/12427/12427674.png", flipped: false, matched: false},
            {img:"https://cdn-icons-png.flaticon.com/512/12427/12427674.png", flipped: false, matched: false},
            {img:"https://cdn-icons-png.flaticon.com/512/12427/12427631.png", flipped: false, matched: false},
            {img:"https://cdn-icons-png.flaticon.com/512/12427/12427631.png", flipped: false, matched: false},
            {img:"https://cdn-icons-png.flaticon.com/128/12427/12427645.png", flipped: false, matched: false},
            {img:"https://cdn-icons-png.flaticon.com/128/12427/12427645.png", flipped: false, matched: false},
            {img:"https://cdn-icons-png.flaticon.com/128/12427/12427660.png", flipped: false, matched: false},
            {img:"https://cdn-icons-png.flaticon.com/128/12427/12427660.png", flipped: false, matched: false},
            {img:"https://cdn-icons-png.flaticon.com/128/12427/12427687.png", flipped: false, matched: false},
            {img:"https://cdn-icons-png.flaticon.com/128/12427/12427687.png", flipped: false, matched: false},
            {img:"https://cdn-icons-png.flaticon.com/128/12427/12427644.png", flipped: false, matched: false},
            {img:"https://cdn-icons-png.flaticon.com/128/12427/12427644.png", flipped: false, matched: false}]
        
            shuffle()

        bluePoints = 0
        redPoints = 0

        blueTurn = true
        endText = ""
        wait = false
    }

    function shuffle() {
        cards.sort( () => .5 - Math.random() );
    }

</script>


<h1 style="text-align:center;">Memory</h1>
    <main>
        {#each cards as card}
            <div class="card" class:flipped = {card.flipped} class:matched = {card.matched} on:click={flip(card)}>
                <img src={card.img} alt="" class="front">
                <img src={backCard} alt="" class="back">
            </div>
        {/each}
    </main>

<button on:click={restart} class = "restart">Starta Om</button>
<p style = "display:flex; justify-self:center; ">{endText}</p>

<aside>
    <p>{redPoints}</p>
</aside>
<aside class="blue">
    <p>{bluePoints}</p>
</aside>
<aside class="turn" class:blue = {blueTurn}></aside>



<style>
    main {
        display: grid;
        grid-template-columns: repeat(4, 100px);
        grid-template-rows: repeat(3, 100px);
        justify-content: center;
    }

    
    aside {
        width: 100px;
        height: 100px;
        position: fixed;
        bottom: 10px;
        right: 10px;
        background-color: red;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .blue {
        background-color: blue;
        left: 10px;
    }

    .turn {
        box-shadow: 0 0 10px 10px yellowgreen;
        z-index: -1;
    }

    p {
        font-size: 30px;
    }
                          
    .card {
        border:solid 1px black;
        backface-visibility: hidden;
        transform-style: preserve-3d;
        transition: transform 0.5s;
    }
    
    .card:not(.flipped) :hover {
        transform: scale(1.1);
    }

    .back {
        position: relative;
        top: -100px;
    }

    .front {
        transform: rotateY(180deg);
    }
    .flipped {
        transform: rotateY(180deg);
    }

    .matched .front{
        backface-visibility: visible;
        background-color: green;
    }

    .matched .back{
        visibility: hidden;
    }

    .restart {
        display: flex; 
        justify-self: center; 
        border-radius: 3px; 
        background-color: black; 
        color: white;
    }

    @media (min-height: 500px){
        main{
            grid-template-columns: repeat(4, 100px);
            grid-template-rows: repeat(3, 100px);
        }
    }
    @media (max-height: 500px){
        main{
            grid-template-columns: repeat(6, 100px);
            grid-template-rows: repeat(2, 100px);
        }
    }    
</style>
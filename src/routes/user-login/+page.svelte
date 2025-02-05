<script>
    let stringLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ<ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ<"
    let letters = []
    let username = ""
    let turnedLetters = []
    let shuffeled = false
    let wait = true

    randomize()
    function randomize() {
        //hjälp
        for (let letter of stringLetters) {
            let top = Math.random()*100
            let left = Math.random()*100
            letter = {letter:letter, top:top, left:left, show:true}
            letters.push(letter)
            letters = [...letters]
        }
    }

    function turnLetter(letter) {
        console.log(letter)
        if (turnedLetters.length >= 2) {
        }

        else if (shuffeled == true && wait == false) {
            letter.show = true
            letters = [...letters]
            if (turnedLetters[0] != letter) {
                turnedLetters = [...turnedLetters, letter]
            }

            if (turnedLetters.length >= 2) {
                if (turnedLetters[0].letter == turnedLetters[1].letter) {
                    if (turnedLetters[0].letter == "<") {
                        username = username.slice(0, -1);
                    }
                    else {
                        username += turnedLetters[0].letter
                    }
                }

                //hjälp
                setTimeout(() =>{
                    for (let letter of letters) {
                        letter.show = true
                    }
                    letters = [...letters]
                    shuffeled = false
                }, 1000)
            }
        }
    }

    function shuffle() {
        shuffeled = true
        wait = true
        turnedLetters = []

        for (let letter of letters) {
            letter.show = false

            letter.top = Math.random()*100
            letter.left = Math.random()*100
            setTimeout(() => {
                letter.top = Math.random()*100
                letter.left = Math.random()*100
                letters = [...letters]
            }, Math.random()*4000)
        }

        letters = [...letters]
        
        setTimeout(() => {
            wait = false
        }, 10000)
    }

    function login() {
        if (username.length <=2) {alert("too short")}
        
        else {alert("Du har loggat in " + username)}
    }
</script>



<h1 class="text">DE CACION</h1>
<p class="text">Username: {username}</p>

<div class="table">
    <div class="container">
        {#each letters as letter}
            <button class="letter"on:click={() => turnLetter(letter)} style="top:{letter.top}%; left:{letter.left}%;" class:circle = {!letter.show} class:hide = {!letter.show}>{letter.letter}</button>
        {/each}
    </div>
</div>
<div>
    <button class="button" on:click={() => shuffle()} class:hide = {shuffeled}>Shuffle</button>
    <button class="button" on:click={() => login()} style="top:10px;">Login/Register</button>
</div>



<style>
    .text {
        justify-self: center;
    }
    
    .table {
        position: relative;
        width: 70vw;
        height: 60vh;
        margin: auto;

        border-radius: 100px;
        border: solid 10px black;

        background-color: green;
    }

    .container {
        position: relative;
        height: 90%;
        width: 90%;
        margin: auto;
        margin-top: 24px;
    }

    .circle {
        position: absolute;
        height: 20px;
        width: 20px;
        border-radius: 50%;

        background-color: brown;
        border: solid 1px black;
        transition: all 8s;
        justify-self: center;
        align-self: center;
    }

    .letter{
        position: absolute;
    }

    .hide {
        font-size: 0;
    }

    .button {
        display: block;
        justify-self: center;

        border: solid black 2px;
        border-radius: 4px;
    }
    
</style>
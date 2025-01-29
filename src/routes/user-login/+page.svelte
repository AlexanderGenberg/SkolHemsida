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
            let top = Math.random()*90
            let left = Math.random()*90
            letters.push({letter:letter, top:top, left:left, show:true})
        }
        letters = letters
    }

    function turnLetter(letter) {
        console.log(letter)
        if (turnedLetters.length >= 2) {
        }

        else if (shuffeled == true && wait == false) {
            letter.show = true
            letters = [...letters]
            turnedLetters = [...turnedLetters, letter]
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

            letter.top = Math.random()*90
            letter.left = Math.random()*90
            setTimeout(() => {
                letter.top = Math.random()*90
                letter.left = Math.random()*90
                letters = [...letters]
            }, Math.random()*4000)
        }

        letters = [...letters]
        
        setTimeout(() => {
            wait = false
        }, 8000)
    }
</script>



<h1 class="text">DE CACION</h1>

<div class="table">
    <p class="text">Username: {username}</p>
    <div>
        {#each letters as letter}
            <button on:click={() => turnLetter(letter)} style="top:{letter.top}%; left:{letter.left}%;" class:circle = {!letter.show} class:hide = {!letter.show}>{letter.letter}</button>
        {/each}
    </div>
</div>

<button on:click={() => shuffle()} class:hide = {shuffeled}>Shuffle</button>



<style>
    .text {
        justify-self: center;
    }
    
    .table {
        position: relative;
        width: 70vw;
        height: 60vh;
        margin: auto;
        background-color: green;

        border-radius: 100px;
        border: solid 10px black;

        
    }

    .circle {
        position: absolute;
        height: 20px;
        width: 20px;
        border-radius: 50%;

        background-color: brown;
        border: solid 1px black;
        transition:all 8s;
    }

    button{
        position: absolute;
    }

    .hide {
        font-size: 0;
    }
    
</style>
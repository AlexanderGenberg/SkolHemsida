<script>
    import ElizaBot from 'elizabot';
    import { enhance } from "$app/forms";

    const eliza = new ElizaBot();
    let responseTime

    import {chat_store} from "$lib/chat";
    let chat = []
    import { onMount } from 'svelte';

    onMount(() => {
        /*Check if has more then 2 characters*/
        if($chat_store.length > 2){
            chat = JSON.parse($chat_store);
        }
        else{
            chat = [{ user: 'Eliza', message: eliza.getInitial() }];
        }
    });

    async function write(message) {
        //TODO: Add the new message to the chat
        chat = [...chat, {user: "User", message: message}]

        //Hämta HTML-elementet med id:et visible
        var element = document.getElementById("visible");

        //Ändrar elementets CSS-egenskap display till default
        element.style.display = "block"; // Visa elementet

        // random delay for Eliza's response time
        responseTime = 1000 + Math.random() * 1000
        await new Promise((r) => setTimeout(r, responseTime));
        element.style.display = "none";

        //TODO: Add Eliza's response to the chat
        chat = [...chat, {user: "Eliza", message: "ResponseTime " + Math.trunc(responseTime) + "ms"}]
        $chat_store = JSON.stringify(chat);

  }
</script>

<main>
    <section>
        {#each chat as meddelande}
            <article>
                <p class={meddelande.user}>{meddelande.user} : {meddelande.message}</p>
            </article>
        {/each}
        <article id="visible">
            <span class="circle"></span>
            <span class="circle"></span>
            <span class="circle"></span>
        </article>

    </section>
    <form method="post"
        use:enhance={({ formElement, formData, action, cancel }) => {cancel(); //don't post anything to server
        const text = formData.get("fname"); // what does "text" refer to?
        write(text);

        formElement.reset()

      }}>
        <label for="fname"></label>
        <input type="text" class="container" id="fname" name="fname" required placeholder="Skriv här">
    </form>
</main>

<style>
    main {
        height: 70vh;
        width: 60vw;
        padding: 10px;
        background-color: black;
        justify-self: center;
    }

    section {
        height: 90%;
        overflow-y: scroll;
    }

    .container {
        margin: 10px;
        padding: 10px;
        border-radius: 10px;
        background-color: white;
        width: 90%;
        color: black;
    }

    .Eliza {
        display: flex;
        flex-direction: column;
        justify-self: flex-end;

        margin: 10px;
        padding: 10px;
        border-radius: 10px;
        background-color: lightgray;
        width: 90%;
        color: black;
        width: 500px;
    }

    .User {
        margin: 10px;
        padding: 10px;
        border-radius: 10px;
        background-color: white;
        width: 90%;
        color: black;
        width: 500px;
    }

    @keyframes typing{
        0% {transform: scale(1);}
        50% {transform: scale(1.4);}
        100% {transform: scale(1);}
    }

    #visible {
        display: none;
        flex-direction: column;
        justify-self: flex-end;
    }

    .circle {
        display: inline-block;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: white;

        animation-name: typing;
        animation-duration: 1s; /* Längd på animationen (till exempel 3 sekunder) */
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out; /* Funktion som styr tidsförloppet (till exempel "ease-in-out") */
    }
    
    /* CSS-stilar för .circle med index 1 (den första cirkeln) */
    .circle:nth-child(1) {
        animation-delay: 0ms; /* Ingen fördröjning */
    }

    /* CSS-stilar för .circle med index 2 (den andra cirkeln) */
    .circle:nth-child(2) {
        animation-delay: 333ms; /* Starta animationen efter 333 millisekunder (ms) */
    }
    
    /* CSS-stilar för .circle med index 3 (den tredje cirkeln) */
    .circle:nth-child(3) {
        animation-delay: 666ms; /* Starta animationen efter 666 ms */
    }
    
</style>
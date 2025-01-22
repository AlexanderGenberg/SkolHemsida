
<script>
    /** @type {import('./$types').PageData} */
    export let data;


</script>

{#await data}
    <p>.. waiting</p>
    {:then pokemon}
    <h1>{pokemon.response.name}</h1>  
    <article>
        {#each Object.entries(pokemon.response.sprites) as sprites}
            {#if typeof sprites[1] == "string"}
            <img src={sprites[1]} alt=""/>
            {/if}
        {/each}
    </article>  
    <section>
        <h2>Attacks</h2>
        {#each pokemon.response.abilities as ability}
            <div>{ability.ability.name}</div>
        {/each}
        <h2>Base Experience</h2>
        {pokemon.response.base_experience}
    </section>

{/await}  

<style>
    article {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        justify-items: center;
        width: 90%;
        height: 30%;
        gap: 1em;
    }

    h1 {
        color: black;
    }

    h2 {
        color: black;
    }

    img {
        width: 200px;
        height: 200px;
    }
    section {
        color: black;
        display: grid;
        justify-items: center;

    }
</style>
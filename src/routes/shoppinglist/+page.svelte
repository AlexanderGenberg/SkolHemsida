<script>
    import { fade } from 'svelte/transition'

    let varor_att_köpa = [{name: "Mjölk", bought: "F"}, {name: "Saft", bought: "F"}, {name: "Köttbullar", bought: "F"}]

    let input_text = ""

    function lagg_till_i_varor_att_köpa() {
        if (input_text != "" && varor_att_köpa.filter(vara => vara.name == input_text) == "") {
            varor_att_köpa = [...varor_att_köpa,{name: input_text, bought: "F"}]
        }
    }
    function flytta(lägg_vara) {
        for(let vara of varor_att_köpa) {
            if (vara.name == lägg_vara.name) {
                if (vara.bought == "F") {vara.bought = "T"}
                else {vara.bought = "F"}
                break
            }
        }
        varor_att_köpa = [...varor_att_köpa]
    }

    function tabort_vara(vara_att_tabort) {
        for(let vara in varor_att_köpa) {
            if (varor_att_köpa[vara].name == vara_att_tabort.name) {
                varor_att_köpa.splice(vara, 1)
                break
            }
        }
        varor_att_köpa = [...varor_att_köpa]
    }
    function move_up_in_list(vara_att_flytta) {
        for(let vara in varor_att_köpa) {
            if (varor_att_köpa[vara].name == vara_att_flytta.name && varor_att_köpa[0] !=vara_att_flytta) {
                varor_att_köpa.splice(vara, 1)
                varor_att_köpa.splice(vara-1, 0, vara_att_flytta)
                break
            }
        }
        varor_att_köpa = [...varor_att_köpa]
    }
    function move_down_in_list(vara_att_flytta) {
        for(let vara in varor_att_köpa) {
            if (varor_att_köpa[vara].name == vara_att_flytta.name) {
                varor_att_köpa.splice(vara, 1)
                varor_att_köpa.splice(vara+1, 0, vara_att_flytta)
                break
            }
        }
        varor_att_köpa = [...varor_att_köpa]
    }

</script>

<main class="container">
    <h1>Shoppinglist</h1>
    <div class="categories_container">
        <section>
            <h2>Varor att köpa</h2>
            <ol>
                {#each varor_att_köpa.filter(vara => vara.bought === "F") as vara}
                    <li transition:fade>
                        {vara.name}
                        <form on:submit={() => flytta(vara)} class="formtaggar">
                            <input type="Submit" value="𐄂" style="color: black;">
                        </form>
                        <form on:submit={() => tabort_vara(vara)} class="formtaggar">
                            <input type="Submit" value="❌" style="color: black;">
                        </form>
                        <form on:submit={() => move_down_in_list(vara)} class="formtaggar">
                            <input type="Submit" value="Ner" style="color: black;">
                        </form>
                        <form on:submit={() => move_up_in_list(vara)} class="formtaggar">
                            <input type="Submit" value="Upp" style="color: black;">
                        </form>
                        <hr style = "border-color:white;">
                    </li>
                {/each}
            </ol>
        </section>
        <section>
            <h2>Köpta varor</h2>
            <ul>
                {#each varor_att_köpa.filter(vara => vara.bought === "T") as vara}
                    <li transition:fade>
                        {vara.name}
                        <form on:submit={() => flytta(vara)} class="formtaggar">
                            <input type="Submit" value="✓" style="color: black;">
                        </form>
                        <form on:submit={() => tabort_vara(vara)} class="formtaggar">
                            <input type="Submit" value="❌" style="color: black;">
                        </form>
                        <form on:submit={() => move_down_in_list(vara)} class="formtaggar">
                            <input type="Submit" value="Ner" style="color: black;">
                        </form>
                        <form on:submit={() => move_up_in_list(vara)} class="formtaggar">
                            <input type="Submit" value="Upp" style="color: black;">
                        </form>
                        <hr style = "border-color:white;">
                    </li>
                {/each}
            </ul>
        </section>
    </div>
    <form on:submit|preventDefault={lagg_till_i_varor_att_köpa}>
        <input type="text" style="color:black;" bind:value={input_text}>
        <input type="Submit" value="Lägg till" style="color: black;">
    </form>

</main>

<style>
.container {
    display: grid;
    grid-template-rows: 1fr 9fr 1fr;

    background-color: White;
    width: 60vw;
    height: 70vh;
    border-radius: 20px;
    border: solid 5px, black;

    justify-self: center;
}

.categories_container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    

    height: 100%;
    background-color: gray;
}

.container h1 {
    background-color: black;
    border-radius: 5px;
    width: fit-content;
    color: white;

    align-self: center;
    justify-self: center;
}

.container section {
    width: 100%;
    height: 100%;
}

.categories_container section:nth-child(even) {
    background-color: rgba(0, 0, 0, 0.1)
}
 
.categories_container section:nth-child(odd) {
    background-color: rgba(0, 0, 0, 0.3)
}

.container section h2 {
    background-color: rgba(0, 0, 0, 0.1);
    font-size: larger;
    text-align: center;
    margin-top: 5px;

    width: fit-content;
    justify-self: center;
    border-radius: 5px;
}

.formtaggar {
    display:inline;
}
</style>
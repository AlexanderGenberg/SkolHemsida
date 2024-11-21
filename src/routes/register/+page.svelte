<script>

    let color ="black"
    let name = ""
    let password = ""

    let colors = [{namn: "Blå", value: "blue"}, {namn: "Röd", value: "red"}, {namn: "Grön", value: "green"}, {namn: "Gul", value: "yellow"}, {namn: "Orange", value: "orange"}]

    function handleSubmit(){
        alert(name + ", " + password + ", " + color)
    }
    import { base } from '$app/paths';

    
    import {users_store} from "$lib/user";
    let users = [];

    let new_user = {username: name, password: password, favorite_color: color}

    users = [...users, new_user];
    $users_store = JSON.stringify(users);

    
    import { onMount } from 'svelte';
    onMount(() => {
        /*Check if has more then 2 characters*/
        if($users_store.length > 2){
            users = JSON.parse($users_store);
        }
    });
    
    function checkUsers(){
        new_user = {username: name, password: password, favorite_color: color}
        if (users.filter(user => user.username == new_user.username).length>0){
            alert("användarnamn finns redan")
        }
        else {
            users = [...users, new_user];
            console.log(users)
            $users_store = JSON.stringify(users);
        }
    }
</script>

<main>
    <div class="container">
        <h1>Registrering</h1>
        <form on:submit|preventDefault={handleSubmit} on:submit|preventDefault={checkUsers}>
            <div style="width: 100px; height: 100px; border-radius: 50%; overflow:hidden; background-color:{color};"></div>
            <label for="name">Namn:</label>
            <input type="text" id="name" bind:value={name}>

            <label for="password">Lösenord:</label>
            <input type="password" id="password" bind:value={password}>

            <label for="favoritecolor">Favoritfärg</label>
            <select id="favoritecolor" bind:value={color}>
                {#each colors as x }   
                <option value={x.value}>{x.namn}</option>
                {/each}
            </select>


            <input type="Submit" value="Registrera">
        </form>
        <a style="display:block;" href="{base}/login">Har du redan ett konto? Logga in</a>
    </div>

</main>

<style>
    main{
        background-image: url("https://t4.ftcdn.net/jpg/05/21/65/59/360_F_521655929_N80d5GaCQJ2VP073PfTXJTe9mkvsNtHE.jpg");
        background-size: cover;
        width: 100%;
        height: 100%;
        padding: 5%;
        min-width: 500px;
        min-height: 500px;
    }

    .container{
        border: solid 5px rosybrown;
        border-radius: 10px;
        width: 35%;
        height: 80%;
        background-color: white;
        margin: auto;
        min-width: 300px;
        min-height: 450px;
        
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        color: black;
    }     
</style>

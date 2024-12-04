<script>
    let name = ""
    let password = ""

    import { base } from '$app/paths';

    import {users_store} from "$lib/user";
    let users = []

    import { onMount } from 'svelte';
    onMount(() => {
        /*Check if has more then 2 characters*/
        if($users_store.length > 2){
            users = JSON.parse($users_store);
        }
        else{
            users = []
        }
    });

    function verifyLogin(){
        let loginTry = {username: name, password: password}
        if (loginTry.username == "" || loginTry.password == "") {
            alert("Please enter your credentials")
        }
        else if (users.filter(user => user.username == loginTry.username).length>0){
            if (users.filter(user => user.password == loginTry.password).length>0){
                alert("Login Success")
            }
            else alert("Wrong password")
        }
        else alert("No account with that name")
    }

</script>

<main>
    <div class="container">
        <h1>Inloggning</h1>
        <form on:submit|preventDefault={verifyLogin}>
            
            <label for="name">Namn:</label>
            <input type="text" id="name" bind:value={name}>

            <label for="password">Lösenord:</label>
            <input type="password" id="password" bind:value={password}>

            <input type="Submit" value="Logga in" style="display:block;">
        </form>
        <a style="display:block; align-self: center;" href="{base}/register">Har du inget konto? Registrera</a>
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
        border: solid 5px black;
        border-radius: 10px;
        width: 35%;
        height: 80%;
        background-color: white;
        margin: auto;
        min-width: 350px;
        min-height: 350px;
        
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;  
        color: black;
    }     
</style>

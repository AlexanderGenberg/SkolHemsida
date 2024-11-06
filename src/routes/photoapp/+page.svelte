<script>
    let image = "https://picsum.photos/id/70/367/267"
    let photo = "https://picsum.photos/id/88/367/267"
    let picture = "https://picsum.photos/id/93/367/267"
</script>

<h1>Photoapp</h1>
<p>Denna sida innehåller fina bilder</p>

<div class="photos">
    <div class="image-wrapper">
        <img src={image} alt="Flexbox egenskaper">
    </div>

    <div class="image-wrapper">
        <img src={photo} alt="Fin bild">
    </div>

    <div class="image-wrapper">
        <img src={picture} alt="Ful bild">
    </div>
</div>

<style>
    .image-wrapper img { 
        width: 100%;
        border-radius: 10px;
        border: 2px solid black;
        box-shadow: 4px 8px 10px rgba(0,0,0,0.2);
        }
    .image-wrapper:hover {
            flex-grow: 2;
        }
    .image-wrapper{
            flex-grow: 1;
            flex-basis: 300px;
            margin: 10px;
        }
    .image-wrapper:active { 
            transform: scale(0.9); 
            transition: 200ms transform;
        }
    .photos{
            display: flex;
            flex-wrap: wrap;
            background-color: gainsboro;
            border-radius: 10px;
        }
    h1{
        text-align: center;
        font-size: 20px;
        margin: 20px;
        color: red;
    }
</style>
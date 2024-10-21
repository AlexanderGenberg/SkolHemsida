
<!--Delar upp sidan i två delar-->
<main>
	<div>
  
	  <h1 class=name> Alexander Genberg </h1>
	  <h2>David är kortare än Axel</h2>
	  <h3 style="margin:10px;">Inspirerade citat för min webbutvecklingsresa:</h3>
	  <b id="number">Hej</b>
	  <!--Under denna kommer vi lägga till fler element-->

	  <p id="inspo">
		"The only way to learn a new programming language is by writing programs in it." - <strong>Dennis Ritchie</strong>, creator of the C programming language.
	  </p>
	
	  <p style="background-color:pink" class=span>
		"Every great developer you know got there by solving problems they were unqualified to solve until they actually did it." - <span>Patrick McKenzie, software engineer and entrepreneur</span>.
	  </p>
  
	</div>
	  <!--Här kommer vi lägga till en bild senare i uppgiften 1.2.4 Extra styling-->  
  </main>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00cba9" fill-opacity="1" 
	d="M0,32L13.3,69.3C26.7,107,53,181,80,218.7C106.7,256,133,256,160,256C186.7,
	256,213,256,240,240C266.7,224,293,192,320,154.7C346.7,117,373,75,400,85.3C426.7,96,453,
	160,480,192C506.7,224,533,224,560,213.3C586.7,203,613,181,640,176C666.7,171,693,181,720,
	186.7C746.7,192,773,192,800,181.3C826.7,171,853,149,880,170.7C906.7,192,933,256,960,
	272C986.7,288,1013,256,1040,208C1066.7,160,1093,96,1120,96C1146.7,96,1173,160,1200,
	154.7C1226.7,149,1253,75,1280,69.3C1306.7,64,1333,128,1360,165.3C1386.7,203,1413,213,1427,
	218.7L1440,224L1440,320L1426.7,320C1413.3,320,1387,320,1360,320C1333.3,320,1307,320,1280,320C1253.3,
	320,1227,320,1200,320C1173.3,320,1147,320,1120,320C1093.3,320,1067,320,1040,320C1013.3,320,987,
	320,960,320C933.3,320,907,320,880,320C853.3,320,827,320,800,320C773.3,320,747,320,720,320C693.3,320,
	667,320,640,320C613.3,320,587,320,560,320C533.3,320,507,320,480,320C453.3,320,427,320,400,320C373.3,
	320,347,320,320,320C293.3,320,267,320,240,320C213.3,320,187,320,160,320C133.3,320,107,320,80,
	320C53.3,320,27,320,13,320L0,320Z"></path></svg>
  
  <style>
	main{
	  /*Styling för att dela upp sidan i två delar. */
	  /*Vi kommer gå igenom detta i detalj senare*/
	  margin: auto;
	  width: 80vw;
	  height: 59vh;
	  display: grid;
	  grid-template-columns: repeat(2,50%);
	  overflow: hidden;
	}
	div{
	  /*Styling för att centrera texten i behållaren*/
	  margin: auto;
	}
	.name {
		font-family:'Gill Sans';
    	font-size: 50px;
	}
	#number{
    border: 1px solid black;
    padding: 10px;
	}
	#inspo{
    font-family: courier;
	}

	span{
    color: green;
	}
</style>
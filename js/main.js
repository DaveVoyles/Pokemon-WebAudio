/* @Author: Dave Voyles, Microsoft Corp. 2015 
 *
 * Notice how we are grabbing Web Components here. There are a few different approaches:
 * *************************************************************************************
 * 1) Grabbing the id of the #player-element:
 *			<voice-player id="player-element" accent="es-ES" text=""></voice-player>
 * This element also has an attribute called "accent". When "accent" is changed, the JavaScript within the voice-player web component
 * listens for this change, and fires off a function to change the accent.
 * 
 * *************************************************************************************
 * 2) Grabbing the name of the web component:
 *		     <x-radial-buttons></x-radial-buttons>
 * The name is defined in when first creating the polymer-element. In this case, in x-radial-buttons.html
 * As we start with: 
 *			  <polymer-element name="x-radial-buttons">			   // located in x-radial-buttons.html
 *
 * If you want to be able to accesss the public methods within the polymer-element, you cab use:
 *		     document.querySelector('name-of-selector-WITHOUT-using-#-");
 * 
 * Now we can call on that method by using:
 *			 var radialButtons = document.querySelector("x-radial-buttons"  );
 *			 radialButtons.getCurrentAccent();
 * 
 * *************************************************************************************
 * 3) Grab the polymer element by the ID tag:
 *			<x-radial-buttons id="radButtons"></x-radial-buttons>   // Located in index.html
 *			radialButtons = document.querySelector("#x-rad-buttons");
 *			radialButtons.getFirstElement();						// returns first element from polymer-element
 */

(function (pokemonApp) {

	var form          = document.querySelector('#player-form'    ),  // Contrainer for web audio
        input         = document.querySelector('#player-input'   ),  // Enter name of pokemon here
        playerElement = document.querySelector('#player-element' ),  // Web component that speaks the name of the Pokemon
        xPokemon      = document.querySelector('#x-pokemon'		 ),  // Web component for grabbing the pokemon from the DB
        radialButtons = document.querySelector("x-radial-buttons");  // Notice, not grabbing the # [id]

	// Sets the default text for the Web Audio component. Without this, the player will not speak unless
	// You change the name of the Pokemon
    playerElement.setAttribute('text', "Pikachu");


	/* -- Event Listeners ------------------------------------------------ */
    form.addEventListener('submit',  function (e) { window.pokemonApp.sayTheName(e) });

    /* Sets the name of the pokemon in both the Web Audio player & pokemonDB component, based on the text the user enters in the input tag.
    *  After each character, angular pokemon then checks the pokemon DB to see if such a name exists.
    *  Also, take text from input & set it as the text that the speaker will say. */
	input.addEventListener('input',  function (e) {
		playerElement.setAttribute('text', input.value);
		xPokemon.name = input.value;
	});


	/* -- Functions ----------------------------------------------------- */

	// Say the text when button is pressed
    pokemonApp.sayTheName = function (e) {
      	e.preventDefault();
      	playerElement.speak();
      	console.log(radialButtons.intValue);
    };


	 //@Caller: X-radial-buttons web component
	 //Setting the accent based on the radial button the user selected
    pokemonApp.changeAccent = function (accent) {
    	var currentAccent = radialButtons.getCurrentAccent();
    	console.log("current accent is: " + currentAccent + ". " + "Changing accent to: " + accent);
    	playerElement.setAttribute("accent", accent);
    };


// Creates a namespace for this 'class'.
// Use window.pokemonApp.FUNCTION_NAME() to call something from within this 'class'
}(window.pokemonApp = window.pokemonApp || {}));


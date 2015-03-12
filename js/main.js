/* @Author: Dave Voyles, Microsoft Corp. 2015 
 *
 * Notice how we are grabbing Web Components here. We are taking two (2) different approaches:
 * 1) Grabbing the id of the #player-element
 *			<voice-player id="player-element" accent="es-ES" text=""></voice-player>
 * This element also has an attribute called "accent". When "accent" is changed, the JavaScript within the voice-player web component
 * listens for this, and fires off a function to change the accent.
 * 
 * 2) Grabbing the name of the web component
 *		     <x-radial-buttons></x-radial-buttons>
 * The name is defined in when first creating the polymer-element. In this case, in x-radial-buttons.html
 * As we start with: 
 *			  <polymer-element name="x-radial-buttons">
 *
 * The first way is fine if you are just grabbing a publicly exposed HTML5 tag (attribute) such as "accent".
 * However, if you want to be able to accesss the public methods within the polymer-element, you need to use:
 *		     document.querySelector('name-of-selector-WITHOUT-using-#-");
 * 
 * Now we can call on that method by using:
 *			 var radialButtons = document.querySelector("x-radial-buttons"  );
 *			 radialButtons.getCurrentAccent();
 * 
 */

(function (pokemonApp) {

	// Grab inputs and button for speech-to-text
    var form                 = document.querySelector('#player-form'	  ),  // Contrainer for web audio
        input                = document.querySelector('#player-input'     ),  // Enter name of pokemon here
        playerElement        = document.querySelector('#player-element'	  ),  // Web component that speaks the name of the Pokemon
        xPokemon             = document.querySelector('#x-pokemon'		  ),  // Web component for grabbing the pokemon from the DB
        radialButtons	     = document.querySelector("x-radial-buttons"  );  // Notice, not grabbing the # [id]
      	playerAccent         = playerElement.getAttribute("accent"		  );  // Grabbing Polymer attribute


	/* Sets the name of the pokemon, based on the text the user enters in the input tag
	*  after each character, angular pokemon then checks the pokemon DB to see if such a name exists.
	*  Also, take text from input & set it as the text that the speaker will say. */
    pokemonApp.setName = function () {
      	playerElement.setAttribute('text', input.value);
      	xPokemon.name = input.value;
    };


	// Say the text when button is pressed
    pokemonApp.sayTheName = function (e) {
      	e.preventDefault();
      	playerElement.speak();
    };


	// @Caller: X-radial-buttons web component
	// Setting the accent based on the radial button the user selected
    pokemonApp.changeAccent = function (accent) {
    	var currentAccent = radialButtons.getCurrentAccent();
    	console.log("current accent is: " + currentAccent + ". " + "Changing accent to: " + accent);
		var Newaccent    = playerElement.setAttribute("accent", accent);
	}


	/* -- Event Listeners ------------------------------------------------ */
	input.			addEventListener('input',				  window.pokemonApp.setName()	   );
	form.			addEventListener('submit', function (e) { window.pokemonApp.sayTheName(e) });


// Creates a namespace for this 'class'.
// Use window.pokemonApp.FUNCTION_NAME() to call something from within this 'class'
}(window.pokemonApp = window.pokemonApp || {}));


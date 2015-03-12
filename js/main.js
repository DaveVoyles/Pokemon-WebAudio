(function (pokemonApp) {

	// Grab inputs and button for speech-to-text
    var form                 = document.querySelector('#player-form'	  ),
        input                = document.querySelector('#player-input'     ),
        playerElement        = document.querySelector('#player-element'	  ),
        xPokemon             = document.querySelector('#x-pokemon'		  ),
        btnChangeAccent      = document.querySelector('#btn-change-accent'),
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


	// Called by the X-radial-buttons web component
	// Setting the accent based on the radial button the user selected
	pokemonApp.changeAccent = function (accent) {
		var Newaccent = playerElement.setAttribute("accent", accent);
	}


	/* -- Event Listeners ------------------------------------------------ */
	btnChangeAccent.addEventListener('submit',				  window.pokemonApp.changeAccent() );
	input.			addEventListener('input',				  window.pokemonApp.setName()	   );
	form.			addEventListener('submit', function (e) { window.pokemonApp.sayTheName(e) });


// Creates a namespace for this 'class'.
// Use window.pokemonApp.FUNCTION_NAME() to call something from within this 'class'
}(window.pokemonApp = window.pokemonApp || {}));


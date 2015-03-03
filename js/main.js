(function (undefined) {

	// Grab inputs and button for speech-to-text
	var form    = document.querySelector('#player-form'   ),
		input   = document.querySelector('#player-input'  ),
		element = document.querySelector('#player-element'),
	    xPokemon = document.querySelector('#x-pokemon'	  );

	// Take text from input & set it as the text that the speaker will say.
	// Set the name of the pokemon, which angular will then grab from the pokemon DB 
	input.addEventListener('input', function (e) {
		element.setAttribute('text', input.value);
		xPokemon.name = input.value
	});

	// Say the text when button is pressed
	form.addEventListener('submit', function (e) {
		e.preventDefault();
		element.speak();
	});

})();


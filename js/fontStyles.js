var fontStylesButtonsInd = document.getElementsByClassName('font-style-ind');

var textAlignmentButtons = document.getElementsByClassName('text-alignment-buttons');

var dep_buttons_container = document.getElementsByClassName('font-style-dep');

console.log(dep_buttons_container);

function dep_switch_state(elem_array) {

	return function() {

		if( this.classList.contains( 'font-style-ind-active' ) ) {
			this.classList.remove( 'font-style-ind-active' );
		}

		else{

			for(let i = 0; i < elem_array.length; i++) {

				if( elem_array[i].classList.contains( 'font-style-ind-active' ) ) {
					elem_array[i].classList.remove('font-style-ind-active');
					//break;
				}

			}

			this.classList.add( 'font-style-ind-active' );
		}

	}
}

for(let i = 0; i < dep_buttons_container.length; i++){
	let buttons = dep_buttons_container[i].children;
	for( let j = 0; j < buttons.length; j++){
		buttons[j].addEventListener('click', dep_switch_state(buttons));
	}
}

function switchStateInd() { 
	if(this.classList.contains('font-style-ind-active')){
		this.classList.remove('font-style-ind-active');
	}
	else{
		console.log(this);
		this.classList.add('font-style-ind-active');
		
	}
}

for (let i = 0; i < fontStylesButtonsInd.length; i++){
	fontStylesButtonsInd[i].addEventListener('click', switchStateInd);
}

function switchAlignmentState(elem_Array) {
		return function() { 
			
			if(!this.classList.contains('font-style-ind-active')){
				for(let i = 0; i < elem_Array.length; i++){
					if(elem_Array[i].classList.contains('font-style-ind-active')){
						elem_Array[i].classList.remove('font-style-ind-active');
					}
				}
				this.classList.add('font-style-ind-active');

			}

		}
}

for(let i = 0; i < textAlignmentButtons.length; i++){
	var button = textAlignmentButtons[i].children;
	for(let j = 0; j < button.length; j++){
		button[j].addEventListener('click', switchAlignmentState(button));
	}
}
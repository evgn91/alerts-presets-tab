var rotationSlider = document.getElementById('alert-preset-rotation-slider');
var rotationInput = document.getElementById('alert-preset-rotation');

//var rotationSliderFill = document.getElementById('alert-preset-rotation-slider-fill');


/*rotationSliderFill.style.width = ( rotationSlider.value * 100 / 360 ) + '%';*/

//console.log(rotationSlider.value);

/*rotationSlider.onchange = function() {
	rotationInput.value = rotationSlider.value;
	console.log(rotationSlider.value);
}*/

/*rotationSlider.addEventListener('input', () => {
													console.log(rotationSlider.value);
													rotationInput.value = rotationSlider.value;
													rotationSliderFill.style.width = ( rotationSlider.value * 100 / 360 ) + '%';

												})*/

function changeFill(input, fill) {
	return function() {
		fill.style.width = ( input.value * 100 / input.max ) + '%';
		//console.log(fill);
	}
}

function changeFillCentered(input, fill){
	return function() {
		fill.style.position = 'absolute';
		fill.style.left = '50%';

		if(input.value >= 0){

			if(fill.style.right) {

				fill.style.right = '';
				fill.style.left = '50%';

			}

			fill.style.width = ( input.value * 100 / input.max ) / 2 + '%';
			//console.log( fill.style );
			
		}
		else if(input.value < 0){
			
			if(fill.style.left) {

				fill.style.left = '';
				fill.style.right = '50%';
				
			}

			fill.style.width = ( Math.abs(input.value) * 100 / Math.abs(input.min) ) / 2 + '%';
		}
	}
}

function changeTextInput(input){
	return function () {
		input.value = event.target.value;
		//console.log(input);
	}
}

window.onload = () => {

	var sliderContainers = document.getElementsByClassName('slider-container');

	for(let i = 0; i < sliderContainers.length; i++){
		//console.log(querySelectorAll('.sliderContainers > .slider-bar-fill'))
		var sliderFill;
		var sliderInput;
		var sliderChildren;
		var sliderTextInput;

		//console.log(sliderContainers[i].nextElementSibling);
		
		sliderTextInput = sliderContainers[i].nextElementSibling;
		sliderChildren = sliderContainers[i].children;
		//console.log( 'CHILD', sliderChildren[0] );

	for( let j = 0; j < sliderChildren.length; j++ ){

		

		if( sliderChildren[j].className == 'newSlider'){

			sliderInput = sliderChildren[j];
			sliderInput.id = i + '_' + j;
			sliderInput.addEventListener('input', changeTextInput(sliderTextInput));
			sliderTextInput.value = sliderInput.value;
			//console.log('SLIDER INPUT', sliderInput);
			//sliderInput.addEventListener( 'input', () => { console.log(event.target.value) } );

		}

		else if( sliderChildren[j].className == 'slider-bar-fill' ){

			sliderFill = sliderChildren[j];
			sliderFill.id = i + '_' + j;
			sliderFill.style.width = ( sliderInput.value * 100 / sliderInput.max ) + '%';
			//console.log('SLIDER FILL', sliderChildren[j]);
			//console.log('SLIDER INPUT', sliderInput);

			sliderInput.oninput = changeFill(sliderInput, sliderFill);

			//sliderInput.addEventListener( 'input', () => { console.log( sliderChildren[j] ) } );

			/*sliderInput.addEventListener('input', () => { 
															sliderFill.style.width =  ( sliderInput.value * 100 / sliderInput.max ) + '%';
															console.log(sliderFill);
			} );*/

		}

		else if( sliderChildren[j].className == 'slider-bar-fill-center' ){
			sliderFill = sliderChildren[j];
			sliderInput.oninput = changeFillCentered(sliderInput, sliderFill);
		}

		

			
	}

	
	
	}

}


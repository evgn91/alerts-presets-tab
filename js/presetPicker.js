var presets_container = document.getElementsByClassName('presets-collection');
var preset = [];
var selected_preset;

var any_tip = document.getElementById('any-tip');
var any_tip_condition = document.getElementById('any-tip-condition');
var default_tip_condition = document.getElementById('default_tip_condition');


function switchPreset() {

	console.log(event.target);

	if(this == selected_preset){
		console.log(this);	
	}

	else{

		if(selected_preset == any_tip){
			any_tip_condition.style.display = 'none';
			default_tip_condition.style.display = 'block';
		}

		selected_preset.classList.remove('presets-collection-item-selected');
		this.classList.add('presets-collection-item-selected');
		
		if(this == any_tip){
			console.log('any tip');
			any_tip_condition.style.display = 'flex';
			default_tip_condition.style.display = 'none';
		}

		selected_preset = this;

	}
	
}

for(let i = 0; i < presets_container.length; i++){
	console.log('PRESETS CONTAINER');
	preset[i] = presets_container[i].children;
}

selected_preset = preset[0][2];
console.log(selected_preset);

for(let k = 0; k < preset.length; k++){
	for(let j = 0; j < preset[k].length; j++){
		//console.log( 'PRESET' );
		//console.log( preset[k][j] );
		//preset[j].addEventListener('click', switchPreset);
		preset[k][j].addEventListener('click', switchPreset );
	}	
}

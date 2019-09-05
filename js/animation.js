let durationSlider = document.getElementById('anim-duration-slider');
let animDuration = Number(durationSlider.value) * 1000;

let previewWrapper = document.getElementById('alerts-preview');

function renderPreview(parentContainer, config){

	let appearanceContainer = document.createElement('div');
	let moveContainer = document.createElement('div');
	let fadeContainer = document.createElement('div');
	let fadeCenterContainer = document.createElement('div');
	let appearanceCenterContainer = document.createElement('div');
	let wavesXContainer = document.createElement('div');
	let baseContainer = document.createElement('div');
	let tipAmount = document.createElement('span');
	let tipperName = document.createElement('span');
	let customMessage = document.createElement('span');

	let fadeDuration = parseFloat(config.fade.duration) * 1000;

	tipAmount.innerHTML = '100';
	tipAmount.id = 'tip-amount';
	tipAmount.style.display = 'block';
	tipAmount.style.animationDuration = '1s';

	tipperName.innerHTML = 'TipAlerts';
	tipperName.id = 'tipper-name';
	tipperName.style.display = 'block';
	tipperName.style.animationDuration = '1s';

	customMessage.innerHTML = 'Thank you!';
	customMessage.id = 'custom-message';
	customMessage.style.display = 'block';
	customMessage.style.animationDuration = '1s';

	if(config.appearance.enabled){
		appearanceContainer.style.animationName = config.appearance.preset.anim;
		// tipAmount.style.animationName = config.appearance.preset.anim;
		// tipperName.style.animationName = config.appearance.preset.anim;
		// customMessage.style.animationName = config.appearance.preset.anim;

		// setTimeout(() => {
		// 		tipperName.style.display = 'block';
		// }, 300);

		// setTimeout(() => {
		// 		tipAmount.style.display = 'block';
		// }, 600);

		// setTimeout(() => {
		// 		customMessage.style.display = 'block';
		// }, 900);

		// tipperName.style.animationName = config.appearance.preset.anim;
		// customMessage.style.animationName = config.appearance.preset.anim;
	}
	else{
		appearanceContainer.style.animationName = '';
	}

	appearanceContainer.style.animationDuration = config.appearance.duration;
	appearanceContainer.style.position = 'absolute';
	appearanceContainer.style.left = '0%';
	appearanceContainer.style.top = '0%';
	appearanceContainer.style.width = '144px';
	appearanceContainer.style.height = '144px';
	appearanceContainer.style.boxSizing = 'border-box';
	appearanceContainer.style.transformOrigin = '72px 72px 0px';

	if(config.move.enabled){
		moveContainer.style.animationName = config.move.preset.anim;
	}
	else{
		moveContainer.style.animationName = '';
	}
	
	moveContainer.style.animationDuration = animDuration / 1000 + 's';
	moveContainer.style.position = 'absolute';
	moveContainer.style.left = 'calc(50% - 72px)';
	moveContainer.style.top = 'calc(50% - 72px)';
	moveContainer.style.animationTimingFunction = config.move.timingFunction;

	moveContainer.style.width = '100%';
	moveContainer.style.height = '100%';
	moveContainer.classList.add('move-container');

	if(config.fade.enabled){
		fadeContainer.style.animationName = config.fade.preset.anim;
	}
	else{
		fadeContainer.style.animationName = '';
	}

	fadeContainer.style.animationDuration = config.fade.duration;
	
	fadeContainer.style.animationDelay = (animDuration - fadeDuration) / 1000 + 's';
	fadeContainer.style.transformOrigin = '72px 72px 0px';
	fadeContainer.style.position = 'absolute';

	fadeContainer.style.width = '100%';
	fadeContainer.style.height = '100%';
	fadeContainer.style.boxSizing = 'border-box';

	fadeCenterContainer.style.position = 'absolute';
	fadeCenterContainer.style.width = '100%';
	fadeCenterContainer.style.height = '100%';

	appearanceCenterContainer.style.position = 'absolute';
	appearanceCenterContainer.style.width = '100%';
	appearanceCenterContainer.style.height = '100%'

	wavesXContainer.style.position = 'absolute';
	wavesXContainer.style.animationDuration = '2s';
	wavesXContainer.style.animationIterationCount = 'infinite';

	wavesXContainer.style.left = '0%';
	wavesXContainer.style.animationName = config.waves;

	baseContainer.classList.add('preview-image');



	baseContainer.appendChild(tipperName);
	baseContainer.appendChild(tipAmount);
	baseContainer.appendChild(customMessage);

	wavesXContainer.appendChild(baseContainer);
	fadeCenterContainer.appendChild(wavesXContainer);
	appearanceCenterContainer.appendChild(fadeCenterContainer);
	fadeContainer.appendChild(appearanceCenterContainer);
	appearanceContainer.appendChild(fadeContainer);
	moveContainer.appendChild(appearanceContainer);
	
	parentContainer.appendChild(moveContainer);
	

	return moveContainer;
}

let _alert;

function removeElem(elem){
	return elem.remove(); 
}

function animCycle(){
	_alert = renderPreview( previewWrapper, animConfig );
	animRemoveTimeout = setTimeout( () => { removeElem(_alert) }, animDuration - 50);
	animCycleTimeout = setTimeout( animCycle, animDuration + 100);	
}

function resetAnim(){
	clearTimeout(animRemoveTimeout);
	clearTimeout(animCycleTimeout);
	removeElem(_alert);
	animCycle();
}

durationSlider.onchange = function(){
	animDuration = Number(durationSlider.value) * 1000;
	resetAnim();
}

animCycle();

console.log('animPresetsPicker.js');

let animPickersWrapper = document.getElementById( 'anim-pickers-wrapper' );

let animAppearanceEnableCheckbox = document.getElementById('anim-appearance-enable');

let animAppearancePreset = document.getElementById( 'anim-appearance-preset' );

let animAppearancePicker = document.getElementById( 'anim-appearance-picker' );
let animAppearancePickerImage = document.getElementById( 'anim-appearance-preview-img' );
let animMovePickerImage = document.getElementById( 'anim-move-preview-img' );
let animFadePickerImage = document.getElementById('anim-fade-preview-img');
let animFadePicker = document.getElementById( 'anim-fade-picker' );
let animMovePicker = document.getElementById( 'anim-movement-picker' );

let animAppearancePickerTitle = document.getElementById('anim-appearance-preview-title');
let animMovePickerTitle = document.getElementById('anim-move-preview-title');
let animFadePickerTitle = document.getElementById('anim-fade-preview-title');

let settingsTabContent = document.getElementById('settings-tab-content');

let previewImgTimeout;
let activeModal;
let activePicker;

let pickerModalScrollOffset = {};

let animConfig = {

					appearance: 		{
											preset: appearancePresets[1].presets[0],
											duration: '1s',
											enabled: true,
											timingFunction: null

										},

					move: 				{	
											preset: movePresets[1].presets[2],
											duration: null,
											enabled: true,
											timingFunction: 'ease'
										},	

					fade: 				{
											preset: fadePresets[1].presets[0],
											duration: '1s',
											enabled: true,
											timingFunction: null
										},

					waves: ''
};

let animControlsCfg = { 

	appearance:     {	
						checkboxTitle: 'Appearance',
						animPhase: 'appearance',
						animPreset: animConfig.appearance.preset,
						presets: appearancePresets,
						settings: false,
						style: 'left'
					},

	move: 			{
						checkboxTitle: 'Move',
						animPhase: 'move',
						animPreset: animConfig.move.preset,
						presets: movePresets,
						settings: true,
						style: 'center'
					}, 

	fade: 			{
						checkboxTitle: 'Fade',
						animPhase: 'fade',
						animPreset: animConfig.fade.preset,
						presets: fadePresets,
						settings: false,
						style: 'right'
					}

};



var animSetPreset = function( preset, animPhase, control, duration ){

	return function(){

				clearTimeout(animRemoveTimeout);
				clearTimeout(animCycleTimeout);

				animConfig[animPhase].preset = preset;

				if( duration && animPhase != 'move' ){
					animConfig[animPhase].duration = duration;
				}
				else if( animPhase != 'move' ){
					animConfig[animPhase].duration = '1s';	
				}

				control.title.innerHTML = preset.title;
				clearTimeout(previewImgTimeout);
				activeModal.remove();
				activeModal = null;
				control.image.style.display = 'block';
				control.imageRandom.style.display = 'none';
				control.progressBar.style.display = 'block';

				if(!control.checkbox.checked){

					control.checkbox.checked = true;
					control.placeholder.style.display = 'none';
					//control.image.style.display = 'block';
					control.title.style.opacity = '1';
					control.preview.style.opacity = '1';
					//control.progressBar.style.display = 'block';

				}

				resetAnim();

				setTimeout( () => {window.removeEventListener('click', closeModal);}, 1);
			}
	
}

let animSetRandom = function( animPhase, control ){
	return function(){
				
				animConfig[animPhase].preset = {};
				animConfig[animPhase].preset.title = 'Random';
				animConfig[animPhase].preset.anim = 'random';
				control.title.innerHTML = 'Random';
				clearTimeout(previewImgTimeout);
				activeModal.remove();
				activeModal = null;
				control.progressBar.style.display = 'none';
				control.image.style.display = 'none';
				control.imageRandom.style.display = 'block';

				if(!control.checkbox.checked){

					control.checkbox.checked = true;
					control.placeholder.style.display = 'none';
					
					control.title.style.opacity = '1';
					control.preview.style.opacity = '1';
					
				}
				setTimeout( () => {window.removeEventListener('click', closeModal);}, 1);
			}
}

let renderPresetsPicker = function(parentElem, collection, animPhase, control){

	return function(){

		console.log('CREATE PICKER');


		activeControl = control.elem;
		//console.log(control.elem);
		console.log(activeControl);

		activeControl.removeEventListener('click', renderPresetsPicker);

		let pickerModal = document.createElement('section');
		let pickerModalTitleWrapper = document.createElement('div');
		let scrollContainer = document.createElement('div');

		pickerModal.classList.add('anim-presets-picker');
		scrollContainer.classList.add('scroll-container');
		
		//console.log( pickerModal.scrollTop );
		//console.log( pickerModalScrollOffset[animPhase] );
		
		// pickerModal.onclick = function() {
		// 	pickerModal.scrollTop = pickerModalScrollOffset[animPhase];
		// }

		scrollContainer.onscroll = function(){
		// 	console.log(this.scrollTop);
			pickerModalScrollOffset[animPhase] = this.scrollTop;
		}
		
		pickerModalTitleWrapper.classList.add('module-36','settings-section-header','no-border','col-12','anim-picker-head');
		pickerModalTitleWrapper.innerHTML = `<span>${collection[0]}</span>`;

		let presetsGroupWrapper = document.createElement('section');
		let gridContainer = document.createElement('div');
		let presetsGroupTitle = document.createElement('span'); 

		gridContainer.classList.add('grid-container');
		presetsGroupTitle.classList.add('anim-presets-group-title');
		presetsGroupTitle.innerHTML = 'Specials';
		presetsGroupWrapper.classList.add('anim-presets-picker-group');

		let presetItem = document.createElement('div');
		let presetItemTitle = document.createElement('span');
		let presetItemTitleWrapper = document.createElement('div');
		let presetItemPreviewContainer = document.createElement('div');
		let presetItemPreviewImg = document.createElement('img');

		presetItemTitle.innerHTML = 'Random';
		presetItemPreviewImg.src = "img/preview-random.png";
		presetItem.classList.add('anim-presets-picker-item');

		presetItemTitle.classList.add('anim-preset-picker-item-title');
		presetItemTitleWrapper.classList.add('anim-preset-picker-item-title-wrapper');

		presetItemPreviewContainer.classList.add('anim-preset-picker-item-preview-wrapper');

		presetItem.addEventListener('click', animSetRandom( animPhase, control ));

		presetItemTitleWrapper.appendChild(presetItemTitle);
		presetItemPreviewContainer.appendChild(presetItemPreviewImg);

		presetItem.appendChild(presetItemPreviewContainer);
		presetItem.appendChild(presetItemTitleWrapper);
				
		gridContainer.appendChild(presetItem);

		presetsGroupWrapper.appendChild(presetsGroupTitle);
		presetsGroupWrapper.appendChild(gridContainer);
		scrollContainer.appendChild(presetsGroupWrapper);

		for(let i = 1; i < collection.length; i++ ){

			let presetsGroupWrapper = document.createElement('section');
			let gridContainer = document.createElement('div');
			let presetsGroupTitle = document.createElement('div');

			gridContainer.classList.add('grid-container');
			presetsGroupTitle.classList.add('anim-presets-group-title');
			presetsGroupTitle.innerHTML = collection[i].title;
			presetsGroupWrapper.classList.add('anim-presets-picker-group');	

			for(let j = 0; j < collection[i].presets.length; j++){

				let presetItem = document.createElement('div');
				let presetItemTitle = document.createElement('span');
				let presetItemTitleWrapper = document.createElement('div');
				let presetItemPreviewContainer = document.createElement('div');
				let presetItemPreviewImg = document.createElement('div');
				let presetItemProgressBar = document.createElement('div');

				let animDuration = '1s';

				if('duration' in collection[i].presets[j]){
					animDuration = collection[i].presets[j].duration;
				}

				presetItemTitle.innerHTML = collection[i].presets[j].title;

				presetItemPreviewImg.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="33" height="31" viewBox="0 0 33 31" fill="none">
				<path d="M30.2031 2.89745C26.474 -0.965815 20.4278 -0.965815 16.6986 2.89745L16.5 3.10319L16.3014 2.89745C12.5722 -0.965816 6.52605 -0.965815 2.79688 2.89745C-0.932292 6.76071 -0.932293 13.0243 2.79688 16.8876L16.5565 31L30.2031 16.8876C33.9323 13.0243 33.9323 6.76071 30.2031 2.89745Z" fill="${collection[i].color}"/>
				</svg>`;

				presetItem.classList.add('anim-presets-picker-item');
				presetItemProgressBar.classList.add('anim-preview-progress-bar');

				presetItemProgressBar.style.backgroundColor = collection[i].color;

				//presetItemTitle.style.color = collection[i].color;
				presetItemTitle.classList.add('anim-preset-picker-item-title');
				presetItemTitleWrapper.classList.add('anim-preset-picker-item-title-wrapper');
				presetItemPreviewImg.classList.add('anim-presets-picker-item-preview-image');
				presetItemPreviewContainer.classList.add('anim-preset-picker-item-preview-wrapper');

				switch (animPhase) {
					case 'appearance':

						presetItem.onmouseenter =  function(){ 

							presetItemPreviewImg.style.animationName = collection[i].presets[j].anim + '-preview';

							if('duration' in collection[i].presets[j]){
								presetItemPreviewImg.style.animationDuration = collection[i].presets[j].duration;
								console.log('CUSTOM PREVIEW DURATION');
							}
							else{
								console.log('DEFAULT PREVIEW DURATION');
								presetItemPreviewImg.style.animationDuration = '1s';
							}

							if('timingFunction' in collection[i].presets[j]){
								presetItemPreviewImg.style.animationTimingFunction = collection[i].presets[j].timingFunction;
							}
							
							console.log( collection[i].presets[j].anim );
							previewImgTimeout = setTimeout( function previewAnimDelay(){ 
								presetItemPreviewImg.style.animationName = '';
								previewImgTimeout = setTimeout(() => {
									presetItemPreviewImg.style.animationName = collection[i].presets[j].anim;
									previewImgTimeout = setTimeout(previewAnimDelay, 1000);
								}, 400); 
							}, 1000);
						}

						presetItem.onmouseleave =  function(){ 
							presetItemPreviewImg.style.animationName = '';
							presetItemPreviewImg.style.animationDuration = '';
							clearTimeout(previewImgTimeout);
						}

						presetItem.addEventListener('click', animSetPreset( collection[i].presets[j], 'appearance', control, animDuration ));


						break;

					case 'move':

						presetItemProgressBar.style.animationDuration = '1s';

						presetItem.onmouseenter =  function(){ 
							presetItemPreviewImg.style.animationName = collection[i].presets[j].anim + '-preview';
						}

						presetItem.onmouseleave =  function(){ 
							presetItemPreviewImg.style.animationName = '';
						}

						presetItem.addEventListener('click', animSetPreset( collection[i].presets[j], 'move', control, animDuration ));

						break;

					case 'fade':

						presetItem.onmouseenter =  function(){

							presetItemPreviewImg.style.animationName = collection[i].presets[j].anim + '-preview';

							if('duration' in collection[i].presets[j]){
								presetItemPreviewImg.style.animationDuration = collection[i].presets[j].duration;
							}
							else{
								presetItemPreviewImg.style.animationDuration = '1s';
							}
							
							previewImgTimeout = setTimeout( function previewAnimDelay(){ 
								presetItemPreviewImg.style.animationName = collection[i].presets[j].anim + '-preview';
								previewImgTimeout = setTimeout(() => {
									presetItemPreviewImg.style.animationName = '';
									previewImgTimeout = setTimeout(previewAnimDelay, 400);
								}, 1000); 
							}, 400);
						}

						presetItem.onmouseleave =  function(){ 
							presetItemPreviewImg.style.animationName = '';
							clearTimeout(previewImgTimeout);
						}

						presetItem.addEventListener('click', animSetPreset( collection[i].presets[j], 'fade', control, animDuration ));

						break;


					default:

						break;
				}

				// presetItem.style.opacity = '0';
				// presetItem.style.animationFillMode = 'forwards';
				// presetItem.style.animationName = 'pickerAppearance';
				// presetItem.style.animationDuration = '.2s';
				// presetItem.style.animationDelay = i + '.' + j + 's';
				
				presetItemTitleWrapper.appendChild(presetItemTitle);
				presetItemPreviewContainer.appendChild(presetItemPreviewImg);
				presetItemPreviewContainer.appendChild(presetItemProgressBar);
				presetItem.appendChild(presetItemPreviewContainer);
				presetItem.appendChild(presetItemTitleWrapper);

				gridContainer.appendChild(presetItem);



				
			}


			presetsGroupWrapper.appendChild(presetsGroupTitle);
			presetsGroupWrapper.appendChild(gridContainer);
			// presetsGroupWrapper.style.animationName = 'pickerGroupAppearance';
			scrollContainer.appendChild(presetsGroupWrapper);
			

		}

		activeModal = pickerModal;
		pickerModal.appendChild(scrollContainer);
		pickerModal.prepend(pickerModalTitleWrapper);
		pickerModal.style.animationDuration = '.2s';
		pickerModal.style.animationName = 'pickerAppearance';
		parentElem.prepend(pickerModal);
		//document.body.prepend(pickerModal);

		scrollContainer.scrollTop = pickerModalScrollOffset[animPhase];
		setTimeout(() => {window.addEventListener('click', closeModal);}, 1);

	}
}

let renderAnimControl = function( pickerCfg, parentElem, animPhase, controlTitle, presets ) {
		
		console.log('Creating control');
		let itemWrapper = document.createElement( 'div' );

		let checkboxWrapper = document.createElement( 'label' );
		let checkboxInput = document.createElement( 'input' );
		let checkboxCheckMark = document.createElement( 'span' );
		let checkboxText = document.createElement( 'span' );

		let previewWrapper = document.createElement( 'div' );
		let preview = document.createElement('div');
		let previewImage = document.createElement('img');
		let previewImageRandom = document.createElement('img');
		let previewPlaceholder = document.createElement('img');
		let previewProgressBar = document.createElement('div');

		let titleWrapper = document.createElement('div');
		let title = document.createElement('span');

		let settingsButton = document.createElement('button');
		let settingsButtonIcon = document.createElement('img');
		settingsButton.appendChild(settingsButtonIcon);
		settingsButton.classList.add('button-small', 'button-icon', 'button-no-bg');
		settingsButtonIcon.src = 'icons/ic-settings.svg';
		

		if(pickerCfg.settings){
			settingsButton.style.display = 'flex';
		}
		else{
			settingsButton.style.display = 'none';
		}

		itemWrapper.classList.add('anim-preset-item-wrapper');

		checkboxWrapper.classList.add('checkbox-container');
		checkboxInput.type = 'checkbox';
		checkboxInput.checked = animConfig[animPhase].enabled;
		checkboxCheckMark.classList.add('checkmark');
		checkboxText.classList.add('checkbox-text');
		checkboxText.innerHTML = controlTitle;

		previewWrapper.classList.add('anim-preset-item');
		preview.classList.add('anim-preset-preview');
		previewImage.src = "img/preview-heart.png";
		previewImageRandom.src = 'img/preview-random.png';
		previewImageRandom.style.display = 'none';
		previewPlaceholder.src = 'img/anim-disabled-placeholder.png';
		previewPlaceholder.style.display = 'none';
		previewProgressBar.classList.add('anim-preview-progress-bar');

		switch (pickerCfg.style) {
			case 'left':
				previewWrapper.classList.add('item-left');
				titleWrapper.style.borderBottomLeftRadius = '6px';
				preview.style.borderTopLeftRadius = '6px';
				break;
			case 'center':
				previewWrapper.classList.add('item-center');
				break;
			case 'right':
				previewWrapper.classList.add('item-right');
				titleWrapper.style.borderBottomRightRadius = '6px';
				preview.style.borderTopRightRadius = '6px';
				break;
			default:
				// statements_def
				break;
		}

		previewWrapper.onmouseenter = function(){
			console.log(previewImage);
			console.log(animConfig[animPhase].preset);

			previewImage.style.animationName = animConfig[animPhase].preset.anim +'-preview';

			if(animConfig[animPhase].duration){
				previewImage.style.animationDuration = animConfig[animPhase].duration;
			}
			else{
				previewImage.style.animationDuration = '1s';
			}
			
		}

		previewWrapper.onmouseleave = function(){
			previewImage.style.animationName = '';
		}

		titleWrapper.classList.add('anim-preset-title-wrapper');
		title.innerHTML = animConfig[animPhase].preset.title;

		checkboxWrapper.appendChild( checkboxInput );
		checkboxWrapper.appendChild( checkboxCheckMark );
		checkboxWrapper.appendChild( checkboxText );

		preview.appendChild( previewImage );
		preview.appendChild( previewImageRandom );
		preview.appendChild( previewPlaceholder );
		preview.appendChild( previewProgressBar );

		previewWrapper.appendChild( preview );
		previewWrapper.appendChild( titleWrapper );

		titleWrapper.appendChild( title );
		titleWrapper.appendChild( settingsButton );

		itemWrapper.appendChild( checkboxWrapper );
		itemWrapper.appendChild( previewWrapper );

		parentElem.appendChild( itemWrapper );

		let control = {	
						elem: previewWrapper,
		 				image: previewImage,
						title: title,
		 				progressBar: previewProgressBar,
		 				preview: preview,
		 				checkbox: checkboxInput,
		 				placeholder: previewPlaceholder,
		 				imageRandom: previewImageRandom,
					};

		checkboxInput.addEventListener('change', () => {return switchAnimState(control, animPhase, checkboxInput)});

		previewWrapper.addEventListener( 'click', renderPresetsPicker( settingsTabContent, presets, animPhase, control ) );

		return control;
}

let appearanceAnimControl = renderAnimControl( animControlsCfg.appearance, animPickersWrapper, 'appearance', 'Appearance', appearancePresets );
let moveAnimControl = renderAnimControl( animControlsCfg.move, animPickersWrapper, 'move', 'Move', movePresets );
let fadeAnimControl = renderAnimControl( animControlsCfg.fade, animPickersWrapper, 'fade', 'Fade', fadePresets );


let closeModal = function(){


	if(activeModal){

		if( activeModal.contains(event.target) ){

		}

		else{
		
			activeModal.remove();
			activeModal = null;
			setTimeout(() => {window.removeEventListener('click', closeModal);}, 1);
		
		}
	}
}

function switchAnimState(control, animPhase, checkbox){
				
				if(checkbox.checked){

						animConfig[animPhase].enabled = true;
						control.title.innerHTML = animConfig[animPhase].preset.title;
						control.title.style.opacity = '1';
						control.preview.style.opacity = '1';
						control.placeholder.style.display = 'none';

						if(animConfig[animPhase].preset.anim != 'random'){

							
							
							
							
							control.image.style.display = 'block';

						}

						else{
							control.imageRandom.style.display = 'block';
						}

						resetAnim();

				}

				else{		
							console.log( animConfig[animPhase] );
							animConfig[animPhase].enabled = false;
							resetAnim();

							control.imageRandom.style.display = 'none';
							control.image.style.display = 'none';
							control.title.innerHTML = 'Disabled';
							control.title.style.opacity = '.54';
							control.preview.style.opacity = '.34';
							control.progressBar.style.display = 'none';
							control.placeholder.style.display = 'block';

						}
						

}
				
				
				

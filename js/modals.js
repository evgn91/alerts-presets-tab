var activeModal;
var activePopup;
var testTipButton = document.getElementById('testTipButton');
var borderSettingsButton = document.getElementsByClassName('border-settings-button');
var shadowSettingsButton = document.getElementsByClassName('shadow-settings-button');

var shadowSettingsPopupHTML = document.getElementById('shadow-settings-popup-html').innerHTML;
var borderSettingsPopupHTML = document.getElementById('border-settings-popup-html').innerHTML;

var closeModal = function(){
	//console.log(event.target);
	if(activeModal){

		if(activeModal.contains(event.target)){}

		else{
		
			activeModal.remove();
			activeModal = null;
			setTimeout(() => {window.removeEventListener('click', closeModal);}, 1);
		
		}
	}
}

var createPopup = function(popup){

	switch (popup) {
		case 'shadow':

			return function() {
				
				if(!activeModal){

					console.log('Настройки тени');
					var rect = event.target.getBoundingClientRect();
					var buttonX = parseInt(rect.left);
					var buttonY = parseInt(rect.top);
					var popup = document.createElement('div');
					popup.classList.add('popup', 'shadow-settings-popup');
					popup.innerHTML = shadowSettingsPopupHTML;
					
					
					document.body.prepend(popup);
					var popupHeight = parseInt( window.getComputedStyle(popup, null).getPropertyValue('height') );
					popup.style.top = buttonY - popupHeight - 12 + 'px';
					popup.style.left = buttonX - 336/2 + 'px';
					activeModal = popup;
					setTimeout(() => {window.addEventListener('click', closeModal);}, 1);

					var closePopupButton = popup.querySelectorAll('.close-popup-button');
					//console.log(closePopupButton[0]);
					closePopupButton[0].onclick = function () { 

							activeModal.remove();
							activeModal = null;
							setTimeout(() => {window.removeEventListener('click', closeModal);}, 1);
					};
				}
			}

			break;
		case 'border':
			return function(){
				console.log('Настройки бордера');
				if(!activeModal){

					//console.log('Настройки тени');
					var rect = event.target.getBoundingClientRect();
					var buttonX = parseInt(rect.left);
					var buttonY = parseInt(rect.top);
					var popup = document.createElement('div');
					popup.classList.add('popup', 'border-settings-popup');
					popup.innerHTML = borderSettingsPopupHTML;
					
					
					document.body.prepend(popup);
					var popupHeight = parseInt( window.getComputedStyle(popup, null).getPropertyValue('height') );
					popup.style.top = buttonY - popupHeight - 12 + 'px';
					popup.style.left = buttonX - 336/2 + 'px';
					activeModal = popup;
					setTimeout(() => {window.addEventListener('click', closeModal);}, 1);

					var closePopupButton = popup.querySelectorAll('.close-popup-button');
					//console.log(closePopupButton[0]);
					closePopupButton[0].onclick = function () { 

							activeModal.remove();
							activeModal = null;
							setTimeout(() => {window.removeEventListener('click', closeModal);}, 1);
					};
				}
			}
		default:
			// statements_def
			break;
	}
/*
	if(activeModal){

		console.log(activeModal);
	}

	else{
		var rect = event.target.getBoundingClientRect();
		//console.log(rect.x);
		var xButtonPosition = parseInt(rect.left);
		var yButtonPosition = parseInt(rect.top);
		var buttonWidth = parseInt( window.getComputedStyle(event.target, null).getPropertyValue('width') ); 
		
		//console.log(window.getComputedStyle(event.target, null).getPropertyValue('left'));
		//console.log('Создаем модалку');
		var popup = document.createElement('div');
		popup.classList.add('popup');
		popup.id = 'testTip';
		
		//console.log('Ширина модалки', popupWidth);
		
		popup.innerHTML = '<div class="popup" id="testTip"><div class="popupHeader"><span>Send test tip</span></div><div><p>Modal text</p></div><div class="popupActions"><button class="button-text">Close</button><button class="button-text">Send</button></div></div>';
		document.body.prepend(popup);
		var popupWidth = parseInt( window.getComputedStyle(popup, null).getPropertyValue('width') );
		popup.style.left = xButtonPosition - popupWidth/2 + buttonWidth / 2 + 'px';
		popup.style.top = yButtonPosition + 36 + 6 + 'px';
		activeModal = popup;
		setTimeout(() => {window.addEventListener('click', closeModal);}, 1);
		//activeModal.addEventListener('click', closeModal);
	}*/
}

for(let i = 0; i < shadowSettingsButton.length; i++){
	shadowSettingsButton[i].addEventListener('click', createPopup('shadow'));
}

for(let i = 0; i < borderSettingsButton.length; i++){
	borderSettingsButton[i].addEventListener('click', createPopup('border'));
}

//window.addEventListener('click', closeModal);


/*window.onclick = function () {
	console.log('TA DA');
	if(activeModal) {
		closeModal();
	}
}*/




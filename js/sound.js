var soundItem = document.getElementsByClassName('sound-list-item');
var playButtons = document.getElementsByClassName('sound-play');
var activeSound;
var soundTimeout;


function play() {

	if( this.classList.contains('sound-play-active') ){
		
		this.classList.remove('sound-play-active');
		clearTimeout(soundTimeout);	
		activeSound = null;
	}

	else {	

			if(activeSound){
				
				clearTimeout(soundTimeout);
				activeSound.classList.remove('sound-play-active');

			}

			this.classList.add('sound-play-active');
			activeSound = this;

			soundTimeout = setTimeout( () => {
							
							
							this.classList.remove('sound-play-active');
							activeSound = null;
							
							}, 3000);
	}
	
}

for(let i = 0; i < playButtons.length; i++){
	playButtons[i].addEventListener('click', play);
}


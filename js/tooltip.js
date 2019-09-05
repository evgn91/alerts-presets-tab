

var tooltipElems = document.getElementsByClassName('tooltipElem');
var tooltipTimeout;
var activeTooltip;

function createTooltip(e){
	tooltipTimeout = setTimeout(
		() => {

			//console.log(e.target.dataset['tooltiptext']);
			var rect = e.target.getBoundingClientRect();
			var xButtonPosition = parseInt(rect.left);
			var yButtonPosition = parseInt(rect.top);
			var buttonWidth = parseInt( window.getComputedStyle(e.target, null).getPropertyValue('width') );
			var tooltip = document.createElement('div');
			tooltip.classList.add('tooltip');
			

			tooltip.innerHTML = e.target.dataset['tooltiptext'];
			document.body.prepend(tooltip);
			var tooltipWidth = parseInt( window.getComputedStyle(tooltip, null).getPropertyValue('width') );
			tooltip.style.left = xButtonPosition - tooltipWidth/2 + buttonWidth / 2 + 'px';
			tooltip.style.top = yButtonPosition - 28 + 'px';
			activeTooltip = tooltip;

		}
		, 375)
}

function clearTooltip(e){
		if(activeTooltip){
			activeTooltip.remove();
			activeTooltip = null;
		}
		else{
			clearTimeout(tooltipTimeout);
		}
	
}

for(let i = 0; i < tooltipElems.length; i++){
	//console.log(tooltipElems[i].dataset['tooltiptext']);
	tooltipElems[i].addEventListener('mouseenter', createTooltip);
	tooltipElems[i].addEventListener('mouseleave', clearTooltip);
}

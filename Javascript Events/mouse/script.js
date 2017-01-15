document.querySelector('.grid').addEventListener('contextmenu', function(e) {

	e.preventDefault();
  if (e.target.tagName === 'IMG') {

  	var myElement = document.createElement('div');
  	myElement.className = 'preview';
  	e.target.parentNode.appendChild(myElement);

  	var myImg = document.createElement('img');
  	myImg.style.left = e.offsetX + 15 +'px';
  	myImg.style.top = e.offsetY + 15 +'px';
  	var imgLoc = e.target.src;

  	myImg.src = imgLoc.substr(0, imgLoc.length-7) + '.jpg';

  	myElement.appendChild(myImg);


  	e.target.addEventListener('mouseout', function handler(e){

  		var myNode = e.target.parentNode.querySelector('div.preview');
  		myNode.parentNode.removeChild(myNode);
  		e.target.removeEventListener('mouseout', handler, false);
  	}, false);


  } 

  e.target.addEventListener('mousemove', function(e){

  		myElement.style.left = e.offsetX + 15 +'px';
  		myElement.style.top = e.offsetY + 15 +'px';
  	});
}, false); 
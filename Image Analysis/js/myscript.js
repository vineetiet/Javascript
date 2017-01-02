$(function(){ //self executing function for jquery

	'use strict';

	var file, droppedImage;
	var resultsText = document.querySelector('#results');
	var target = $('.dropzone');

	function compareImages(imageUrl){

		//use resemble.js to compare the images.

		//making Ajax request.
		var xhr = new XMLHttpRequest();

			xhr.onload = function(e){

				resemble(e.target.responseURL).compareTo(file).onComplete(function(data){

					if(data.misMatchPercentage < 20){

						resultsText.querySelector('h3').insertAdjacentHTML('afterend',
								'<img class="match" src="'+e.target.responseURL+'" alt="photo">');
					}else{

							resultsText.querySelector('h3').insertAdjacentHTML('afterend',
								'<img src="'+e.target.responseURL+'" alt="photo">');
					}

				});//resemble call
			};//onload

			
			xhr.open('GET', imageUrl, true);
			xhr.responseType = 'blob'; //raw data.
			xhr.send();


		}	//campare images
	

	function getImages(url){

		var request = new XMLHttpRequest(); //request going to make to other page, it will create the Ajax request.

		var list=[]; //store all the images.
		request.onload = function(){

			var data = this.responseXML.querySelectorAll('img'); //fin all the images in that docs

			for (var key in data){

				if(data.hasOwnProperty(key)){

					var image = data[key].src;
					if((image !== undefined)  && (image.lastIndexOf('.jpg')> 0)){

						list.push(image)
					} //image filter

				} //has own property

					

			} //key in data

			resultsText.innerHTML = '<h3>Searching Images ....</h3>';

			for(var item in list){

				if(list.hasOwnProperty(item)){

						compareImages(list[item]);
				}//has own property
				
			} //for item in list
		};//request

		request.open('GET', url);
		request.responseType = 'document';

		request.send();




	}//get images

	function dropZone(target){

		//add event in jQuery, by on event handler

		target.on('dragover', function(){ //when someone drags over this element


			target.addClass('dragover');

			return false;

		})
		.on('dragend', function(){

			target.removeClass('dragover');

			return false;

		})

		.on('dragleave', function(){

			target.removeClass('dragover');

			return false;

		})

		.on('drop', function(e){

			var fileReader;

			file = e.originalEvent.dataTransfer.files[0];
			e.stopPropagation();
			e.preventDefault(); //just means that it stop the browser what it normally does. When you drop the image, it presume you want to preview the image 

			target.removeClass('dragover');

			droppedImage = new Image();
			fileReader = new FileReader();
			fileReader.onload = function(e){

				droppedImage.src = e.target.result;
				target.html(droppedImage);
			}
			fileReader.readAsDataURL(file);  //reading data as blob.
			

		})// on drop
	} //drop zone

	dropZone(target);

	// wait for events.

	document.forms.compare.addEventListener('submit',function(e){

		var formUrl = document.compare.url.value;
		e.preventDefault(); //when you submit a form by default it tries to go to diffrent page to process the file. In this case we want in this page.

		if(droppedImage !== undefined){

			getImages(formUrl);
		}else{

			resultsText.innerHTML = '<p class="alert alert-danger">Sorry, you must drop image to compare before hitting the button</p>';

		}

	}) //form submitted


});	 //page loaded



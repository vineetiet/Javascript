$(function() {
  'use strict';

  var dropNode = document.querySelector('.app');
  var documentNode = document.querySelector('.dropzone');
  var files;
  dropNode.addEventListener('dragenter', function(e){

  		e.preventDefault();

  });

  dropNode.addEventListener('dragover', function(e){

  		e.preventDefault();
  		
  });

   dropNode.addEventListener('drop', function(e){

  		e.preventDefault();

  		files = e.dataTransfer.files //get the files from the drop event.
  		
  		//readAsUrl to display images.

  		for(var i=0; i<files.length; i++){

  			var fileAsImage = new FileReader();
  			var fileAsData = new FileReader();
  			fileAsImage.readAsDataURL(files[i]); //reading the file //this will happen very quick.

  			fileAsData.file = files[i];
  			fileAsData.readAsBinaryString(files[i])

  			console.log(i);
  			//whenever onloadend event is triggred, execute a function
  			fileAsImage.onloadend = function(){ //images are finished loading

  				var newImage = document.createElement('img');
  				newImage.src = this.result;  //result of this operation

  				documentNode.appendChild(newImage);

  				console.log(i); //displaying only last index becuase this onload event is not fast and that's why console.log is executing first 
  								//before loading the image. this on loading of the file is Asyn operation.
  								//It's solved through jpegmeta.js lib.
  			};

  			fileAsData.onloadend = function(){

  				var jpeg = new JpegMeta.JpegFile(this.result, this.file.name);
  				if(jpeg.iptc.caption !== undefined){

  					console.log(jpeg.iptc.caption.value);
  				}//if the caption is there

  			}; //file as data loaded

  		} //loop through the files
  		
  }); //files dropped

}); //page loaded

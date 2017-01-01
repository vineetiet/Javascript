//self executing function this protect any of our local variable or anything in our page.

(function(){

  //selecting the node.
  var myNode = document.querySelector('#artlist .pixgrid.group ul');
  

  //Adding an event listner to it. Check for click event, when it happens execute a function.
  myNode.addEventListener("click", function(e){ // clicking the image: mouse event, if the image is clicked on li then this event will be called.

   
    if(e.target.tagName === 'IMG'){

      var myOverlay = document.createElement('div');
      myOverlay.id = 'overlay';
      document.body.appendChild(myOverlay); //this will append overlay at the end of the body tag

      //setting uo the overlay styles:
      myOverlay.style.position = 'absolute';
      myOverlay.style.top = 0; 
      myOverlay.style.backgroundColor = 'rgba(0,0,0,0.7)';
      myOverlay.style.cursor = 'pointer';

      //Resize and overlay
      myOverlay.style.width = window.innerWidth + 'px';
      myOverlay.style.height = window.innerHeight + 'px';
      myOverlay.style.top = window.pageYOffset + 'px';
      myOverlay.style.left = window.pageXOffset + 'px';

      //create image element
      var imageSrc = e.target.src;
      var largeImage = document.createElement('img');
      largeImage.id='largeImage';
      largeImage.src = imageSrc.substr(0, imageSrc.length-7) + '.jpg';
      largeImage.style.display = 'block';
      largeImage.style.position ='absolute';
      
      //wait uptil the image has loaded.
      largeImage.addEventListener('load', function(e){

        //Resize if the image is taller.
        if(this.height > window.innerHeight){

          this.ratio = window.innerHeight / this.height;
          this.height = this.height * this.ratio;
          this.width = this.width * this.ratio;
        }

        //Resize if the image is too wide.
        if(this.width > window.innerWidth){

          this.ratio = window.innerWidth / this.width;
          this.height = this.height * this.ratio;
          this.width = this.width * this.ratio;
        }

        centerImage(this);
        myOverlay.appendChild(largeImage);

      }); //image has loaded

     
     largeImage.addEventListener('click', function(){

        //We want to remove the overlay. In order to remove over we have to use child function.
        // It work under parent node. Wne we click to the large image, it should be removed.
        if(myOverlay){

          window.addEventListener('resize', window, false);
          window.addEventListener('scroll', window, false);
          myOverlay.parentNode.removeChild(myOverlay);
        }


     }, false)

      window.addEventListener('scroll', function(){

        if(myOverlay){

          myOverlay.style.top = window.pageYOffset + 'px';
          myOverlay.style.left = window.pageXOffset + 'px'

        }

      }, false)

        window.addEventListener('resize', function(){

          if(myOverlay){

              myOverlay.style.width = window.innerWidth + 'px';
               myOverlay.style.height = window.innerHeight + 'px';
              myOverlay.style.top = window.pageYOffset + 'px';
              myOverlay.style.left = window.pageXOffset + 'px';

              centerImage(largeImage);


          }

        }, false)

    } //Target is image

  }, false) //passing fast to event is bubbing properly. Image is clicked



  function centerImage(theImage){

    var myDifX = (window.innerWidth - theImage.width)/2;
    var myDifY = (window.innerHeight - theImage.height)/2;

    theImage.style.top = myDifY  + 'px';
    theImage.style.left = myDifX + 'px';

    return theImage;

  }

})(); //self executing function
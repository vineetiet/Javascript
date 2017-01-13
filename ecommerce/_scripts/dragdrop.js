$(document).ready(function(){

	$('.painting').on('dragstart', function(evt){


			 evt.dataTransfer.setData('text',this.id); 
			// setting data to event so that we can reterive later 
			$('h2').fadeIn('fast');



	});
	// .hover(function(){

	// 	$('div', this).fadeIn();
	// 	console.log('fadeIn', $('div', this));
	// },
	// function(){

	// 	$('div', this).fadeOut();

	// 	console.log('fadeOut', $('div', this));
	// });


	// $('.painting').hover(function(){

	// 		 $(this).find('div').fadeIn();
	// 		 // console.log('fadeIn', $(this)); 
	// 		 // as an alternative way: $('div', this).fadeIn();
	// 		//$('div', this).fadeIn();
	 	
	// }, function(){ //this function will run after the hover is done

	// 	$('div', this).fadeOut();
	 	
	// });

	$('#favorites').dragover(function(evt){

			$('#favorites').css('background-color', 'gray');
			evt.preventDefault();
	})
	.bind('dragleave', function(evt){

			$('#favorites').css('background-color', 'red');
			evt.preventDefault();

	})

	.bind('dragenter', function(evt){

		evt.preventDefault();
	})

	.bind('drop', function(evt){

		var id = evt.dataTransfer.getData('text'),

		item = $('#' +id),
		
		prevFavItem = null;

		var data = $(item).find('p:first');

		$('#faves').append('<li>'+data.text()+'</li>');

		$('#favorites').css('background-color','red');

		saveFaves();

		evt.stopPropagation();


		return false;
	
		//alert($(this).attr('id','test'));

	});

	loadFaves();

	
});

function saveFaves(){

	localStorage.setItem('favorites',$('#faves').html());
}

function loadFaves(){

	if(localStorage.getItem('favorites')){

			$('#faves').html(localStorage.getItem('favorites'));
	}

	
}
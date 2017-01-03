(function(){

	'use strict';

	function createTable(source, target){

		//creating AJAX request.

		var ajaxRequest = new XMLHttpRequest();
		var tableRows, tableData, output, targetNode;

		targetNode = document.querySelector(target);

		//that's the event that get triggered once information get sent from the server into our client.
		ajaxRequest.onload = function(e){

			tableRows = e.target.responseText.split('\r');

			output = '<table>'

			for(var row =0; row<tableRows.length; row++){

				tableData = tableRows[row].split(',');
				output += '<tr>';

				for(var cell = 0; cell < tableData.length; cell++){

					if(row === 0){

						output += '<th>' + tableData[cell]  + '</th>';
					}else{

						output += '<td>' + tableRows[cell] + '</td>';
					}//row
				}//go through cells

				output += '</tr>';
			}

			output += '</table>';
			targetNode.innerHTML = output;


		}; //on load

		ajaxRequest.open('GET', source, true);
		ajaxRequest.responseType = 'text';
		ajaxRequest.send();  //that is going to generate an event that we need to catch.

	}

	createTable('_assets/first_semester.csv', '#one');
	createTable('_assets/second_semester.csv', '#two');

})(); //protecting any varibale here from the global scope and make them all local variable and it's a self executing function
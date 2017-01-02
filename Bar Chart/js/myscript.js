//this function will be called after the loading.
$(function(){

	'use strict';

	var fromDate,
	toDate;

	function generateChart(data){

		var chart = c3.generate({

			data:{

				x: 'x', 
				columns: data,
				type: 'bar',
				groups: [
		['Mean Temperature',
		'Median Temperature',
		'Mean Pressure',
		'Median Pressure',
		'Mean Speed',
		'Median Speed']
				]
			},

			bar: {

				width:{
					ratio: 0.9
				}
			},

			axis: {

				x: {

					type: 'timeseries',
					format: '%Y-%m-%d'

				}
			},

			subchart:{

				show: true
			}

		});
	}

	function processData(data){

		var myData = [];

		var myDates = ['x'];

		var meanTemps = ['Mean Temperature'];
		var medTemps = ['Median Temperature'];
		var meanPress = ['Mean Pressure'];
		var medPressure = ['Median Pressure'];
		var meanSpeeds = ['Mean Speed'];
		var medSpeeds = ['Median Speed'];


		for(var key in data){

			if(data.hasOwnProperty(key)){

				if((data[key].t !== null) && (data[key].p !== null) && (data[key].s !== null)){

					myDates.push(key);
					medTemps.push(getMean(data[key].t));
					medTemps.push(getMedian(data[key].t));
					meanPress.push(getMean(data[key].p));
					meanPress.push(getMedian(data[key].p));
					meanSpeeds.push(getMean(data[key].s));
					medSpeeds.push(getMedian(data[key].s));

				}
			}
		}

		myData.push(myDates, meanTemps, medTemps, meanPress, medSpeeds, meanSpeeds);

		return myData;


	}

	function getMean(myArray){

		var mean = myArray.reduce(function(a,b){ //it will add up all the numbers

			return a+b;
		}) /myArray.length;

		return mean.toFixed(2);  //only two places after the decimal.
	}

	function getMedian(myArray){

		var median;

		var sorted = myArray.sort(myArray);
		var middleIndex = Math.floor(sorted.length/2); //5/2 : will return 2

		if(sorted.length % 2 === 0){

			var medianA = sorted[middleIndex];
			var medianB = sorted[middleIndex-1];

			median = (medianA + medianB) / 2;
		}else{

			median = sorted[middleIndex];
		} 

			return median.toFixed(2);
	}


	function loadChart(){
		
		$.ajax({

			//what is reteriving has a function call
			url: 'http://foundationphp.com/phpclinic/podata.php?&raw&callback=?',
			
			//Name of the function
			jsonpCallback: 'jsonReturnData',
			//Data will be Jsonp format
			dataType: 'jsonp',
			data:{

				startDate: formatDate(fromDate, ''),
				endDate: formatDate(toDate, ''),
				format: 'json'
			},
			success: function(response){

				generateChart(processData(response));
			}
		});

	} //load chart

	function formatDate(date, divider){

		var someday = new Date(date);
		var month = someday.getUTCMonth() + 1;
		var day = someday.getUTCDate();
		var year = someday.getUTCFullYear();

		if(month <= 9){

			month = '0' + month;

		}

		if(day <=9){

			day = '0' + day;
		}

		return (''+year + divider + month + divider + day)

	}

	//set up
	fromDate = new Date();
	fromDate.setDate(fromDate.getDate() - 1000);


	toDate = new Date();
	toDate.setDate(toDate.getDate() - 970);


	document.forms.rangeform.from.value = formatDate(fromDate, '-');
	document.forms.rangeform.to.value = formatDate(toDate, '-');


	loadChart();

	//Event when we change the date from the web.

	document.forms.rangeform.addEventListener('change',function(e){

		fromDate = new Date(document.forms.rangeform.from.value);
		toDate = new Date(document.forms.rangeform.to.value);

		fromDate = fromDate.toUTCString();
		toDate = toDate.toUTCString();

		loadChart();

	}, false)

})
(function(){
	'use strict';


	angular
		.module("app")
		.factory("DataService", DataService);

	function DataService(){

		var dataObj = {
			sampleData: sampleData,
			dataStatus: dataStatus,
			addTicket: addTicket,
			updateTicket: updateTicket
		}

		var dataLength = sampleData.length + 1;

	    return dataObj;

	    function addTicket(title, description){
	    	sampleData.push({
	    		id: dataLength,
		 		title: title,
		 		description: description,
		 		status: 'planned'
			});
	    }
	    
	    function updateTicket(id, status){
 
	    }


	}
 

	var sampleData = [
		{
			"id": '1',
			"title": "#9820",
			"description": "Dobidobido",
			"status": "working"
		},
		{
			"id": '2',
			"title": "#2910",
			"description": "Color me red",
			"status":  "planned"
		},
		{	
			"id": '3',
			"title": "#2019",
			"description": "Change background color",
			"status":  "planned"
		}
	];

	var dataStatus = [
		{
			"status": "planned",
			"ticket": [ 
				{
					"id": '1',
					"title": "#2910",
					"description": "Description here",
					"status": "planned"
				}
			]
		},
		{ 
			"status":  "working",
			"ticket": [ 
				{
					"id": '1',
					"title": "#2911",
					"description": "Working description here",
					"status": "working"
				}
			]
		},
		{	
			"status":  "resolved"
		},
		{	 
			"status":  "tested"
		},
		{	
			"status":  "completed"
		}
	];


})();
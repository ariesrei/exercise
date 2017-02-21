(function(){
	'use strict';

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
			"fields": ["Name", "Id"]
		},
		{ 
			"status":  "working",
			"fields": ["Name", "Id"]
		},
		{	
			"status":  "resolved",
			"fields": ["Name", "Id"]
		},
		{	 
			"status":  "tested",
			"fields": ["Name", "Id"]
		},
		{	
			"status":  "completed",
			"fields": ["Name", "Id"]
		}
	];

	var test = '';

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
		var newStatus1;
	  
	    function addTicket(title, description){
	    	sampleData.push({
	    		id: dataLength,
		 		title: title,
		 		description: description,
		 		status: 'planned'
			});
			//alert(sampleData);
	    }
	    
	    function updateTicket(id, status){
 
	    }
      	
      	return dataObj;
	}

})();
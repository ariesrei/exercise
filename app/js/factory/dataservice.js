'use strict';

	var sampleData = [  
		{
			"id": '0',
			"title": "#9820",
			"description": "Dobidobido",
			"status": "working"
		},
		{
			"id": '1',
			"title": "#2910",
			"description": "Color me red",
			"status":  "planned"
		},
		{	
			"id": '2',
			"title": "#2019",
			"description": "Change background color",
			"status":  "planned"
		}
	];

	var dataStatus = [
		{
			"status": "planned"
		},
		{ 
			"status":  "working"
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

	angular
		.module("app")
		.service("DataService", DataService);

	function DataService(){

		var dataObj = {
			sampleData: sampleData,
			dataStatus: dataStatus,
			addTicket: addTicket,
			updateTicket: updateTicket,
			deleteTicket: deleteTicket
		}

		var dataLength = sampleData.length;

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
			
			for (var i in sampleData) {
		     	if (sampleData[i].id == id) {
			        sampleData[i].status = status;
		     	}
		   	}
			alert(JSON.stringify(sampleData));
			return sampleData;
	    }

	    function deleteTicket(id){
		    sampleData.splice(id, 1);
		   	alert(JSON.stringify(sampleData));
	    }

      	
      	return dataObj;

	}
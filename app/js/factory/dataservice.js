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
			"tickets": {
					"id": '1',
					"title": "#2910",
					"description": "Description here",
					"status": "planned"
				}
		},
		{ 
			"status":  "working",
			"tickets": {
					"id": '2',
					"title": "#2911",
					"description": "Working description here",
					"status": "working"
				}
		},
		{	
			"status":  "resolved",
			"tickets": { }
		},
		{	 
			"status":  "tested",
			"tickets": { }
		},
		{	
			"status":  "completed",
			"tickets": { }
		}
	];


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
	    	newStatus1 = status
 			// if(sampleData.id = id){
 			// 	this.status = status;
 			// 	alert(id + this.status);

 			// }
	    }
      	
      	return dataObj;
	}

})();
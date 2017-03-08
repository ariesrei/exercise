'use strict';

(function(app_service){
	
	var statuses = [ "Planned" ,"Working", "Resolved", "Tested", "Completed"];

	var tickets = [  
		{
			"id": '0',
			"title": "#9820",
			"description": "Dobidobido",
			"status": "Working"
		},
		{
			"id": '1',
			"title": "#2910",
			"description": "Color me red",
			"status":  "Planned"
		},
		{	
			"id": '2',
			"title": "#2019",
			"description": "Change background color",
			"status":  "Planned"
		}
	];

	function dataService(){

		var dataObj = {
			tickets: tickets,
			statuses: statuses,
			addTicket: addTicket,
			updateTicket: updateTicket,
			deleteTicket: deleteTicket,
			editTicket: editTicket
		}

		var dataLength = tickets.length;
 
	    function addTicket(title, description){
	    	tickets.push({
	    		id: String(dataLength++),
		 		title: title,
		 		description: description,
		 		status: 'Planned'
			});
			//alert(JSON.stringify(tickets));
	    }
	    
	    function updateTicket(id, status){
			for (var i in tickets) {
		     	if (tickets[i].id === id) {			        	
				    tickets[i].status = status;
		     	}
		   	}
		    //alert(JSON.stringify(tickets));
	    }

	    function deleteTicket(id){
	    	//var id_to_delete = id;
    		for (var i in tickets) {
		     	if (tickets[i].id === id) {	
		     		//alert(JSON.stringify(tickets[i].id));    	
				    delete tickets[i];
		     	}
		   	}
		   	//alert(JSON.stringify(tickets));
	    }

	    function editTicket(id, title, description){
	    	for (var i in tickets) {
		     	if (tickets[i].id === id) {	
		     		tickets[i].title = title;
		     		tickets[i].description = description;
		     	}
		   	}
	    }

      	return dataObj;

	}

	app_service.service("dataService", dataService);
	
})(Swimlane);
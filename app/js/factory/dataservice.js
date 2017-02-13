(function(){
	'use strict';


	angular
		.module("app")
		.factory("DataService", DataService);

	function DataService(){

		var dataObj = {
			sampleData: sampleData,
			addTicket: addTicket,
			drop: drop,
			allowDrop: allowDrop,
			dragStart: dragStart
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

	    function drop(event) {
		 	event.preventDefault();
		    var data = event.dataTransfer.getData("Text");
		    event.target.appendChild(document.getElementById(data));
		    var id = event.target.id;
		    var newNode = document.getElementById('demo').innerHTML = "Id: " + data + " to: " +id;

		    
		}

	 	function allowDrop(event) {
		    //event.preventDefault();
		}

		function dragStart(event) {
		    event.dataTransfer.setData("Text", event.target.id);
		    document.getElementById("demo").innerHTML = "Started dragging " + event.target.id;
		}

	}

	var sampleData = [
		{
			id: '1',
			title: "#9820",
			description: "Dobidobido",
			status: "working"
		},
		{
			id: '2',
			title: "#2910",
			description: "Color me red",
			status:  "planned"
		},
		{	
			id: '3',
			title: "#2019",
			description: "Change background color",
			status:  "planned"
		}
	];


})();
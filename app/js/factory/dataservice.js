(function(){

	angular
		.module("app")
		.factory("DataService", DataService);

	function DataService(){

		var dataObj = {
			sampleData: sampleData,
			addTicket: addTicket
		}	
		var dataLength = sampleData.length + 1;


	    return dataObj;

	    function addTicket(title, description){
	    	//alert(  title + " " + description );
	    	sampleData.push({
	    		id: dataLength,
		 		title: title,
		 		description: description
			});
 
	    }

	}

	var sampleData = [
		{
			id: '1',
			title: "#9820",
			description: "Dobidobido",
			status: null
		},
		{
			id: '2',
			title: "#2910",
			description: "Color me red",
			status:  null
		},
		{	
			id: '3',
			title: "#2019",
			description: "Change background color",
			status:  null
		}
	];


})();
(function(){

	angular
		.module("app")
		.factory("DataService", DataService);

	function DataService(){

		var dataObj = {
			sampleData: sampleData
		}

	    return dataObj;

	}

	var sampleData = [
		{
			title: "#9820",
			description: "Dobidobido",
			status: null
		},
		{
			title: "#2910",
			description: "Color me red",
			status:  null
		},
		{
			title: "#2019",
			description: "Change background color",
			status:  null
		}
	];


})();
(function(){

	angular
		.module("app")
		.service("DataService", DataService);

	function DataService(){
	    return {
			list1 : {
				title: 'List 1',
				description: '',
				status: ''
			},
			list2 : {
				title: 'List 2',
				description: '',
				status: ''
			},
			list3 : {
				title: 'List 3',
				description: '',
				status: ''
			}
		};

	}


})();
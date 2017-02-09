(function(){

	angular
		.module("app")
		.controller("ticketController", TicketController);

	TicketController.$inject = ['DataService','TicketService'];

	function TicketController(DataService, TicketService){
		
		var vm = this;

		// vm.planned = planned;
		// vm.workingon = workingon;
		// vm.resolved = resolved;
		// vm.qatested = qatested;
		// vm.completed = completed;

		vm.TicketService = TicketService;

		vm.dataService = DataService;
		vm.create = Create;
		vm.createTicket = CreateTicket;

		function Create(){
			alert("ASDASD");
		}
			
		function CreateTicket(){

		}
	 
		//vm.list1 = {title: 'AngularJS - Drag Me'};
		//vm.list2 = {};

 
	}


})();
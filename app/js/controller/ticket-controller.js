(function(){

	angular
		.module("app")
		.controller("ticketController", TicketController);

	TicketController.$inject = ['DataService','TicketService'];

	function TicketController(DataService, TicketService){
		
		var vm = this;
		vm.TicketService = TicketService;
		vm.dataService = DataService;

		vm.create = Create;
		vm.createTicket = CreateTicket;

		vm.title = '';
		vm.description = '';

		function Create(){
			alert("ASDASD");
		}
		
		function CreateTicket(){

			if(vm.title !== '' && vm.description !== ''){
				DataService.addTicket(vm.title, vm.description);
				vm.title = '';
				vm.description = '';
			}
 
			else {
				alert('Please fill the fields');
			}
			
		}
	 
 
	}


})();
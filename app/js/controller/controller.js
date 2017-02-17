(function(){
	'use strict';

	angular
		.module("app")
		.controller("formController", formController)
		.controller("headerController", headerController)
		.controller("ticketController", ticketController);

	formController.$inject = ['LoginService', 'LogoutService', 'TicketService'];

	function formController(LoginService, LogoutService, TicketService){
		
		var vm = this;

		vm.LoginService = LoginService;
		vm.LogoutService = LogoutService;
		vm.TicketService = TicketService;
	
		vm.username = '';
		vm.password = '';

		vm.Authenticate = Authenticate;
 
		function Authenticate(){

			if(LoginService.login(vm.username, vm.password)) {
				vm.error = '';
				vm.username = '';
				vm.password = '';
				LogoutService.changeState(false);
				LoginService.changeState(true);
				TicketService.changeState(false);
			} 
			else {
				LoginService.hideError = false;
				vm.error = "Incorrect username/password!";
			} 

		}
	}

	headerController.$inject = ['LoginService', 'LogoutService', 'TicketService'];

	function headerController(LoginService, LogoutService, TicketService){
		
		var vm = this;
		vm.LogoutService = LogoutService;
		vm.LoginService = LoginService;
		vm.TicketService = TicketService;
		vm.showLogout = showLogout;

		function showLogout(){
			LogoutService.changeState(true);
			TicketService.changeState(true);
			LoginService.changeState(false);
			LoginService.hideError = true;
			alert("Thank you");
		}

	}

	ticketController.$inject = ['DataService','TicketService', 'NewTicketService'];

	function ticketController(DataService, TicketService, NewTicketService){
		
		var vm = this;
		vm.TicketService = TicketService;
		vm.dataService = DataService;
		vm.NewTicketService = NewTicketService;

		vm.create = Create;
		vm.createTicket = CreateTicket;
		vm.updateTicket = UpdateTicket;

		vm.title = '';
		vm.description = '';
		vm.newstatus = '';


		function Create(){
			//TicketService.changeState(false);
			NewTicketService.changeState(false);
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

			NewTicketService.changeState(true);
			
		}

		function UpdateTicket(id,status){
	 		
    		DataService.updateTicket(id, status);

		}

	}

})();
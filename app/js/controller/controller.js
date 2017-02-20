(function(){
	'use strict';

	angular
		.module("app")
		.controller("formController", formController)
		.controller("headerController", headerController)
		.controller("ticketController", ticketController);

	formController.$inject = ['LoginService', 'StateChange'];
	function formController(LoginService, StateChange){
		var vm = this;

		function Authenticate(){
			if(LoginService.login(vm.username, vm.password)) {
				vm.error = '';
				vm.username = '';
				vm.password = '';

				StateChange.LoginSuccess();
			} 
			else {
				StateChange.hideError = false;
				vm.error = "Incorrect username/password!";
			} 
		}
		vm.Authenticate = Authenticate;
		vm.LoginService = LoginService;
		vm.StateChange = StateChange;
		vm.username = '';
		vm.password = '';	
	}

	headerController.$inject = ['StateChange'];
	function headerController(StateChange){
		var vm = this;
		function showLogout(){
			StateChange.LogoutSuccess();	
		}
		vm.StateChange = StateChange;
		vm.showLogout = showLogout;
	}


	ticketController.$inject = ['DataService', 'StateChange'];
	function ticketController(DataService, StateChange){
		
		var vm = this;

		function ShowCreateTicketForm(){
			StateChange.changeState(false);
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
			
			StateChange.changeState(true);
		}


		function UpdateTicket(id,status){
	 		vm.newstatus = status;

	 		//DataService.updateTicket(id,status)
    		//DataService.updateTicket(id, status);
		}

		vm.StateChange = StateChange;
		//vm.TicketService = TicketService;
		vm.dataService = DataService;
		//vm.NewTicketService = NewTicketService;

		vm.ShowCreateTicketForm = ShowCreateTicketForm;
		vm.CreateTicket = CreateTicket;
		vm.UpdateTicket = UpdateTicket;

		vm.title = '';
		vm.description = '';
		vm.newstatus = '';

	}

})();
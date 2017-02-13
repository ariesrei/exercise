(function(){
	'use strict';

	angular
		.module("app")
		.controller("formController", formController);

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


})();
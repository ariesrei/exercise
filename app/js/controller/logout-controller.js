(function(){

	angular
		.module("app")
		.controller("headerController", headerController);

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


})();
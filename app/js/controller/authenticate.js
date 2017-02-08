(function(){

	angular
		.module("app")
		.controller("myCtrl", MyController);

	MyController.$inject = ['LoginService'];

	function MyController(LoginService){
		
		var vm = this;

		vm.LoginService = LoginService;

		vm.username = '';
		vm.password = '';

		vm.loginActive = false;
		vm.logoutActive = true;
		vm.hideLoginForm = false;
		vm.ticketActive = true;

		vm.Authenticate = Authenticate;

		vm.Logout = Logout;
		vm.hideError = true;

 

		function DragAndDrop(){

		}

		function Authenticate(){

			
			if(LoginService.login(vm.username, vm.password)) {
				vm.error = '';
				vm.username = '';
				vm.password = '';

				vm.hideLoginForm = true;
				vm.loginActive = true;
				
		 		vm.ticketActive = false;
				vm.logoutActive = false;

				//vm.transitionTo('home');
			} 
			else {
				vm.hideError = false;
				vm.error = "Incorrect username/password!";

			} 

		}

		function Logout(){
			vm.loginActive = false;
		 	vm.logoutActive = true;
		 	vm.hideLoginForm = false;
		 	vm.ticketActive = true;
			vm.hideError = true;

		}


	}


})();
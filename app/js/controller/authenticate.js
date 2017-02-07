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


		function Logout(){
			vm.loginActive = false;
		 	vm.logoutActive = true;
		 	vm.hideLoginForm = false;
		 	vm.ticketActive = true;
		
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
				vm.error = "Incorrect username/password !";
			} 

		}

	}


})();
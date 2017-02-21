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

		//vm.$watch(vm.selectedQuery);

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

		function UpdateTicket(id, status){
			//alert(status);
		}

		function appoint(){
			alert("Changed!");
		}

		function selectedQuery(newVal, oldVal){
			if (vm.selectedQuery) {
		        vm.parameters = vm.selectedQuery.fields;
		    }
		}	

		// vm.queryList = DataService.dataStatus;
		// vm.models = "asdas";

		//console.log(vm.queryList);
		//alert(vm.queryList);

		// Factories
		vm.StateChange = StateChange;
		vm.dataService = DataService;
 
 		// Functions
		vm.appoint = appoint;
		vm.ShowCreateTicketForm = ShowCreateTicketForm;
		vm.CreateTicket = CreateTicket;
		vm.UpdateTicket = UpdateTicket;

		vm.title = '';
		vm.description = '';

		vm.test = '';
		vm.planned = '';
		
		vm.selectedQuery = selectedQuery;
		vm.parameters = '';

	}

})();
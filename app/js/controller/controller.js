'use strict';

(function(app_controller){
	
	//alert(JSON.stringify(Swimlane));

	function headerController(stateChange){

		var vm = this;

		function showLogout(){
			stateChange.logoutSuccess();	
		}

		vm.stateChange = stateChange;

		vm.showLogout = showLogout;
	}


	// =================================================

	function formController(loginService, stateChange){

		var vm = this;

		function authenticate(){
			if(loginService.login(vm.username, vm.password)) {
				vm.error = '';
				vm.username = '';
				vm.password = '';

				stateChange.loginSuccess();
			} 
			else {
				stateChange.hideError = true;
				vm.error = "Incorrect username/password!";
			} 

		}

		vm.loginService = loginService;
		vm.stateChange = stateChange;

		vm.authenticate = authenticate;
		vm.username = '';
		vm.password = '';	

	}
	

	//=====================================================

	function ticketController(dataService, stateChange){

		var vm = this;

		function showCreateTicketForm(){
			stateChange.changeState(true);
			//alert("Alert adadsd");
		}
		
		function createTicket(){
			
			if(vm.title !== '' && vm.description !== ''){
				dataService.addTicket(vm.title, vm.description);
				vm.title = '';
				vm.description = '';
			}
			else {
				alert('Please fill the fields');
			}
			stateChange.changeState(false);
		}

		function updateTicket(id, status){
			//alert(id + status);
			if(id){
				dataService.updateTicket(id, status);
			}
		}

		function deleteTicket(id){
			//alert("Deleting.." + id);
			dataService.deleteTicket(id);
		}

		function editTicket(id, title, description){
			stateChange.activeEdit(true);

			vm.id = id;
			vm.title = title;
			vm.description = description;
			dataService.editTicket(id, title, description);
			
		}

		function closeEdit(){
			stateChange.activeEdit(false);	
			vm.title = '';
			vm.description = '';
		}
		// factories
		vm.stateChange = stateChange;
		vm.dataService = dataService;
 
 		// functions
		vm.showCreateTicketForm = showCreateTicketForm;
		vm.createTicket = createTicket;
		vm.updateTicket = updateTicket;
		vm.deleteTicket = deleteTicket;
		vm.editTicket = editTicket;
		vm.closeEdit = closeEdit;

		vm.id = '';
		vm.title = '';
		vm.description = '';

	}


	headerController.$inject = ['stateChange'];
	app_controller.controller("headerController", headerController);

	formController.$inject = ['loginService', 'stateChange'];
	app_controller.controller("formController", formController);
	
	ticketController.$inject = ['dataService', 'stateChange'];
	app_controller.controller("ticketController", ticketController);


})(Swimlane);
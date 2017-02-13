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

		vm.drop = drop;
		vm.dragStart = dragStart;

		vm.test = test;

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

		function test(){
			alert("asdas");
		}

		function drop(event){
			
			alert("adas");
			// event.preventDefault();
		 //    var data = event.dataTransfer.getData("Text");
		 //    event.target.appendChild(document.getElementById(data));
		 //    var id = event.target.id;
		 //    var newNode = document.getElementById('demo').innerHTML = "Id: " + data + " to: " +id;

			//DataService.drop(event);
		}

		function dragStart(event){
			event.dataTransfer.setData("Text", event.target.id);
			document.getElementById("demo").innerHTML = "Dragging " + event.target.id;
			//DataService.dragStart(event);
		}

	 	
	 	function allowDrop(event){
	 		event.preventDefault();
	 	}
 
	}


})();
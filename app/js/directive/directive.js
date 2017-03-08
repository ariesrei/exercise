'use strict';

(function(app_directive){
	
	function mainDir(){
		return {
			restrict: 'A',
			templateUrl: 'templates/main.html'
		};
	}

	function loginFormDirective(){
		return {
			restrict: "E",
			templateUrl: "templates/loginForm.html"
		};
	}

	function ticketSwimlane(){
		return {
			restrict: "E",
			templateUrl: "templates/main-ticket.html"
		};
	}

	function createTicketForm() {
		return {
			restrict: 'A',
			templateUrl: 'templates/createTicketForm.html'
		};
	}

	function statusData(){
		return {
			restrict: 'A',
			templateUrl: 'templates/statusData.html'
		};
	}

	function ticketLists() {
		return {
			restrict: 'A',
			templateUrl: 'templates/ticketList.html'
		};
	}

	
/**/
	function draggableDirective(){

	 	return {
	 		link: function(scope, element, attr){
				element.attr('draggable', 'true');
				element.css({
					position: 'relative',
					backgroundColor: 'lightgrey',
					cursor: 'pointer',
					width: '93%',
					border: '1px #ddd solid',
					padding: '0',
					borderRadius: '5px',
					marginBottom: '5px',
					textAlign: 'left',
					padding: '3%'
				});

				element.on('dragstart', function(dragevent){ 
					dragevent.dataTransfer.setData("Text", dragevent.target.id);
					document.getElementById("demo").innerHTML = "Dragging " + dragevent.target.id;        
				});
			}
		};
	 	
	}


	// //Drop directive
	function droppableDirective(){
 	 	return {
 			restrict: 'AE',
	      	scope:{
	            onLoadCallback: '&'
	        },
	        link: function(scope, element, attr) {
    			element.on('drop', function(dropevent){
    				var id = dropevent.dataTransfer.getData("Text");
    				var status = dropevent.target.id;
				    document.getElementById('demo').innerHTML = "Id: " + id + "  to status: " + status; 
					
					dropevent.preventDefault();
				    //dropevent.target.appendChild(document.getElementById(id));
				    //scope.onLoadCallback({arg1: id, arg2: status});

				    scope.$evalAsync('onLoadCallback($$param)', {
				    	"$$param": {arg1: id, arg2: status}
				    });

				});
	 	 	}
		}
	}

		
 
	app_directive.directive("mainDir", mainDir);
	app_directive.directive("loginForm", loginFormDirective);
	app_directive.directive("ticketSwimlane", ticketSwimlane);
	app_directive.directive("createTicketForm", createTicketForm);
	app_directive.directive("statusData", statusData);
	app_directive.directive("ticketTemplate", ticketLists);

	app_directive.directive("draggableDirective", draggableDirective);
	app_directive.directive("droppableDirective", droppableDirective);

 })(Swimlane);
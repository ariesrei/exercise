 
(function(){
	'use strict';

	//alert("Found Me!");

	angular
		.module("app")
		.directive("subMenu", subMenu)
		.directive("loginForm", loginFormDirective)
		.directive("ticketApp", Main)
		.directive("createTicketForm", createTicketForm)
		.directive("ticketTemplate", ticketTemplate)
		.directive("statusData", statusData)
		.directive("draggableDirective", draggableDirective)
		.directive("droppableDirective", droppableDirective);


	function subMenu(){
		return {
			restrict: 'A',
			templateUrl: 'templates/subMenu.html'
		};
	}


	function loginFormDirective(){
		return {
			restrict: 'A',
			templateUrl: 'templates/loginForm.html'
		};
	}


	function Main() {

		return {
			restrict: 'A',
			templateUrl: 'templates/main.html'
		};
	}

	function createTicketForm() {
		
		return {
			restrict: 'A',
			templateUrl: 'templates/createTicketForm.html'
		};
	}

	function ticketTemplate() {
		
		return {
			restrict: 'A',
			templateUrl: 'templates/ticketTemplate.html'
		};
	}

	function statusData() {
		
		return {
			restrict: 'A',
			templateUrl: 'templates/statusData.html'
		};
	}

	function draggableDirective(){

	 	return {
	 		link: function(scope, element, attr){

				element.attr('draggable', 'true');

				element.css({
					position: 'relative',
					backgroundColor: 'lightgrey',
					cursor: 'pointer',
					width: '94%',
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


	//Drop directive
	function droppableDirective(){

 	 	return {
 			restrict: 'AE',
	      	scope:{
	            onLoadCallback: '&'
	        },

	        link: function(scope, element, attr) {

    			element.on('drop', function(dropevent){
					dropevent.preventDefault();
					var id = dropevent.dataTransfer.getData("Text");
				    dropevent.target.appendChild(document.getElementById(id));
				    var status = dropevent.target.id;
				    var newNode = document.getElementById('demo').innerHTML = "Id: " + id + "  to status: " + status;

				    scope.onLoadCallback({arg1: id, arg2: status});
				});

	 	 	}

		}

	}

})();
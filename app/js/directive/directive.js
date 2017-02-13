 
(function(){
	'use strict';

	//alert("Found Me!");

	angular
		.module("app")
		.directive("loginForm", loginFormDirective)
		.directive("ticketApp", Main)
		.directive("createTicketForm", createTicketForm)
		.directive("ticketTemplate", ticketTemplate)
		.directive("myDraggable", myDraggable)
		.directive("myDrop", ['$document', myDrop]);


	function loginFormDirective(){

		return {
			restrict: 'A',
			templateUrl: '../../templates/loginForm.html'
		};

	}


	function Main() {

		return {
			restrict: 'A',
			templateUrl: '../../templates/main.html'
		};
	}

	function createTicketForm() {
		
		return {
			restrict: 'A',
			templateUrl: '../../templates/createTicketForm.html'
		};
	}

	function ticketTemplate() {
		
		return {
			restrict: 'A',
			templateUrl: '../../templates/ticketTemplate.html'
		};
	}


	//Drop directive
	function myDrop($document){

 	 	return {
			scope: {
				drop: '&'
			},
			
			link: function(scope, elem, attr){

				elem.on('dragover', function(event){
					event.originalEvent.preventDefault();
				});  


				elem.on('drop', function(dropevent){
					dropevent = event.orginalEvent || event;
					console.log(dropevent);
					dropevent.preventDefault();
					var data = dropevent.dataTransfer.getData('text/plain'); 
					scope.drop({task:data});

					//Add the dropped data to the list
					var orignElem = document.getElementById(data);
					dropevent.target.appendChild(orignElem);

				});
			}
		}
	}


	function myDraggable(){

	 	return {
	 		link: function(scope, elem, attr){
    
				// Set 'draggable' attribute on the element
				elem.attr('draggable', 'true');

				elem.on('dragstart', function(dragevent){

				dragevent = event.originalEvent || event;  
				dragevent.dataTransfer.effectAllowed = 'move';
				dragevent.dataTransfer.setData("text/plain", dragevent.target.id);            
				});
			}
		};
	 	
		// return {
		//  	link: function(scope, element, attr) {

		// 		element.css({
		// 			position: 'relative',
		// 			backgroundColor: 'lightgrey',
		// 			cursor: 'pointer',
		// 			width: '94%',
		// 			border: '1px #ddd solid',
		// 			padding: '0',
		// 			borderRadius: '5px',
		// 			marginBottom: '5px',
		// 			textAlign: 'left',
		// 			padding: '3%'
		// 		});

		// 		// Set 'draggable' attribute on the element
		// 		element.attr('draggable', 'true');

		// 		element.on('dragstart', function(dragevent) {
		// 			//alert("Mouse is down!");

		// 			dragevent = event.originalEvent || event.target.id; 
		// 		 	dragevent.dataTransfer.effectAllowed = 'move';
		// 		 	dragevent.dataTransfer.setData("Text", dragevent.target.id);

		//      		document.getElementById("demo").innerHTML = "Dragging " + dragevent.target.id;

		// 		});

		// 	}
		// };  

		 


		// return {
		// 	link: function(scope, element, attr) {

		// 		var startX = 0, 
		// 			startY = 0, 
		// 			x = 0, 
		// 			y = 0;

		// 		element.css({
		// 			position: 'relative',
		// 			backgroundColor: 'lightgrey',
		// 			cursor: 'pointer',
		// 			width: '94%',
		// 			border: '1px #ddd solid',
		// 			padding: '0',
		// 			borderRadius: '5px',
		// 			marginBottom: '5px',
		// 			textAlign: 'left',
		// 			padding: '3%'
		// 		});

 

		// 		element.on('mousedown', function(event) {
		// 			alert("Mouse is down!");

		// 		 	//event.dataTransfer.setData("Text", event.target.id);
	 //    			//document.getElementById("demo").innerHTML = "Dragging " + event.target.id;
		// 			//console.log("moved");
		// 			// Prevent default dragging of selected content
		// 			//event.preventDefault();
		// 			//startX = event.pageX - x;
		// 			//startY = event.pageY - y;
		// 			//$document.on('mousemove', mousemove);
		// 			//$document.on('mouseup', mouseup);
		// 			//$document.on('drop', drop);
		// 			//console.log(startX + startY);

		// 		});

		// 		// function mousemove(event) {
		// 		// 	y = event.pageY - startY;
		// 		// 	x = event.pageX - startX;
		// 		// 	element.css({
		// 		// 		top: y + 'px',
		// 		// 		left:  x + 'px'
		// 		// 	});
		// 		// }

		// 		// function mouseup() {
		// 		// 	$document.off('mousemove', mousemove);
		// 		// 	$document.off('mouseup', mouseup);
		// 		// }


		// 	}
		// };

	}


})();
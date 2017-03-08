'use strict';

(function(module){
	
	function headerDir(){
		return {
			restrict: 'A',
			templateUrl: 'templates/header.html'
		};
	}

	 
	module.directive("headerDir", headerDir);

 })(Swimlane);
'use strict';

(function(module){
	
	function footerDir(){
		return {
			restrict: 'A',
			templateUrl: 'templates/footer.html'
		};
	}

	 
	module.directive("footerDir", footerDir);

 })(Swimlane);
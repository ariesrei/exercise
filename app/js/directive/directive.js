 
(function(){

	//alert("Found Me!");

	angular
		.module("app")
		.directive("loginTest", loginFormDirective);


	function loginFormDirective(){

		return {
			restrict: 'A',
			templateUrl: '../../templates/loginForm.html'
		};

	}



})();
 
(function(){

	//alert("Found Me!");

	angular
		.module("app")
		.directive("loginForm", loginFormDirective)
		.directive("ticketApp", Main);


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


})();

(function(){

	angular
		.module("app", [])
		.controller("contentCtrl", ContentController);

	function ContentController(){

		var vm = this;

		vm.authenticate = authenticate;

		function authenticate(){
			
		}

	}


})();
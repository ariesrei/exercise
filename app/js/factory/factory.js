(function(){

	angular
		.module("app")
		.factory("LoginService", LoginService);

	function LoginService(){

	    var admin = 'admin';
	    var pass = 'a8cebu';
	    var isAuthenticated = false;
	    
	    return {
			login : function(username, password) {
				isAuthenticated = username === admin && password === pass;
				return isAuthenticated;
			},
			isAuthenticated : function() {
				return isAuthenticated;
			}
		};

	}


})();
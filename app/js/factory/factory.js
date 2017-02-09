'use strict';

(function(){

	angular
		.module("app")
		.factory("LoginService", LoginService)
		.factory("LogoutService", LogoutService)
		.factory("TicketService", TicketService);
		

	function LoginService(){

	 //    var admin = 'admin';
	 //    var pass = 'a8cebu';
	 //    var isAuthenticated = false;

	 //    return {
		// 	login : function(username, password) {
		// 		isAuthenticated = username === admin && password === pass;
		// 		return isAuthenticated;
		// 	},
		// 	isAuthenticated : function() {
		// 		return isAuthenticated;
		// 	}
		// };

	   	var admin = 'admin';
	    var pass = 'a8cebu';
	    var isAuthenticated = false;

	    var myObj = {
	    	login : login,
	    	loginActive: false,
	    	changeState: changeState,
	    	hideError: true,
			isAuthenticated : isAuthenticated
	    }

	    return myObj;

	    function changeState(state){
	    	myObj.loginActive = state;
	    }

	    function login(username, password){
	    	isAuthenticated = username === admin && password === pass;
			return isAuthenticated;
	    }

	    function isAuthenticated(){
			return isAuthenticated;
	    }

	}

	function LogoutService(){
 
	    var myObj = {
	    	logoutActive: true,
	    	changeState: changeState
	    }

	    return myObj;

	  	function changeState(state){
	    	myObj.logoutActive = state;
	    }


	}

	function TicketService(){

		var myObj = {
	    	ticketActive: false, //
	    	changeState: changeState
	    }

	    return myObj;

	    function changeState(state){
	    	myObj.ticketActive = state;
	    }
	}


})();
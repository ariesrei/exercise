'use strict';

(function(){

	angular
		.module("app")
		.factory("LoginService", LoginService)
		.factory("LogoutService", LogoutService)
		.factory("TicketService", TicketService)
		.factory("NewTicketService", NewTicketService);
		
		

	function LoginService(){

	   	var admin = 'admin';
	    var pass = 'password';
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
	    	ticketActive: true, //
	    	changeState: changeState
	    }

	    return myObj;

	    function changeState(state){
	    	myObj.ticketActive = state;
	    }
	}


	function NewTicketService(){
		var myObj = {
	    	newticketActive: true, //
	    	changeState: changeState
	    }

	    return myObj;

	    function changeState(state){
	    	myObj.newticketActive = state;
	    }
	}

})();
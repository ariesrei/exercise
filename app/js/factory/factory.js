'use strict';

(function(){

	angular
		.module("app")
		.factory("LoginService", LoginService)
		//.factory("LogoutService", LogoutService)
		//.factory("TicketService", TicketService)
		//.factory("NewTicketService", NewTicketService)
		.factory("StateChange", StateChange);
		

	function LoginService(){

	   	var admin = 'admin';
	    var pass = 'password';
	    var isAuthenticated = false;

	    var myObj = {
	    	login : login,
	    	isAuthenticated : isAuthenticated
	    }

	    function login(username, password){
	    	isAuthenticated = username === admin && password === pass;
			return isAuthenticated;
	    }

	    function isAuthenticated(){
			return isAuthenticated;
	    }
	    return myObj;
	}

	function StateChange(){
		var myObj = {
			loginHide: false,
			welcome: false,
	    	logoutActive: true,
			ticketActive: false, // default true
	    	newticketActive: true, // default true
	    	hideError: true,
	    	changeState: changeState,
	    	LoginSuccess: LoginSuccess,
	    	LogoutSuccess: LogoutSuccess
	    }

	    function LoginSuccess(){
	    	myObj.welcome = true;
	    	myObj.loginHide = true;
	    	myObj.logoutActive = false;
	    	myObj.hideError = true;
	    	myObj.ticketActive =  false;
	    }

	    function LogoutSuccess(){
	    	myObj.welcome = false;
	    	myObj.loginHide = false;
	    	myObj.logoutActive = true;
	    	myObj.ticketActive = true;
	    	myObj.newticketActive = true;
	    	alert("Thank you");
	    }

	    function changeState(state){
	    	myObj.newticketActive = state;
	    }

	    return myObj;
	}

})();
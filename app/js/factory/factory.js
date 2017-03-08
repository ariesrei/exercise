'use strict';

(function(app_factory){
	
	function loginService(){

	   	var admin = 'admin';
	    var pass = '123';
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

	// 
	function stateChange(){

		var myObj = {
			welcome: true,
			loginHide: true,
	    	logoutActive: false,
	    	hideError: false,

			ticketActive: false, // default true
	    	newticketActive: false, // default true
			editTicketActive: false, // default true

	    	changeState: changeState,
	    	activeEdit: activeEdit,
	    	loginSuccess: loginSuccess,
	    	logoutSuccess: logoutSuccess

	    }

	    function loginSuccess(){
	    	myObj.welcome = false;
	    	myObj.loginHide = false;
	    	myObj.logoutActive = true;
	    	myObj.hideError = false;
	    	myObj.ticketActive =  true;
	    }

	    function logoutSuccess(){
	    	myObj.welcome = true;
	    	myObj.loginHide = true;
	    	myObj.logoutActive = false;
	    	myObj.ticketActive = false;
	    	myObj.newticketActive = true;
	    	alert("Thank you");
	    }

	    function changeState(state){
	    	myObj.newticketActive = state;
	    	//alert("Alert!");
	    }

	    function activeEdit(state){
	    	myObj.editTicketActive = state;
	    	//title = '';
	    }

	    return myObj;

	}

	app_factory.factory("loginService", loginService);
	app_factory.factory("stateChange", stateChange);


})(Swimlane);
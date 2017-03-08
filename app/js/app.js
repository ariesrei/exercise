'use strict';

var Swimlane = angular.module("app", []);


function allowDrop(event) {
    event.preventDefault();

    if (event.target.getAttribute("draggable") === "true")
        event.dataTransfer.dropEffect = "none";
    else
        event.dataTransfer.dropEffect = "all";

}

// (function(){

// 	'use strict';

// 	angular
// 		.module("app", []);


// })();
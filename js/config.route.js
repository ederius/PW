
app.config(function($routeProvider){

	$routeProvider
	.when('/', {
		templateUrl:"tpl/app.html",
		controlller:"main"
	})
	.otherwise({
		redirectTo:"/"
	})
	

});

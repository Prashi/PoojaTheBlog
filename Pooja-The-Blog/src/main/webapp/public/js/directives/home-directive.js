(function(app) {
	app.directive("homeBlog", function() {
	    return {
	        restrict : "AE",
	        templateUrl : "partials/directives/home-blog.html"
	    };
	});
})(myblog);

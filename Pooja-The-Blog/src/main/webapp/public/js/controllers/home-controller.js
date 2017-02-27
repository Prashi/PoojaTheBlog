(function(app) {
	app.controller('HomeController', ['$scope', function($scope) {
		$scope.blogs = [
					{
						id: 'blog1',
						title: 'Blog Post Title1',
						by: 'Pooja Chaudhary',
						date: 'August 28, 2013 at 10:00 PM',
						image: 'public/images/blogs/blog1.jpg',
						descTemplate: "partials/blogs/blog1-home-desc.html"
					},
					{
						id: 'blog2',
						title: 'Blog Post Title2',
						by: 'Pooja Chaudhary',
						date: 'August 28, 2013 at 10:00 PM',
						image: 'public/images/blogs/blog2.jpg',
						descTemplate: "partials/blogs/blog2-home-desc.html"
					}
				];
	}]);		
})(myblog);

'use strict';

module.exports = function (grunt) {

    var appConfig = {
        app:  'webapp',
        dist: 'dist',
        date: grunt.template.today('mmddyyyy')
    };


    grunt.initConfig({
        me: appConfig,

        // The actual grunt server settings
        connect: {
            server: {
                options: {
                    hostname: 'localhost',
					port: 9000,
                    keepalive: true,
                    debug: true,	
                    open: true,				                    
                    middleware: function (connect, options) {
                        var middlewares = [];
						middlewares.push(connect.static(appConfig.app));
						return middlewares;
                    }
                }
            }
        }
    });
   
    grunt.loadNpmTasks('grunt-connect-proxy');
    grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-compress');    
    grunt.registerTask('default',   [
                                     'connect:server']);
    
};


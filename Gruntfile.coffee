module.exports = (grunt) ->
	config =
		pkg: grunt.file.readJSON("package.json")

		# SASS
		sass:
			dist:
				files:
					'Urort.Web/Content/Site.css': 'Urort.Web/sass/Site.scss'
					'Urort.Web/Content/Site.dk.css': 'Urort.Web/sass/Site.dk.scss'
					'Urort.Web/Content/Embed.css': 'Urort.Web/sass/Embed.scss'
					'Urort.Web/Content/Embed.dk.css': 'Urort.Web/sass/Embed.dk.scss'
				options:
				    sourceComments: 'normal'

		cssmin:
			css:
				files:
					'Urort.Web/Content/Site.min.css': ['Urort.Web/Content/Site.css'],
					'Urort.Web/Content/Site.dk.min.css': ['Urort.Web/Content/Site.dk.css'],
					'Urort.Web/Content/Embed.min.css': ['Urort.Web/Content/Embed.css'],
					'Urort.Web/Content/Embed.dk.min.css': ['Urort.Web/Content/Embed.dk.css'],

		ts:
			debug:
				src: 
					['Urort.Web/App/*.ts', 'Urort.Web/App/**/*.ts','Urort.Web/App/**/**/*.ts']
				outDir: 'Urort.Web'
				watch: 'Urort.Web/App'

		watch:
			styles:
				files: ["Urort.Web/sass/*.scss","Urort.Web/sass/**/*.scss", "Urort.Web/App/*.ts", "Urort.Web/App/**/*.ts","Urort.Web/App/**/**/*.ts"]
				tasks: ["sass", "cssmin"]

		copy:
			files:
				nonull: true,
				expand: true,
				src: 'Urort.Web/Web.' + grunt.option("locale") + '.config',
				rename: (dest, src) -> 'Urort.Web/Web.config'

	# Handle configuration parameter
	preferredLocale = grunt.option("locale") || null;
	allowedLocales = ["no", "dk", "local-no"];

	if(preferredLocale && allowedLocales.indexOf(preferredLocale) < 0)
		grunt.fail.fatal("Selected locale " + preferredLocale + " is not valid. Must be one of [" + allowedLocales.join(",") + "]");

	# Initialize config
	grunt.initConfig(config)

	# Load NPM Tasks
	grunt.loadNpmTasks("grunt-sass")
	grunt.loadNpmTasks('grunt-contrib-clean')
	grunt.loadNpmTasks('grunt-string-replace')
	grunt.loadNpmTasks("grunt-contrib-watch")
	grunt.loadNpmTasks("grunt-contrib-cssmin")
	grunt.loadNpmTasks("grunt-ts")
	grunt.loadNpmTasks("grunt-contrib-copy")

	# Register tasks
	grunt.registerTask "dev", "Development build (will be watching!)", ->
		grunt.config.set("build", "dev")
		grunt.task.run("sass", "cssmin", "watch")
		
	grunt.registerTask "devts", "Development build (will be watching!)", ->
		grunt.config.set("build", "devts")
		grunt.task.run("sass", "cssmin", "ts", "watch")

	grunt.registerTask "prod", "Production build", ->
		grunt.config.set("build", "prod")
		grunt.task.run("sass", "cssmin", "ts")

	grunt.registerTask "configure", "Configure project for locale", ->
		if(!preferredLocale)
			grunt.fail.fatal("Please specify --locale=[" + allowedLocales.join(",") + "] to configure")

		grunt.task.run("copy")

	# Default, list available tasks
	grunt.registerTask "default", "", ->
		grunt.log.writeln("")
		grunt.log.writeln("    Usage:")
		grunt.log.writeln("")
		grunt.log.writeln("        grunt dev        For development builds. Compiles *.scss files when they change.")
		grunt.log.writeln("        grunt devts      For development builds. Compiles *.scss and *.ts files when they change.")
		grunt.log.writeln("        grunt prod       For production builds only. Will also uglify and compress.")

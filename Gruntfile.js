module.exports = function(grunt) {
	
	

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    
    
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    
    connect: {
	      options: {
	        port: 9000,
	        hostname: 'localhost', //默认就是这个值，可配置为本机某个 IP，localhost 或域名
	        livereload: 35729  //声明给 watch 监听的端口
	      },
	
	      server: {
	        options: {
	          open: true, //自动打开网页 http://
	          base: [
	            'src'  //主目录
	          ]
	        }
	      }
    },
    
    watch: {
    		client: {
            // 我们不需要配置额外的任务，watch任务已经内建LiveReload浏览器刷新的代码片段。
            options: {
                livereload: 35729
            },
            // '**' 表示包含所有的子目录
            // '*' 表示包含所有的文件
            files: ['src/html/*.html', 'src/css/*.css', 'src/js/*.js', 'src/images/{,*/}*.{png,jpg}']
        },
        
        livereload: {
		        options: {
		          livereload: '<%=connect.options.livereload%>'  //监听前面声明的端口  35729
		        },

        files: [  //下面文件的改变就会实时刷新网页
          'src/html/*.html',
          'src/css/*.css',
          'src/js/*.js',
          'src/images/{,*/}*.{png,jpg}'
        ]
      }
    }
    
    
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  

  // Default task(s).
  grunt.registerTask('serve', ['connect:server', 'watch']);

};
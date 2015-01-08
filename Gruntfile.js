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
	        hostname: 'localhost', //Ĭ�Ͼ������ֵ��������Ϊ����ĳ�� IP��localhost ������
	        livereload: 35729  //������ watch �����Ķ˿�
	      },
	
	      server: {
	        options: {
	          open: true, //�Զ�����ҳ http://
	          base: [
	            'src'  //��Ŀ¼
	          ]
	        }
	      }
    },
    
    watch: {
    		client: {
            // ���ǲ���Ҫ���ö��������watch�����Ѿ��ڽ�LiveReload�����ˢ�µĴ���Ƭ�Ρ�
            options: {
                livereload: 35729
            },
            // '**' ��ʾ�������е���Ŀ¼
            // '*' ��ʾ�������е��ļ�
            files: ['src/html/*.html', 'src/css/*.css', 'src/js/*.js', 'src/images/{,*/}*.{png,jpg}']
        },
        
        livereload: {
		        options: {
		          livereload: '<%=connect.options.livereload%>'  //����ǰ�������Ķ˿�  35729
		        },

        files: [  //�����ļ��ĸı�ͻ�ʵʱˢ����ҳ
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
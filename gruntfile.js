    module.exports = function(grunt) {
        // Configurações das tarefas
        grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
    
        // Configuração do LESS
        less: {
            development: {
            options: {
                compress: false, // Não comprimir no desenvolvimento
                optimization: 2
            },
            files: {
                "dist/styles.css": "src/styles.less" // Arquivo de saída
            }
            }
        },
    
        // Configuração para comprimir o JavaScript
        uglify: {
            my_target: {
            files: {
                'dist/scripts.min.js': ['src/scripts.js'] // Minifica "src/scripts.js" em "dist/scripts.min.js"
            }
            }
        }
        });
    
        // Carrega os pacotes necessários
        grunt.loadNpmTasks('grunt-contrib-less');
        grunt.loadNpmTasks('grunt-contrib-uglify');
        grunt.loadNpmTasks('grunt');
    
        // Registra tarefas padrão
        grunt.registerTask('default', ['less', 'uglify']);
    };
    
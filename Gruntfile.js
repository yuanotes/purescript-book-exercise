module.exports = function(grunt){
    "use strict";
    grunt.initConfig({
        srcFiles: ["src/**/*.purs"],
        psc: {
            options: {
                modules: ["PhoneBook"]
            },
            all: {
                src: ["<%=srcFiles%>",
                      "bower_components/**/src/**/*.purs"],
                dest: "dist/Main.js"
            }
        },
        dotPsci: ["<%=srcFiles%>",
                  "bower_components/**/src/**/*.purs"],
        execute: {
            target: "dist/Main.js"
        }
    });
    grunt.loadNpmTasks("grunt-purescript");
    grunt.loadNpmTasks("grunt-execute");
    grunt.registerTask("default", ["psc:all", "dotPsci", "execute"]);
};

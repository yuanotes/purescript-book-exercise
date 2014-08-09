module.exports = function(grunt){
    "use strict";
    grunt.initConfig({
        psc: {
            options: {
                main: "Chapter2",
                modules: ["Chapter2"]
            },
        all: {
            src: ["src/**/*.purs",
                  "bower_components/**/src/**/*.purs"],

            dest: "dist/Main.js"
            }
        },
        dotPsci: ["src/**/*.purs",
              "bower_components/**/src/**/*.purs"],
        execute: {
            target: "dist/Main.js"
        }
    });
    grunt.loadNpmTasks("grunt-purescript");
    grunt.loadNpmTasks("grunt-execute");
    grunt.registerTask("default", ["psc:all", "dotPsci", "execute"]);
};

var gulp = require("gulp"),
  less = require("gulp-less");
 // rename = require("gulp-rename"),
 // cleanCSS = require("gulp-clean-css"),
 // postcss = require('gulp-postcss'),
  //autoprefixer = require('autoprefixer');



gulp.task("default",async ()=>{
 

  gulp.watch("less/*.less",async ()=>{
    gulp.src("less/*.less")
    .pipe(less())  .pipe(gulp.dest("css/"));
  });
 

}); 

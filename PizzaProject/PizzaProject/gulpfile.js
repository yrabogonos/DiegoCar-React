var gulp = require('gulp'); 
const sass = require('gulp-sass')(require('sass')); 
 
 
gulp.task('default', function(){ 
    console.log(10); 
}) 
 
gulp.task('scss', function(){ 
    return gulp.src(["./style/**/*.scss","./style/**/*.sass"]) 
        .pipe(sass()) 
        .pipe(sass().on("error", sass.logError)) 
        .pipe(gulp.dest("./style")) 
}); 
 
 
gulp.task('watch', function() { 
    gulp.watch(["./style/**/*.scss","./style/**/*.sass"],gulp.series(['scss'])) 
  }); 
gulp.task('default', gulp.series('scss', 'default', 'watch'));
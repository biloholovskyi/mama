const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const webpack = require('webpack-stream');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const pug = require('gulp-pug');

const webConfig = {
  mode: 'production',
  output: {
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }
    ]
  }
};

gulp.task('pug', function () {
  return gulp.src('app/pug/pages/*.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('app/build'));
})

gulp.task('default', function () {
  browserSync.init({
    // server: {
    //     baseDir: "./app/wp-content/themes/mama"
    // }
    proxy: "http://localhost:8888/mama/app"
  });
  gulp.watch("app/pug/**/*.pug", function () {
    return gulp.src('app/pug/pages/*.pug')
      .pipe(pug({
        pretty: true
      }))
      .pipe(gulp.dest('app/'))
      .pipe(browserSync.reload({stream: true}));
  });
  gulp.watch("app/wp-content/themes/mama/**/*.php").on("change", browserSync.reload);
  gulp.watch("app/wp-content/themes/mama/sass/**/*.scss", function () {
    return gulp.src("app/wp-content/themes/mama/sass/**/*.scss")
      .pipe(sass())
      .pipe(autoprefixer({
        overrideBrowserslist: ['> 0.1%'],
        cascade: false
      }))
      .pipe(cleanCSS({
        level: 2
      }))
      .pipe(gulp.dest("app/wp-content/themes/mama/css"))
      .pipe(browserSync.stream());
  });
  gulp.watch("app/wp-content/themes/mama/js/**/*.js", function () {
    return gulp.src("app/wp-content/themes/mama/js/index.js")
      .pipe(webpack(webConfig))
      .pipe(gulp.dest("app/wp-content/themes/mama/buildjs"))
      .pipe(browserSync.stream());
  });
});
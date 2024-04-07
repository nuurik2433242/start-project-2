const { src, dest, watch, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();

// Запуск сервера BrowserSync
function browsersync() {
    browserSync.init({
        server: {
            baseDir: 'app/'
        },
        notify: false
    });
}

// Динамический импорт gulp-autoprefixer
async function styles() {
    const autoprefixer = await import('gulp-autoprefixer');
    return src('app/scss/style.scss')
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
        .pipe(concat('style.min.css'))
        .pipe(autoprefixer.default({
            overrideBrowserslist: ['last 10 versions'],
            grid: true
        }))
        .pipe(dest('app/css'))
        .pipe(browserSync.stream());
}

// Объединение и минификация скриптов
function scripts() {
    return src([
        'node_modules/jquery/dist/jquery.js',
        'node_modules/slick-carousel/slick/slick.js',
        'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js',
        'node_modules/rateyo/src/jquery.rateyo.js',
        'app/js/main.js' // Исправленный путь к основному скрипту
    ])
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(dest('app/js'))
    .pipe(browserSync.stream());
}

// Отслеживание изменений в файлах
function watching() {
    watch(['app/scss/**/*.scss'], styles);
    watch(['app/js/**/*.js', '!app/js/main.min.js'], scripts);
    watch(['app/**/*.html']).on('change', browserSync.reload);
}

// Сборка проекта
function build() {
    return src([
        'app/**/*.html',
        'app/css/style.min.css',
        'app/js/main.min.js',
        'app/images/**/*'
    ], { base: 'app' })
    .pipe(dest('dist'));
}

// Экспорт задач Gulp
exports.styles = styles;
exports.scripts = scripts;
exports.browsersync = browsersync;
exports.watching = watching;
exports.build = build;

// Задача по умолчанию
exports.default = parallel(styles, scripts, browsersync, watching);


const { dest, parallel, watch, series, src } = require('gulp'),
      sass = require('gulp-sass'),
      notify = require('gulp-notify'),
      rename = require('gulp-rename'),
      prefix = require('gulp-autoprefixer'),
      sourcemaps = require('gulp-sourcemaps'),
      sync = require('browser-sync').create(),
      fs = require('fs'),
      data = require('gulp-data'),
      pug = require('gulp-pug'),
      concat = require('gulp-concat'),
      uglES = require('gulp-uglify-es').default,
      svg = require('gulp-svg-sprite'),
      imgMin = require('gulp-imagemin'),
      pngQuant = require('imagemin-pngquant'),
      ttf2woff2 = require('gulp-ttf2woff2'),
      browserify = require('gulp-bro'),
      babelify = require('babelify'),
      isProd = (process.env.NODE_ENV === 'prod'),
      root = {
        dev: './app/',
        prod: './docs/',
        libs: './libs/',
        data: './data/data.json'
      },
      dev = {
        scss: root.dev + 'assets/scss/main.scss',
        fonts: root.dev + 'assets/fonts/**/*.ttf',
        media: root.dev + 'assets/img/**/*.{png, jpg, jpeg}',
        svg: root.dev + 'assets/svg/**/*.svg',
        pug: root.dev + 'views/**/*.pug',
        es: root.dev + 'assets/es/*.js',
        libs: root.libs + 'all.js',
      },
      prod = {
        css: root.prod + 'css/',
        media: root.prod + 'img/',
        js: root.prod + 'js/',
        fonts: root.prod + 'fonts/',
      };

/* Работа со стилями */
const stylesMin = () => {
  let stylesGen = '';

  if(!isProd) {
    stylesGen = src(dev.scss)
      .pipe(sourcemaps.init())
      .pipe(sass({
        outputStyle: 'expanded',
      }).on('error', notify.onError()))
      .pipe(prefix([
        '> 1%',
        'ie 8',
        'ie 7',
        'last 15 versions'
      ]))
      .pipe(rename({
        basename: 'styles',
      }))
      .pipe(sourcemaps.write('.'))
      .pipe(sync.stream());
  } else {
    stylesGen = src(dev.scss)
      .pipe(sass({
        outputStyle: 'compressed',
      }).on('error', notify.onError()))
      .pipe(prefix([
        '> 1%',
        'ie 8',
        'ie 7',
        'last 15 versions'
      ]))
      .pipe(rename({
        basename: 'styles',
        suffix: '.min',
      }))
  }

  return stylesGen.pipe(dest(prod.css));
};
/* Работа со стилями */

/* Работа с библиотеками  */
const getModules = () => {
  return src(dev.libs)
    .pipe(browserify({
      transform: [
        babelify.configure({presets: ['@babel/env']})
      ],
    }))
    .pipe(rename('libs.min.js'))
    .pipe(dest(prod.js));
};
/* Работа с библиотеками  */

/* Работа со скриптами */
const esMin = series([getModules], () => {
  return src(dev.es)
    .pipe(rename('app.min.js'))
    .pipe(uglES())
    .pipe(dest(prod.js));
});
/* Работа со скриптами */

/* Работа с шаблонизатором */
const pug2html = () => {
  return src(dev.pug)
    .pipe(data(() => JSON.parse(fs.readFileSync(root.data, 'utf-8'))))
    .pipe(pug({
      pretty: !isProd,
      locals: root.data,
    }))
    .pipe(sync.stream())
    .pipe(dest(root.prod));
};
/* Работа с шаблонизатором */

/* Работа с иконками и картинками */
const svg2sprite = () => {
  return src(dev.svg)
    .pipe(svg({
      mode: {
        stack: {
          sprite: "../sprite.svg"
        },
        symbol: true,
        padding: 0
      }
    }))
    .pipe(sync.stream())
    .pipe(dest(prod.media));
};
const imgOpt = () => {
  return src(dev.media)
    .pipe(imgMin({
      interlaced: true,
      progressive: true,
      svgoPlugins: {removeViewBox: false},
      use: pngQuant(),
    }))
    .pipe(sync.stream())
    .pipe(dest(prod.media));
};
/* Работа с иконками и картинками */

/* Работа со шрифтами */
const fonts = () => {
  src(dev.fonts)
    .pipe(sync.stream())
    .pipe(dest(prod.fonts));

  return src(dev.fonts)
    .pipe(ttf2woff2())
    .pipe(sync.stream())
    .pipe(dest(prod.fonts));
}
/* Работа со шрифтами */

/* работа с localhost */
const watchFiles = () => {
  sync.init({
    server: {
      baseDir: root.prod
    },
    notify: false
  });

  watch(dev.fonts, fonts);
  watch(dev.svg, svg2sprite);
  watch(dev.media, imgOpt);
  watch([dev.es, dev.libs], esMin);
  watch([root.dev + 'assets/scss/**/*.scss', root.dev + 'components/**/*.scss'], stylesMin);
  watch([root.data, root.dev + '**/*.pug'], pug2html);
};
/* работа с localhost */

/* Работа с изначальной сборкой проекта */
const buildProd = parallel([
  parallel(fonts, imgOpt),
  series(pug2html, stylesMin),
  series(esMin, svg2sprite),
]);
/* Работа с изначальной сборкой проекта */

/* Таски проекта */
exports.build = buildProd;
exports.default = watchFiles;
/* Таски проекта */


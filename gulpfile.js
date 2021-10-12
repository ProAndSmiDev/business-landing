const {dest, parallel, watch, series, src} = require('gulp');
const fs                                   = require('fs');
const pug                                  = require('gulp-pug');
const babelify                             = require('babelify');
const browserify                           = require('gulp-bro');
const data                                 = require('gulp-data');
const csso                                 = require('gulp-csso');
const webp                                 = require('gulp-webp');
const rename                               = require('gulp-rename');
const notify                               = require('gulp-notify');
const concat                               = require('gulp-concat');
const imgMin                               = require('gulp-imagemin');
const ttf2woff                             = require('gulp-ttf2woff');
const ttf2woff2                            = require('gulp-ttf2woff2');
const svg                                  = require('gulp-svg-sprite');
const sourcemaps                           = require('gulp-sourcemaps');
const pngQuant                             = require('imagemin-pngquant');
const prefix                               = require('gulp-autoprefixer');
const sync                                 = require('browser-sync').create();
const uglES                                = require('gulp-uglify-es').default;
const gcmq                                 = require('gulp-group-css-media-queries');
const scss                                 = require('gulp-sass')(require('node-sass'));

const isProd    = (process.env.NODE_ENV === 'prod');
const root      = {
  dev:  'app/',
  prod: 'docs/',
};
const assetsURI = root.dev + 'assets/';
const dev       = {
  data:  `${root.dev}/data/data.json`,
  pug:   `${root.dev}views/*.pug`,
  webp:  `${assetsURI}webp/**/*.+(png|jpg|jpeg)`,
  img:   `${assetsURI}img/**/*.+(png|jpg|jpeg)`,
  svg:   `${assetsURI}svg/*.svg`,
  scss:  `${assetsURI}scss/main.scss`,
  js:    `${assetsURI}js/*.js`,
  fonts: `${assetsURI}fonts/**/*.ttf`,
  libs:  `${root.dev}/libs/libs.js`,
};
const prod      = {
  js:    `${root.prod}js/`,
  css:   `${root.prod}css/`,
  img:   `${root.prod}img/`,
  fonts: `${root.prod}fonts/`,
};

/* Работа со шрифтами */
const getWoffFonts = () => {
  return src(dev.fonts)
    .pipe(ttf2woff())
    .pipe(sync.stream())
    .pipe(dest(prod.fonts));
};

const getWoff2Fonts = () => {
  return src(dev.fonts)
    .pipe(ttf2woff2())
    .pipe(sync.stream())
    .pipe(dest(prod.fonts));
};
/* Работа со шрифтами */

/* Работа с иконками и картинками */
const getSVGSprite = () => {
  return src(dev.svg)
    .pipe(svg({
      mode: {
        stack:   {
          sprite: '../sprite.svg',
        },
        symbol:  false,
        padding: 0,
      },
    }))
    .pipe(sync.stream())
    .pipe(dest(prod.img));
};

const getWEBPImages = () => {
  return src(dev.webp)
    .pipe(imgMin({
      interlaced:  true,
      progressive: true,
      svgoPlugins: {
        removeViewBox: false,
      },
      use:         pngQuant(),
    }))
    .pipe(webp())
    .pipe(sync.stream())
    .pipe(dest(prod.img));
};

const getImages = () => {
  return src(dev.img)
    .pipe(imgMin({
      interlaced:  true,
      progressive: true,
      svgoPlugins: {
        removeViewBox: false,
      },
      use:         pngQuant(),
    }))
    .pipe(sync.stream())
    .pipe(dest(prod.img));
};
/* Работа с иконками и картинками */

/* Работа с библиотеками  */
const getLibs = () => {
  return src(dev.libs)
    .pipe(browserify({
      transform: [
        babelify.configure({
          presets: ['@babel/env'],
        }),
      ],
    }))
    .pipe(rename('libs.min.js'))
    .pipe(uglES())
    .pipe(dest(prod.js));
};
/* Работа с библиотеками  */

/* Работа со скриптами */
const getJS = () => {
  return src(dev.js)
    .pipe(concat('app.min.js'))
    .pipe(uglES())
    .pipe(dest(prod.js));
};
/* Работа со скриптами */

/* Работа со стилями */
const getStyles = () => {
  if (!isProd) {
    return src(dev.scss)
      .pipe(sourcemaps.init())
      .pipe(scss({
        outputStyle: 'expanded',
      }).on('error', notify.onError()))
      .pipe(prefix([
        '> 1%',
        'ie 8',
        'ie 7',
        'last 15 versions',
      ]))
      .pipe(rename({
        basename: 'styles',
      }))
      .pipe(gcmq())
      .pipe(sourcemaps.write('.'))
      .pipe(sync.stream())
      .pipe(dest(prod.css));
  } else {
    return src(dev.scss)
      .pipe(scss({
        outputStyle: 'expanded',
      }).on('error', notify.onError()))
      .pipe(prefix([
        '> 1%',
        'ie 8',
        'ie 7',
        'last 15 versions',
      ]))
      .pipe(rename({
        basename: 'styles',
        suffix:   '.min',
      }))
      .pipe(gcmq())
      .pipe(csso())
      .pipe(dest(prod.css));
  }
};
/* Работа со стилями */

/* Работа с шаблонизатором */
const getHTML = () => {
  return src(dev.pug)
    .pipe(data(() => JSON.parse(fs.readFileSync(dev.data, 'utf-8'))))
    .pipe(pug({
      pretty: !isProd,
      locals: root.data,
    }))
    .pipe(sync.stream())
    .pipe(dest(root.prod));
};
/* Работа с шаблонизатором */

/* работа с localhost */
const watchFiles = () => {
  sync.init({
    server: {
      baseDir: root.prod,
    },
    notify: false,
  });

  watch(dev.fonts, parallel([getWoffFonts, getWoff2Fonts]));
  watch(dev.svg, getSVGSprite);
  watch(dev.img, getImages);
  watch(dev.webp, getWEBPImages);
  watch(dev.js, getJS);
  watch(`${root.dev}libs/**/*.js`, getLibs);
  watch([`${root.dev}assets/scss/**/*.scss`, `${root.dev}components/**/*.scss`], getStyles);
  watch([dev.data, `${root.dev}**/*.pug`], getHTML);
};
/* работа с localhost */

/* Работа с изначальной сборкой проекта */
const buildProd = series([
  parallel(getWoffFonts, getWoff2Fonts),
  parallel(getSVGSprite, getWEBPImages, getImages),
  parallel(getLibs, getJS),
  series(getStyles, getHTML),
]);
/* Работа с изначальной сборкой проекта */

/* Таски проекта */
exports.build   = buildProd;
exports.default = watchFiles;
/* Таски проекта */

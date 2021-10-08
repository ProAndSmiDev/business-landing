const groups = [
  {
    properties: [
      'content',
      'quotes',
    ],
  },
  {
    properties: [
      'visibility',
      'opacity',
    ],
  },
  {
    properties: [
      'display',
      'position',
      'top',
      'right',
      'bottom',
      'left',
      'z-index',
    ],
  },
  {
    emptyLineBefore: 'always',
    properties: [
      'float',
      'clear',
    ],
  },
  {
    properties: [
      'box-sizing',
    ],
  },
  {
    properties: ['cursor'],
  },
  {
    emptyLineBefore: 'always',
    properties: [
      'flex',
      'flex-basis',
      'flex-direction',
      'flex-flow',
      'flex-grow',
      'flex-shrink',
      'flex-wrap',
      'align-content',
      'align-items',
      'align-self',
      'justify-content',
      'justify-items',
      'justify-self',
      'order',
    ],
  },
  {
    emptyLineBefore: 'always',
    properties: [
      'grid',
      'grid-area',
      'grid-template',
      'grid-template-areas',
      'grid-template-rows',
      'grid-template-columns',
      'grid-row',
      'grid-row-start',
      'grid-row-end',
      'grid-column',
      'grid-column-start',
      'grid-column-end',
      'grid-auto-rows',
      'grid-auto-columns',
      'grid-auto-flow',
      'grid-gap',
      'grid-row-gap',
      'grid-column-gap',
    ],
  },
  {
    emptyLineBefore: 'always',
    properties: [
      'columns',
      'column-gap',
      'column-fill',
      'column-rule',
      'column-rule-width',
      'column-rule-style',
      'column-rule-color',
      'column-span',
      'column-count',
      'column-width',
    ],
  },
  {
    emptyLineBefore: 'always',
    properties: [
      'padding',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left',
      'width',
      'min-width',
      'max-width',
      'height',
      'min-height',
      'max-height',
    ],
  },
  {
    properties: [
      'margin',
      'margin-top',
      'margin-right',
      'margin-bottom',
      'margin-left',
    ],
  },
  {
    properties: [
      'overflow',
      'overflow-x',
      'overflow-y',
      'resize',
    ],
  },
  {
    properties: [
      'outline',
      'outline-offset',
      'outline-width',
      'outline-style',
      'outline-color',
      'border',
      'border-top',
      'border-right',
      'border-bottom',
      'border-left',
      'border-width',
      'border-top-width',
      'border-right-width',
      'border-bottom-width',
      'border-left-width',
      'border-style',
      'border-top-style',
      'border-right-style',
      'border-bottom-style',
      'border-left-style',
      'border-radius',
      'border-top-left-radius',
      'border-top-right-radius',
      'border-bottom-left-radius',
      'border-bottom-right-radius',
      'border-color',
      'border-top-color',
      'border-right-color',
      'border-bottom-color',
      'border-left-color',
      'border-image',
      'border-image-source',
      'border-image-width',
      'border-image-outset',
      'border-image-repeat',
      'border-image-slice',
    ],
  },
  {
    properties: [
      'box-shadow',
    ],
  },
  {
    properties: [
      'background',
      'background-attachment',
      'background-clip',
      'background-color',
      'background-image',
      'background-origin',
      'background-position',
      'background-repeat',
      'background-size',
    ],
  },
  {
    properties: [
      'list-style',
      'list-style-type',
      'list-style-position',
      'list-style-image',
      'caption-side',
    ],
  },
  {
    properties: [
      'table-layout',
      'border-collapse',
      'border-spacing',
      'empty-cells',
    ],
  },

  {
    properties: [
      'vertical-align',
    ],
  },
  {
    properties: [
      'direction',
      'tab-size',
      'text-align',
      'text-align-last',
      'text-justify',
      'text-indent',
      'text-transform',
      'text-decoration',
      'text-decoration-color',
      'text-decoration-line',
      'text-decoration-style',
      'text-rendering',
      'text-shadow',
      'text-overflow',
    ],
  },
  {
    properties: [
      'font',
      'font-family',
      'font-size',
      'font-size-adjust',
      'font-stretch',
      'font-weight',
      'font-smoothing',
      'osx-font-smoothing',
      'font-variant',
      'font-style',
    ],
  },
  {
    properties: [
      'line-height',
      'word-spacing',
      'letter-spacing',
      'white-space',
      'word-break',
      'word-wrap',
      'color',
    ],
  },
  {
    properties: [
      'counter-reset',
      'counter-increment',
    ],
  },
  {
    properties: [
      'page-break-before',
      'page-break-after',
      'page-break-inside',
    ],
  },
  {
    properties: [
      'backface-visibility',
      'perspective',
      'perspective-origin',
      'transform',
      'transform-origin',
      'transform-style',
    ],
  },
  {
    properties: [
      'transition',
      'transition-delay',
      'transition-duration',
      'transition-property',
      'transition-timing-function',
    ],
  },
  {
    properties: [
      'animation',
      'animation-name',
      'animation-duration',
      'animation-timing-function',
      'animation-delay',
      'animation-iteration-count',
      'animation-direction',
      'animation-fill-mode',
      'animation-play-state',
    ],
  },
];

module.exports = {
  plugins: [
    'stylelint-order',
    'stylelint-scss',
    'stylelint-selector-bem-pattern',
  ],
  rules: {
    'at-rule-blacklist': ['debug',
      {
        message:
          'Уберите правило @debug',
      },
    ],
    'at-rule-no-vendor-prefix': [true,
      {
        message:
          'Вендорные префиксы запрещены',
      },
    ],
    'block-no-empty': [true,
      {
        message:
          'Пустые правила запрещены',
      },
    ],
    'block-opening-brace-space-before': ['always',
      {
        message:
          'Перед открывающейся скобкой всегда должен быть 1 пробел',
      },
    ],
    'color-hex-case': ['lower',
      {
        message:
          'Цвета в формате HEX всегда должны быть в нижнем регистре',
      },
    ],
    'color-hex-length': ['short',
      {
        message:
          'Цвета в HEX формате не должны быть длиннее 6 символов',
      },
    ],
    'color-named': ['never',
      {
        message:
          'Цвета не должны быть названы именами пример: `color: red`',
      },
    ],
    'color-no-invalid-hex': [true,
      {
        message:
          'HEX цвета могут быть длинной 6 , 3 , 4 символа',
      },
    ],
    'declaration-bang-space-after': ['never',
      {
        message:
          'Не должно быть пустого места между символом `!` И правилом',
      },
    ],
    'declaration-bang-space-before': ['always',
      {
        message:
          'Всегда должно быть пустое места между значением И правилом с `!` ',
      },
    ],
    'declaration-block-semicolon-newline-after': ['always',
      {
        message:
          'После точки с запятой всегда должна быть новая строка.',
      },
    ],
    'declaration-block-semicolon-space-before': ['never',
      {
        message:
          'Перед точкой с запятой никогда не должно быть пробелов.',
      },
    ],
    'declaration-block-single-line-max-declarations': [1,
      {
        message:
          'В одной линии может быть только одна декларация',
      },
    ],
    'declaration-block-trailing-semicolon': ['always',
      {
        message:
          'После декларации всегда должна быть точка с запятой',
      },
    ],
    'declaration-colon-space-after': ['always-single-line',
      {
        message:
          'После разделителя `:` всегда должен быть 1 пробел',
      },
    ],
    'declaration-colon-space-before': ['never',
      {
        message:
          'Перед разделителем `:` не должно быть пустого места',
      },
    ],
    'function-comma-space-after': ['always-single-line',
      {
        message:
          'Между разделитемя в значениях после запятой всегда должен быть 1 пробел',
      },
    ],
    'function-parentheses-space-inside': ['never',
      {
        message:
          'В значениях после открывающейся скобки и так же перед закрывающейся не должно быть пустого места',
      },
    ],
    'function-url-quotes': ['always',
      {
        message:
          'Урл должен быть в одинарных кавычеках, пример: background-img: url(random)',
      },
    ],
    indentation: [2,
      {
        message:
          'Отсупы всегда равны 2',
      },
    ],
    'length-zero-no-unit': [true,
      {
        message:
          'В значениях нулевой длинны не должно быть идентификаторов: em, ex, ch, vw, vh, cm, mm, in, pt, pc, px, rem, vmin и vmax. ',
      },
    ],
    'max-nesting-depth': [4,
      {
        message:
          'Максимальное наследование должно быть не больше 3',
      },
    ],
    // "media-feature-name-no-vendor-prefix": true,
    'media-feature-parentheses-space-inside': ['never',
      {
        message:
          'В медиа запросах после открывающейся круглой скобки и так же перед закрывающейся не должно быть пустого места'
          + 'https://stylelint.io/user-guide/rules/media-feature-parentheses-space-inside/',
      },
    ],
    'no-missing-end-of-source-newline': [true,
      {
        message:
          'После декларации всегда должна быть пустая линия',
      },
    ],
    'number-leading-zero': ['always',
      {
        message:
          'Не должно быть дробного значения начинающегося с 0 пример: 0.5px, вместо этого надо .5px',
      },
    ],
    'number-no-trailing-zeros': [true,
      {
        message:
          'Не должно быть конечных нулей в дробных числах Пример: 1.00100, два последних нуля лишние',
      },
    ],
    'order/order': [
      [
        'custom-properties',
        'dollar-variables',
        {
          type: 'at-rule',
          name: 'extend',
        },
        {
          type: 'at-rule',
          name: 'include',
        },
        {
          type: 'at-rule',
          name: 'mixin',
        },
        {
          type: 'at-rule',
          name: 'include',
          hasBlock: false,
        },
        'declarations',
        {
          type: 'at-rule',
          name: 'include',
          hasBlock: true,
        },
        'rules',
        {
          type: 'at-rule',
          name: 'media',
          hasBlock: true,
        },
      ],
    ],
    'order/properties-order': [
      groups,
    ],
    // "order/properties-alphabetical-order": [false,
    //     {
    //         "disableFix" : true,
    //         "message":
    //             "Декларации должны быть расположены в алфавитном порякде"
    //     }
    // ],
    'property-no-unknown': [true,
      {
        message:
          'Неизвестные свойства запрещены',
      },
    ],
    'property-no-vendor-prefix': [true,
      {
        message:
          'Вендорные префиксы запрещены',
      },
    ],
    'rule-empty-line-before': [
      'always-multi-line',
      {
        except: ['first-nested'],
        ignore: ['after-comment'],
        message:
                'После каждой декларации всегда должна быть пустая линия, исключая первое наследование и комментарий',
      },
    ],
    'scss/at-extend-no-missing-placeholder': [true,
      {
        message:
          '@extend без плейсхолдера запрещен'
          + 'https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-extend-no-missing-placeholder/README.md',
      },
    ],
    'scss/at-function-pattern': ['^[a-z]([A-Z0-9]*[a-z][a-z0-9]*[A-Z]|[a-z0-9]*[A-Z][A-Z0-9]*[a-z])[A-Za-z0-9]*',
      {
        message:
          "scss фунуции должны соответствовать паттерну '^[a-z]([A-Z0-9]*[a-z][a-z0-9]*[A-Z]|[a-z0-9]*[A-Z][A-Z0-9]*[a-z])[A-Za-z0-9]*', т.е. должны быть в нижнем регистре и разделяться тире ",
      },
    ],
    // "scss/at-import-no-partial-leading-underscore": true,
    // "scss/at-import-partial-extension-blacklist": ["scss"],
    'scss/at-mixin-pattern': ['^[a-z]([A-Z0-9]*[a-z][a-z0-9]*[A-Z]|[a-z0-9]*[A-Z][A-Z0-9]*[a-z])[A-Za-z0-9]*',
      {
        message:
          "scss миксины должны соответствовать паттерну '^[a-z]([A-Z0-9]*[a-z][a-z0-9]*[A-Z]|[a-z0-9]*[A-Z][A-Z0-9]*[a-z])[A-Za-z0-9]*', т.е. должны быть в нижнем регистре и разделяться тире ",
      },
    ],
    'scss/dollar-variable-colon-space-after': ['always',
      {
        message:
          'После названия переменной должно быть свободное место после разделителя `:`',
      },
    ],
    'scss/dollar-variable-colon-space-before': ['never',
      {
        message:
          'После названия переменной не должно быть переноса на новую строку',
      },
    ],
    'scss/dollar-variable-pattern': ['^[_]?[a-z]+([a-z0-9-_]+[a-z0-9]+)?$',
      {
        message:
          "scss переменные должны соответствовать паттерну '^[_]?[a-z]+([a-z0-9-_]+[a-z0-9]+)?$', т.е. должны быть в нижнем регистре и разделяться тире, а модификаторы цвета ($brand_light) начинаться с `_`. Так же переменные  могут начинаться с `_`",
      },
    ],
    'scss/percent-placeholder-pattern': ['^[a-z]+([a-z0-9-_]+[a-z0-9]+)?$',
      {
        message:
          "scss переменные должны соответствовать паттерну '^[a-z]+([a-z0-9-_]+[a-z0-9]+)?$', т.е. должны быть в нижнем регистре и разделяться тире",
      },
    ],
    'scss/selector-no-redundant-nesting-selector': [true,
      {
        message:
          'В наследовании не должно быть nesting selector (&) без правила, подробнее'
          + 'https://github.com/kristerkari/stylelint-scss/tree/master/src/rules/selector-no-redundant-nesting-selector',
      },
    ],
    'selector-class-pattern': [
      '^[a-z0-9\\-]+$',
      {
        message:
          'Все селекторы должны начинаться с маленькой буквы и разделяться тире',
      },
    ],
    // "plugin/selector-bem-pattern": {
    //     "componentName": "[A-Z]+",
    //     "componentSelectors": {
    //         "initial": "^\\.{componentName}(?:-[a-z]+)?$",
    //         "combined": "^\\.combined-{componentName}-[a-z]+$"
    //     },
    //     "utilitySelectors": "^\\.util-[a-z]+$"
    // },
    'selector-list-comma-newline-after': ['always',
      {
        message:
          'При объединении правил двух деклараций через запятую, каждая последующая должна быть на новой строке',
      },
    ],
    'selector-max-compound-selectors': [3,
      {
        message:
          'Максимальное наследование в 1 строку равно 3',
      },
    ],
    'selector-max-id': [0,
      {
        message:
          'ID Запрещены ',
      },
    ],
    'selector-no-qualifying-type': [true,
      {
        message:
          'Не должно быть тегов с классом, только класс или тег',
      },
    ],
    'selector-no-vendor-prefix': [true,
      {
        message:
          'Вендорные префиксы запрещены',
      },
    ],
    'selector-pseudo-element-colon-notation': ['double',
      {
        message:
          'Должно применяться двойное двоеточие `::` для псевдо-элементов',
      },
    ],
    'selector-pseudo-element-no-unknown': [true,
      {
        message:
          'Нельзя использовать не'
          + 'стандартные псевдо-элементы',
      },
    ],
    'shorthand-property-no-redundant-values': [true,
      {
        message:
          "Не допускается использование избыточных правил в декларации пример: 'margin: {1px 1px 1px 1px}'",
      },
    ],
    'string-quotes': ['single',
      {
        message:
          'Все строки должны быть в одинарных ковычках',
      },
    ],
    'value-no-vendor-prefix': [true,
      {
        message:
          'В правилах не должно быть вендорных префиксов',
      },
    ],
  },
};

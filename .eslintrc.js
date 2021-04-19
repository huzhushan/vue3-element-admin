module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ["plugin:vue/vue3-essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    "parser": "babel-eslint",
    "sourceType": 'module',
    "ecmaVersion": 2020,
  },
  rules: {
    "no-console": 0,
    'no-use-before-define': 'off',
    "no-unused-vars": [
      'warn',
      {
        // 允许声明未使用变量
        "vars": "local",
        // 参数不检查
        "args": "none"
      }
    ],
    'vue/no-unused-vars': 'warn',
    'no-prototype-builtins': 'off',
    'space-before-function-paren': 'off',
    'vue/custom-event-name-casing': 'off',
    'vue/attributes-order': 'off',
    'vue/one-component-per-file': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/require-default-prop': 'off',
    'vue/no-unused-components': 'warn',
    'vue/no-setup-props-destructure': 'off',
    "prettier/prettier": [
      "warn",
      {
        'printWidth': 80, // 每行代码长度（默认80）
        'tabWidth': 2, // 每个tab相当于多少个空格（默认2）
        'useTabs': false, // 是否使用tab进行缩进（默认false）
        'singleQuote': true, // 使用单引号（默认false）
        'semi': false, // 声明结尾使用分号(默认true)
        'trailingComma': 'es5', // 多行使用拖尾逗号（默认none）
        'bracketSpacing': true, // 对象字面量的大括号间使用空格（默认true）
        'jsxBracketSameLine': false, // 多行JSX中的>放置在最后一行的结尾，而不是另起一行（默认false）
        'arrowParens': 'avoid', // 只有一个参数的箭头函数的参数是否带括号（默认avoid）
      }
    ]
  },
};

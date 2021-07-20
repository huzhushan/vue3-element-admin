module.exports = {
  printWidth: 80, // 每行代码长度（默认80）
  tabWidth: 2, // 每个tab相当于多少个空格（默认2）
  useTabs: false, // 是否使用tab进行缩进（默认false）
  singleQuote: true, // 使用单引号（默认false）
  semi: false, // 声明结尾使用分号(默认true)
  trailingComma: 'es5', // 多行使用拖尾逗号（默认none）
  bracketSpacing: true, // 对象字面量的大括号间使用空格（默认true）
  jsxBracketSameLine: false, // 多行JSX中的>放置在最后一行的结尾，而不是另起一行（默认false）
  arrowParens: 'avoid', // 只有一个参数的箭头函数的参数是否带括号（默认avoid）
  htmlWhitespaceSensitivity: 'ignore', // 空格不敏感。（开始标签、内容、结束标签各自单独一行）
  // vueIndentScriptAndStyle: false, // 是否给vue中的 <script> and <style>标签加缩进
  // embeddedLanguageFormatting: 'auto', // 是否格式化嵌入到JS中的html标记的代码段或者Markdown语法 auto-格式化 off-不格式化
  // requirePragma: false, // 若为true，文件顶部加了 /*** @prettier */或/*** @format */的文件才会被格式化
  // insertPragma: false, // 当requirePragma参数为true时,此参数为true将向@format标记后面添加一个换行符
  // proseWrap: 'never', // 有效选项[always|never|preserve]。当Markdown文本超过printWidth时,是否换行,always-换行 never-不换行 preserve保持原样
}

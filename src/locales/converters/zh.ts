import type { ConverterLocaleMap } from './types'

const zh: ConverterLocaleMap = {
  'json-to-typescript': {
    description: '将 JSON 对象转换为带有正确类型的 TypeScript 接口',
    longDescription: '粘贴 JSON 数据，立即生成 TypeScript 接口。支持嵌套对象、数组、可选字段和联合类型。非常适合使用 REST API 的开发者。',
  },
  'json-to-javascript': {
    description: '将 JSON 转换为 JavaScript const 变量声明',
    longDescription: '将 JSON 数据转换为 JavaScript const 声明。适用于将数据直接嵌入 JavaScript/Node.js 文件中。',
  },
  'json-to-yaml': {
    description: '将 JSON 转换为 YAML 格式，适用于配置文件和 Kubernetes',
    longDescription: '将 JSON 数据转换为 YAML 格式。YAML 广泛用于配置文件、CI/CD 流水线、Docker Compose 和 Kubernetes 清单。保留所有数据类型。',
  },
  'json-to-xml': {
    description: '将 JSON 数据转换为 XML 格式',
    longDescription: '将 JSON 数据转换为格式良好的 XML。支持嵌套对象、数组和所有 JSON 数据类型。适用于 SOAP API 和遗留系统集成。',
  },
  'json-to-csv': {
    description: '将 JSON 数组转换为 CSV，适用于 Excel 和电子表格',
    longDescription: '将 JSON 数组转换为 CSV 格式。自动从对象键中提取标题并处理嵌套值。适用于将数据导出到 Excel、Google Sheets 或数据库导入。',
  },
  'json-to-sql': {
    description: '从 JSON 生成 SQL CREATE TABLE 和 INSERT 语句',
    longDescription: '将 JSON 数组转换为带有自动生成 CREATE TABLE 的 SQL INSERT 语句。从数据推断列类型，支持 NULL 处理。',
  },
  'json-beautify': {
    description: '格式化并美化压缩的 JSON',
    longDescription: '美化并格式化压缩或紧凑的 JSON 数据。添加适当的缩进、换行符，使 JSON 易于阅读。同时验证 JSON 语法。',
  },
  'json-minify': {
    description: '通过删除空白字符压缩 JSON',
    longDescription: '通过删除所有不必要的空白字符和换行符来压缩 JSON。减小 API 响应和存储的文件大小。',
  },
  'json-to-js-object': {
    description: '将 JSON 转换为 JavaScript 对象字面量（键不加引号）',
    longDescription: '将 JSON 转换为尽可能不带引号键的 JavaScript 对象字面量。适用于在 JS 文件中嵌入具有更简洁语法的数据。',
  },
  'yaml-to-json': {
    description: '将 YAML 配置文件转换为 JSON 格式',
    longDescription: '将 YAML 文件转换为 JSON。支持所有 YAML 特性，包括锚点、多行字符串和复杂数据类型。适用于解析 Docker Compose、Kubernetes 和 GitHub Actions 文件。',
  },
  'yaml-to-xml': {
    description: '将 YAML 转换为 XML 格式',
    longDescription: '将 YAML 数据转换为 XML 格式。适用于将配置文件转换为需要 XML 输入的系统。',
  },
  'yaml-to-typescript': {
    description: '从 YAML 数据生成 TypeScript 接口',
    longDescription: '将 YAML 文件转换为 TypeScript 接口定义。适用于从配置模式生成类型。',
  },
  'xml-to-json': {
    description: '将 XML 转换为 JSON 格式',
    longDescription: '将 XML 文档转换为 JSON 格式。保留属性、嵌套元素和文本内容。适用于现代化 SOAP API 或旧版 XML 数据。',
  },
  'xml-to-yaml': {
    description: '将 XML 转换为 YAML 格式',
    longDescription: '将 XML 文档转换为 YAML 格式。为配置文件和数据交换提供清晰易读的输出。',
  },
  'xml-beautify': {
    description: '格式化并缩进 XML 文档',
    longDescription: '使用适当的缩进格式化 XML 文档。使压缩或紧凑的 XML 易于阅读。',
  },
  'csv-to-json': {
    description: '将 CSV 文件转换为 JSON 数组',
    longDescription: '将 CSV 数据转换为 JSON 数组。自动解析标题，处理带引号的字段，并推断数据类型（数字、布尔值、null）。适用于数据处理工作流。',
  },
  'typescript-to-javascript': {
    description: '删除 TypeScript 类型，转换为纯 JavaScript',
    longDescription: '删除 TypeScript 类型注解、接口、泛型和访问修饰符，生成干净的 JavaScript。适用于与非 TypeScript 项目共享代码。',
  },
  'javascript-to-typescript': {
    description: '将 JavaScript 转换为带有基本类型注解的 TypeScript',
    longDescription: '为 JavaScript 代码添加 TypeScript 提示。将 require() 转换为 import 语句并添加基本类型注解。为获得最佳效果，之后需手动添加类型。',
  },
  'markdown-to-html': {
    description: '将 Markdown 转换为带完整页面模板的 HTML',
    longDescription: '将 Markdown 文档转换为 HTML。支持 GitHub Flavored Markdown（GFM），包括表格、任务列表、删除线和围栏代码块。生成带基本样式的完整 HTML 页面。',
  },
  'html-to-markdown': {
    description: '将 HTML 转换为简洁的 Markdown 格式',
    longDescription: '将 HTML 文档转换为 Markdown 格式。转换标题、段落、列表、链接、图片和代码块。非常适合将内容迁移到文档平台。',
  },
  'html-beautify': {
    description: '格式化并缩进 HTML 文档',
    longDescription: '使用适当的缩进格式化 HTML 代码。使压缩的 HTML 易于阅读和维护。',
  },
  'html-minify': {
    description: '通过删除空白字符和注释压缩 HTML',
    longDescription: '通过删除不必要的空白字符、换行符和注释来压缩 HTML。减少页面加载时间和文件大小。',
  },
  'base64-encode': {
    description: '将文本编码为 Base64 格式',
    longDescription: '将任何文本编码为 Base64 格式。用于 HTTP 基本认证、电子邮件附件和 data URL。支持 Unicode 和特殊字符。',
  },
  'base64-decode': {
    description: '将 Base64 编码字符串解码回文本',
    longDescription: '将 Base64 编码字符串解码为原始文本。支持标准和 URL 安全的 Base64 编码。',
  },
  'url-encode': {
    description: '对 URL 中的特殊字符进行编码',
    longDescription: '对 URL 中的特殊字符进行百分比编码。对于传递查询参数和安全处理 URL 中的非 ASCII 字符至关重要。',
  },
  'url-decode': {
    description: '解码百分比编码的 URL',
    longDescription: '将百分比编码的 URL 解码回原始可读形式。适用于调试 API 调用和阅读编码的 URL。',
  },
  'jwt-decode': {
    description: '解码并检查 JWT Token（头部、载荷、过期时间）',
    longDescription: '解码 JWT（JSON Web Token）并显示头部、载荷和元数据。显示签发者、过期日期及 token 是否已过期。注意：不验证签名。',
  },
  'html-entities-encode': {
    description: '将特殊字符编码为 HTML 实体',
    longDescription: '将 <, >, &, " 等特殊字符转换为对应的 HTML 实体（&lt;, &gt;, &amp;, &quot;）。在 HTML 中安全显示用户输入的必要步骤。',
  },
  'html-entities-decode': {
    description: '将 HTML 实体解码回普通字符',
    longDescription: '将 HTML 实体（&lt;, &gt;, &amp;, &quot;）转换回原始字符。适用于阅读 HTML 编码的内容。',
  },
  'decimal-to-binary': {
    description: '将十进制数转换为二进制表示',
    longDescription: '将十进制（base-10）数字转换为二进制（base-2）。同时显示八进制和十六进制表示。',
  },
  'binary-to-decimal': {
    description: '将二进制数转换为十进制',
    longDescription: '将二进制（base-2）数字转换为十进制（base-10）。同时显示八进制和十六进制表示。',
  },
  'decimal-to-hex': {
    description: '将十进制数转换为十六进制',
    longDescription: '将十进制（base-10）数字转换为十六进制（base-16）。常用于网页颜色、内存地址和底层编程。',
  },
  'hex-to-decimal': {
    description: '将十六进制数转换为十进制',
    longDescription: '将十六进制（base-16）数字转换为十进制（base-10）。支持 0x 前缀。',
  },
  'timestamp-to-date': {
    description: '将 Unix 时间戳转换为可读日期',
    longDescription: '将 Unix 时间戳（秒或毫秒）转换为可读日期。显示 ISO 8601、UTC 和本地时间格式，可选择任意时区。',
  },
  'date-to-timestamp': {
    description: '将日期字符串转换为 Unix 时间戳',
    longDescription: '将可读日期字符串转换为 Unix 时间戳（秒和毫秒）。接受 ISO 8601 和多种其他日期格式。',
  },
  'hex-to-rgb': {
    description: '将 HEX 颜色转换为 RGB、HSL 和 CSS 变量',
    longDescription: '将 HEX 颜色代码转换为 RGB、RGBA、HSL、HSLA 值和 CSS 自定义属性。支持 3 位和 6 位十六进制代码。',
  },
  'rgb-to-hex': {
    description: '将 RGB 颜色转换为 HEX、HSL 和 CSS 变量',
    longDescription: '将 RGB 或 RGBA 颜色值转换为 HEX 代码、HSL 和 CSS 自定义属性。接受 rgb() 格式或逗号分隔值。',
  },
  'hsl-to-rgb': {
    description: '将 HSL 颜色转换为 HEX 和 RGB 格式',
    longDescription: '将 HSL（色相、饱和度、亮度）颜色值转换为 HEX、RGB 和 CSS 变量。',
  },
  'css-minify': {
    description: '通过删除空白字符和注释压缩 CSS',
    longDescription: '通过删除注释、空白字符和多余分号来压缩 CSS 文件。减小文件大小以加快页面加载速度。',
  },
  'css-beautify': {
    description: '格式化并美化 CSS 代码',
    longDescription: '使用适当的缩进和换行符美化格式化压缩或混乱的 CSS。使 CSS 易于阅读和维护。',
  },
  'css-to-scss': {
    description: '将 CSS 自定义属性转换为 SCSS 变量',
    longDescription: '将 CSS 文件转换为 SCSS 语法。将 CSS 自定义属性（:root 变量）转换为 SCSS 变量和 var() 引用。需手动添加嵌套。',
  },
  'css-to-tailwind': {
    description: '将 CSS 属性转换为 Tailwind CSS 工具类',
    longDescription: '将 CSS 声明转换为 Tailwind CSS 工具类名。支持布局、弹性盒、间距和排版属性。复杂值可能需要手动转换。',
  },
}

export default zh

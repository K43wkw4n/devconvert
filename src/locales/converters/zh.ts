import type { ConverterLocaleMap } from './types'

const zh: ConverterLocaleMap = {
  // ── JSON ──────────────────────────────────────────────────────────────────
  'json-to-typescript': {
    description:
      '将 JSON 对象转换为完整类型的 TypeScript 接口 — 支持嵌套对象、数组、可选字段和联合类型',
    longDescription:
      '粘贴任意 JSON 数据，即可在几秒内生成可直接用于生产环境的 TypeScript 接口。系统会自动推断每个字段的类型，包括字符串、数字、布尔值、数组以及多层嵌套对象。null 值会被标记为可选字段（添加 ?），数组元素类型会被精确分析，包括混合类型的联合类型。嵌套对象会被生成为单独命名的接口，便于代码组织。非常适合构建 REST API 客户端、使用第三方 API 或将 JavaScript 项目迁移至 TypeScript 的开发者。',
    howToUse:
      '1. 将 JSON 数据粘贴到左侧输入框\n2. 右侧面板会自动生成 TypeScript 接口\n3. 顶层对象会生成名为"Root"的接口，嵌套对象会成为子接口（例如 RootAddress）\n4. 复制输出内容，直接粘贴到 TypeScript 项目中使用\n5. 提示：对象数组（[{...}]）会自动为每个元素的结构生成带类型的接口',
  },
  'json-to-javascript': {
    description:
      '将 JSON 转换为 JavaScript const 变量声明 — 可直接粘贴到 .js 或 Node.js 文件中',
    longDescription:
      '将 JSON 数据转换为带有 2 空格缩进的标准 JavaScript const 声明。结果可直接用于 Node.js 脚本、前端 JavaScript 文件或配置模块。当你需要在 JavaScript 代码中直接嵌入静态 API 响应数据、模拟数据或配置对象，而不想引入外部 JSON 文件时，这个工具特别有用。',
    howToUse:
      '1. 将 JSON 对象或数组粘贴到左侧\n2. 输出为 const data = { ... }; 格式的声明\n3. 复制并粘贴到你的 .js 或 .mjs 文件中\n4. 将"data"改为你项目中合适的变量名\n5. 提示：当你想避免 JSON import 并将数据内联保留时使用此工具',
  },
  'json-to-yaml': {
    description:
      '将 JSON 转换为 YAML 格式 — 适用于 Kubernetes 清单、Docker Compose、GitHub Actions 等配置文件',
    longDescription:
      '将 JSON 数据转换为清晰易读的 YAML。保留所有数据类型，包括字符串、数字、布尔值、数组和嵌套对象。输出使用 2 空格缩进，并在遵循标准 YAML 规范的前提下省略不必要的引号。对于需要在基于 JSON 的 API 响应或配置生成器与 Helm、Ansible、CI/CD 流水线等基于 YAML 的基础设施工具之间架桥的 DevOps 工程师和开发者来说非常有价值。',
    howToUse:
      '1. 将 JSON 粘贴到左侧输入框\n2. YAML 输出会立即显示在右侧面板\n3. 检查嵌套对象是否正确缩进（每层 2 个空格）\n4. 复制 YAML 直接用于配置文件或清单\n5. 提示：JSON 数组会变成 YAML 列表（以 - 开头的行）',
  },
  'json-to-xml': {
    description:
      '将 JSON 转换为格式良好的 XML — 适用于 SOAP API、RSS 订阅和遗留企业系统集成',
    longDescription:
      '将 JSON 对象和数组转换为带有 <?xml?> 声明的正确结构化 XML 文档。嵌套的 JSON 对象会变成嵌套的 XML 元素，JSON 数组会展开为同名标签的重复兄弟元素。此工具可以将现代 JSON 系统与 SOAP Web 服务、企业中间件、EDI 系统和旧版 CMS 平台等 XML 消费系统连接起来。',
    howToUse:
      '1. 将 JSON 粘贴到左侧\n2. 生成的 XML 文档会用 <root> 元素包裹所有数据\n3. JSON 的键变成 XML 标签名，嵌套对象变成子元素\n4. 数组生成使用相同标签名的重复元素\n5. 提示：如需特定的根元素名，可手动将 <root> 标签改为所需名称',
  },
  'json-to-csv': {
    description:
      '将 JSON 数组转换为 CSV 格式 — 可直接导出到 Excel、Google 表格或其他电子表格工具',
    longDescription:
      '将 JSON 数组展平为 CSV 行，自动从对象键中提取列标题。数组中的每个对象成为一行，包含逗号或换行符的字段会按照 RFC 4180 CSV 标准正确处理引号。适用于数据导出流水线、从 API 响应生成报表，或为数据库和 BI 工具准备导入数据集。',
    howToUse:
      '1. 将 JSON 数组（对象列表）粘贴到左侧\n2. 列标题会自动从对象的键中提取\n3. 数组中的每个对象变成 CSV 中的一行\n4. 复制 CSV 输出粘贴到 Excel、Google 表格，或保存为 .csv 文件\n5. 提示：所有对象应具有相同的键，以保证列的一致性',
  },
  'json-to-sql': {
    description:
      '从 JSON 数组生成 SQL CREATE TABLE 和 INSERT 语句 — 立即从真实数据构建数据库模式',
    longDescription:
      '将 JSON 数组转换为可直接运行的 SQL 脚本。工具会自动生成 CREATE TABLE 语句，并从数据推断列类型（TEXT、NUMERIC、BOOLEAN），然后为每个 JSON 对象生成一条 INSERT 语句。可以妥善处理 NULL 值和缺失键。当你有示例 API 数据并想快速建立关系数据库表，而无需手写 SQL 时，这个工具能节省大量时间。',
    howToUse:
      '1. 将 JSON 对象数组粘贴到左侧\n2. 工具会从数据值推断列类型\n3. 顶部生成 CREATE TABLE 块，后跟 INSERT 语句\n4. 运行前将"table_name"替换为实际的表名\n5. 提示：先运行 CREATE TABLE，再执行 INSERT 语句',
  },
  'json-beautify': {
    description:
      '格式化并美化压缩或紧凑的 JSON，添加适当缩进 — 同时验证 JSON 语法',
    longDescription:
      '将任何已压缩或格式混乱的 JSON 字符串立即转换为带有 2 空格缩进的清晰易读版本。同时会验证 JSON 语法，如果输入存在问题，会显示清晰的错误信息。这是开发者检查 API 响应、调试 JSON 载荷或查看配置文件时每天必用的工具。',
    howToUse:
      '1. 将压缩或混乱的 JSON 粘贴到左侧\n2. 格式化后的 JSON 会立即出现在右侧面板\n3. 如果有语法错误，会显示错误信息\n4. 复制美化后的 JSON 用于编辑器、文档或日志\n5. 提示：在将 JSON 作为 API 请求体发送前，用此工具进行验证',
  },
  'json-minify': {
    description:
      '删除所有空白和换行来压缩 JSON — 减少 API 响应和存储的载荷大小',
    longDescription:
      '去除 JSON 中所有不必要的空白、换行和缩进，生成最紧凑的表示形式。压缩后的 JSON 非常适合对带宽敏感的 API 响应、localStorage 值、环境变量载荷，或任何需要最小化 JSON 大小的场景。输出与输入在功能上完全相同，只删除了格式，不删除数据。',
    howToUse:
      '1. 将格式化（美化）的 JSON 粘贴到左侧\n2. 压缩后的单行 JSON 会立即显示\n3. 复制并用于 API 调用、请求头或压缩存储\n4. 提示：如果需要将 JSON 嵌入 URL 或请求头值，可以与 Base64 编码结合使用',
  },
  'json-to-js-object': {
    description:
      '将 JSON 转换为键不带引号的 JavaScript 对象字面量 — 更自然的 JS 源文件嵌入语法',
    longDescription:
      'JSON 要求所有键必须是带引号的字符串，但原生 JavaScript 对象字面量允许有效标识符的键不带引号。此转换器将 JSON 转换为 JS 对象语法，在可能的情况下去掉键上不必要的引号，同时保留字符串值的引号。结果是地道的 JavaScript，在源代码中看起来更自然。适用于配置文件、模拟数据，以及任何想要使用 JS 对象语法而非 JSON 的场景。',
    howToUse:
      '1. 将 JSON 粘贴到左侧\n2. 输出是 const data = { ... };，有效标识符的键不带引号\n3. 包含特殊字符或空格的键仍保留引号\n4. 直接复制粘贴到你的 .js 文件中\n5. 提示：这是有效的 JavaScript 但不是有效的 JSON，不要在需要严格 JSON 的地方使用',
  },
  // ── YAML ─────────────────────────────────────────────────────────────────
  'yaml-to-json': {
    description:
      '将 YAML 配置文件转换为 JSON — 立即解析 Docker Compose、Kubernetes、GitHub Actions 等 YAML 配置',
    longDescription:
      '将任意有效的 YAML 文档转换为格式良好的 JSON 对象。支持完整的 YAML 规范，包括多行字符串、锚点和别名、复杂映射以及嵌套序列。对于需要以编程方式处理 YAML 配置文件、将 YAML 数据传递给仅支持 JSON 的 API，或仅检查复杂 YAML 文档解析后结构的开发者来说不可或缺。',
    howToUse:
      '1. 将 YAML 内容粘贴到左侧\n2. JSON 输出会自动生成\n3. 验证 YAML 锚点（&anchor、*alias）是否在输出中正确解析\n4. 复制 JSON 用于 API、代码或进一步转换\n5. 提示：如果出现错误，检查是否有制表符 — YAML 缩进需要使用空格，不能使用制表符',
  },
  'yaml-to-xml': {
    description:
      '将 YAML 文档转换为 XML 格式 — 连接 YAML 配置与需要 XML 输入的系统',
    longDescription:
      '将 YAML 数据转换为结构正确的 XML 文档。YAML 映射变成嵌套 XML 元素，序列变成重复元素，输出中包含 <?xml?> 声明。当你需要将 YAML 配置数据输入到 SOAP 服务、遗留企业系统或基于 XML 的报表工具等仅支持 XML 的消费者时，此工具非常有用。',
    howToUse:
      '1. 将 YAML 粘贴到左侧\n2. 生成带 <root> 包裹元素的 XML 输出\n3. YAML 映射变成嵌套 XML 元素，序列变成重复标签\n4. 复制 XML 用于集成或保存为 .xml 文件\n5. 提示：如果需要严格的模式合规性，请使用 XML 验证器验证输出',
  },
  'yaml-to-typescript': {
    description:
      '从 YAML 数据生成 TypeScript 接口 — 为 YAML 配置文件创建带类型的模式',
    longDescription:
      '将 YAML 文档转换为 TypeScript 接口定义，首先将 YAML 解析为 JSON，然后从结构推断 TypeScript 类型。对于在 TypeScript 项目中需要为 YAML 配置文件创建类型安全包装器的情况（如应用配置模式、环境变量定义或 API 规范结构）特别有用。',
    howToUse:
      '1. 将 YAML 文档粘贴到左侧\n2. TypeScript 接口会在输出中生成\n3. 顶层 YAML 映射会变成"Root"接口\n4. 将接口复制到项目的 .ts 文件中\n5. 提示：结合 js-yaml 等 YAML 解析库在运行时加载和类型检查配置',
  },
  // ── XML ──────────────────────────────────────────────────────────────────
  'xml-to-json': {
    description:
      '将 XML 转换为 JSON — 轻松现代化 SOAP API、解析 RSS 订阅和处理遗留 XML 数据',
    longDescription:
      '将 XML 转换为 JSON，同时保留属性（以 @_ 为前缀）、嵌套元素和文本内容。使用 fast-xml-parser，可正确处理复杂 XML，包括命名空间、CDATA 部分和混合内容。对于需要现代化 SOAP 服务、处理 RSS/Atom 订阅、解析 XML 配置或与输出 XML 的企业系统集成的开发者来说不可或缺。',
    howToUse:
      '1. 将 XML 文档粘贴到左侧\n2. 生成 JSON 输出，XML 属性显示为 @_属性名 键\n3. 嵌套元素变成嵌套 JSON 对象，重复元素变成数组\n4. 复制 JSON 用于进一步处理或 API 使用\n5. 提示：带命名空间前缀的 XML（如 ns:element）会在 JSON 键中保留前缀',
  },
  'xml-to-yaml': {
    description:
      '将 XML 转换为清晰的 YAML 格式 — 适合将 XML 配置迁移到现代 YAML 工具',
    longDescription:
      '解析 XML 文档并生成更易读的 YAML 输出，使数据在现代 DevOps 和配置工作流中更易处理。对于从基于 XML 的配置系统（Maven、Ant、旧版 Spring 配置）迁移到基于 YAML 的替代方案（Kubernetes、Docker Compose、GitHub Actions）的团队很有帮助。XML 属性会被保留，嵌套元素变成缩进的 YAML 映射。',
    howToUse:
      '1. 将 XML 粘贴到左侧\n2. 生成适当缩进的 YAML 输出\n3. XML 属性显示为带 @_ 前缀的键（与 fast-xml-parser 约定一致）\n4. 复制 YAML 并在配置文件中使用\n5. 提示：根据使用场景，可能需要手动删除属性键中的 @_ 前缀',
  },
  'xml-beautify': {
    description:
      '用适当的缩进格式化 XML 文档 — 立即使压缩或格式混乱的 XML 变得可读',
    longDescription:
      '将压缩、单行或缩进不当的 XML 转换为每个嵌套层级使用一致 2 空格缩进的整洁格式版本。自闭合标签和 void 元素处理正确。适用于读取 API 响应、调试 XML 载荷，或为文档和代码审查准备 XML 文档。',
    howToUse:
      '1. 将压缩或混乱的 XML 粘贴到左侧\n2. 带有适当缩进的格式化 XML 会显示在输出中\n3. <?xml?> 声明保留在顶部\n4. 将格式化后的 XML 复制到编辑器或文档中\n5. 提示：手动编辑 XML 之前先格式化，操作起来会容易得多',
  },
  // ── CSV ──────────────────────────────────────────────────────────────────
  'csv-to-json': {
    description:
      '将 CSV 文件转换为 JSON 数组 — 自动解析标题、推断数据类型并处理带引号字段',
    longDescription:
      '将 CSV 数据转换为结构化的 JSON 对象数组，每行变成一个对象，列标题变成键。智能推断数据类型：数字字符串变成数字，"true"/"false"变成布尔值，空字段变成 null。包含逗号或换行符的带引号字段按照 CSV 标准正确解析。适用于数据处理流水线、将电子表格数据导入 Web 应用，或为 API 准备数据。',
    howToUse:
      '1. 将 CSV 数据（带标题行）粘贴到左侧\n2. JSON 输出生成为对象数组\n3. 第一行被视为标题（列名）\n4. 数据类型自动推断（数字、布尔值、null）\n5. 提示：如果 CSV 使用分号(;)作为分隔符，请先将其替换为逗号',
  },
  // ── Code ─────────────────────────────────────────────────────────────────
  'typescript-to-javascript': {
    description:
      '去除 TypeScript 类型注解生成纯净 JavaScript — 删除接口、泛型、类型转换和访问修饰符',
    longDescription:
      '通过删除类型注解、接口和类型声明、泛型类型参数、"as"类型转换、非空断言(!)、readonly 关键字和访问修饰符（public、private、protected）将 TypeScript 源代码转换为纯 JavaScript。转换器使用基于正则表达式的方式，因此复杂的泛型可能需要手动调整。适用于与非 TypeScript 项目共享代码，或从 TypeScript 源代码发布 JavaScript 包。',
    howToUse:
      '1. 将 TypeScript 代码粘贴到左侧\n2. 生成去除类型的 JavaScript 输出\n3. 检查输出中是否还有需要手动删除的类型语法\n4. 查看输出面板下方显示的警告\n5. 提示：在生产环境中，建议使用官方 TypeScript 编译器（tsc）或 esbuild 进行精确转译',
  },
  'javascript-to-typescript': {
    description:
      '为 JavaScript 添加基础 TypeScript 类型注解 — 将 require() 转换为 import 并添加类型提示',
    longDescription:
      '通过将 CommonJS require() 调用转换为 ES 模块 import，并为箭头函数添加基础类型提示，尽力将 JavaScript 转换为 TypeScript。结果是在 JavaScript 项目中采用 TypeScript 的起点，你仍需手动添加具体类型以实现完整的类型安全。此工具最适合了解需要改变什么，并快速处理样板代码。',
    howToUse:
      '1. 将 JavaScript 代码粘贴到左侧\n2. 输出包含 import 语句和基础类型提示\n3. 阅读关于手动类型细化的警告 — 这是起点，不是完整转换\n4. 在 TypeScript 项目中打开输出并添加具体类型\n5. 提示：使用 TypeScript 语言服务器（例如在 VS Code 中）查看哪些地方还需要类型注解',
  },
  // ── Markup ───────────────────────────────────────────────────────────────
  'markdown-to-html': {
    description:
      '将 Markdown 转换为完整的带样式 HTML 页面 — 支持包含表格、任务列表和代码块的 GitHub 风味 Markdown',
    longDescription:
      '将 Markdown 文档转换为带有内置样式表的完整 HTML 页面。支持完整的 GitHub 风味 Markdown（GFM）规范：标题、粗体/斜体、删除线、内联代码、围栏代码块、块引用、有序/无序列表、任务列表、表格和水平线。输出是一个独立的 HTML 文件，带有简洁的无衬线字体样式，可直接在浏览器中打开或嵌入文档系统。',
    howToUse:
      '1. 将 Markdown 内容粘贴到左侧\n2. 生成完整的 HTML 页面（包含 <html>、<head> 和 <body>）\n3. 将输出保存为 .html 文件可在浏览器中打开\n4. 如果只需要 HTML 片段，复制 <body> 中的内容即可\n5. 提示：使用围栏代码块（```语言名）在输出中显示语法高亮的代码',
  },
  'html-to-markdown': {
    description:
      '将 HTML 转换为清晰的 Markdown 格式 — 适合将 Web 内容迁移到 README 文件、Wiki 或文档平台',
    longDescription:
      '使用强大的 HTML 转 Markdown 转换器 Turndown 将 HTML 标记转换为清晰易读的 Markdown。处理标题（h1-h6）、段落、粗体、斜体、内联代码、代码块、块引用、有序/无序列表、链接、图片和表格。输出使用 ATX 风格标题（#、##）和围栏代码块，与 GitHub、GitLab、Notion、Confluence 和大多数现代文档平台兼容。',
    howToUse:
      '1. 将 HTML（完整页面或片段）粘贴到左侧\n2. Markdown 输出会立即生成\n3. 输出中标题用 #，列表项用 -，代码块用 ```\n4. 复制粘贴到 README.md、Wiki 或文档工具中\n5. 提示：先从 HTML 中删除 <script>、<style> 和 <nav> 标签，可获得更整洁的 Markdown 输出',
  },
  'html-beautify': {
    description:
      '用正确嵌套格式化 HTML 代码 — 将压缩的 HTML 转换为可读且易维护的标记',
    longDescription:
      '将压缩或缩进不当的 HTML 转换为每个嵌套层级使用一致 2 空格缩进的整洁格式版本。void 元素（br、img、input 等）被正确处理，不添加闭合标签。帮助开发者更轻松地阅读和编辑 HTML、进行代码审查，或为版本控制准备 HTML。',
    howToUse:
      '1. 将压缩或混乱的 HTML 粘贴到左侧\n2. 带有适当缩进的格式化 HTML 会显示在输出中\n3. void 元素（br、img、input、meta、link）没有闭合标签\n4. 将输出复制到编辑器或版本控制系统\n5. 提示：对于生产级 HTML 格式化，建议在本地开发环境中使用 Prettier',
  },
  'html-minify': {
    description:
      '删除空白和注释来压缩 HTML — 减少页面体积提升加载速度',
    longDescription:
      '通过删除 HTML 注释、将多个空白字符压缩为单个空格，以及删除标签之间的空白来压缩 HTML。结果是一个紧凑的 HTML 字符串，文件大小显著减小，可提升带宽敏感环境中的页面加载性能。保留所有有意义的内容、属性和内联脚本/样式。',
    howToUse:
      '1. 将 HTML 文档粘贴到左侧\n2. 压缩后的 HTML 以紧凑字符串形式生成在输出中\n3. 所有 HTML 注释（<!-- -->）被删除\n4. 复制并用于构建流水线或分发系统\n5. 提示：对于高级压缩（属性引号优化、可选标签删除），请使用 html-minifier-terser 等专用工具',
  },
  // ── Encoding ─────────────────────────────────────────────────────────────
  'base64-encode': {
    description:
      '将文本编码为 Base64 格式 — 用于 HTTP Basic Auth、邮件附件、数据 URI 和 API 令牌',
    longDescription:
      '立即将任意 UTF-8 文本转换为 Base64 编码。Base64 编码在许多 Web 和系统场景中不可或缺：HTTP Basic Authentication 头（用户名:密码）、在 JSON 或 XML 载荷中嵌入二进制数据、内联图片和字体的数据 URI、邮件 MIME 附件，以及对 API 密钥或密码进行编码以便传输。通过安全的 encodeURIComponent→btoa 方式正确处理 Unicode 字符。',
    howToUse:
      '1. 在左侧输入或粘贴任意文本（包括 Unicode/表情符号）\n2. Base64 编码字符串会立即显示在右侧\n3. 复制输出用于 Authorization 头、数据 URI 或载荷\n4. 提示：对于 HTTP Basic Auth，编码"用户名:密码"并在头部值前加上"Basic "',
  },
  'base64-decode': {
    description:
      '将 Base64 字符串解码回纯文本 — 反向解码来自令牌、载荷或 API 响应的 Base64 编码',
    longDescription:
      '将 Base64 编码字符串转换回原始 UTF-8 文本。支持标准 Base64（使用 + 和 /）以及 URL 安全的 Base64（使用 - 和 _）。使用安全的 atob→decodeURIComponent 方式正确处理 Unicode 内容。适用于解码 JWT 载荷、检查 HTTP Basic Auth 凭据、读取 Base64 编码的 API 响应，或调试传输中的编码数据。',
    howToUse:
      '1. 将 Base64 字符串粘贴到左侧\n2. 解码后的文本显示在输出中\n3. 字符串中的空白会自动删除\n4. 也支持 URL 安全的 Base64（- 和 _ 字符）\n5. 提示：JWT 令牌有 3 个由点分隔的 Base64 部分 — 分别解码每个部分，或使用 JWT 解码器工具',
  },
  'url-encode': {
    description:
      '对 URL 和查询字符串值进行百分比编码 — 在 URL 中安全传递特殊字符、空格和非 ASCII 字符',
    longDescription:
      '使用百分比编码（URL 编码）对字符串进行编码，以便安全地包含在 URL 查询参数、路径段或表单提交中。空格变为 %20，& 变为 %26，= 变为 %3D，非 ASCII 字符（包括中文、泰语、表情符号）以百分比格式编码为 UTF-8 字节序列。这是在不破坏 URL 结构的情况下在 URL 中传递用户生成数据或特殊字符的正确方式。',
    howToUse:
      '1. 将要编码的 URL 或字符串粘贴到左侧\n2. 百分比编码输出立即显示\n3. 将编码后的输出用于查询参数、路径段或表单数据\n4. 提示：只编码查询参数的值部分，不要编码整个 URL — 编码 & 和 = 分隔符会破坏 URL 结构',
  },
  'url-decode': {
    description:
      '将百分比编码的 URL 解码回可读文本 — 反向转换 %20、%26 及其他转义序列',
    longDescription:
      '将百分比编码的 URL 字符串转换回原始可读形式。转换 %20→空格、%26→&、%3D→= 以及中文、泰语等非 ASCII 字符的多字节序列。对于调试 API 调用、读取浏览器地址栏中的编码 URL、理解重定向参数以及检查包含编码 URL 的日志文件非常有价值。',
    howToUse:
      '1. 将百分比编码的 URL 或字符串粘贴到左侧\n2. 解码后的可读文本显示在右侧面板\n3. 复制解码后的字符串用于调试或显示\n5. 提示：如果 URL 看起来异常（例如显示 %2F 而不是 /），粘贴到这里读取解码后的路径',
  },
  'jwt-decode': {
    description:
      '解码并检查 JWT 令牌 — 查看标头、载荷声明、签发时间、过期时间和是否已过期',
    longDescription:
      '解码 JSON Web Token（JWT）并显示其三个组成部分：标头（算法和令牌类型）、载荷（sub、name、iat、exp 等声明）和原始签名。工具还为 iat（签发时间）和 exp（过期时间）字段计算可读的日期，并标记令牌是否已过期。注意：此工具不验证签名，仅做解码。请不要依赖客户端 JWT 解码来做安全决策。',
    howToUse:
      '1. 将 JWT（完整的 eyJ... 字符串）粘贴到左侧\n2. 解码后的标头、载荷和签名以 JSON 格式显示\n3. _meta 部分显示算法、issuedAt 日期、expiresAt 日期和 isExpired 标志\n4. 在调试时用于检查用户 ID、角色或过期时间等声明\n5. 警告：此工具不验证签名 — 解码后的 JWT 不是真实性证明',
  },
  'html-entities-encode': {
    description:
      '将 HTML 特殊字符编码为实体 — 在网页上安全显示用户输入、代码片段和原始 HTML',
    longDescription:
      '将 HTML 中具有特殊含义的字符（<、>、&、"、\'）转换为对应的 HTML 实体（&lt;、&gt;、&amp;、&quot;、&#039;）。这是在网页上显示用户生成内容、代码示例或原始 HTML 标签而不让浏览器将其解释为标记的正确方式。在服务器端渲染用户输入时，对于防止跨站脚本（XSS）漏洞至关重要。',
    howToUse:
      '1. 将包含特殊字符的文本粘贴到左侧\n2. HTML 实体编码后的输出显示在右侧\n3. 将输出安全地嵌入到 HTML 模板中\n4. 提示：在将用户生成内容渲染到 HTML 之前，始终进行编码以防止 XSS 攻击',
  },
  'html-entities-decode': {
    description:
      '将 HTML 实体解码回普通字符 — 将 &lt;、&gt;、&amp; 等转换为可读文本',
    longDescription:
      '将 HTML 实体（&lt;、&gt;、&amp;、&quot;、&#039;、&apos;、&nbsp;）转换回原始字符。适用于读取存储在数据库、API 或 CMS 系统中的 HTML 编码内容。也有助于解码有时出现在抓取或导出内容中的双重编码 HTML 实体。',
    howToUse:
      '1. 将 HTML 实体编码的文本粘贴到左侧\n2. 解码后的纯文本显示在右侧\n3. 常见实体如 &amp;、&lt;、&gt;、&quot; 都会被解码\n4. 提示：如果看到 &amp;amp;（双重编码），将输出再次粘贴到此工具以解码第二层',
  },
  'decimal-to-binary': {
    description:
      '将十进制数转换为二进制（base-2），同时显示八进制和十六进制表示',
    longDescription:
      '输入十进制整数，立即查看其二进制（base-2）表示以及八进制（base-8）和十六进制（base-16）等效值。这是计算机科学学生、嵌入式系统开发者，以及处理位操作、权限（chmod）、内存地址或低级编程概念的人的基础工具。',
    howToUse:
      '1. 在左侧输入十进制整数（例如 255）\n2. 带 0b 前缀的二进制输出显示出来\n3. 八进制（0o）和十六进制（0x）作为额外参考显示\n4. 提示：十进制 255 = 0b11111111 = 0xFF，这是 8 位无符号字节的最大值',
  },
  'binary-to-decimal': {
    description:
      '将二进制数转换为十进制，包含八进制和十六进制输出',
    longDescription:
      '输入二进制数（仅使用 0 和 1），将其转换为十进制等效值。工具还显示八进制和十六进制表示。0b 前缀是可选的，会自动去除。适用于理解二进制算术、解码二进制数据、处理位运算或学习计算机架构。',
    howToUse:
      '1. 在输入框中输入或粘贴二进制数（例如 11111111 或 0b11111111）\n2. 十进制结果显示在输出顶部\n3. 八进制和十六进制等效值作为额外参考显示\n4. 提示：超过 32 位的二进制数可能超出 JavaScript 的安全整数范围',
  },
  'decimal-to-hex': {
    description:
      '将十进制数转换为十六进制（base-16） — 常用于网页颜色、内存地址和低级编程',
    longDescription:
      '输入任意十进制整数，获得带 0x 前缀的十六进制表示。十六进制在 Web 开发（CSS 颜色代码）、系统编程（内存地址、寄存器值）、密码学（哈希输出）和调试中广泛使用。输出还包含二进制表示以供参考。',
    howToUse:
      '1. 在左侧输入十进制数（例如 255）\n2. 带 0x 前缀的十六进制输出显示（例如 0xFF）\n3. 二进制表示在下方作为参考显示\n4. 提示：CSS 十六进制颜色使用 6 位十六进制数 — 例如 #1677FF。完整颜色转换请使用颜色转换工具',
  },
  'hex-to-decimal': {
    description:
      '将十六进制数转换为十进制 — 支持 0x 前缀和大小写十六进制数字',
    longDescription:
      '输入十六进制值（带或不带 0x 前缀）并将其转换为十进制等效值。工具还显示二进制表示。适用于读取内存转储值、颜色代码、网络协议字段，或任何需要十进制等效值的十六进制编码数据。',
    howToUse:
      '1. 在输入框中输入十六进制数（例如 FF 或 0xFF 或 ff）\n2. 十进制结果显示在输出中\n3. 二进制表示作为参考包含在内\n4. 提示：对于 CSS 十六进制颜色，使用 HEX 转 RGB/HSL 转换器获取完整颜色详情',
  },
  'timestamp-to-date': {
    description:
      '将 Unix 时间戳（秒或毫秒）转换为任意时区的可读日期 — 显示 ISO 8601、UTC 和本地时间',
    longDescription:
      '输入 Unix 时间戳，立即以多种格式查看对应的日期和时间：ISO 8601、可读字符串、仅日期、仅时间和 UTC 偏移。转换器自动检测时间戳是秒还是毫秒（基于数量级）。你可以从选项面板选择任意时区查看特定地区的时间。对于调试 API 日志、检查 JWT 过期时间和处理时间序列数据至关重要。',
    howToUse:
      '1. 将 Unix 时间戳粘贴到左侧（秒例如 1716239022，毫秒例如 1716239022000）\n2. 工具自动检测秒或毫秒\n3. 从选项面板的时区下拉菜单选择时区\n4. 输出显示所选时区和 UTC 的日期时间\n5. 提示：JWT 的 exp 和 iat 字段是秒单位的 Unix 时间戳 — 粘贴到这里查看日期',
  },
  'date-to-timestamp': {
    description:
      '将可读日期字符串转换为 Unix 时间戳 — 支持 ISO 8601 和多种日期格式',
    longDescription:
      '输入 ISO 8601 格式（2024-01-15T10:30:00Z）或多种其他格式（2024-01-15、January 15 2024）的日期字符串，获得以秒和毫秒表示的 Unix 时间戳。输出还包含所选时区和 UTC 中表示的日期。适用于构造 API 请求参数、设置过期时间，或处理数据库和搜索查询中基于日期的过滤器。',
    howToUse:
      '1. 在输入框中输入或粘贴日期字符串（例如 2024-01-15T10:30:00Z）\n2. 以秒和毫秒表示的 Unix 时间戳显示在输出中\n3. 从选项中选择时区以查看本地时间表示\n4. 提示：为获得最佳结果，使用带时区后缀的 ISO 8601 格式（UTC 用 Z，北京时间用 +08:00）',
  },
  // ── Color ─────────────────────────────────────────────────────────────────
  'hex-to-rgb': {
    description:
      '将 HEX 颜色代码转换为 RGB、RGBA、HSL、HSLA 和 CSS 自定义属性 — 一键获取所有格式',
    longDescription:
      '输入 HEX 颜色代码（3 位简写或 6 位完整格式），立即查看所有等效颜色格式：RGB、RGBA、HSL、HSLA、各通道原始值，以及即用型 CSS 自定义属性声明（--color-rgb、--color-hsl）。对于使用设计令牌、Tailwind 配置、CSS 变量或跨格式颜色系统的前端开发者和 UI 设计师来说不可或缺。',
    howToUse:
      '1. 在左侧输入或粘贴 HEX 颜色代码（例如 #1677FF 或 #F53）\n2. 所有颜色格式输出以 JSON 格式显示在右侧面板\n3. 复制所需的特定格式（rgb()、hsl() 或 CSS 变量）\n4. css_variables 字段提供即用型 :root 变量声明\n5. 提示：3 位 HEX 代码（#F53）在转换前会自动扩展为 6 位（#FF5533）',
  },
  'rgb-to-hex': {
    description:
      '将 RGB/RGBA 颜色转换为 HEX 代码、HSL、HSLA 和 CSS 变量 — 单个 RGB 输入获取所有颜色格式',
    longDescription:
      '输入 RGB 或 RGBA 颜色值，获取所有等效表示：HEX 代码、HSL、HSLA、各通道原始值和 CSS 自定义属性声明。接受 rgb(r, g, b) 函数格式和逗号分隔的值（255, 87, 51）两种形式。对于需要在不同设计工具、代码库或样式系统之间转换颜色的设计师和开发者必不可少。',
    howToUse:
      '1. 将 RGB 颜色值粘贴到左侧（例如 rgb(22, 119, 255) 或 22, 119, 255）\n2. 所有等效颜色格式以 JSON 形式显示在输出中\n3. 复制所需的 HEX、HSL 或 CSS 变量表示\n4. 提示：rgba() 的 alpha 值会被注明，但对于 HEX 和 HSL 输出，颜色被视为完全不透明',
  },
  'hsl-to-rgb': {
    description:
      '将 HSL 颜色转换为 HEX 和 RGB 格式 — 一个输出包含 CSS 变量和完整颜色表示',
    longDescription:
      '输入 HSL 或 HSLA 颜色值，获取等效的 HEX 代码、RGB、RGBA 和 CSS 自定义属性声明。HSL（色相、饱和度、亮度）在 CSS 和设计工具中很受欢迎，因为它比 RGB 更直观——调整饱和度或亮度更加直接。适用于将设计工具导出（Figma、Sketch）转换为代码中使用的 HEX 或 RGB。',
    howToUse:
      '1. 将 HSL 颜色粘贴到左侧（例如 hsl(213, 100%, 54%) 或 213, 100, 54）\n2. HEX、RGB、RGBA、HSLA 和 CSS 变量等效值显示在输出中\n3. 复制 CSS 文件或设计系统所需的格式\n4. 提示：色相为 0-360（颜色轮上的角度），饱和度和亮度为 0-100（百分比）',
  },
  // ── CSS ──────────────────────────────────────────────────────────────────
  'css-minify': {
    description:
      '删除注释、空白和多余分号来压缩 CSS — 减小样式表体积提升页面加载速度',
    longDescription:
      '通过删除所有注释、压缩空白、删除选择器和声明周围的空格，以及删除闭合括号前的最后一个分号来压缩 CSS。结果是功能上与原始 CSS 完全相同但体积显著更小的紧凑 CSS。适用于生产环境部署、在 HTML 页面中嵌入样式或降低 CDN 传输成本。',
    howToUse:
      '1. 将 CSS 代码粘贴到左侧\n2. 压缩后的 CSS 以紧凑的单行输出生成\n3. 所有 /* 注释 */ 都被删除\n4. 将压缩后的 CSS 复制用于生产构建或 <style> 标签\n5. 提示：对于大型项目，将 CSS 构建工具（PostCSS、esbuild）集成到 CI 流水线中',
  },
  'css-beautify': {
    description:
      '格式化并美化压缩或混乱的 CSS — 添加一致的缩进和换行创建可读且易维护的样式表',
    longDescription:
      '将压缩、自动生成或格式混乱的 CSS 转换为整洁格式的版本，每行一个声明，括号放置合适，间距一致。从浏览器 DevTools 复制样式后、压缩的第三方样式表，或设计工具生成的 CSS，使用此工具使代码更易读、调试和在版本控制中维护。',
    howToUse:
      '1. 将压缩或混乱的 CSS 粘贴到左侧\n2. 每个属性占一行的格式化 CSS 显示在输出中\n3. 选择器和括号在各自的行上\n4. 将输出复制到样式表或编辑器中\n5. 提示：用于检查和理解 Tailwind 或 CSS-in-JS 库自动生成的 CSS',
  },
  'css-to-scss': {
    description:
      '将 CSS 自定义属性（CSS 变量）转换为 SCSS 变量 — 从原生 CSS 迁移到基于 SCSS 的设计系统',
    longDescription:
      '将 CSS :root 变量声明（--variable-name: value）转换为 SCSS 变量语法（$variable_name: value），并将整个样式表中的 var(--variable-name) 用法替换为对应的 $variable_name 引用。CSS 变量名中的连字符会转换为 SCSS 的下划线。这为将 CSS 自定义属性系统迁移到 SCSS 提供了良好的起点，但嵌套和混入仍需手动添加。',
    howToUse:
      '1. 将带有 :root 变量的 CSS 粘贴到左侧\n2. 输出中 :root { --var: value } 被替换为 $var: value 声明\n3. var(--var) 的用法在输出中变为 $var 引用\n4. 将 SCSS 复制到 .scss 文件并手动添加嵌套\n5. 提示：CSS 变量名中的连字符（--primary-color）在 SCSS 中变为下划线（$primary_color）',
  },
  'css-to-tailwind': {
    description:
      '将 CSS 声明转换为 Tailwind CSS 工具类 — 快速找到样式对应的正确 Tailwind 类',
    longDescription:
      '输入 CSS 属性声明，获取等效的 Tailwind CSS 工具类名称。支持常见的布局属性（display、position、overflow）、flexbox（flex-direction、align-items、justify-content）、尺寸（width、height）和排版（text-align、font-weight）。没有直接对应 Tailwind 类的属性会以注释形式列出，以便手动处理。适合从 CSS 迁移到 Tailwind 的开发者，或学习哪个 Tailwind 类对应哪个 CSS 属性。',
    howToUse:
      '1. 将 CSS 声明（每行一个，不带选择器）粘贴到左侧\n2. 匹配的 Tailwind 类输出为 class="..." 属性字符串\n3. 不匹配的属性以注释形式显示在下方\n4. 复制类列表并添加到 HTML 元素中\n5. 提示：对于自定义像素值（例如 padding: 12px），请手动使用 Tailwind 的任意值语法（p-[12px]）',
  },
}

export default zh
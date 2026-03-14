import type { ConverterLocaleMap } from './types'

const ja: ConverterLocaleMap = {
  'json-to-typescript': {
    description: 'JSONオブジェクトを正確な型を持つTypeScriptインターフェースに変換',
    longDescription: 'JSONデータを貼り付けると、すぐにTypeScriptインターフェースが生成されます。ネストされたオブジェクト、配列、オプションフィールド、ユニオン型をサポート。REST APIを扱う開発者に最適です。',
  },
  'json-to-javascript': {
    description: 'JSONをJavaScriptのconst変数宣言に変換',
    longDescription: 'JSONデータをJavaScriptのconst宣言に変換します。JavaScript/Node.jsファイルに直接データを埋め込む際に便利です。',
  },
  'json-to-yaml': {
    description: '設定ファイルやKubernetes用にJSONをYAML形式に変換',
    longDescription: 'JSONデータをYAML形式に変換します。YAMLは設定ファイル、CI/CDパイプライン、Docker Compose、Kubernetesマニフェストで広く使用されています。すべてのデータ型を保持します。',
  },
  'json-to-xml': {
    description: 'JSONデータをXML形式に変換',
    longDescription: 'JSONデータを整形されたXMLに変換します。ネストされたオブジェクト、配列、すべてのJSONデータ型をサポート。SOAP APIやレガシーシステム連携に便利です。',
  },
  'json-to-csv': {
    description: 'JSON配列をExcelやスプレッドシート用CSVに変換',
    longDescription: 'JSON配列をCSV形式に変換します。オブジェクトのキーからヘッダーを自動抽出し、ネストされた値を処理します。Excel、Google Sheets、またはデータベースインポートへのデータエクスポートに最適です。',
  },
  'json-to-sql': {
    description: 'JSONからSQL CREATE TABLEとINSERT文を生成',
    longDescription: 'JSON配列をSQL INSERT文に変換し、CREATE TABLEも自動生成します。データからカラム型を推測し、NULLの処理もサポートします。',
  },
  'json-beautify': {
    description: '圧縮されたJSONをフォーマットして見やすく整形',
    longDescription: '圧縮またはコンパクトなJSONデータを美化・整形します。適切なインデントと改行を追加してJSONを人間が読みやすくします。JSON構文の検証も行います。',
  },
  'json-minify': {
    description: 'ホワイトスペースを削除してJSONを圧縮',
    longDescription: '不要なホワイトスペースと改行をすべて削除してJSONを圧縮します。APIレスポンスやストレージのファイルサイズを削減します。',
  },
  'json-to-js-object': {
    description: 'JSONをJavaScriptオブジェクトリテラル（クォートなしキー）に変換',
    longDescription: 'JSONを可能な限りクォートなしのキーを持つJavaScriptオブジェクトリテラルに変換します。JSファイルにきれいな構文でデータを埋め込む際に便利です。',
  },
  'yaml-to-json': {
    description: 'YAML設定ファイルをJSON形式に変換',
    longDescription: 'YAMLファイルをJSONに変換します。アンカー、複数行文字列、複雑なデータ型を含むすべてのYAML機能をサポート。Docker Compose、Kubernetes、GitHub Actionsファイルの解析に最適です。',
  },
  'yaml-to-xml': {
    description: 'YAMLをXML形式に変換',
    longDescription: 'YAMLデータをXML形式に変換します。XML入力が必要なシステム向けの設定ファイル変換に便利です。',
  },
  'yaml-to-typescript': {
    description: 'YAMLデータからTypeScriptインターフェースを生成',
    longDescription: 'YAMLファイルをTypeScriptインターフェース定義に変換します。設定スキーマから型を生成する際に便利です。',
  },
  'xml-to-json': {
    description: 'XMLをJSON形式に変換',
    longDescription: 'XMLドキュメントをJSON形式に変換します。属性、ネストされた要素、テキストコンテンツを保持します。SOAPベースのAPIのモダン化やレガシーXMLデータの処理に最適です。',
  },
  'xml-to-yaml': {
    description: 'XMLをYAML形式に変換',
    longDescription: 'XMLドキュメントをYAML形式に変換します。設定ファイルやデータ交換のための読みやすい出力を提供します。',
  },
  'xml-beautify': {
    description: 'XMLドキュメントをフォーマット・インデント',
    longDescription: '適切なインデントでXMLドキュメントを整形します。圧縮されたXMLを人間が読みやすくします。',
  },
  'csv-to-json': {
    description: 'CSVファイルをJSON配列に変換',
    longDescription: 'CSVデータをJSON配列に変換します。ヘッダーを自動解析し、クォートされたフィールドを処理し、データ型（数値、真偽値、null）を推測します。データ処理ワークフローに最適です。',
  },
  'typescript-to-javascript': {
    description: 'TypeScript型を削除して純粋なJavaScriptに変換',
    longDescription: 'TypeScriptの型注釈、インターフェース、ジェネリクス、アクセス修飾子を削除してクリーンなJavaScriptを生成します。TypeScript非対応プロジェクトとのコード共有に便利です。',
  },
  'javascript-to-typescript': {
    description: 'JavaScriptを基本的な型注釈付きTypeScriptに変換',
    longDescription: 'JavaScriptコードにTypeScriptのヒントを追加します。require()をimport文に変換し、基本的な型注釈を追加します。最良の結果のために、その後手動で型を追加してください。',
  },
  'markdown-to-html': {
    description: 'Markdownを完全なページテンプレート付きHTMLに変換',
    longDescription: 'MarkdownドキュメントをHTMLに変換します。テーブル、タスクリスト、取り消し線、フェンスコードブロックを含むGitHub Flavored Markdown（GFM）をサポート。基本スタイル付きの完全なHTMLページを生成します。',
  },
  'html-to-markdown': {
    description: 'HTMLをクリーンなMarkdown形式に変換',
    longDescription: 'HTMLドキュメントをMarkdown形式に変換します。見出し、段落、リスト、リンク、画像、コードブロックを変換します。ドキュメントプラットフォームへのコンテンツ移行に最適です。',
  },
  'html-beautify': {
    description: 'HTMLドキュメントをフォーマット・インデント',
    longDescription: '適切なインデントでHTMLコードを整形します。圧縮されたHTMLを人間が読みやすく、管理しやすくします。',
  },
  'html-minify': {
    description: 'ホワイトスペースとコメントを削除してHTMLを圧縮',
    longDescription: '不要なホワイトスペース、改行、コメントを削除してHTMLを圧縮します。ページ読み込み時間とファイルサイズを削減します。',
  },
  'base64-encode': {
    description: 'テキストをBase64形式にエンコード',
    longDescription: '任意のテキストをBase64形式にエンコードします。HTTP基本認証、メール添付、data URLで使用されます。UnicodeおよびASCII外の文字をサポートします。',
  },
  'base64-decode': {
    description: 'Base64エンコードされた文字列をテキストにデコード',
    longDescription: 'Base64エンコードされた文字列を元のテキストにデコードします。標準およびURL安全なBase64エンコードをサポートします。',
  },
  'url-encode': {
    description: 'URL内の特殊文字をエンコード',
    longDescription: 'URLの特殊文字をパーセントエンコードします。クエリパラメータの受け渡しやURLでの非ASCII文字の安全な処理に不可欠です。',
  },
  'url-decode': {
    description: 'パーセントエンコードされたURLをデコード',
    longDescription: 'パーセントエンコードされたURLを元の人間が読める形式にデコードします。APIコールのデバッグやエンコードされたURLの読み取りに便利です。',
  },
  'jwt-decode': {
    description: 'JWTトークンをデコード・検査（ヘッダー、ペイロード、有効期限）',
    longDescription: 'JWT（JSON Web Token）をデコードし、ヘッダー、ペイロード、メタデータを表示します。発行者、有効期限、トークンの有効性を確認できます。注意：署名は検証しません。',
  },
  'html-entities-encode': {
    description: '特殊文字をHTMLエンティティにエンコード',
    longDescription: '<, >, &, " などの特殊文字をHTMLエンティティ（&lt;, &gt;, &amp;, &quot;）に変換します。HTMLでユーザー入力を安全に表示するために不可欠です。',
  },
  'html-entities-decode': {
    description: 'HTMLエンティティを通常の文字にデコード',
    longDescription: 'HTMLエンティティ（&lt;, &gt;, &amp;, &quot;）を元の文字に変換します。HTMLエンコードされたコンテンツの読み取りに便利です。',
  },
  'decimal-to-binary': {
    description: '10進数を2進数表現に変換',
    longDescription: '10進数（base-10）を2進数（base-2）に変換します。8進数と16進数表現も表示します。',
  },
  'binary-to-decimal': {
    description: '2進数を10進数に変換',
    longDescription: '2進数（base-2）を10進数（base-10）に変換します。8進数と16進数表現も表示します。',
  },
  'decimal-to-hex': {
    description: '10進数を16進数に変換',
    longDescription: '10進数（base-10）を16進数（base-16）に変換します。Webカラー、メモリアドレス、低レベルプログラミングでよく使用されます。',
  },
  'hex-to-decimal': {
    description: '16進数を10進数に変換',
    longDescription: '16進数（base-16）を10進数（base-10）に変換します。0xプレフィックスをサポートします。',
  },
  'timestamp-to-date': {
    description: 'Unixタイムスタンプを人間が読める日付に変換',
    longDescription: 'Unixタイムスタンプ（秒またはミリ秒）を人間が読みやすい日付に変換します。ISO 8601、UTC、ローカル時刻形式を表示。任意のタイムゾーンを選択できます。',
  },
  'date-to-timestamp': {
    description: '日付文字列をUnixタイムスタンプに変換',
    longDescription: '人間が読める日付文字列をUnixタイムスタンプ（秒とミリ秒）に変換します。ISO 8601およびさまざまな日付形式を受け付けます。',
  },
  'hex-to-rgb': {
    description: 'HEXカラーをRGB、HSL、CSS変数に変換',
    longDescription: 'HEXカラーコードをRGB、RGBA、HSL、HSLA値とCSSカスタムプロパティに変換します。3桁と6桁の16進コードをサポートします。',
  },
  'rgb-to-hex': {
    description: 'RGBカラーをHEX、HSL、CSS変数に変換',
    longDescription: 'RGBまたはRGBAカラー値をHEXコード、HSL、CSSカスタムプロパティに変換します。rgb()形式またはカンマ区切りの値を受け付けます。',
  },
  'hsl-to-rgb': {
    description: 'HSLカラーをHEXおよびRGB形式に変換',
    longDescription: 'HSL（色相、彩度、明度）カラー値をHEX、RGB、CSS変数に変換します。',
  },
  'css-minify': {
    description: 'ホワイトスペースとコメントを削除してCSSを圧縮',
    longDescription: 'コメント、ホワイトスペース、余分なセミコロンを削除してCSSファイルを圧縮します。ページ読み込みを高速化するためにファイルサイズを削減します。',
  },
  'css-beautify': {
    description: 'CSSコードをフォーマット・美化',
    longDescription: '適切なインデントと改行で圧縮または乱雑なCSSを美化・整形します。CSSを読みやすく、メンテナンスしやすくします。',
  },
  'css-to-scss': {
    description: 'CSSカスタムプロパティをSCSS変数に変換',
    longDescription: 'CSSファイルをSCSS構文に変換します。CSSカスタムプロパティ（:rootの変数）をSCSS変数とvar()参照に変換します。ネストは手動で追加が必要です。',
  },
  'css-to-tailwind': {
    description: 'CSSプロパティをTailwind CSSユーティリティクラスに変換',
    longDescription: 'CSS宣言をTailwind CSSユーティリティクラス名に変換します。レイアウト、フレックスボックス、スペーシング、タイポグラフィプロパティをサポート。複雑な値は手動変換が必要な場合があります。',
  },
}

export default ja

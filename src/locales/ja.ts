import type { Translations } from './en'

const ja: Translations = {
  home: "ホームページ",
  // ── Nav ──────────────────────────────────────────────────────────────────
  allTools: 'すべてのツール',
  github: 'GitHub',

  // ── Home ─────────────────────────────────────────────────────────────────
  privacyNote: "100％ブラウザ上で動作 — データはどこにも送信されません",
  heroBadge: '⚡ 35以上の無料開発ツール', heroTitle1: '何でも変換。', heroTitle2: '数秒で完了。',
  heroSubtitle: '開発者向けの無料オンラインコード・データ変換ツール。JSON、TypeScript、YAML、Markdown、Base64、カラーなど — すべてブラウザ上でローカル処理。',
  statConverters: 'コンバーター', statLatency: 'サーバー遅延', statClientSide: 'クライアントサイド', statFree: '永久無料',
  searchPlaceholder: 'ツールを検索... (例: JSON, Base64, TypeScript)', mostPopular: '🔥 人気のツール',

  // ── Converter Page ────────────────────────────────────────────────────────
  input: '入力', output: '出力', convert: '変換', autoConvertOn: '自動変換 オン',
  copy: 'コピー', copied: 'コピー済み！', clear: 'クリア', example: 'サンプル', download: 'ダウンロード',
  converting: '変換中...', conversionError: '変換エラー', conversionFailed: '変換失敗',
  relatedTools: '🔗 関連ツール', about: 'について', outputPlaceholder: '変換結果がここに表示されます...',
  notFound: 'コンバーターが見つかりません。', browseAll: 'すべてのツールを見る',
  searchResults: (n: number, q: string) => `"${q}" の検索結果：${n} 件`,
  noResults: 'コンバーターが見つかりません。"JSON"、"Base64"、"TypeScript" で検索してみてください。',
  howToUseTitle: "使用方法",

  // ── Timezone ─────────────────────────────────────────────────────────────
  timezone: 'タイムゾーン', timezoneSearch: 'タイムゾーンを検索...',

  // ── Theme / Language ──────────────────────────────────────────────────────
  lightMode: 'ライトモード', darkMode: 'ダークモード', language: '言語',
  footerNote: 'すべての変換はブラウザ上でローカルに行われます。データはサーバーに送信されません。',
  footerPrivacy: 'プライバシーポリシー', footerTerms: '利用規約', footerContact: 'お問い合わせ', footerAbout: '私たちについて',

  // ── Privacy Policy ────────────────────────────────────────────────────────
  privacyTitle: 'プライバシーポリシー', privacyLastUpdated: '最終更新',
  privacyIntroTitle: '1. はじめに',
  privacyIntroText: 'DevConvert（「私たち」）は DevConvert ウェブサイト（「サービス」）を運営しています。このページでは、サービスをご利用の際の個人データの収集、使用、開示に関するポリシーをお知らせします。私たちはあなたのプライバシーの保護に取り組んでいます。',
  privacyDataTitle: '2. 収集するデータ',
  privacyDataText: 'DevConvert はプライバシーファーストで設計されています。すべてのコードとデータの変換はブラウザ内で完全に実行されます — 入力または出力データが私たちのサーバーに送信されることはありません。',
  privacyDataLocal: 'ローカルに保存される設定（サーバーには送信されません）：',
  privacyDataLocalItems: ['テーマ設定（ダーク/ライトモード）— localStorage に保存', '言語設定（EN/TH/ZH/JA）— localStorage に保存'],
  privacyDataAnalytics: 'ページビューや機能の使用状況などの匿名使用統計を収集するために Google Analytics を使用する場合があります。このデータはあなた個人を特定しません。',
  privacyAdsTitle: '3. Google AdSense と広告',
  privacyAdsText: 'サービスに広告を表示するために Google AdSense を使用しています。Google AdSense は、過去のウェブサイト訪問に基づいて広告を配信するために Cookie と Web ビーコンを使用します。',
  privacyAdsOptOut: 'パーソナライズド広告をオプトアウトするには、Google の広告設定をご覧ください：',
  privacyAdsPolicy: 'Google のプライバシー慣行の詳細については、Google プライバシーと利用規約ページをご覧ください：',
  privacyCookiesTitle: '4. Cookie',
  privacyCookiesText: '以下の種類の Cookie を使用しています：',
  privacyCookiesItems: ['必須 Cookie：サービスの機能に必要（localStorage に保存されるテーマと言語の設定）。', '分析 Cookie：訪問者がサービスとどのようにやり取りするかを理解するための Google Analytics Cookie。', '広告 Cookie：関連する広告を表示するための Google AdSense Cookie。'],
  privacyCookiesControl: 'ブラウザの設定から Cookie を制御できます。Cookie を無効にするとサービスの機能に影響する場合があります。',
  privacyThirdPartyTitle: '5. サードパーティサービス',
  privacyThirdPartyText: 'サービスは以下のサードパーティサービスを使用する場合があり、それぞれに独自のプライバシーポリシーがあります：',
  privacyThirdPartyItems: [{ name: 'Google Analytics', url: 'https://policies.google.com/privacy', desc: '匿名使用分析' }, { name: 'Google AdSense', url: 'https://policies.google.com/privacy', desc: '広告' }],
  privacyChildrenTitle: '6. 子どものプライバシー',
  privacyChildrenText: 'サービスは13歳未満の方を対象としていません。13歳未満の子どもから個人情報を故意に収集することはありません。お子様が個人データを提供したことに気づいた保護者の方は、ご連絡ください。',
  privacyGdprTitle: '7. あなたの権利（GDPR）',
  privacyGdprText: '欧州経済領域（EEA）にお住まいの場合、特定のデータ保護権利があります。個人データを直接収集していないため、ほとんどの GDPR 権利は本質的に満たされています。ただし：',
  privacyGdprItems: ['ブラウザの localStorage をクリアすることで、いつでもローカルに保存された設定を削除できます。', 'Google Analytics オプトアウトブラウザアドオンをインストールして Google Analytics をオプトアウトできます。', 'Google の広告設定からパーソナライズド広告をオプトアウトできます。'],
  privacyChangesTitle: '8. ポリシーの変更',
  privacyChangesText: 'プライバシーポリシーを随時更新する場合があります。新しいポリシーをこのページに掲載し、「最終更新」日を更新することで変更をお知らせします。',
  privacyContactTitle: '9. お問い合わせ',
  privacyContactText: 'このプライバシーポリシーについてご質問がある場合は、以下までご連絡ください：',

  // ── about ──────────────────────────────────────────────────────
  aboutTitle: "について",
  aboutTitleDescription: "DevConvertは、繰り返し発生する変換作業の時間を節約するために開発された、無料のオープンソース開発者向けユーティリティ集です。ログイン不要、インストール不要、ブラウザからデータが送信されることもありません。",
  aboutWhatIs: "DevConvertとは何ですか？",
  aboutWahtIsDescription: "DevConvertは、開発者やエンジニア向けに35種類以上の変換ツールを提供するブラウザベースのツールキットです。JSONをTypeScriptインターフェースに変換したり、文字列をBase64でエンコードしたり、JWTトークンをデコードしたり、HEX、RGB、HSL間で色を変換したり、MarkdownをHTMLに変換したりする必要がある場合でも、DevConvertはブラウザ上で瞬時に処理します。",
  aboutWhyBuild: "私たちがそれを作った理由",
  aboutWhyBuildDescription: "開発者なら誰でも、簡単な変換作業のために何十個ものブラウザタブを切り替える煩わしさを経験したことがあるでしょう。DevConvertは、高速で信頼性が高く、常に無料の、常に開いておくだけで済むタブとして開発されました。すべての処理はブラウザ上でJavaScriptを使用してローカルに実行されるため、コードとデータがコンピュータから外部に持ち出されることはありません。",
  aboutPrivacy: "プライバシー第一",
  aboutPrivacyDescription: "DevConvertはプライバシーを非常に重視しています。DevConvertはすべての変換処理をクライアント側で実行するため、入力した内容がサーバーに送信されることはありません。ローカルに保存されるデータは、ブラウザのlocalStorageに保存されるテーマと言語の設定のみです。",
  aboutUcanDo: "DevConvertでできること",
  aboutUcanDoDescription: "JSON、YAML、XML、CSVなどのデータ形式間の変換。JSONからTypeScriptインターフェースを生成。Base64、URL、HTMLエンティティのエンコードとデコード。JWTトークンのデコード。カラー形式間の変換。MarkdownからHTMLへの変換と、その逆の変換。JSON、HTML、CSSの整形または圧縮。Unixタイムスタンプを人間が読みやすい日付に変換。その他にも多数の機能があり、新しいツールが定期的に追加されます。",
  aboutAlwaysFree: "いつでも無料",
  aboutAlwaysFreeDescription: "DevConvertは現在も将来も無料でご利用いただけます。このプロジェクトは、邪魔にならない表示広告によって支えられています。もしDevConvertが役に立つと感じられたら、他の開発者の方々と共有していただくことが、プロジェクトを支援する最良の方法です。",
  aboutContact: "接触",
  aboutContactDescription: "ご意見、バグのご報告、新しいコンバーターのリクエストなどございましたら、ぜひお聞かせください。",

  // ── Terms of Service ──────────────────────────────────────────────────────
  termsTitle: '利用規約', termsLastUpdated: '最終更新',
  termsIntroTitle: '1. 利用規約への同意',
  termsIntroText: 'DevConvert（「サービス」）にアクセスまたは使用することで、この利用規約に拘束されることに同意します。これらの条件に同意しない場合は、サービスをご利用にならないでください。',
  termsServiceTitle: '2. サービスの説明',
  termsServiceText: 'DevConvert は、コードコンバーター、データフォーマットコンバーター、エンコード/デコードユーティリティ、カラーフォーマットコンバーターなどの無料ブラウザベースの開発ツールを提供します。すべての処理はブラウザ内でローカルに行われます。',
  termsUseTitle: '3. 許容される使用',
  termsUseText: 'サービスを合法的な目的のみに使用することに同意します。以下のことを行ってはなりません：',
  termsUseItems: ['適用される法律または規制に違反する方法でサービスを使用すること。', 'サービスのリバースエンジニアリング、逆コンパイル、またはソースコードの抽出を試みること。', '自動スクリプトやボットを使用してサービスをスクレイピングまたは悪用すること。', '第三者の知的財産権を侵害するデータを処理するためにサービスを使用すること。', 'サービスの整合性またはパフォーマンスを妨害しようとすること。'],
  termsIpTitle: '4. 知的財産',
  termsIpText: 'サービスとその独自コンテンツ、機能は DevConvert およびそのライセンサーの独占的財産です。書面による事前同意なしに商標を使用することはできません。',
  termsIpUser: 'サービスに入力するコンテンツに対するすべての権利を保持します。すべての処理がブラウザ内で行われるため、データに対するアクセス権や主張はありません。',
  termsDisclaimerTitle: '5. 保証の免責',
  termsDisclaimerText: 'サービスは、明示または黙示を問わず、いかなる種類の保証もなく「現状のまま」および「利用可能な状態で」提供されます。以下を含みますが、これらに限定されません：',
  termsDisclaimerItems: ['変換結果の正確性または完全性。', '特定の目的への適合性。', '第三者の権利の非侵害。', '中断なし、エラーなし、または安全な動作。'],
  termsDisclaimerAdvice: '本番環境で使用する前に、変換出力を常にレビューおよびテストしてください。DevConvert のツールは利便性のために提供されており、徹底的なコードレビューの代替にはなりません。',
  termsLiabilityTitle: '6. 責任の制限',
  termsLiabilityText: 'DevConvert は、以下から生じる利益、データ、その他の損失を含む間接的、偶発的、特別、派生的、または懲罰的損害について責任を負いません：',
  termsLiabilityItems: ['サービスへのアクセスまたは使用（またはアクセスまたは使用できないこと）。', '変換結果のエラーまたは不正確さ。', 'データへの不正アクセスまたは変更。', 'サービスに関連するその他の事項。'],
  termsAdsTitle: '7. 広告',
  termsAdsText: 'サービスは Google AdSense による広告でサポートされています。サービスを使用することで、広告が表示される場合があることを認識します。サードパーティの広告コンテンツについては責任を負いません。',
  termsLinksTitle: '8. サードパーティリンク',
  termsLinksText: 'サービスには、DevConvert が所有または管理していないサードパーティのウェブサイトやサービスへのリンクが含まれる場合があります。そのようなウェブサイトやサービスのコンテンツ、プライバシーポリシー、または慣行に対して責任を負いません。',
  termsTerminationTitle: '9. 終了',
  termsTerminationText: '利用規約に違反した場合を含め、理由を問わず、事前の通知なしにいつでもサービスへのアクセスを停止または終了する権利を留保します。',
  termsGoverningTitle: '10. 準拠法',
  termsGoverningText: 'これらの条件は、法の抵触に関する規定を考慮せずに、適用される法律に従って解釈されます。',
  termsChangesTitle: '11. 条件の変更',
  termsChangesText: 'いつでもこれらの条件を変更または置き換える権利を留保します。変更は条件の上部の日付を更新することで通知します。変更が有効になった後も引き続きサービスを使用することで、改訂された条件に拘束されることに同意します。',
  termsContactTitle: '12. お問い合わせ',
  termsContactText: 'この利用規約についてご質問がある場合は、以下までご連絡ください：',

  // ── WhyDevConvert ───────────────────────────────────────────────────────────── 
  whyTitleDivider: "なぜDevConvertを選ぶのか",
  whyTitle: '開発者のために\n開発者が作ったツール',
  whySubtitle: 'すべての機能は日常業務の時間を節約するために設計されています。余計な機能なし、広告なし、制限なし。',
  whyFeat1Title: 'データは100%安全',
  whyFeat1Body: 'すべての変換はブラウザ上で直接行われます。コードやデータがサーバーに送信されることは一切ありません。マシン外に出せない機密データにも安心して使用できます。',
  whyFeat2Title: '入力と同時に即変換',
  whyFeat2Body: 'データを貼り付けた瞬間にリアルタイム変換。ボタン操作不要、ローディングなし、ネットワーク待機なし。結果は50ms以内に表示されます。',
  whyFeat3Title: '35以上のツールが一箇所に',
  whyFeat3Body: 'あらゆる開発タスクに対応: JSON、TypeScript、YAML、XML、CSV、SQL、Markdown、HTML、Base64、JWT、カラー、CSSなど。複数のサイトを行き来する必要はありません。',
  whyFeat4Title: '多言語UI対応',
  whyFeat4Body: 'インターフェースはタイ語、英語、日本語、中国語に対応。世界中の開発者が快適に使用できます。',
  whyFeat5Title: 'プロ仕様のエディタ',
  whyFeat5Body: 'VS Codeと同じMonaco Editorを採用。シンタックスハイライト、自動インデント、コード折りたたみをすべてのフォーマットで利用可能。',
  whyFeat6Title: '結果をすぐダウンロード',
  whyFeat6Body: '出力結果をコピー、または.ts、.json、.yaml、.xmlファイルとしてすぐにダウンロード可能。追加編集なしでプロジェクトにそのまま使用できます。',

  // ── HowItWorks ────────────────────────────────────────────────────────────────
  howTitleDivider: "使い方",
  howTitle: '簡単3ステップで使える',
  howSubtitle: 'ログイン不要、インストール不要、設定不要 — 開いてすぐ変換できます',
  howStep1Label: 'STEP 01',
  howStep1Title: 'データを貼り付ける',
  howStep1Body: 'JSON、YAML、TypeScript、CSV などのデータを左側の入力欄に貼り付けるか、直接入力してください',
  howStep1Hint: 'クリップボードからの直接貼り付けに対応',
  howStep2Label: 'STEP 02',
  howStep2Title: 'フォーマットを選択する',
  howStep2Body: 'ドロップダウンから変換先フォーマットを選択: TypeScript、JSON、YAML、XML、SQL、Markdown など多数',
  howStep2Hint: '選択と同時に自動変換されます',
  howStep3Label: 'STEP 03',
  howStep3Title: 'コピーまたはダウンロード',
  howStep3Body: '出力結果をすぐにコピーするか、ファイルとしてダウンロード。追加の編集なしでプロジェクトにそのまま使用できます',
  howStep3Hint: '.ts、.json、.yaml などの形式で保存可能',

  // ── ToolCategories ────────────────────────────────────────────────────────────
  catTitleDivider: "すべてのツール",
  catTitle: '開発者が必要とする\nすべてのフォーマットに対応',
  catSubtitle: 'REST API、DevOpsパイプライン、フロントエンド、データエンジニアリングなど — あらゆる用途に最適なツールがあります',
  catJsonLabel: 'JSON',
  catJsonDesc: 'JSON ↔ TypeScript、YAML、XML、CSV、SQL',
  catYamlLabel: 'YAML / XML',
  catYamlDesc: 'YAML、XML、JSON、TypeScript間の変換',
  catCodeLabel: 'コード',
  catCodeDesc: 'TypeScript ↔ JavaScript、CSS ↔ SCSS、Tailwind',
  catMarkupLabel: 'マークアップ',
  catMarkupDesc: 'Markdown ↔ HTML、フォーマット、ミニファイ',
  catEncodingLabel: 'エンコーディング',
  catEncodingDesc: 'Base64、URL、JWT、HTMLエンティティ、進数変換',
  catColorLabel: 'カラー',
  catColorDesc: 'HEX ↔ RGB ↔ HSL、CSS変数対応',

  // ── PrivacyPerformance ────────────────────────────────────────────────────────
  ppTitleDivider: "プライバシー重視＆高速",
  ppTitle: 'あなたのデータは\nブラウザの外に出ません',
  ppBody: 'DevConvertにはバックエンドサーバーがありません。すべての変換はブラウザのJavaScript上で100%完結します。ログの保存なし、データの追跡なし、コードの送信なし。エンタープライズ業務や機密データの処理に最適です。',
  ppCheck1: 'アカウント作成やログイン不要',
  ppCheck2: '初回ロード後はオフラインで動作',
  ppCheck3: 'オープンソースで監査可能',
  ppCheck4: '広告なし、トラッキングなし',
  ppStat1Label: 'サーバー遅延',
  ppStat1Sub: 'すべてお使いの端末で処理',
  ppStat2Label: 'ブラウザで動作',
  ppStat2Sub: 'バックエンドなし、APIコールなし',
  ppStat3Label: 'ツール数',
  ppStat3Sub: '主要フォーマットを網羅',
  ppStat4Label: '無制限で使用可能',
  ppStat4Sub: '永久無料、レート制限なし',

  // ── UseCases ──────────────────────────────────────────────────────────────────
  useCaseTitleDivider: "あらゆる役割に対応",
  useCaseTitle: 'あなたの役割に合わせた\nツールが揃っています',
  ucRole1: 'フロントエンド開発者',
  ucRole1Case1: 'APIレスポンス（JSON）をTypeScriptインターフェースに即変換',
  ucRole1Case2: 'FigmaのHEXカラーをCSS用のRGB/HSLに変換',
  ucRole1Case3: 'CSSをTailwindユーティリティクラスに変換',
  ucRole2: 'DevOps / バックエンド',
  ucRole2Case1: 'JSONコンフィグをKubernetes / Docker Compose用のYAMLに変換',
  ucRole2Case2: 'JWTトークンをデコードしてクレームと有効期限を確認',
  ucRole2Case3: 'タイムスタンプを任意のタイムゾーンの読みやすい日付に変換',
  ucRole3: 'データエンジニア',
  ucRole3Case1: 'CSVをデータベースインポート用のJSON配列に変換',
  ucRole3Case2: 'JSONサンプルデータからSQL CREATE TABLE + INSERTを生成',
  ucRole3Case3: 'レガシーAPIのXMLを扱いやすいJSONに変換',
  ucRole4: 'テクニカルライター',
  ucRole4Case1: 'MarkdownをブログやドキュメントサイトのHTMLに変換',
  ucRole4Case2: 'ドキュメントに貼り付ける前にJSONを読みやすく整形',
  ucRole4Case3: 'CMSのHTMLをGitHub用のMarkdownに変換',

  // ── Knowledge Section ─────────────────────────────────────────────────────
  knowledgeSectionTitle: 'フォーマット変換 — 開発者が知っておくべきこと',
  knowledgeCards: [
    {
      title: 'フォーマット変換が必要な理由',
      body: '現代のシステムが同じデータ形式を共有することはまずありません。APIはJSONを使い、設定ファイルはYAMLを好み、エンタープライズツールはXMLを要求し、パイプラインはCSVを出力します。フォーマット変換は利便性のためでなく、ソフトウェアスタック全体をつなぐ結合組織です。',
    },
    {
      title: '変換後は必ずバリデーションを',
      body: '変換後の出力をそのまま信用してはいけません。コードベースにコミットする前に、スキーマバリデーターやリンターで検証しましょう。クォートの位置ひとつ、型のミスマッチひとつが、本番環境のパイプライン全体をサイレントに破壊することがあります。',
    },
    {
      title: 'すべての変換がロスレスではない',
      body: 'XML→JSONは要素の順序や混合コンテンツを失います。YAML→JSONはすべてのコメントを削除します。JSON→CSVはネストされたオブジェクトをフラット化し、階層構造を失います。特に重要な下流プロセスにデータを供給する場合は、何が失われるかを事前に把握しておきましょう。',
    },
    {
      title: 'エンコーディングの落とし穴',
      body: 'UTF-8は世界標準ですが、レガシーシステムはISO-8859-1やWindows-1252を出力することがあります。パイプライン途中でエンコーディングが混在すると、文字化け（mojibake）が発生し、データがサイレントに破損します。変換ファイルの読み書き時は、エンコーディングを必ず明示的に宣言しましょう。',
    },
    {
      title: '定期的な変換は自動化する',
      body: '一度きりの変換は問題ありませんが、繰り返し行うものはCI/CDパイプラインに組み込むべきです。jq（JSON）、yq（YAML）、xmllint（XML）などのツールはスクリプト化・監査・バージョン管理が可能です。自動化によって、エラーが起きやすい手作業を再現可能なアーティファクトに変えられます。',
    },
    {
      title: 'まずスキーマを定義する',
      body: '変換前にターゲットスキーマを定義しましょう。JSON Schema、TypeScriptインターフェース、XSDを使えば、ランタイムではなく変換時に構造上の問題を検出できます。スキーマファーストの考え方は変換を可逆にし、常に正規の検証基準を持つことができます。',
    },
  ],
  proTipsTitle: 'プロのヒント',
  proTips: [
    'diffを取る前はpretty-printを — minified出力は構造変更を隠します',
    '変換前にnullと空文字列を除去する — 受け取り側の解釈が異なります',
    'ラウンドトリップテスト: A→BしてB→Aに変換し、元と比較。差分がロスのあるフィールドを教えてくれます',
    '元ファイルをバージョン管理に保存する。派生フォーマットは再生成できるが、オリジナルはできません',
  ],

  // for blog
  "blogTitle": "ブログ",
  "developerBlog": "開発者ナレッジハブ",
  "blogDescription": "JSON、TypeScript、YAML、エンコーディング技術、CSS、そして最新の開発ワークフローまでを網羅した実践的なガイドと詳細なチュートリアルで、開発スキルを一段階引き上げましょう。ステップバイステップの解説、ベストプラクティス、パフォーマンス最適化のコツ、よくあるミスの回避方法などを分かりやすく紹介します。アプリケーション開発、データ処理、フロントエンドやバックエンドの最適化に取り組むすべての開発者にとって、よりクリーンなコードを書き、問題を迅速に解決し、日々進化する開発ツールに追いつくための知識を提供します。",
  "blogFeaturedArticles": "注目の記事",
  "blogAllArticles": "すべての記事",
  "totalArticles": "DevConvert のすべてのツールを網羅した記事",
  "blogs": [
    {
      "id": 1,
      "slug": "what-is-json",
      "category": "json",
      "publishedAt": "2025-01-10",
      "readingMinutes": 6,
      "coverEmoji": "📄",
      "relatedTools": ["json-beautify", "json-to-ts", "json-to-yaml", "json-to-csv"],
      "content": {
        "title": "JSONとは？開発者のための完全ガイド",
        "description": "JSONとは何か、なぜAPIの普遍的なデータフォーマットになったのか、実例を使って効率的に活用する方法を学びましょう。",
        "sections": [
          {
            "heading": "JSONとは？",
            "paragraphs": [
              "JSON（JavaScript Object Notation）は、構造化された情報を保存・交換するための軽量なテキストベースのデータ形式です。JavaScriptのオブジェクト構文から派生したJSONは、現在ではあらゆるプログラミング言語とプラットフォームでのデータ交換の事実上の標準となっています。",
              "JSONは二つの基本構造で構成されています：名前/値のペアのコレクション（オブジェクト）と値の順序付きリスト（配列）です。この二つのシンプルなビルディングブロックで、ユーザープロファイルから複雑なネストされた設定ファイルまで、ほぼあらゆる実世界のデータ構造を表現できます。"
            ]
          },
          {
            "heading": "JSONが普遍的な標準になった理由",
            "paragraphs": [
              "JSONの前はXMLがウェブを支配していました。XMLは強力でしたが、冗長でした。単純な名前のリストでも、大量の開始タグと終了タグが必要でした。JSONは余分な要素を排除し、データのみを保持しました。2000年代後半にREST APIがSOAPに取って代わり始めると、JSONは自然な選択肢となりました。人間が読みやすく、コンパクトで、どのブラウザでもネイティブに解析できるからです。",
              "今日、JSONはあらゆる場所に存在します：REST APIはJSONを返し、設定ファイルはJSONを使用し（package.json、tsconfig.json）、MongoDBのようなデータベースはBSON（JSONのバイナリ形式）でドキュメントを保存し、AWSやAzureでさえインフラストラクチャポリシーにJSONを使用します。JSONを知ることは選択肢ではなく、現代の開発者にとって基礎知識です。"
            ]
          },
          {
            "heading": "JSONのデータ型と構文ルール",
            "paragraphs": [
              "JSONは6つのデータ型をサポートします：文字列（ダブルクォートで囲む）、数値、ブール値（trueまたはfalse）、null、オブジェクト（波括弧）、配列（角括弧）です。重要なルール：すべてのオブジェクトキーはダブルクォートで囲まれた文字列でなければなりません。JavaScriptオブジェクトリテラルとは異なり、JSONではトレーリングカンマ、コメント、シングルクォートは使用できません。",
              "厳格な構文はJSONの強みであると同時に、最大のバグの原因でもあります。カンマが1つ欠けているだけ、または括弧が1つ余分なだけでドキュメント全体が壊れます。これが、DevConvertのJSON Beautifyツールのようなbeautifierやvalidatorが、APIや設定ファイルを扱う開発者の日常的なツールとして不可欠な理由です。"
            ]
          },
          {
            "heading": "実践でのJSON：よくある使用例",
            "paragraphs": [
              "APIレスポンスは最も一般的なJSON遭遇場面です。REST APIからデータをフェッチすると、レスポンスボディはほぼ常にJSONです。フロントエンド開発者はこのJSONをJavaScriptオブジェクトに解析し、必要なフィールドを抽出してUIにレンダリングします。",
              "設定ファイルもう一つの主要な使用例です。Node.jsプロジェクトはpackage.jsonを使用して依存関係とスクリプトを宣言します。TypeScriptプロジェクトはtsconfig.jsonを使用してコンパイラを設定します。ESLint、Prettier、BabelはすべてJSONベースの設定を使用します。JSON構造を理解することで、設定の問題をより迅速にデバッグできます。"
            ]
          },
          {
            "heading": "JSONをより効率的に扱うためのヒント",
            "paragraphs": [
              "縮小されたAPIレスポンスを扱う際はJSONビューティファイアを使用してください。1行に収められたコンパクトなJSONは読んだりデバッグしたりすることが不可能です。DevConvertのJSON Beautifyツールは、縮小されたJSONを適切なインデントで即座にフォーマットします。",
              "TypeScriptアプリケーションを構築する際は、JSONデータをすぐに型付きインターフェースに変換してください。これにより、オートコンプリート、型安全性、コンパイル時のエラー検出が得られます。DevConvertのJSON to TypeScriptツールは、ネストされた構造や配列を含む任意のJSONオブジェクトから正確なインターフェースを生成します。"
            ]
          }
        ]
      },
    },
    {
      "id": 2,
      "slug": "json-to-typescript-interfaces",
      "category": "typescript",
      "publishedAt": "2025-01-17",
      "readingMinutes": 7,
      "coverEmoji": "⚡",
      "relatedTools": ["json-to-ts", "yaml-to-ts", "ts-to-js"],
      "content": {
        "title": "JSONからTypeScriptへ：型付きインターフェースを自動生成",
        "description": "TypeScriptインターフェースを手書きするのをやめましょう。任意のJSONオブジェクトから正確なネストされた型定義を数秒で自動生成する方法を学びます。",
        "sections": [
          {
            "heading": "TypeScriptインターフェースが重要な理由",
            "paragraphs": [
              "APIからデータをフェッチすると、型情報のないプレーンなJavaScriptオブジェクトを受け取ります。TypeScriptの力は、ランタイムではなくコンパイル時にエラーを検出する能力にありますが、その力はデータが適切に型付けされている場合にのみ発揮されます。インターフェースがなければ、TypeScriptは注釈付きのJavaScriptに退化し、オートコンプリート、リファクタリングの安全性、型の絞り込みを失います。",
              "インターフェースを手書きすることは面倒でエラーが起きやすいです。典型的なAPIレスポンスには15のフィールド、ネストされたオブジェクト、オプショナルな配列、ユニオン型が含まれる場合があります。これらをすべて手動で書き写すには時間がかかり、人的エラーが発生します。この変換を自動化することが、単純により賢いアプローチです。"
            ]
          },
          {
            "heading": "JSONからTypeScriptへの変換の仕組み",
            "paragraphs": [
              "JSONからTypeScriptへのコンバーターは、JSONの各キーと値のペアを検査し、適切なTypeScript型を推論します。文字列値は`string`に、数値は`number`に、ブール値は`boolean`になり、null値はオプショナル（`field?: type`）としてフラグが立てられます。配列は要素ごとに検査されて要素型が決定されます。",
              "ネストされたオブジェクトは独自の名前付きインターフェースになります。例えば、ネストされた`address`オブジェクトを持つJSONオブジェクトは、`Root`インターフェースと`Address`インターフェースの両方を生成し、`Root.address`は`Address`型になります。"
            ]
          }
        ]
      },
    },
    {
      "id": 3,
      "slug": "yaml-json-xml-comparison",
      "category": "yaml",
      "publishedAt": "2025-01-24",
      "readingMinutes": 8,
      "coverEmoji": "📊",
      "relatedTools": ["yaml-to-json", "json-to-yaml", "xml-to-json", "yaml-to-xml"],
      "content": {
        "title": "YAML vs JSON vs XML：どのフォーマットを使うべきか？",
        "description": "3つの主要なデータシリアライゼーション形式の実践的な比較。YAML、JSON、XMLをいつ使用するか、データを失わずに変換する方法を学びます。",
        "sections": [
          {
            "heading": "3つのフォーマット、3つの哲学",
            "paragraphs": [
              "YAML、JSON、XMLはすべて同じ問題を解決します：構造化データをテキストとして表現すること。しかし、それぞれ全く異なる設計哲学で実現しています。XML（1998年）は属性と混合コンテンツを持つドキュメントライクなセマンティクスを優先します。JSON（2001年）は機械可読性とJavaScript互換性を優先します。YAML（2001年）は人間の可読性と設定の使いやすさを優先します。",
              "モダンなソフトウェア開発では、3つすべてに遭遇します。REST APIはJSONを使い、KubernetesとDocker ComposeはYAMLを使い、エンタープライズシステムはXMLを使います。"
            ]
          },
          {
            "heading": "フォーマット間の変換：注意点",
            "paragraphs": [
              "すべての変換がロスレスというわけではありません。YAMLからJSONへの変換はほぼロスレスですが、コメントは失われます（JSONにはコメント構文がありません）。JSONからYAMLへの変換は完全にロスレスです。XMLからJSONへの変換は、コンバーターが`@attribute`のような規則を使用しない限り、属性が失われます。",
              "DevConvertは、JSON↔YAML、JSON↔XML、YAML↔XMLの6つの主要変換ペアすべてを、エッジケースのインテリジェントな処理で対応します。"
            ]
          }
        ]
      },
    },
    {
      "id": 4,
      "slug": "base64-url-encoding-explained",
      "category": "encoding",
      "publishedAt": "2025-02-07",
      "readingMinutes": 6,
      "coverEmoji": "🔐",
      "relatedTools": ["text-to-base64", "base64-to-text", "url-encode", "url-decode", "html-encode"],
      "content": {
        "title": "Base64とURLエンコーディング：開発者の完全リファレンス",
        "description": "Base64、URLエンコーディング、HTMLエンティティエンコーディングを理解しましょう——それぞれが何か、いつ使うか、開発者がよく犯すエンコーディングの間違い。",
        "sections": [
          {
            "heading": "Base64エンコーディングとは？",
            "paragraphs": [
              "Base64は、バイナリデータをASCIIテキストに変換するエンコーディングスキームです。3バイトのバイナリデータを64文字のアルファベット（A–Z、a–z、0–9、+、/）から4つのASCII文字として表現します。'64'という名前は64文字のアルファベットを指し、各文字は正確に6ビットの情報をエンコードします。",
              "Base64は特定の問題を解決するために発明されました：古い通信プロトコル（メールのSMTPなど）は任意のバイナリデータではなく、7ビットのASCIIテキスト用に設計されていました。"
            ]
          },
          {
            "heading": "正しいエンコーディングの選択",
            "paragraphs": [
              "Base64を使用する場面：テキストベースのプロトコル経由でバイナリデータを送信する場合、データURIに画像を埋め込む場合、HTTP Basic AuthのクレデンシャルをエンコードするためBase64はデータサイズを約33%増加させることに注意してください。",
              "URLエンコーディングを使用する場面：クエリ文字列の構築、特殊文字を含むパスセグメントのエンコード、GETリクエストで送信されるフォームデータの処理。"
            ]
          }
        ]
      },
    },
    {
      "id": 5,
      "slug": "jwt-token-decode-guide",
      "category": "encoding",
      "publishedAt": "2025-02-14",
      "readingMinutes": 5,
      "coverEmoji": "🔑",
      "relatedTools": ["jwt-decode", "text-to-base64", "base64-to-text"],
      "content": {
        "title": "JWTトークン解説：デコードと検査の方法",
        "description": "JSON Web Tokenの構造、JWTクレームのデコードと検査方法、有効期限と署名検証の理解、認証問題の迅速なデバッグについて学びます。",
        "sections": [
          {
            "heading": "JWTとは？",
            "paragraphs": [
              "JSON Web Token（JWT）は、2つの当事者間でクレームを表現するために使用されるコンパクトでURL安全なトークン形式です。JWTはWebアプリケーションとAPIの認証と認可に一般的に使用されます。",
              "JWTはドットで区切られた3つの部分で構成されています：`header.payload.signature`。各部分はBase64URLで独立してエンコードされます。ヘッダーは署名に使用されたアルゴリズムを記述します。ペイロードにはクレーム（データ）が含まれます。署名は真正性を検証します。"
            ]
          },
          {
            "heading": "よくあるJWTの問題とデバッグ方法",
            "paragraphs": [
              "トークンの有効期限切れ（`exp`が過去）：クライアントはトークンをリフレッシュする必要があります。JWT Decodeツールを使用して`exp`フィールドを検査し、タイムゾーンでの正確な有効期限を確認します。",
              "クレームの欠如：認可ロジックが`roles`フィールドを期待しているがペイロードにない場合。JWT Decodeツールを使用してすべてのクレームを即座に確認し、欠けているものを特定します。"
            ]
          }
        ]
      },
    },
    {
      "id": 6,
      "slug": "css-to-tailwind-migration",
      "category": "css",
      "publishedAt": "2025-02-21",
      "readingMinutes": 7,
      "coverEmoji": "🎨",
      "relatedTools": ["css-to-tailwind", "css-to-scss", "css-minify", "css-beautify"],
      "content": {
        "title": "CSSからTailwindへ：実践的な移行ガイド",
        "description": "バニラCSSをTailwindユーティリティクラスに効率的に変換する方法、移行が意味をなす状況、直接のTailwind相当がないCSSパターンの処理方法を学びます。",
        "sections": [
          {
            "heading": "Tailwind CSSに移行する理由",
            "paragraphs": [
              "Tailwind CSSはユーティリティファーストのアプローチを採用しています。`.button { background-color: blue; padding: 8px; }`を書く代わりに、HTML内でクラスを直接組み合わせます：`<button class='bg-blue-500 px-4 py-2 rounded'>`。これにより、クラス名を考える必要がなくなり、CSSファイルが無限に大きくなることを防ぎます。",
              "チームは、TailwindによってCSSバンドルサイズが大幅に縮小したと報告しています。Tailwindのビルドプロセスが未使用クラスを削除するため、本番CSSには実際に使用するものだけが含まれます。"
            ]
          }
        ]
      },
    },
    {
      "id": 7,
      "slug": "unix-timestamp-explained",
      "category": "utility",
      "publishedAt": "2025-03-07",
      "readingMinutes": 5,
      "coverEmoji": "🕐",
      "relatedTools": ["timestamp-to-date", "date-to-timestamp"],
      "content": {
        "title": "Unixタイムスタンプ解説：国境のない日付",
        "description": "Unixタイムスタンプとは何か、なぜソフトウェアの普遍的な時間フォーマットなのか、人間が読める日付に変換する方法、そして開発者がよく遭遇するタイムスタンプの落とし穴について学びます。",
        "sections": [
          {
            "heading": "Unixタイムスタンプとは？",
            "paragraphs": [
              "Unixタイムスタンプ（Unix時間、POSIX時間、エポック時間とも呼ばれる）は、1970年1月1日00:00:00 UTC（Unixエポックと呼ばれる瞬間）からの経過秒数です。例えば、タイムスタンプ`1700000000`は2023年11月14日22:13:20 UTCを表します。",
              "秒対ミリ秒は最も一般的なタイムスタンプバグです。JavaScriptの`Date.now()`はミリ秒を返します。この1000倍の差がWeb開発で最も一般的なタイムスタンプバグです。"
            ]
          }
        ]
      },
    },
    {
      "id": 8,
      "slug": "number-bases-binary-hex-decimal",
      "category": "utility",
      "publishedAt": "2025-03-14",
      "readingMinutes": 6,
      "coverEmoji": "🔢",
      "relatedTools": ["dec-to-bin", "bin-to-dec", "dec-to-hex", "hex-to-dec"],
      "content": {
        "title": "2進数、16進数、10進数：すべての開発者が知るべき数値システム",
        "description": "開発者として毎日使う3つの数値システムをマスターしましょう。ビット演算のための2進数、色とメモリのための16進数、そしてコードを動かす10進数変換を理解します。",
        "sections": [
          {
            "heading": "開発者が数値基数を理解する必要がある理由",
            "paragraphs": [
              "コンピューターはハードウェアレベルで2進数（基数2）で動作します。人間は10進数（基数10）で考えます。16進数（基数16）はその橋渡しをします。",
              "Webカラー：CSSカラー`#1a2b3c`は3つの16進数ペア——`1a`（赤）、`2b`（緑）、`3c`（青）です。それぞれを10進数に変換するとRGB(26, 43, 60)になります。"
            ]
          }
        ]
      },
    },
    {
      "id": 9,
      "slug": "color-formats-hex-rgb-hsl",
      "category": "colors",
      "publishedAt": "2025-03-21",
      "readingMinutes": 5,
      "coverEmoji": "🎨",
      "relatedTools": ["hex-to-rgb", "rgb-to-hex", "hsl-to-hex"],
      "content": {
        "title": "HEX、RGB、HSL：Webカラーフォーマットを理解する",
        "description": "HEX、RGB、HSLカラーフォーマットの違い、CSSでいつ使用するか、そしてデザインシステム向けに正確に変換する方法を学びます。",
        "sections": [
          {
            "heading": "3つのカラーモデル解説",
            "paragraphs": [
              "Webカラーは3つの主要なフォーマットで表現できます。HEX（`#3b82f6`）はRGBモデルの短縮形で、赤、緑、青の値を2桁の16進数として表します。RGB（`rgb(59, 130, 246)`）は同じ3チャンネルを0〜255の整数で表します。HSL（`hsl(217, 91%, 60%)`）は色を色相（0〜360°）、彩度（0〜100%）、明度（0〜100%）で表します。",
              "HSLはデザインシステムとテーマ変数を構築するための最も開発者フレンドリーなフォーマットです。色相、彩度、明度のモデルは、人間の色の知覚方法に直接対応します。"
            ]
          }
        ]
      },
    },
    {
      "id": 10,
      "slug": "markdown-to-html-guide",
      "category": "markup",
      "publishedAt": "2025-03-28",
      "readingMinutes": 5,
      "coverEmoji": "📝",
      "relatedTools": ["md-to-html", "html-to-md", "html-beautify", "html-minify"],
      "content": {
        "title": "MarkdownからHTMLへ：Web向けドキュメントとコンテンツの変換",
        "description": "Markdownのな変換プロセス、GitHub Flavored Markdownの機能、いつ変換しいつネイティブレンダリングするか、そして本番向けHTMLのフォーマット方法を学びます。",
        "sections": [
          {
            "heading": "Markdownが存在する理由",
            "paragraphs": [
              "Markdownは2004年にJohn Gruberによって作成されました。レンダリング前でも自然に読めるプレーンテキスト構文を使用して書式付きテキストを記述する方法として生まれました。今日、Markdownはテクニカルドキュメント、READMEファイル、GitHubのissueとプルリクエスト、ブログ投稿のデフォルト記述フォーマットです。"
            ]
          }
        ]
      },
    },
    {
      "id": 11,
      "slug": "csv-json-data-conversion",
      "category": "data",
      "publishedAt": "2025-04-04",
      "readingMinutes": 5,
      "coverEmoji": "📊",
      "relatedTools": ["csv-to-json", "json-to-csv", "json-to-sql"],
      "content": {
        "title": "CSVからJSONへ：APIとデータベース向けスプレッドシートデータの変換",
        "description": "CSVファイルをJSON配列に変換する方法、一般的なCSVエッジケースの処理、変換されたデータのAPI、データベース、JavaScriptアプリケーションでの使用方法を学びます。",
        "sections": [
          {
            "heading": "CSVとJSONの両方が依然として不可欠な理由",
            "paragraphs": [
              "CSVは表形式データの普遍的なフォーマットです。JSONはAPIとJavaScriptアプリケーションの普遍的なフォーマットです。これらを変換することはデータエンジニアリングの日常的なタスクです。",
              "CSVファイルは平文ファイルで、各行がデータの行で、各行内の値はカンマで区切られています。最初の行は通常ヘッダー行です。コンバーターはヘッダーを読み込み、それらの名前を後続の各行のJSONキーとして使用します。"
            ]
          }
        ]
      },
    },
    {
      "id": 12,
      "slug": "typescript-vs-javascript-migration",
      "category": "typescript",
      "publishedAt": "2025-04-09",
      "readingMinutes": 6,
      "coverEmoji": "⚡",
      "relatedTools": ["ts-to-js", "js-to-ts", "json-to-ts"],
      "content": {
        "title": "TypeScript vs JavaScript：いつ、どのように変換するか",
        "description": "TypeScriptとJavaScriptの本当の違い、いつ移行するか、そしてプロジェクトで両方向の変換を処理するためのTS↔JSコンバーターの使用方法を理解します。",
        "sections": [
          {
            "heading": "TypeScriptはJavaScriptにタイプレイヤーを加えたもの",
            "paragraphs": [
              "TypeScriptはJavaScriptのスーパーセットです。有効なJavaScriptファイルはすべて有効なTypeScriptファイルでもあります。TypeScriptはコンパイル時にすべて削除される型システムを追加します。",
              "TypeScriptの投資対効果はプロジェクトとチームの規模に正比例します。複数人が変更し、3ヶ月以上続き、またはファイルが20以上あるプロジェクトなら、TypeScriptが価値をもたらします。"
            ]
          }
        ]
      },
    }
  ]
}

export default ja

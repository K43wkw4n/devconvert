import type { ConverterLocaleMap } from './types'

const th: ConverterLocaleMap = {
  // ── JSON ──────────────────────────────────────────────────────────────────
  'json-to-typescript': {
    description:
      'แปลง JSON เป็น TypeScript Interface แบบมี type ครบถ้วน — รองรับ nested object, array, optional field และ union type',
    longDescription:
      'วางข้อมูล JSON แล้วรับ TypeScript interface ที่พร้อมใช้งานจริงในไม่กี่วินาที ระบบจะวิเคราะห์ type ของแต่ละ field โดยอัตโนมัติ ไม่ว่าจะเป็น string, number, boolean, array หรือ object ซ้อนกันลึกหลายชั้น ค่า null จะถูกแปลงเป็น optional field (เพิ่ม ?) และ array ที่มีหลาย type จะกลายเป็น union type Object ที่ซ้อนกันจะถูกสร้างเป็น interface ย่อยแยกชื่อ เพื่อให้ code มีโครงสร้างชัดเจน เหมาะสำหรับนักพัฒนาที่ทำงานกับ REST API, ข้อมูลจาก third-party หรือกำลัง migrate จาก JavaScript มาสู่ TypeScript',
    howToUse:
      '1. วาง JSON ลงในช่องซ้าย\n2. TypeScript interface จะถูกสร้างขึ้นทันทีในช่องขวา\n3. Object ระดับบนสุดจะกลายเป็น interface ชื่อ "Root" และ object ที่ซ้อนกันจะกลายเป็น interface ย่อย เช่น RootAddress\n4. คัดลอก output แล้วนำไปใช้ใน TypeScript project ได้เลย\n5. เคล็ดลับ: Array of objects เช่น [{...}] จะสร้าง interface ย่อยสำหรับ element แต่ละตัวโดยอัตโนมัติ',
  },
  'json-to-javascript': {
    description:
      'แปลง JSON เป็น const variable declaration ใน JavaScript — พร้อมนำไปวางใน .js หรือ Node.js ได้ทันที',
    longDescription:
      'แปลงข้อมูล JSON ให้กลายเป็น const declaration รูปแบบ JavaScript มาตรฐาน ด้วย indentation 2 ช่อง ผลลัพธ์นำไปใช้งานได้ทันทีใน Node.js script, ไฟล์ JavaScript ฝั่ง frontend หรือ config module ต่างๆ เหมาะมากเมื่อต้องการฝัง static data, mock data หรือ config object ลงใน JavaScript โดยตรง โดยไม่ต้อง import ไฟล์ JSON แยกต่างหาก',
    howToUse:
      '1. วาง JSON object หรือ array ลงในช่องซ้าย\n2. Output จะเป็น const data = { ... };\n3. คัดลอกและนำไปวางในไฟล์ .js หรือ .mjs\n4. เปลี่ยนชื่อ "data" เป็นชื่อ variable ที่ต้องการ\n5. เคล็ดลับ: ใช้เมื่อต้องการ embed ข้อมูลใน JS โดยตรง แทนการ import JSON',
  },
  'json-to-yaml': {
    description:
      'แปลง JSON เป็น YAML — เหมาะสำหรับ Kubernetes manifest, Docker Compose, GitHub Actions และไฟล์ config ต่างๆ',
    longDescription:
      'แปลงข้อมูล JSON ให้กลายเป็น YAML ที่อ่านง่ายและสะอาดตา โดยรักษา data type ทุกชนิดไว้ครบถ้วน ทั้ง string, number, boolean, array และ nested object ผลลัพธ์ใช้ indentation 2 ช่องและหลีกเลี่ยง quote ที่ไม่จำเป็น ตามมาตรฐาน YAML เป็นเครื่องมือสำคัญสำหรับ DevOps engineer และนักพัฒนาที่ต้องเชื่อม API response แบบ JSON กับ tool ที่ใช้ YAML เช่น Helm, Ansible หรือ CI/CD pipeline',
    howToUse:
      '1. วาง JSON ลงในช่องซ้าย\n2. YAML จะถูกสร้างขึ้นทันทีในช่องขวา\n3. ตรวจสอบว่า nested object ถูก indent ถูกต้อง (2 ช่องต่อระดับ)\n4. คัดลอก YAML ไปใช้ใน config file หรือ manifest ได้เลย\n5. เคล็ดลับ: JSON array จะกลายเป็น YAML list (บรรทัดที่ขึ้นต้นด้วย -)',
  },
  'json-to-xml': {
    description:
      'แปลง JSON เป็น XML ที่มีรูปแบบถูกต้อง — เหมาะสำหรับ SOAP API, RSS feed และระบบ enterprise แบบเก่า',
    longDescription:
      'แปลง JSON object และ array ให้กลายเป็น XML document ที่มีโครงสร้างถูกต้อง พร้อม declaration <?xml?> ไว้ที่ต้น JSON object ซ้อนกันจะกลายเป็น XML element ซ้อนกัน และ JSON array จะถูกขยายเป็น element พี่น้องที่ซ้ำกัน เครื่องมือนี้ช่วยเชื่อม JSON กับระบบที่ต้องการ XML เช่น SOAP web service, enterprise middleware, EDI system หรือ CMS รุ่นเก่า',
    howToUse:
      '1. วาง JSON ลงในช่องซ้าย\n2. XML document จะถูกสร้างโดยมี element <root> ห่อข้อมูลทั้งหมด\n3. JSON key กลายเป็นชื่อ XML tag, nested object กลายเป็น child element\n4. Array กลายเป็น element ซ้ำกันที่มีชื่อ tag เดียวกัน\n5. เคล็ดลับ: แก้ไขชื่อ <root> เป็นชื่อ root element ที่ต้องการได้',
  },
  'json-to-csv': {
    description:
      'แปลง JSON array เป็น CSV — ส่งออกข้อมูลไปยัง Excel, Google Sheets หรือเครื่องมือ spreadsheet อื่นๆ ได้ทันที',
    longDescription:
      'แปลง JSON array ให้กลายเป็น CSV rows โดยดึง header มาจาก key ของ object โดยอัตโนมัติ แต่ละ item ใน array จะกลายเป็น 1 row ค่าที่มี comma หรือขึ้นบรรทัดใหม่จะถูก quote ตามมาตรฐาน RFC 4180 เหมาะสำหรับ pipeline ส่งออกข้อมูล, สร้าง report จาก API response หรือเตรียม dataset สำหรับ import ลงในฐานข้อมูลหรือเครื่องมือ BI',
    howToUse:
      '1. วาง JSON array (ที่มี object เป็น item) ลงในช่องซ้าย\n2. Column header จะถูกดึงมาจาก key ของ object โดยอัตโนมัติ\n3. Object แต่ละตัวใน array กลายเป็น 1 row ใน CSV\n4. คัดลอก output ไปวางใน Excel, Google Sheets หรือบันทึกเป็นไฟล์ .csv\n5. เคล็ดลับ: Object ทุกตัวควรมี key เดียวกันเพื่อให้ column สม่ำเสมอ',
  },
  'json-to-sql': {
    description:
      'สร้าง SQL CREATE TABLE และ INSERT statement จาก JSON array — สร้างโครงสร้างฐานข้อมูลจากข้อมูลจริงได้ทันที',
    longDescription:
      'แปลง JSON array ให้กลายเป็น SQL script ที่พร้อมใช้งาน ระบบจะสร้าง CREATE TABLE statement โดยอนุมาน column type จากข้อมูลจริง (TEXT, NUMERIC, BOOLEAN) และสร้าง INSERT statement 1 บรรทัดต่อ JSON object ค่า NULL และ key ที่หายไปถูกจัดการอย่างเหมาะสม ช่วยประหยัดเวลาได้มากเมื่อมีข้อมูลตัวอย่างจาก API และต้องการสร้าง table ในฐานข้อมูล relational โดยไม่ต้องเขียน SQL เอง',
    howToUse:
      '1. วาง JSON array of objects ลงในช่องซ้าย\n2. ระบบจะอนุมาน column type จากค่าข้อมูล\n3. CREATE TABLE block จะอยู่ด้านบน ตามด้วย INSERT statement\n4. เปลี่ยน "table_name" เป็นชื่อ table จริงก่อน run\n5. เคล็ดลับ: run CREATE TABLE ก่อน แล้วจึง execute INSERT statement',
  },
  'json-beautify': {
    description:
      'จัดรูปแบบ JSON ให้อ่านง่าย พร้อม indentation ที่ถูกต้อง — ยังช่วย validate ไวยากรณ์ JSON อีกด้วย',
    longDescription:
      'แปลง JSON ที่ compact หรือ minify แล้วให้กลายเป็น JSON ที่อ่านง่าย ด้วย indentation 2 ช่องต่อระดับ นอกจากนี้ยังทำหน้าที่ validate ไวยากรณ์ JSON ด้วย หากมีข้อผิดพลาดจะแสดง error message ที่ชัดเจน เป็นเครื่องมือที่นักพัฒนาใช้เป็นประจำสำหรับตรวจสอบ API response, debug JSON payload หรือดู config file',
    howToUse:
      '1. วาง JSON ที่ minify แล้วหรือรูปแบบยุ่งเหยิงลงในช่องซ้าย\n2. JSON ที่จัดรูปแบบแล้วจะปรากฏทันทีในช่องขวา\n3. หาก JSON มี syntax ผิดพลาด จะแสดง error message\n4. คัดลอก output ไปใช้ใน editor, เอกสาร หรือ log\n5. เคล็ดลับ: ใช้ validate JSON ก่อนส่งเป็น request body ของ API',
  },
  'json-minify': {
    description:
      'บีบอัด JSON โดยลบ whitespace และขึ้นบรรทัดใหม่ — ลดขนาด payload สำหรับ API response และการจัดเก็บ',
    longDescription:
      'ลบ whitespace, ขึ้นบรรทัดใหม่ และ indentation ทั้งหมดออกจาก JSON เพื่อให้ได้รูปแบบที่ compact ที่สุด JSON ที่ minify แล้วเหมาะสำหรับ API response ที่สำคัญเรื่อง bandwidth, ค่าใน localStorage, environment variable หรือสถานการณ์ใดก็ตามที่ต้องการลดขนาด JSON output ยังคงเหมือนเดิมทุกประการ มีเพียงรูปแบบที่ถูกลบออกเท่านั้น',
    howToUse:
      '1. วาง JSON ที่จัดรูปแบบแล้วลงในช่องซ้าย\n2. JSON ที่ minify แล้วจะปรากฏเป็น single line ในช่องขวา\n3. คัดลอกและใช้ใน API call, header หรือ storage\n4. เคล็ดลับ: รวมกับ Base64 Encode หากต้องการ embed JSON ใน URL หรือ header',
  },
  'json-to-js-object': {
    description:
      'แปลง JSON เป็น JavaScript object literal แบบไม่ใส่ quote ที่ key — ได้ syntax ที่ดูเป็นธรรมชาติกว่าสำหรับ JS source file',
    longDescription:
      'JSON บังคับให้ key ทุกตัวต้องเป็น quoted string แต่ JavaScript object literal อนุญาตให้ key ที่เป็น valid identifier ไม่ต้องใส่ quote ได้ converter นี้แปลง JSON ให้กลายเป็น JS object syntax โดยลบ quote ออกจาก key ที่ไม่จำเป็น แต่ยังคง quote ไว้สำหรับ string value เหมาะสำหรับ config file, mock data หรือสถานการณ์ที่ต้องการ JS object syntax แทน JSON',
    howToUse:
      '1. วาง JSON ลงในช่องซ้าย\n2. Output จะเป็น const data = { ... }; ที่ key ที่เป็น valid identifier จะไม่มี quote\n3. Key ที่มีอักขระพิเศษหรือช่องว่างยังคงถูก quote ไว้\n4. คัดลอกและวางลงในไฟล์ .js โดยตรง\n5. เคล็ดลับ: นี่คือ JavaScript ที่ valid แต่ไม่ใช่ JSON ที่ valid อย่าใช้ในที่ที่ต้องการ JSON จริงๆ',
  },
  // ── YAML ─────────────────────────────────────────────────────────────────
  'yaml-to-json': {
    description:
      'แปลง YAML config file เป็น JSON — parse Docker Compose, Kubernetes, GitHub Actions และ config แบบ YAML อื่นๆ ได้ทันที',
    longDescription:
      'แปลง YAML document ใดก็ได้ให้กลายเป็น JSON ที่จัดรูปแบบแล้ว รองรับ YAML spec เต็มรูปแบบ รวมถึง multi-line string, anchor และ alias, complex mapping และ nested sequence เป็นเครื่องมือสำคัญสำหรับนักพัฒนาที่ต้องการประมวลผล YAML config ด้วย code, ส่งข้อมูล YAML ไปยัง JSON-only API หรือตรวจสอบโครงสร้าง YAML ที่ซับซ้อน',
    howToUse:
      '1. วาง YAML ลงในช่องซ้าย\n2. JSON output จะถูกสร้างขึ้นโดยอัตโนมัติ\n3. ตรวจสอบว่า YAML anchor (&anchor, *alias) ถูก resolve ถูกต้องใน output\n4. คัดลอก JSON เพื่อใช้ใน API, code หรือการแปลงต่อไป\n5. เคล็ดลับ: หากได้รับ error ให้ตรวจสอบว่าไม่มี tab character ใน YAML เพราะ YAML ต้องใช้ space เท่านั้น',
  },
  'yaml-to-xml': {
    description:
      'แปลง YAML เป็น XML — เชื่อม YAML config กับระบบที่ต้องการ XML input',
    longDescription:
      'แปลงข้อมูล YAML ให้กลายเป็น XML document ที่มีโครงสร้างถูกต้อง YAML mapping กลายเป็น XML element ที่ซ้อนกัน และ sequence กลายเป็น element ที่ซ้ำกัน พร้อม declaration <?xml?> ในผลลัพธ์ เหมาะสำหรับทีมที่ต้องการ migrate จาก YAML config ไปยังระบบที่รับเฉพาะ XML เช่น SOAP service, legacy enterprise system หรือเครื่องมือ reporting แบบ XML',
    howToUse:
      '1. วาง YAML ลงในช่องซ้าย\n2. XML output จะถูกสร้างพร้อม element wrapper <root>\n3. YAML mapping กลายเป็น XML element ที่ซ้อนกัน, sequence กลายเป็น tag ที่ซ้ำกัน\n4. คัดลอก XML และนำไปใช้ใน integration หรือบันทึกเป็นไฟล์ .xml\n5. เคล็ดลับ: หากต้องการ XML ที่ตรงตาม schema เฉพาะ ควร validate output ด้วย XML validator',
  },
  'yaml-to-typescript': {
    description:
      'สร้าง TypeScript interface จากข้อมูล YAML — สร้าง typed schema สำหรับ config file แบบ YAML',
    longDescription:
      'แปลง YAML document ให้กลายเป็น TypeScript interface definition โดย parse YAML เป็น JSON ก่อน แล้วจึงอนุมาน TypeScript type จากโครงสร้าง เหมาะสำหรับ TypeScript project ที่ต้องการสร้าง type-safe wrapper รอบๆ YAML config file เช่น app config schema, environment variable definition หรือ API spec structure',
    howToUse:
      '1. วาง YAML document ลงในช่องซ้าย\n2. TypeScript interface จะถูกสร้างขึ้นใน output\n3. YAML mapping ระดับบนสุดจะกลายเป็น interface "Root"\n4. คัดลอก interface ไปใช้ในไฟล์ .ts ของ project\n5. เคล็ดลับ: ใช้ร่วมกับ js-yaml library เพื่อ load และ type-check config ตอน runtime',
  },
  // ── XML ──────────────────────────────────────────────────────────────────
  'xml-to-json': {
    description:
      'แปลง XML เป็น JSON — modernize SOAP API, parse RSS feed และประมวลผลข้อมูล XML แบบเก่าได้ง่ายๆ',
    longDescription:
      'แปลง XML ให้กลายเป็น JSON โดยรักษา attribute (prefix ด้วย @_), nested element และ text content ไว้ครบถ้วน ใช้ fast-xml-parser ที่จัดการ XML ที่ซับซ้อนได้ถูกต้อง รวมถึง namespace, CDATA section และ mixed content จำเป็นสำหรับนักพัฒนาที่ modernize SOAP-based service, consume RSS/Atom feed หรือ integrate กับระบบ enterprise ที่ output XML',
    howToUse:
      '1. วาง XML document ลงในช่องซ้าย\n2. JSON output จะถูกสร้างขึ้น โดย XML attribute จะปรากฏเป็น key แบบ @_attributeName\n3. Nested element กลายเป็น nested JSON object, element ที่ซ้ำกันกลายเป็น array\n4. คัดลอก JSON เพื่อประมวลผลต่อหรือใช้ใน API\n5. เคล็ดลับ: XML ที่มี namespace prefix (เช่น ns:element) จะคง prefix ไว้ใน JSON key',
  },
  'xml-to-yaml': {
    description:
      'แปลง XML เป็น YAML ที่อ่านง่าย — migrate XML config ไปยัง YAML-based tooling สมัยใหม่',
    longDescription:
      'Parse XML document และสร้าง YAML output ที่อ่านง่ายกว่า เหมาะสำหรับทีมที่กำลัง transition จาก XML-based config system (Maven, Ant, Spring XML เก่า) มายัง YAML-based alternative (Kubernetes, Docker Compose, GitHub Actions) XML attribute จะถูกรักษาไว้ และ nested element จะกลายเป็น YAML mapping ที่ indent อย่างเหมาะสม',
    howToUse:
      '1. วาง XML ลงในช่องซ้าย\n2. YAML output จะถูกสร้างพร้อม indentation ที่ถูกต้อง\n3. XML attribute จะปรากฏเป็น key ที่มี prefix @_ (ตาม fast-xml-parser)\n4. คัดลอก YAML และปรับใช้ใน config file\n5. เคล็ดลับ: อาจต้องลบ @_ prefix ออกจาก attribute key ด้วยตนเอง ขึ้นอยู่กับการใช้งาน',
  },
  'xml-beautify': {
    description:
      'จัดรูปแบบ XML ให้อ่านง่ายด้วย indentation ที่ถูกต้อง — แก้ไข XML ที่ minify แล้วหรือรูปแบบยุ่งเหยิงได้ทันที',
    longDescription:
      'แปลง XML ที่ minify แล้ว, single-line หรือ indent ไม่ถูกต้องให้กลายเป็น XML ที่จัดรูปแบบสวยงามด้วย indentation 2 ช่องต่อระดับ Self-closing tag และ void element ถูกจัดการอย่างถูกต้อง เหมาะสำหรับอ่าน API response, debug XML payload หรือเตรียม XML document สำหรับเอกสารและ code review',
    howToUse:
      '1. วาง XML ที่ minify แล้วหรือรูปแบบยุ่งเหยิงลงในช่องซ้าย\n2. XML ที่จัดรูปแบบแล้วจะปรากฏพร้อม indentation ที่เหมาะสม\n3. Declaration <?xml?> จะถูกรักษาไว้ที่ต้น\n4. คัดลอก XML ที่จัดรูปแบบแล้วไปใช้ใน editor หรือเอกสาร\n5. เคล็ดลับ: จัดรูปแบบก่อนแก้ไข XML ด้วยตนเอง จะทำงานได้ง่ายกว่ามาก',
  },
  // ── CSV ──────────────────────────────────────────────────────────────────
  'csv-to-json': {
    description:
      'แปลง CSV เป็น JSON array — parse header, อนุมาน data type และจัดการ quoted field ได้โดยอัตโนมัติ',
    longDescription:
      'แปลงข้อมูล CSV ให้กลายเป็น JSON array of objects แต่ละ row กลายเป็น object และ column header กลายเป็น key ระบบอนุมาน data type อัตโนมัติ: ตัวเลขกลายเป็น number, "true"/"false" กลายเป็น boolean และ field ว่างกลายเป็น null Field ที่ quote แล้วซึ่งมี comma หรือขึ้นบรรทัดใหม่ถูก parse ถูกต้องตามมาตรฐาน CSV เหมาะสำหรับ data processing pipeline, import spreadsheet data เข้า web app หรือเตรียมข้อมูลสำหรับ API',
    howToUse:
      '1. วาง CSV data (ที่มี header row) ลงในช่องซ้าย\n2. JSON output จะถูกสร้างเป็น array of objects\n3. Row แรกจะถูกใช้เป็น header (ชื่อ column)\n4. Data type จะถูกอนุมานโดยอัตโนมัติ (number, boolean, null)\n5. เคล็ดลับ: หาก CSV ใช้ semicolon (;) เป็นตัวคั่น ให้แทนที่ด้วย comma ก่อน',
  },
  // ── Code ─────────────────────────────────────────────────────────────────
  'typescript-to-javascript': {
    description:
      'ลบ TypeScript type annotation และสร้าง JavaScript ที่สะอาด — ลบ interface, generic, type cast และ access modifier',
    longDescription:
      'แปลง TypeScript source code เป็น JavaScript ธรรมดาโดยลบ type annotation, interface และ type declaration, generic type parameter, "as" type cast, non-null assertion (!), readonly keyword และ access modifier (public, private, protected) ออก converter ใช้ regex-based stripping ดังนั้น generic ที่ซับซ้อนอาจต้องแก้ไขด้วยตนเอง เหมาะสำหรับแชร์ code กับ project ที่ไม่ใช้ TypeScript หรือ publish JavaScript package',
    howToUse:
      '1. วาง TypeScript code ลงในช่องซ้าย\n2. JavaScript output จะถูกสร้างโดยลบ type ออกแล้ว\n3. ตรวจสอบ output ว่ายังมี type syntax ที่ต้องลบออกด้วยตนเองหรือไม่\n4. อ่าน warning ที่แสดงใต้ output panel\n5. เคล็ดลับ: สำหรับ production ควรใช้ TypeScript compiler (tsc) หรือ esbuild เพื่อ transpile ที่แม่นยำกว่า',
  },
  'javascript-to-typescript': {
    description:
      'เพิ่ม TypeScript type annotation เบื้องต้นให้ JavaScript — แปลง require() เป็น import และเพิ่ม type hint',
    longDescription:
      'แปลง JavaScript เป็น TypeScript แบบ best-effort โดยเปลี่ยน CommonJS require() เป็น ES module import และเพิ่ม type hint เบื้องต้นให้ arrow function ผลลัพธ์เป็นจุดเริ่มต้นสำหรับ adopt TypeScript ใน JavaScript project ยังต้องเพิ่ม specific type ด้วยตนเองเพื่อ type safety เต็มรูปแบบ เหมาะสำหรับการเข้าใจว่าต้องเปลี่ยนอะไรบ้างและจัดการ boilerplate ออกก่อน',
    howToUse:
      '1. วาง JavaScript code ลงในช่องซ้าย\n2. Output จะมี import statement และ type hint เบื้องต้น\n3. อ่าน warning เกี่ยวกับการ refine type ด้วยตนเอง — นี่เป็นจุดเริ่มต้น ไม่ใช่การแปลงที่สมบูรณ์\n4. เปิด output ใน TypeScript project และเพิ่ม specific type\n5. เคล็ดลับ: ใช้ TypeScript language server (เช่นใน VS Code) เพื่อดูว่า type ไหนยังต้องระบุ',
  },
  // ── Markup ───────────────────────────────────────────────────────────────
  'markdown-to-html': {
    description:
      'แปลง Markdown เป็น HTML page ที่สมบูรณ์ — รองรับ GitHub Flavored Markdown รวมถึง table, task list และ code block',
    longDescription:
      'แปลง Markdown document ให้กลายเป็น HTML page เต็มรูปแบบพร้อม style sheet ในตัว รองรับ GitHub Flavored Markdown (GFM) ครบ: heading, bold/italic, strikethrough, inline code, fenced code block, blockquote, ordered/unordered list, task list, table และ horizontal rule ผลลัพธ์เป็นไฟล์ HTML ที่ครบในตัวเอง พร้อมเปิดในเบราว์เซอร์หรือฝังในระบบเอกสาร',
    howToUse:
      '1. วาง Markdown ลงในช่องซ้าย\n2. HTML page เต็มรูปแบบจะถูกสร้างขึ้น (พร้อม <html>, <head> และ <body>)\n3. บันทึก output เป็นไฟล์ .html แล้วเปิดในเบราว์เซอร์ได้\n4. หากต้องการเฉพาะ HTML fragment ให้คัดลอกเฉพาะส่วนเนื้อหาใน <body>\n5. เคล็ดลับ: ใช้ fenced code block (```language) เพื่อแสดง code ใน output อย่างสวยงาม',
  },
  'html-to-markdown': {
    description:
      'แปลง HTML เป็น Markdown ที่สะอาด — เหมาะสำหรับย้าย web content ไปยัง README, wiki หรือ platform เอกสาร',
    longDescription:
      'แปลง HTML markup ให้กลายเป็น Markdown ที่อ่านง่ายโดยใช้ Turndown ซึ่งเป็น HTML-to-Markdown converter ที่แข็งแกร่ง รองรับ heading (h1–h6), paragraph, bold, italic, inline code, code block, blockquote, ordered/unordered list, link, image และ table output ใช้ ATX-style heading (#, ##) และ fenced code block เข้ากันได้กับ GitHub, GitLab, Notion, Confluence และ platform เอกสารส่วนใหญ่',
    howToUse:
      '1. วาง HTML (full page หรือ fragment) ลงในช่องซ้าย\n2. Markdown output จะถูกสร้างขึ้นทันที\n3. Output ใช้ # สำหรับ heading, - สำหรับ list item และ ``` สำหรับ code block\n4. คัดลอกและวางใน README.md, wiki หรือเครื่องมือเอกสาร\n5. เคล็ดลับ: ลบ <script>, <style> และ <nav> tag ออกจาก HTML ก่อน เพื่อให้ Markdown output สะอาดขึ้น',
  },
  'html-beautify': {
    description:
      'จัดรูปแบบ HTML ด้วย indentation ที่ถูกต้อง — แปลง HTML ที่ minify แล้วให้อ่านง่ายและ maintain ได้',
    longDescription:
      'แปลง HTML ที่ minify แล้วหรือ indent ไม่ถูกต้องให้กลายเป็น HTML ที่จัดรูปแบบสวยงามด้วย indentation 2 ช่องต่อระดับ Void element (br, img, input ฯลฯ) ถูกจัดการถูกต้องโดยไม่เพิ่ม closing tag ช่วยให้นักพัฒนาอ่านและแก้ไข HTML ได้ง่ายขึ้น ทำ code review หรือเตรียม HTML สำหรับ version control',
    howToUse:
      '1. วาง HTML ที่ minify แล้วหรือรูปแบบยุ่งเหยิงลงในช่องซ้าย\n2. HTML ที่จัดรูปแบบแล้วจะปรากฏพร้อม indentation ที่เหมาะสม\n3. Void element (br, img, input, meta, link) จะไม่มี closing tag\n4. คัดลอก output ไปใช้ใน editor หรือ version control\n5. เคล็ดลับ: สำหรับ HTML formatting ระดับ production ควรใช้ Prettier ใน dev environment',
  },
  'html-minify': {
    description:
      'บีบอัด HTML โดยลบ whitespace และ comment — ลดขนาดหน้าเว็บเพื่อโหลดเร็วขึ้น',
    longDescription:
      'บีบอัด HTML โดยลบ HTML comment ออก, รวม whitespace หลายตัวให้เป็นช่องเดียว และลบ whitespace ระหว่าง tag ผลลัพธ์เป็น HTML compact ที่มีขนาดเล็กลงและโหลดได้เร็วขึ้น เนื้อหา attribute และ inline script/style ทั้งหมดยังคงอยู่ครบถ้วน',
    howToUse:
      '1. วาง HTML document ลงในช่องซ้าย\n2. HTML ที่ minify แล้วจะปรากฏเป็น compact string ในช่องขวา\n3. HTML comment (<!-- -->) ทั้งหมดจะถูกลบออก\n4. คัดลอกและใช้ใน build pipeline หรือระบบ delivery\n5. เคล็ดลับ: สำหรับ minification ขั้นสูง (attribute quoting, optional tag removal) ใช้ html-minifier-terser',
  },
  // ── Encoding ─────────────────────────────────────────────────────────────
  'base64-encode': {
    description:
      'เข้ารหัสข้อความเป็น Base64 — ใช้ใน HTTP Basic Auth, email attachment, data URI และ API token',
    longDescription:
      'แปลง UTF-8 text ใดก็ได้เป็น Base64 encoding ทันที Base64 เป็นสิ่งจำเป็นในหลายบริบท: HTTP Basic Authentication header (username:password), embed binary data ใน JSON หรือ XML, data URI สำหรับ inline image และ font, email MIME attachment และการ encode API key หรือ secret สำหรับการส่งข้อมูล รองรับ Unicode อย่างถูกต้อง',
    howToUse:
      '1. พิมพ์หรือวางข้อความ (รวมถึง Unicode/emoji) ลงในช่องซ้าย\n2. Base64 encoded string จะปรากฏทันทีในช่องขวา\n3. คัดลอก output ไปใช้ใน Authorization header, data URI หรือ payload\n4. เคล็ดลับ: สำหรับ HTTP Basic Auth ให้ encode "username:password" แล้วเพิ่ม "Basic " ไว้ข้างหน้า header value',
  },
  'base64-decode': {
    description:
      'ถอดรหัส Base64 string กลับเป็นข้อความธรรมดา — แปลงกลับจาก token, payload หรือ API response',
    longDescription:
      'แปลง Base64 encoded string กลับเป็น UTF-8 text ต้นฉบับ รองรับทั้ง standard Base64 (ใช้ + และ /) และ URL-safe Base64 (ใช้ - และ _) decoder จัดการ Unicode content ได้ถูกต้อง เป็นประโยชน์สำหรับ decode JWT payload, ตรวจสอบ HTTP Basic Auth credential, อ่าน Base64 encoded API response หรือ debug encoded data ระหว่างการส่งข้อมูล',
    howToUse:
      '1. วาง Base64 string ลงในช่องซ้าย\n2. ข้อความที่ decode แล้วจะปรากฏในช่องขวา\n3. หาก string มี whitespace จะถูก trim โดยอัตโนมัติ\n4. URL-safe Base64 (อักขระ - และ _) ก็รองรับด้วย\n5. เคล็ดลับ: JWT token มี 3 ส่วน Base64 คั่นด้วยจุด — decode แต่ละส่วนแยกกัน หรือใช้เครื่องมือ JWT Decoder',
  },
  'url-encode': {
    description:
      'Percent-encode URL และ query string value — ส่งผ่าน special character, ช่องว่าง และ non-ASCII ใน URL อย่างปลอดภัย',
    longDescription:
      'Encode string โดยใช้ percent-encoding (URL encoding) เพื่อให้นำไปใช้ใน URL query parameter, path segment หรือ form submission ได้อย่างปลอดภัย ช่องว่างกลายเป็น %20, & กลายเป็น %26, = กลายเป็น %3D และอักขระที่ไม่ใช่ ASCII (รวมถึงภาษาไทย, จีน, emoji) จะถูก encode เป็น UTF-8 byte sequence ในรูปแบบ percent',
    howToUse:
      '1. วาง URL หรือ string ที่ต้องการ encode ลงในช่องซ้าย\n2. Percent-encoded output จะปรากฏทันที\n3. ใช้ output ใน query parameter, path segment หรือ form data\n4. เคล็ดลับ: encode เฉพาะส่วน value ของ query parameter ไม่ใช่ทั้ง URL เพราะการ encode & และ = จะทำให้ URL structure เสีย',
  },
  'url-decode': {
    description:
      'Decode URL ที่ percent-encode แล้วให้กลับเป็นข้อความที่อ่านได้ — แปลง %20, %26 และ escape sequence อื่นๆ',
    longDescription:
      'แปลง URL string ที่ percent-encode แล้วให้กลับเป็นรูปแบบที่อ่านได้ เช่น %20 → ช่องว่าง, %26 → &, %3D → = และ multi-byte sequence สำหรับอักขระที่ไม่ใช่ ASCII เช่น ภาษาไทยหรือจีน เป็นประโยชน์มากสำหรับ debug API call, อ่าน URL ที่ encode แล้วจาก browser, ทำความเข้าใจ redirect parameter และตรวจสอบ log file ที่มี URL แบบ encode',
    howToUse:
      '1. วาง URL หรือ string ที่ percent-encode แล้วลงในช่องซ้าย\n2. ข้อความที่ decode แล้วจะปรากฏในช่องขวา\n3. คัดลอก string ที่ decode แล้วเพื่อ debug หรือแสดงผล\n5. เคล็ดลับ: หาก URL ดูผิดปกติ (เช่น แสดง %2F แทน /) ให้วางที่นี่เพื่ออ่าน path ที่ decode แล้ว',
  },
  'jwt-decode': {
    description:
      'Decode และตรวจสอบ JWT token — ดู header, payload claim, issued-at, expiry และสถานะหมดอายุ',
    longDescription:
      'Decode JSON Web Token (JWT) และแสดงส่วนประกอบทั้งสาม: header (algorithm และ token type), payload (claim เช่น sub, name, iat, exp) และ raw signature เครื่องมือยังคำนวณ date ที่อ่านได้สำหรับ iat และ exp รวมถึงแจ้งว่า token หมดอายุแล้วหรือไม่ หมายเหตุ: เครื่องมือนี้ไม่ verify signature — decode เท่านั้น อย่าพึ่งพา client-side JWT decode สำหรับการตัดสินใจด้านความปลอดภัย',
    howToUse:
      '1. วาง JWT (string eyJ... ทั้งหมด) ลงในช่องซ้าย\n2. Header, payload และ signature ที่ decode แล้วจะแสดงในรูปแบบ JSON\n3. ส่วน _meta จะแสดง algorithm, วันที่ issuedAt, วันที่ expiresAt และ flag isExpired\n4. ใช้ดู claim เช่น user ID, role หรือเวลาหมดอายุระหว่าง debug\n5. คำเตือน: เครื่องมือนี้ไม่ verify signature — JWT ที่ decode แล้วไม่ใช่หลักฐานความถูกต้อง',
  },
  'html-entities-encode': {
    description:
      'Encode อักขระพิเศษ HTML เป็น entity — แสดง user input, code snippet และ HTML ดิบบนหน้าเว็บอย่างปลอดภัย',
    longDescription:
      'แปลงอักขระที่มีความหมายพิเศษใน HTML — <, >, &, ", \' — เป็น HTML entity เทียบเท่า (&lt;, &gt;, &amp;, &quot;, &#039;) นี่คือวิธีที่ถูกต้องในการแสดง user-generated content, code sample หรือ HTML tag ดิบบนหน้าเว็บโดยไม่ให้ browser ตีความเป็น markup จำเป็นสำหรับการป้องกัน XSS (Cross-Site Scripting) เมื่อ render user input ฝั่ง server',
    howToUse:
      '1. วางข้อความที่มีอักขระพิเศษลงในช่องซ้าย\n2. Output ที่ encode เป็น HTML entity แล้วจะปรากฏทางขวา\n3. คัดลอกและ embed output ใน HTML template ของคุณอย่างปลอดภัย\n4. เคล็ดลับ: encode user-generated content เสมอก่อน render ใน HTML เพื่อป้องกัน XSS attack',
  },
  'html-entities-decode': {
    description:
      'Decode HTML entity กลับเป็นอักขระธรรมดา — แปลง &lt;, &gt;, &amp; และ entity อื่นๆ เป็นข้อความอ่านได้',
    longDescription:
      'แปลง HTML entity (&lt;, &gt;, &amp;, &quot;, &#039;, &apos;, &nbsp;) กลับเป็นอักขระต้นฉบับ เหมาะสำหรับอ่าน HTML-encoded content ที่เก็บใน database, API หรือ CMS system รวมถึงช่วย decode double-encoded HTML entity ที่บางครั้งปรากฏใน content ที่ scrape หรือ export มา',
    howToUse:
      '1. วางข้อความที่ encode เป็น HTML entity แล้วลงในช่องซ้าย\n2. ข้อความธรรมดาที่ decode แล้วจะปรากฏทางขวา\n3. Entity ทั่วไปเช่น &amp;, &lt;, &gt;, &quot; ล้วนถูก decode แล้ว\n4. เคล็ดลับ: หากเห็น &amp;amp; (double encoding) ให้วาง output กลับผ่านเครื่องมือนี้อีกครั้งเพื่อ decode ชั้นที่สอง',
  },
  'decimal-to-binary': {
    description:
      'แปลงเลขฐาน 10 เป็นฐาน 2 (binary) พร้อมแสดงเลขฐาน 8 และฐาน 16 ให้ด้วย',
    longDescription:
      'ป้อนเลขจำนวนเต็มฐาน 10 แล้วดู binary (ฐาน 2) พร้อม octal (ฐาน 8) และ hexadecimal (ฐาน 16) ที่แสดงควบคู่ เป็นเครื่องมือพื้นฐานสำหรับนักศึกษา computer science, นักพัฒนา embedded system หรือใครก็ตามที่ทำงานกับ bit manipulation, permission (chmod), memory address หรือแนวคิด low-level programming',
    howToUse:
      '1. พิมพ์เลขจำนวนเต็มฐาน 10 ลงในช่องซ้าย (เช่น 255)\n2. Binary output จะแสดงพร้อม prefix 0b\n3. Octal (0o) และ hexadecimal (0x) แสดงเป็น reference เพิ่มเติม\n4. เคล็ดลับ: เลข 255 = 0b11111111 = 0xFF ซึ่งเป็นค่าสูงสุดของ unsigned byte 8-bit',
  },
  'binary-to-decimal': {
    description:
      'แปลงเลขฐาน 2 (binary) เป็นฐาน 10 พร้อมแสดง octal และ hexadecimal',
    longDescription:
      'ป้อนเลข binary (ใช้ 0 และ 1 เท่านั้น) แล้วแปลงเป็นเลขฐาน 10 เครื่องมือยังแสดง octal และ hexadecimal ด้วย prefix 0b เป็น optional และถูก strip ออกโดยอัตโนมัติ เหมาะสำหรับทำความเข้าใจ binary arithmetic, decode binary data, ทำงานกับ bitwise operation หรือศึกษา computer architecture',
    howToUse:
      '1. พิมพ์หรือวางเลข binary ลงในช่อง (เช่น 11111111 หรือ 0b11111111)\n2. ผลลัพธ์ decimal จะแสดงที่ด้านบนของ output\n3. Octal และ hexadecimal จะแสดงเป็น reference เพิ่มเติม\n4. เคล็ดลับ: Binary ที่ยาวกว่า 32 bit อาจเกิน safe integer range ของ JavaScript',
  },
  'decimal-to-hex': {
    description:
      'แปลงเลขฐาน 10 เป็น hexadecimal (ฐาน 16) — ใช้บ่อยใน web color, memory address และ low-level programming',
    longDescription:
      'ป้อนเลขจำนวนเต็มฐาน 10 แล้วรับ hexadecimal พร้อม prefix 0x Hexadecimal ใช้กันอย่างแพร่หลายใน web development (CSS color code), systems programming (memory address, register value), cryptography (hash output) และ debugging output ยังแสดง binary representation เป็น reference ด้วย',
    howToUse:
      '1. พิมพ์เลขฐาน 10 ลงในช่องซ้าย (เช่น 255)\n2. Hex output จะแสดงพร้อม prefix 0x (เช่น 0xFF)\n3. Binary representation แสดงด้านล่างเป็น reference\n4. เคล็ดลับ: CSS hex color ใช้ 6 hex digit — เช่น #1677FF ใช้เครื่องมือ Color Converter สำหรับการแปลง color แบบเต็มรูปแบบ',
  },
  'hex-to-decimal': {
    description:
      'แปลง hexadecimal เป็นเลขฐาน 10 — รองรับ prefix 0x และ hex digit ตัวใหญ่/ตัวเล็ก',
    longDescription:
      'ป้อน hexadecimal value (มีหรือไม่มี prefix 0x) แล้วแปลงเป็นเลขฐาน 10 เครื่องมือยังแสดง binary representation ด้วย เหมาะสำหรับอ่านค่า memory dump, color code, network protocol field หรือข้อมูลที่ hex-encode แล้วที่ต้องการค่า decimal',
    howToUse:
      '1. พิมพ์เลข hex ลงในช่อง (เช่น FF หรือ 0xFF หรือ ff)\n2. ผลลัพธ์ decimal จะแสดงใน output\n3. Binary representation แสดงเป็น reference\n4. เคล็ดลับ: สำหรับ CSS hex color ใช้ HEX to RGB/HSL converter เพื่อรับรายละเอียด color เต็มรูปแบบ',
  },
  'timestamp-to-date': {
    description:
      'แปลง Unix timestamp (วินาทีหรือมิลลิวินาที) เป็นวันที่อ่านได้ในทุก timezone — พร้อม ISO 8601, UTC และเวลาท้องถิ่น',
    longDescription:
      'ป้อน Unix timestamp แล้วดูวันที่และเวลาที่ตรงกันในหลายรูปแบบ: ISO 8601, string ที่อ่านได้, date-only, time-only และ UTC offset เครื่องมือตรวจจับอัตโนมัติว่า timestamp เป็นวินาทีหรือมิลลิวินาที (ตามขนาด) และสามารถเลือก timezone ใดก็ได้จาก option panel จำเป็นสำหรับ debug API log, ตรวจสอบ JWT expiry time และทำงานกับ time-series data',
    howToUse:
      '1. วาง Unix timestamp ลงในช่องซ้าย (เช่น 1716239022 สำหรับวินาที หรือ 1716239022000 สำหรับ ms)\n2. เครื่องมือตรวจจับวินาทีหรือมิลลิวินาทีโดยอัตโนมัติ\n3. เลือก timezone จาก dropdown ใน options panel\n4. Output แสดงวันเวลาใน timezone ที่เลือกและ UTC\n5. เคล็ดลับ: Field exp และ iat ใน JWT คือ Unix timestamp หน่วยวินาที — วางที่นี่เพื่ออ่านวันที่',
  },
  'date-to-timestamp': {
    description:
      'แปลง date string เป็น Unix timestamp — รองรับ ISO 8601 และรูปแบบวันที่อื่นๆ อีกมาก',
    longDescription:
      'ป้อน date string ในรูปแบบ ISO 8601 (2024-01-15T10:30:00Z) หรือรูปแบบอื่นๆ (2024-01-15, January 15 2024) แล้วรับ Unix timestamp ทั้งในหน่วยวินาทีและมิลลิวินาที output ยังแสดงวันที่ใน timezone ที่เลือกและ UTC เหมาะสำหรับสร้าง API request parameter, กำหนด expiry time หรือทำงานกับ date-based filter ในฐานข้อมูล',
    howToUse:
      '1. พิมพ์หรือวาง date string ลงในช่อง (เช่น 2024-01-15T10:30:00Z)\n2. Unix timestamp หน่วยวินาทีและมิลลิวินาทีจะแสดงใน output\n3. เลือก timezone จาก options เพื่อดู local time representation\n4. เคล็ดลับ: ใช้ ISO 8601 พร้อม timezone suffix (Z สำหรับ UTC หรือ +07:00 สำหรับเวลาไทย) เพื่อผลลัพธ์ที่แม่นยำที่สุด',
  },
  // ── Color ─────────────────────────────────────────────────────────────────
  'hex-to-rgb': {
    description:
      'แปลง HEX color เป็น RGB, RGBA, HSL, HSLA และ CSS custom property — ทุกรูปแบบในคลิกเดียว',
    longDescription:
      'ป้อน HEX color code (แบบ 3 หลักหรือ 6 หลัก) แล้วรับ color format เทียบเท่าทั้งหมดทันที: RGB, RGBA, HSL, HSLA, ค่า channel แต่ละตัว และ CSS custom property declaration พร้อมใช้ (--color-rgb, --color-hsl) เป็นเครื่องมือสำคัญสำหรับ frontend developer และ UI designer ที่ทำงานกับ design token, Tailwind config, CSS variable หรือระบบ color ข้ามรูปแบบ',
    howToUse:
      '1. พิมพ์หรือวาง HEX color ลงในช่องซ้าย (เช่น #1677FF หรือ #F53)\n2. Color format ทั้งหมดจะปรากฏในช่องขวาในรูปแบบ JSON\n3. คัดลอก format ที่ต้องการ (rgb(), hsl() หรือ CSS variable)\n4. Field css_variables ให้ :root variable declaration พร้อมวาง\n5. เคล็ดลับ: HEX code 3 หลัก (#F53) จะถูกขยายเป็น 6 หลัก (#FF5533) ก่อนแปลง',
  },
  'rgb-to-hex': {
    description:
      'แปลง RGB/RGBA เป็น HEX, HSL, HSLA และ CSS variable — ทุก color format จาก RGB input เดียว',
    longDescription:
      'ป้อน RGB หรือ RGBA color value แล้วรับทุก representation ที่เทียบเท่า: HEX code, HSL, HSLA, ค่า channel แต่ละตัว และ CSS custom property declaration รองรับทั้งรูปแบบ function rgb(r, g, b) และค่า comma-separated (255, 87, 51) เหมาะสำหรับ designer และ developer ที่ต้องแปลง color ระหว่าง design tool, codebase หรือ style system ต่างๆ',
    howToUse:
      '1. วาง RGB color value ลงในช่องซ้าย (เช่น rgb(22, 119, 255) หรือ 22, 119, 255)\n2. Color format เทียบเท่าทั้งหมดจะปรากฏใน output ในรูปแบบ JSON\n3. คัดลอก HEX, HSL หรือ CSS variable ที่ต้องการ\n4. เคล็ดลับ: ค่า alpha จาก rgba() จะถูกระบุ แต่การแปลงจะถือว่า color มี opacity เต็ม 100% สำหรับ HEX และ HSL output',
  },
  'hsl-to-rgb': {
    description:
      'แปลง HSL color เป็น HEX และ RGB — พร้อม CSS variable และ color representation ครบถ้วนใน output เดียว',
    longDescription:
      'ป้อน HSL หรือ HSLA color value แล้วรับ HEX code, RGB, RGBA และ CSS custom property declaration ที่เทียบเท่า HSL (Hue, Saturation, Lightness) เป็นที่นิยมใน CSS และ design tool เพราะ intuitive กว่า RGB สำหรับการ manipulate color — ปรับ saturation หรือ lightness ได้ตรงไปตรงมา เหมาะสำหรับแปลง export จาก design tool (Figma, Sketch) เป็น HEX หรือ RGB สำหรับใช้ใน code',
    howToUse:
      '1. วาง HSL color ลงในช่องซ้าย (เช่น hsl(213, 100%, 54%) หรือ 213, 100, 54)\n2. HEX, RGB, RGBA, HSLA และ CSS variable ที่เทียบเท่าจะปรากฏใน output\n3. คัดลอก format ที่ต้องการสำหรับ CSS file หรือ design system\n4. เคล็ดลับ: Hue คือ 0–360 (องศาบน color wheel), Saturation และ Lightness คือ 0–100 (เปอร์เซ็นต์)',
  },
  // ── CSS ──────────────────────────────────────────────────────────────────
  'css-minify': {
    description:
      'บีบอัด CSS โดยลบ comment, whitespace และ semicolon ที่ไม่จำเป็น — ลดขนาด stylesheet เพื่อโหลดหน้าเว็บเร็วขึ้น',
    longDescription:
      'บีบอัด CSS โดยลบ comment ทั้งหมด, รวม whitespace, ลบ space รอบๆ selector และ declaration และลบ semicolon สุดท้ายก่อน closing brace ผลลัพธ์เป็น CSS compact ที่ทำงานเหมือนกันทุกประการแต่มีขนาดเล็กกว่า เหมาะสำหรับ production deployment, embed style ใน HTML page หรือลดค่า CDN transfer',
    howToUse:
      '1. วาง CSS code ลงในช่องซ้าย\n2. CSS ที่ minify แล้วจะถูกสร้างเป็น compact single-line output\n3. Comment /* */ ทั้งหมดจะถูกลบออก\n4. คัดลอก CSS ที่ minify แล้วไปใช้ใน production build หรือ <style> tag\n5. เคล็ดลับ: สำหรับ project ขนาดใหญ่ ควรรวม CSS build tool (PostCSS, esbuild) ไว้ใน CI pipeline',
  },
  'css-beautify': {
    description:
      'จัดรูปแบบ CSS ให้อ่านง่ายพร้อม indentation และ line break ที่เหมาะสม — สร้าง stylesheet ที่ดูแลรักษาได้',
    longDescription:
      'แปลง CSS ที่ minify แล้ว, auto-generated หรือรูปแบบยุ่งเหยิงให้กลายเป็น CSS ที่จัดรูปแบบสวยงาม มี property ละบรรทัด, brace วางอย่างเหมาะสม และ spacing สม่ำเสมอ ทำให้ CSS อ่านได้ง่ายขึ้น debug ได้ง่ายขึ้น และ maintain ใน version control ได้ดีขึ้น เหมาะหลังจาก copy style จาก browser DevTools, vendor stylesheet ที่ minify แล้ว หรือ CSS ที่สร้างจาก design tool',
    howToUse:
      '1. วาง CSS ที่ minify แล้วหรือรูปแบบยุ่งเหยิงลงในช่องซ้าย\n2. CSS ที่จัดรูปแบบแล้วจะปรากฏใน output พร้อม property ละบรรทัด\n3. Selector และ brace จะอยู่ในบรรทัดของตัวเอง\n4. คัดลอก output ไปใช้ใน stylesheet หรือ editor\n5. เคล็ดลับ: ใช้ inspect และทำความเข้าใจ CSS ที่ auto-generate จาก Tailwind หรือ CSS-in-JS library',
  },
  'css-to-scss': {
    description:
      'แปลง CSS custom property (CSS variable) เป็น SCSS variable — migrate จาก vanilla CSS ไปสู่ SCSS design system',
    longDescription:
      'แปลง CSS :root variable declaration (--variable-name: value) เป็น SCSS variable syntax ($variable_name: value) และแทนที่การใช้ var(--variable-name) ทั่วทั้ง stylesheet ด้วย $variable_name ที่ตรงกัน Dash ในชื่อ variable จะถูกแปลงเป็น underscore สำหรับ SCSS เป็น starting point ที่ดีสำหรับ migrate CSS custom properties system ไปสู่ SCSS แม้ว่า nesting และ mixin จะต้องเพิ่มด้วยตนเอง',
    howToUse:
      '1. วาง CSS ที่มี :root variable ลงในช่องซ้าย\n2. Output จะแทนที่ :root { --var: value } ด้วย $var: value declaration\n3. การใช้ var(--var) จะกลายเป็น $var reference ใน output\n4. คัดลอก SCSS ไปใช้ในไฟล์ .scss แล้วเพิ่ม nesting ด้วยตนเอง\n5. เคล็ดลับ: Dash ในชื่อ CSS variable (--primary-color) จะกลายเป็น underscore ใน SCSS ($primary_color)',
  },
  'css-to-tailwind': {
    description:
      'แปลง CSS declaration เป็น Tailwind CSS utility class — ค้นหา Tailwind class ที่ถูกต้องสำหรับ style ของคุณ',
    longDescription:
      'ป้อน CSS property declaration แล้วรับ Tailwind CSS utility class ที่เทียบเท่า รองรับ property ทั่วไป: layout (display, position, overflow), flexbox (flex-direction, align-items, justify-content), sizing (width, height) และ typography (text-align, font-weight) Property ที่ไม่มี Tailwind class ตรงๆ จะแสดงเป็น comment เพื่อให้จัดการด้วยตนเอง เหมาะสำหรับนักพัฒนาที่ migrate จาก CSS ไป Tailwind หรือกำลังเรียนรู้ว่า Tailwind class ตัวไหนตรงกับ CSS property ใด',
    howToUse:
      '1. วาง CSS declaration (ทีละบรรทัด ไม่มี selector) ลงในช่องซ้าย\n2. Tailwind class ที่ match จะ output เป็น string class="..."\n3. Property ที่ไม่ match จะปรากฏเป็น CSS comment ด้านล่าง\n4. คัดลอก class list และเพิ่มใน HTML element ของคุณ\n5. เคล็ดลับ: สำหรับค่า pixel ที่กำหนดเอง (เช่น padding: 12px) ใช้ arbitrary value ของ Tailwind (p-[12px]) ด้วยตนเอง',
  },
}

export default th
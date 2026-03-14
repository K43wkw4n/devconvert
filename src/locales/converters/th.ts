import type { ConverterLocaleMap } from './types'

const th: ConverterLocaleMap = {
  'json-to-typescript': {
    description: 'แปลง JSON เป็น TypeScript Interface พร้อม type ที่ถูกต้อง',
    longDescription: 'วาง JSON แล้วรับ TypeScript Interface ทันที รองรับ object ซ้อนกัน, array, optional fields และ union types เหมาะสำหรับนักพัฒนาที่ทำงานกับ REST API',
  },
  'json-to-javascript': {
    description: 'แปลง JSON เป็นการประกาศตัวแปร JavaScript const',
    longDescription: 'แปลงข้อมูล JSON เป็นการประกาศตัวแปร const ของ JavaScript เหมาะสำหรับการฝังข้อมูลโดยตรงในไฟล์ JavaScript หรือ Node.js',
  },
  'json-to-yaml': {
    description: 'แปลง JSON เป็นรูปแบบ YAML สำหรับ config และ Kubernetes',
    longDescription: 'แปลงข้อมูล JSON เป็นรูปแบบ YAML ซึ่งใช้กันอย่างแพร่หลายในไฟล์ config, CI/CD pipeline, Docker Compose และ Kubernetes รักษาประเภทข้อมูลทั้งหมดไว้ครบถ้วน',
  },
  'json-to-xml': {
    description: 'แปลงข้อมูล JSON เป็นรูปแบบ XML',
    longDescription: 'แปลงข้อมูล JSON เป็น XML ที่จัดรูปแบบแล้ว รองรับ object ซ้อนกัน, array และทุกประเภทข้อมูลของ JSON เหมาะสำหรับ SOAP API และระบบเดิมที่ต้องการ XML',
  },
  'json-to-csv': {
    description: 'แปลง JSON array เป็น CSV สำหรับ Excel และ Spreadsheet',
    longDescription: 'แปลง JSON array เป็นรูปแบบ CSV ดึง header จาก key ของ object อัตโนมัติ เหมาะสำหรับส่งออกข้อมูลไปยัง Excel, Google Sheets หรือนำเข้าฐานข้อมูล',
  },
  'json-to-sql': {
    description: 'สร้าง SQL CREATE TABLE และ INSERT จาก JSON',
    longDescription: 'แปลง JSON array เป็น SQL INSERT พร้อมสร้าง CREATE TABLE อัตโนมัติ ตรวจสอบประเภทคอลัมน์จากข้อมูล รองรับการจัดการค่า NULL',
  },
  'json-beautify': {
    description: 'จัดรูปแบบและทำให้ JSON อ่านง่าย',
    longDescription: 'จัดรูปแบบ JSON ที่บีบอัดหรือยุ่งเหยิงให้อ่านง่าย เพิ่ม indentation, ขึ้นบรรทัดใหม่ และตรวจสอบ syntax ของ JSON ด้วย',
  },
  'json-minify': {
    description: 'บีบอัด JSON โดยลบ whitespace ออก',
    longDescription: 'บีบอัด JSON โดยลบ whitespace และขึ้นบรรทัดใหม่ที่ไม่จำเป็นออกทั้งหมด ลดขนาดไฟล์สำหรับ API response และการจัดเก็บ',
  },
  'json-to-js-object': {
    description: 'แปลง JSON เป็น JavaScript object literal (key ไม่มีเครื่องหมายอัญประกาศ)',
    longDescription: 'แปลง JSON เป็น JavaScript object literal ที่ไม่ใส่เครื่องหมายอัญประกาศรอบ key ที่ไม่จำเป็น เหมาะสำหรับฝังข้อมูลในไฟล์ JS ให้โค้ดดูสะอาดขึ้น',
  },
  'yaml-to-json': {
    description: 'แปลงไฟล์ YAML config เป็นรูปแบบ JSON',
    longDescription: 'แปลงไฟล์ YAML เป็น JSON รองรับฟีเจอร์ YAML ทั้งหมด รวมถึง anchors, multi-line string และประเภทข้อมูลซับซ้อน เหมาะสำหรับ Docker Compose, Kubernetes และ GitHub Actions',
  },
  'yaml-to-xml': {
    description: 'แปลง YAML เป็นรูปแบบ XML',
    longDescription: 'แปลงข้อมูล YAML เป็นรูปแบบ XML เหมาะสำหรับแปลงไฟล์ config สำหรับระบบที่ต้องการ XML เป็น input',
  },
  'yaml-to-typescript': {
    description: 'สร้าง TypeScript Interface จากข้อมูล YAML',
    longDescription: 'แปลงไฟล์ YAML เป็น TypeScript interface definition เหมาะสำหรับสร้าง type จาก configuration schema',
  },
  'xml-to-json': {
    description: 'แปลง XML เป็นรูปแบบ JSON',
    longDescription: 'แปลง XML document เป็นรูปแบบ JSON เก็บรักษา attribute, nested element และ text content ไว้ครบถ้วน เหมาะสำหรับปรับปรุง SOAP API หรือข้อมูล XML รุ่นเก่า',
  },
  'xml-to-yaml': {
    description: 'แปลง XML เป็นรูปแบบ YAML',
    longDescription: 'แปลง XML document เป็นรูปแบบ YAML ได้ผลลัพธ์ที่อ่านง่ายสำหรับไฟล์ config และแลกเปลี่ยนข้อมูล',
  },
  'xml-beautify': {
    description: 'จัดรูปแบบและเพิ่ม indent ให้ XML',
    longDescription: 'จัดรูปแบบ XML document ด้วย indentation ที่ถูกต้อง ทำให้ XML ที่บีบอัดแล้วอ่านง่ายขึ้น',
  },
  'csv-to-json': {
    description: 'แปลงไฟล์ CSV เป็น JSON array',
    longDescription: 'แปลงข้อมูล CSV เป็น JSON array แยก header อัตโนมัติ รองรับ field ที่มีเครื่องหมายอัญประกาศ และตรวจสอบประเภทข้อมูล (ตัวเลข, boolean, null) เหมาะสำหรับ workflow ประมวลผลข้อมูล',
  },
  'typescript-to-javascript': {
    description: 'ลบ type TypeScript และแปลงเป็น JavaScript ล้วน',
    longDescription: 'ลบ type annotation, interface, generics และ access modifier ของ TypeScript เพื่อให้ได้ JavaScript ที่สะอาด เหมาะสำหรับแชร์โค้ดกับโปรเจกต์ที่ไม่ใช้ TypeScript',
  },
  'javascript-to-typescript': {
    description: 'แปลง JavaScript เป็น TypeScript พร้อม type annotation เบื้องต้น',
    longDescription: 'เพิ่ม TypeScript hint ให้กับโค้ด JavaScript แปลง require() เป็น import statement และเพิ่ม type annotation เบื้องต้น ควรเพิ่ม type ด้วยตนเองเพื่อผลลัพธ์ที่ดีที่สุด',
  },
  'markdown-to-html': {
    description: 'แปลง Markdown เป็น HTML พร้อม template หน้าครบถ้วน',
    longDescription: 'แปลง Markdown เป็น HTML รองรับ GitHub Flavored Markdown (GFM) รวมถึง table, task list, strikethrough และ fenced code block สร้างหน้า HTML สมบูรณ์พร้อม style พื้นฐาน',
  },
  'html-to-markdown': {
    description: 'แปลง HTML เป็นรูปแบบ Markdown ที่สะอาด',
    longDescription: 'แปลง HTML document เป็นรูปแบบ Markdown แปลง heading, paragraph, list, link, image และ code block เหมาะสำหรับย้ายเนื้อหาไปยังแพลตฟอร์ม documentation',
  },
  'html-beautify': {
    description: 'จัดรูปแบบและเพิ่ม indent ให้ HTML',
    longDescription: 'จัดรูปแบบ HTML ด้วย indentation ที่ถูกต้อง ทำให้ HTML ที่บีบอัดแล้วอ่านง่ายและดูแลรักษาง่ายขึ้น',
  },
  'html-minify': {
    description: 'บีบอัด HTML โดยลบ whitespace และ comment',
    longDescription: 'บีบอัด HTML โดยลบ whitespace, ขึ้นบรรทัดใหม่ และ comment ที่ไม่จำเป็น ลดเวลาโหลดหน้าและขนาดไฟล์',
  },
  'base64-encode': {
    description: 'เข้ารหัสข้อความเป็นรูปแบบ Base64',
    longDescription: 'เข้ารหัสข้อความใดก็ได้เป็น Base64 ใช้ใน HTTP Basic Authentication, ไฟล์แนบอีเมล และ data URL รองรับ Unicode และอักขระพิเศษ',
  },
  'base64-decode': {
    description: 'ถอดรหัส Base64 กลับเป็นข้อความ',
    longDescription: 'ถอดรหัส Base64 กลับเป็นข้อความต้นฉบับ รองรับ Base64 มาตรฐานและ URL-safe Base64',
  },
  'url-encode': {
    description: 'เข้ารหัสอักขระพิเศษใน URL',
    longDescription: 'เข้ารหัส percent-encode อักขระพิเศษใน URL จำเป็นสำหรับส่ง query parameter และจัดการอักขระที่ไม่ใช่ ASCII ใน URL อย่างปลอดภัย',
  },
  'url-decode': {
    description: 'ถอดรหัส URL ที่ถูก percent-encode',
    longDescription: 'ถอดรหัส URL ที่ถูก percent-encode กลับเป็นรูปแบบที่อ่านได้ เหมาะสำหรับ debug API call และอ่าน URL ที่ถูกเข้ารหัส',
  },
  'jwt-decode': {
    description: 'ถอดรหัสและตรวจสอบ JWT Token (header, payload, วันหมดอายุ)',
    longDescription: 'ถอดรหัส JWT (JSON Web Token) และแสดง header, payload และข้อมูล meta แสดง issuer, วันหมดอายุ และสถานะการหมดอายุ หมายเหตุ: ไม่ตรวจสอบ signature',
  },
  'html-entities-encode': {
    description: 'เข้ารหัสอักขระพิเศษเป็น HTML entity',
    longDescription: 'แปลงอักขระพิเศษ เช่น <, >, &, " เป็น HTML entity (&lt;, &gt;, &amp;, &quot;) จำเป็นสำหรับแสดงผล input ของผู้ใช้ใน HTML อย่างปลอดภัย',
  },
  'html-entities-decode': {
    description: 'ถอดรหัส HTML entity กลับเป็นอักขระปกติ',
    longDescription: 'แปลง HTML entity (&lt;, &gt;, &amp;, &quot;) กลับเป็นอักขระต้นฉบับ เหมาะสำหรับอ่านเนื้อหาที่ถูกเข้ารหัสเป็น HTML',
  },
  'decimal-to-binary': {
    description: 'แปลงเลขฐานสิบเป็นเลขฐานสอง',
    longDescription: 'แปลงเลขฐานสิบ (decimal) เป็นเลขฐานสอง (binary) พร้อมแสดงผลเลขฐานแปดและฐานสิบหกด้วย',
  },
  'binary-to-decimal': {
    description: 'แปลงเลขฐานสองเป็นเลขฐานสิบ',
    longDescription: 'แปลงเลขฐานสอง (binary) เป็นเลขฐานสิบ (decimal) พร้อมแสดงผลเลขฐานแปดและฐานสิบหกด้วย',
  },
  'decimal-to-hex': {
    description: 'แปลงเลขฐานสิบเป็นเลขฐานสิบหก',
    longDescription: 'แปลงเลขฐานสิบ (decimal) เป็นเลขฐานสิบหก (hexadecimal) ใช้บ่อยในสีของเว็บ, memory address และการเขียนโปรแกรม low-level',
  },
  'hex-to-decimal': {
    description: 'แปลงเลขฐานสิบหกเป็นเลขฐานสิบ',
    longDescription: 'แปลงเลขฐานสิบหก (hexadecimal) เป็นเลขฐานสิบ (decimal) รองรับ prefix 0x',
  },
  'timestamp-to-date': {
    description: 'แปลง Unix timestamp เป็นวันที่อ่านได้',
    longDescription: 'แปลง Unix timestamp (หน่วยวินาทีหรือมิลลิวินาที) เป็นวันที่อ่านง่าย แสดงรูปแบบ ISO 8601, UTC และเวลาท้องถิ่น เลือก timezone ได้ตามต้องการ',
  },
  'date-to-timestamp': {
    description: 'แปลงข้อความวันที่เป็น Unix timestamp',
    longDescription: 'แปลงวันที่ในรูปแบบข้อความเป็น Unix timestamp (หน่วยวินาทีและมิลลิวินาที) รองรับรูปแบบ ISO 8601 และรูปแบบวันที่อื่น ๆ หลายรูปแบบ',
  },
  'hex-to-rgb': {
    description: 'แปลงสี HEX เป็น RGB, HSL และ CSS variables',
    longDescription: 'แปลงรหัสสี HEX เป็นค่า RGB, RGBA, HSL, HSLA และ CSS custom property รองรับ hex 3 หลักและ 6 หลัก',
  },
  'rgb-to-hex': {
    description: 'แปลงสี RGB เป็น HEX, HSL และ CSS variables',
    longDescription: 'แปลงค่าสี RGB หรือ RGBA เป็นรหัส HEX, HSL และ CSS custom property รับค่าในรูปแบบ rgb() หรือตัวเลขคั่นด้วยจุลภาค',
  },
  'hsl-to-rgb': {
    description: 'แปลงสี HSL เป็นรูปแบบ HEX และ RGB',
    longDescription: 'แปลงค่าสี HSL (Hue, Saturation, Lightness) เป็น HEX, RGB และ CSS variables',
  },
  'css-minify': {
    description: 'บีบอัด CSS โดยลบ whitespace และ comment',
    longDescription: 'บีบอัดไฟล์ CSS โดยลบ comment, whitespace และ semicolon ที่ซ้ำซ้อน ลดขนาดไฟล์เพื่อให้หน้าโหลดเร็วขึ้น',
  },
  'css-beautify': {
    description: 'จัดรูปแบบ CSS ให้อ่านง่าย',
    longDescription: 'จัดรูปแบบ CSS ที่บีบอัดหรือยุ่งเหยิงด้วย indentation และขึ้นบรรทัดใหม่ที่เหมาะสม ทำให้ CSS อ่านง่ายและดูแลรักษาง่าย',
  },
  'css-to-scss': {
    description: 'แปลง CSS custom property เป็น SCSS variable',
    longDescription: 'แปลงไฟล์ CSS เป็น SCSS syntax แปลง CSS custom property (:root variable) เป็น SCSS variable และการอ้างอิง var() ต้องเพิ่ม nesting เองด้วยมือ',
  },
  'css-to-tailwind': {
    description: 'แปลง CSS property เป็น Tailwind CSS utility class',
    longDescription: 'แปลง CSS declaration เป็น Tailwind CSS utility class name รองรับ layout, flexbox, spacing และ typography ค่าซับซ้อนอาจต้องแปลงด้วยมือเพิ่มเติม',
  },
}

export default th

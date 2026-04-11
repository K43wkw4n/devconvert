import type { Translations } from './en'

const th: Translations = {
  home: "หน้าหลัก",
  // ── Nav ──────────────────────────────────────────────────────────────────
  allTools: 'เครื่องมือทั้งหมด',
  github: 'GitHub',

  // ── Home ─────────────────────────────────────────────────────────────────
  privacyNote: "ทำงาน 100% ในเบราว์เซอร์ — ไม่ส่งข้อมูลออกไปที่ใด",
  heroBadge: '⚡ เครื่องมือฟรีกว่า 35 อย่าง',
  heroTitle1: 'แปลงได้ทุกอย่าง',
  heroTitle2: 'ภายในไม่กี่วินาที',
  heroSubtitle: 'เครื่องมือแปลงโค้ดและข้อมูลฟรีสำหรับนักพัฒนา JSON, TypeScript, YAML, Markdown, Base64, สี และอื่น ๆ — ทำงานในเบราว์เซอร์ ไม่ส่งข้อมูลออกไปที่ใด',
  statConverters: 'เครื่องมือ',
  statLatency: 'หน่วงเวลาเซิร์ฟเวอร์',
  statClientSide: 'ทำงานในเบราว์เซอร์',
  statFree: 'ฟรีตลอดไป',
  searchPlaceholder: 'ค้นหาเครื่องมือ... (เช่น JSON, Base64, TypeScript)',
  mostPopular: '🔥 ยอดนิยม',

  // ── Converter Page ────────────────────────────────────────────────────────
  input: 'อินพุต',
  output: 'เอาต์พุต',
  convert: 'แปลง',
  autoConvertOn: 'แปลงอัตโนมัติ เปิด',
  copy: 'คัดลอก',
  copied: 'คัดลอกแล้ว!',
  clear: 'ล้าง',
  example: 'ตัวอย่าง',
  download: 'ดาวน์โหลด',
  converting: 'กำลังแปลง...',
  conversionError: 'เกิดข้อผิดพลาดในการแปลง',
  conversionFailed: 'การแปลงล้มเหลว',
  relatedTools: '🔗 เครื่องมือที่เกี่ยวข้อง',
  about: 'เกี่ยวกับ',
  outputPlaceholder: 'ผลลัพธ์จะแสดงที่นี่...',
  notFound: 'ไม่พบเครื่องมือที่ต้องการ',
  browseAll: 'ดูเครื่องมือทั้งหมด',
  searchResults: (n: number, q: string) => `พบ ${n} ผลลัพธ์สำหรับ "${q}"`,
  noResults: 'ไม่พบเครื่องมือ ลองค้นหา "JSON", "Base64" หรือ "TypeScript"',
  howToUseTitle: "วิธีการใช้งาน",

  // ── Timezone ─────────────────────────────────────────────────────────────
  timezone: 'โซนเวลา',
  timezoneSearch: 'ค้นหาโซนเวลา...',

  // ── Theme / Language ──────────────────────────────────────────────────────
  lightMode: 'โหมดสว่าง',
  darkMode: 'โหมดมืด',
  language: 'ภาษา',

  // ── Footer ────────────────────────────────────────────────────────────────
  footerNote: 'การแปลงทั้งหมดเกิดขึ้นในเบราว์เซอร์ ไม่มีข้อมูลถูกส่งไปยังเซิร์ฟเวอร์',
  footerPrivacy: 'นโยบายความเป็นส่วนตัว',
  footerTerms: 'ข้อกำหนดการใช้งาน',
  footerContact: 'ติดต่อเรา',
  footerAbout: 'เกี่ยวกับเรา',

  // ── Privacy Policy ────────────────────────────────────────────────────────
  privacyTitle: 'นโยบายความเป็นส่วนตัว',
  privacyLastUpdated: 'อัปเดตล่าสุด',
  privacyIntroTitle: '1. บทนำ',
  privacyIntroText: 'DevConvert ("เรา", "พวกเรา") ดำเนินการเว็บไซต์ DevConvert ("บริการ") หน้านี้แจ้งให้คุณทราบเกี่ยวกับนโยบายของเราในการเก็บรวบรวม ใช้ และเปิดเผยข้อมูลส่วนบุคคลเมื่อคุณใช้บริการของเรา เราให้ความสำคัญกับความเป็นส่วนตัวของคุณและจัดการข้อมูลส่วนบุคคลด้วยความระมัดระวัง',

  privacyDataTitle: '2. ข้อมูลที่เราเก็บรวบรวม',
  privacyDataText: 'DevConvert ออกแบบมาโดยคำนึงถึงความเป็นส่วนตัวเป็นอันดับแรก การแปลงโค้ดและข้อมูลทั้งหมดทำงานในเบราว์เซอร์ของคุณ — ข้อมูลอินพุตหรือเอาต์พุตไม่ถูกส่งไปยังเซิร์ฟเวอร์ของเราเลย',
  privacyDataLocal: 'การตั้งค่าที่บันทึกในเครื่อง (ไม่ส่งไปยังเซิร์ฟเวอร์):',
  privacyDataLocalItems: [
    'การตั้งค่าธีม (โหมดมืด/สว่าง) — บันทึกใน localStorage',
    'การตั้งค่าภาษา (EN/TH/ZH/JA) — บันทึกใน localStorage',
  ],
  privacyDataAnalytics: 'เราอาจใช้ Google Analytics เพื่อรวบรวมสถิติการใช้งานแบบไม่ระบุตัวตน เช่น จำนวนผู้เข้าชมและการใช้งานฟีเจอร์ต่าง ๆ ข้อมูลนี้ไม่สามารถระบุตัวตนของคุณได้',

  privacyAdsTitle: '3. Google AdSense และการโฆษณา',
  privacyAdsText: 'เราใช้ Google AdSense เพื่อแสดงโฆษณาบนบริการของเรา Google AdSense ใช้คุกกี้และ web beacon เพื่อแสดงโฆษณาตามการเยี่ยมชมเว็บไซต์ของคุณก่อนหน้านี้ การใช้คุกกี้โฆษณาของ Google ช่วยให้ Google และพาร์ทเนอร์แสดงโฆษณาตามที่คุณสนใจ',
  privacyAdsOptOut: 'คุณสามารถปฏิเสธโฆษณาส่วนบุคคลได้โดยไปที่การตั้งค่าโฆษณาของ Google ที่',
  privacyAdsPolicy: 'สำหรับข้อมูลเพิ่มเติมเกี่ยวกับนโยบายความเป็นส่วนตัวของ Google โปรดเยี่ยมชม',

  privacyCookiesTitle: '4. คุกกี้',
  privacyCookiesText: 'เราใช้คุกกี้ประเภทต่อไปนี้:',
  privacyCookiesItems: [
    'คุกกี้จำเป็น: จำเป็นสำหรับการทำงานของบริการ (การตั้งค่าธีมและภาษาที่บันทึกใน localStorage)',
    'คุกกี้วิเคราะห์: คุกกี้ Google Analytics เพื่อทำความเข้าใจว่าผู้เข้าชมใช้บริการของเราอย่างไร',
    'คุกกี้โฆษณา: คุกกี้ Google AdSense เพื่อแสดงโฆษณาที่เกี่ยวข้อง',
  ],
  privacyCookiesControl: 'คุณสามารถควบคุมคุกกี้ผ่านการตั้งค่าเบราว์เซอร์ของคุณ โปรดทราบว่าการปิดใช้งานคุกกี้อาจส่งผลต่อการทำงานของบริการ',

  privacyThirdPartyTitle: '5. บริการจากบุคคลที่สาม',
  privacyThirdPartyText: 'บริการของเราอาจใช้บริการจากบุคคลที่สามต่อไปนี้ ซึ่งแต่ละรายมีนโยบายความเป็นส่วนตัวของตนเอง:',
  privacyThirdPartyItems: [
    { name: 'Google Analytics', url: 'https://policies.google.com/privacy', desc: 'วิเคราะห์การใช้งานแบบไม่ระบุตัวตน' },
    { name: 'Google AdSense', url: 'https://policies.google.com/privacy', desc: 'การโฆษณา' },
  ],

  privacyChildrenTitle: '6. ความเป็นส่วนตัวของเด็ก',
  privacyChildrenText: 'บริการของเราไม่ได้มุ่งเน้นไปที่ผู้ที่มีอายุต่ำกว่า 13 ปี เราไม่ได้เก็บรวบรวมข้อมูลส่วนบุคคลจากเด็กอายุต่ำกว่า 13 ปีโดยเจตนา หากคุณเป็นผู้ปกครองและทราบว่าบุตรหลานของคุณได้ให้ข้อมูลส่วนบุคคลแก่เรา โปรดติดต่อเรา',

  privacyGdprTitle: '7. สิทธิ์ของคุณ (GDPR)',
  privacyGdprText: 'หากคุณอยู่ในเขตเศรษฐกิจยุโรป (EEA) คุณมีสิทธิ์คุ้มครองข้อมูลบางประการ เนื่องจากเราไม่ได้เก็บรวบรวมข้อมูลส่วนบุคคลโดยตรง สิทธิ์ GDPR ส่วนใหญ่จึงได้รับการตอบสนองโดยอัตโนมัติ อย่างไรก็ตาม คุณสามารถ:',
  privacyGdprItems: [
    'ล้างการตั้งค่าที่บันทึกในเครื่องได้ตลอดเวลาโดยการล้าง localStorage ของเบราว์เซอร์',
    'ปฏิเสธ Google Analytics โดยติดตั้ง Google Analytics Opt-out Browser Add-on',
    'ปฏิเสธโฆษณาส่วนบุคคลผ่านการตั้งค่าโฆษณาของ Google',
  ],

  privacyChangesTitle: '8. การเปลี่ยนแปลงนโยบายนี้',
  privacyChangesText: 'เราอาจอัปเดตนโยบายความเป็นส่วนตัวของเราเป็นครั้งคราว เราจะแจ้งให้คุณทราบถึงการเปลี่ยนแปลงใด ๆ โดยโพสต์นโยบายความเป็นส่วนตัวใหม่บนหน้านี้และอัปเดตวันที่ "อัปเดตล่าสุด" คุณควรตรวจสอบนโยบายความเป็นส่วนตัวนี้เป็นระยะ',

  privacyContactTitle: '9. ติดต่อเรา',
  privacyContactText: 'หากคุณมีคำถามเกี่ยวกับนโยบายความเป็นส่วนตัวนี้ โปรดติดต่อเราที่:',

  // ── about ──────────────────────────────────────────────────────
  aboutTitle: "เกี่ยวกับ",
  aboutTitleDescription: "DevConvert คือชุดเครื่องมือสำหรับนักพัฒนาซอฟต์แวร์แบบโอเพนซอร์สและใช้งานได้ฟรี สร้างขึ้นเพื่อช่วยประหยัดเวลาในการแปลงไฟล์ที่ซ้ำซากจำเจ ไม่ต้องลงชื่อเข้าใช้ ไม่ต้องติดตั้ง และไม่ส่งข้อมูลใดๆ ออกจากเบราว์เซอร์ของคุณ",
  aboutWhatIs: "DevConvert คืออะไร?",
  aboutWahtIsDescription: "DevConvert คือชุดเครื่องมือบนเว็บเบราว์เซอร์ที่นำเสนอเครื่องมือแปลงข้อมูลมากกว่า 35 รายการสำหรับนักพัฒนาและวิศวกร ไม่ว่าคุณต้องการแปลง JSON เป็นอินเทอร์เฟซ TypeScript เข้ารหัสสตริงเป็น Base64 ถอดรหัสโทเค็น JWT แปลงสีระหว่าง HEX, RGB และ HSL หรือแปลง Markdown เป็น HTML — DevConvert สามารถจัดการได้ทันทีในเบราว์เซอร์ของคุณ",
  aboutWhyBuild: "เหตุผลที่เราสร้างมันขึ้นมา",
  aboutWhyBuildDescription: "นักพัฒนาทุกคนรู้ดีถึงความยุ่งยากในการสลับไปมาระหว่างแท็บเบราว์เซอร์หลายสิบแท็บเพียงเพื่อทำการแปลงไฟล์ง่าย ๆ เราจึงสร้าง DevConvert ให้เป็นแท็บเดียวที่คุณเปิดค้างไว้ — รวดเร็ว เชื่อถือได้ และฟรีเสมอ การประมวลผลทั้งหมดทำงานในเบราว์เซอร์ของคุณโดยใช้ JavaScript ดังนั้นโค้ดและข้อมูลของคุณจึงไม่เคยออกจากเครื่องของคุณเลย",
  aboutPrivacy: "ความเป็นส่วนตัวมาก่อน",
  aboutPrivacyDescription: "เราให้ความสำคัญกับความเป็นส่วนตัวอย่างยิ่ง DevConvert ทำการแปลงข้อมูลทั้งหมดฝั่งไคลเอ็นต์ — ไม่มีข้อมูลใด ๆ ที่คุณพิมพ์ถูกส่งไปยังเซิร์ฟเวอร์ ข้อมูลเดียวที่จัดเก็บไว้ในเครื่องคือการตั้งค่าธีมและภาษาของคุณ ซึ่งบันทึกไว้ใน localStorage ของเบราว์เซอร์ของคุณ",
  aboutUcanDo: "สิ่งที่คุณสามารถทำได้ด้วย DevConvert",
  aboutUcanDoDescription: "แปลงข้อมูลระหว่างรูปแบบต่าง ๆ เช่น JSON, YAML, XML และ CSV สร้างอินเทอร์เฟซ TypeScript จาก JSON เข้ารหัสและถอดรหัส Base64, URL และเอนทิตี HTML ถอดรหัสโทเค็น JWT แปลงระหว่างรูปแบบสี แปลง Markdown เป็น HTML และกลับกัน จัดรูปแบบหรือย่อขนาด JSON, HTML และ CSS แปลงไทม์สแตมป์ Unix เป็นวันที่ที่อ่านง่าย และอื่น ๆ อีกมากมาย — พร้อมเครื่องมือใหม่ ๆ ที่เพิ่มเข้ามาอย่างสม่ำเสมอ",
  aboutAlwaysFree: "ฟรีเสมอ",
  aboutAlwaysFreeDescription: "DevConvert นั้นใช้งานได้ฟรี และจะฟรีตลอดไป โครงการนี้ได้รับการสนับสนุนจากโฆษณาที่ไม่รบกวน หากคุณพบว่ามีประโยชน์ วิธีที่ดีที่สุดในการสนับสนุนคือการแบ่งปันกับเพื่อนนักพัฒนาด้วยกัน",
  aboutContact: "ติดต่อ",
  aboutContactDescription: "มีข้อเสนอแนะ พบข้อผิดพลาด หรือต้องการขอตัวแปลงใหม่หรือไม่? เรายินดีรับฟังจากคุณเสมอ",

  // ── Terms of Service ──────────────────────────────────────────────────────
  termsTitle: 'ข้อกำหนดการใช้งาน',
  termsLastUpdated: 'อัปเดตล่าสุด',
  termsIntroTitle: '1. การยอมรับข้อกำหนด',
  termsIntroText: 'การเข้าถึงหรือใช้งาน DevConvert ("บริการ") ถือว่าคุณยอมรับข้อกำหนดการใช้งานเหล่านี้ หากคุณไม่ยอมรับข้อกำหนดเหล่านี้ โปรดอย่าใช้บริการของเรา เราขอสงวนสิทธิ์ในการอัปเดตข้อกำหนดเหล่านี้ได้ตลอดเวลาโดยไม่ต้องแจ้งล่วงหน้า',

  termsServiceTitle: '2. คำอธิบายบริการ',
  termsServiceText: 'DevConvert ให้บริการเครื่องมือนักพัฒนาฟรีที่ทำงานในเบราว์เซอร์ ได้แก่ เครื่องมือแปลงโค้ด เครื่องมือแปลงรูปแบบข้อมูล ยูทิลิตี้เข้ารหัส/ถอดรหัส และเครื่องมือแปลงรูปแบบสี การประมวลผลทั้งหมดเกิดขึ้นในเบราว์เซอร์ของคุณ เราไม่จัดเก็บ ส่ง หรือประมวลผลข้อมูลใด ๆ ที่คุณป้อนเข้าสู่บริการบนเซิร์ฟเวอร์ของเรา',

  termsUseTitle: '3. การใช้งานที่ยอมรับได้',
  termsUseText: 'คุณตกลงที่จะใช้บริการเพื่อวัตถุประสงค์ที่ถูกกฎหมายเท่านั้น คุณต้องไม่:',
  termsUseItems: [
    'ใช้บริการในลักษณะที่ละเมิดกฎหมายหรือระเบียบข้อบังคับที่เกี่ยวข้อง',
    'พยายาม reverse-engineer, decompile หรือดึงซอร์สโค้ดของบริการ',
    'ใช้สคริปต์อัตโนมัติหรือบอทเพื่อ scrape หรือใช้บริการในทางที่ผิด',
    'ใช้บริการเพื่อประมวลผลข้อมูลที่ละเมิดสิทธิ์ทรัพย์สินทางปัญญาของบุคคลที่สาม',
    'พยายามรบกวนหรือทำลายความสมบูรณ์หรือประสิทธิภาพของบริการ',
  ],

  termsIpTitle: '4. ทรัพย์สินทางปัญญา',
  termsIpText: 'บริการและเนื้อหาต้นฉบับ คุณลักษณะ และฟังก์ชันการทำงานเป็นและจะยังคงเป็นทรัพย์สินของ DevConvert และผู้อนุญาตใช้สิทธิ์ เครื่องหมายการค้าของเราไม่สามารถนำไปใช้โดยไม่ได้รับอนุญาตเป็นลายลักษณ์อักษร',
  termsIpUser: 'คุณยังคงมีสิทธิ์ทั้งหมดในเนื้อหาที่คุณป้อนเข้าสู่บริการ เนื่องจากการประมวลผลทั้งหมดเกิดขึ้นในเบราว์เซอร์ของคุณ เราไม่มีสิทธิ์ใด ๆ ในข้อมูลของคุณ',

  termsDisclaimerTitle: '5. การปฏิเสธการรับประกัน',
  termsDisclaimerText: 'บริการนี้มีให้ใช้งาน "ตามที่เป็น" และ "ตามที่มี" โดยไม่มีการรับประกันใด ๆ ทั้งโดยชัดแจ้งหรือโดยนัย รวมถึงแต่ไม่จำกัดเพียง:',
  termsDisclaimerItems: [
    'ความถูกต้องหรือความสมบูรณ์ของผลลัพธ์การแปลง',
    'ความเหมาะสมสำหรับวัตถุประสงค์เฉพาะ',
    'การไม่ละเมิดสิทธิ์ของบุคคลที่สาม',
    'การทำงานที่ต่อเนื่อง ปราศจากข้อผิดพลาด หรือปลอดภัย',
  ],
  termsDisclaimerAdvice: 'คุณควรตรวจสอบและทดสอบผลลัพธ์การแปลงเสมอก่อนนำไปใช้ในสภาพแวดล้อมการผลิต เครื่องมือแปลงของ DevConvert มีไว้เพื่อความสะดวกและไม่ควรแทนที่การตรวจสอบโค้ดอย่างละเอียด',

  termsLiabilityTitle: '6. การจำกัดความรับผิดชอบ',
  termsLiabilityText: 'DevConvert จะไม่รับผิดชอบต่อความเสียหายทางอ้อม โดยบังเอิญ พิเศษ ที่เป็นผลสืบเนื่อง หรือเชิงลงโทษ รวมถึงแต่ไม่จำกัดเพียงการสูญเสียกำไร ข้อมูล หรือความสูญเสียอื่น ๆ อันเป็นผลมาจาก:',
  termsLiabilityItems: [
    'การเข้าถึงหรือใช้งาน (หรือไม่สามารถเข้าถึงหรือใช้งาน) บริการของคุณ',
    'ข้อผิดพลาดหรือความไม่ถูกต้องในผลลัพธ์การแปลง',
    'การเข้าถึงโดยไม่ได้รับอนุญาตหรือการเปลี่ยนแปลงข้อมูลของคุณ',
    'เรื่องอื่น ๆ ที่เกี่ยวข้องกับบริการ',
  ],

  termsAdsTitle: '7. การโฆษณา',
  termsAdsText: 'บริการได้รับการสนับสนุนโดยการโฆษณาผ่าน Google AdSense การใช้บริการถือว่าคุณรับทราบว่าอาจมีการแสดงโฆษณา เราไม่รับผิดชอบต่อเนื้อหาของโฆษณาจากบุคคลที่สาม การโต้ตอบของคุณกับผู้โฆษณาเป็นเรื่องระหว่างคุณและผู้โฆษณาโดยตรง',

  termsLinksTitle: '8. ลิงก์ไปยังบุคคลที่สาม',
  termsLinksText: 'บริการอาจมีลิงก์ไปยังเว็บไซต์หรือบริการของบุคคลที่สามที่ไม่ได้เป็นของหรือควบคุมโดย DevConvert เราไม่มีการควบคุมและไม่รับผิดชอบต่อเนื้อหา นโยบายความเป็นส่วนตัว หรือแนวปฏิบัติของเว็บไซต์หรือบริการดังกล่าว',

  termsTerminationTitle: '9. การยุติการให้บริการ',
  termsTerminationText: 'เราขอสงวนสิทธิ์ในการระงับหรือยุติการเข้าถึงบริการของคุณได้ตลอดเวลาโดยไม่ต้องแจ้งล่วงหน้า รวมถึงกรณีที่คุณละเมิดข้อกำหนดการใช้งานเหล่านี้',

  termsGoverningTitle: '10. กฎหมายที่ใช้บังคับ',
  termsGoverningText: 'ข้อกำหนดเหล่านี้อยู่ภายใต้บังคับและตีความตามกฎหมายที่บังคับใช้ โดยไม่คำนึงถึงบทบัญญัติว่าด้วยการขัดกันแห่งกฎหมาย',

  termsChangesTitle: '11. การเปลี่ยนแปลงข้อกำหนด',
  termsChangesText: 'เราขอสงวนสิทธิ์ในการแก้ไขหรือแทนที่ข้อกำหนดเหล่านี้ได้ตลอดเวลา โดยจะแจ้งโดยการอัปเดตวันที่ที่ด้านบนของข้อกำหนดเหล่านี้ การใช้บริการต่อไปหลังจากการแก้ไขมีผลบังคับใช้ถือว่าคุณยอมรับข้อกำหนดที่แก้ไขแล้ว',

  termsContactTitle: '12. ติดต่อเรา',
  termsContactText: 'หากคุณมีคำถามเกี่ยวกับข้อกำหนดการใช้งานเหล่านี้ โปรดติดต่อเราที่:',

  // ── WhyDevConvert ─────────────────────────────────────────────────────────────
  whyTitleDivider: "ทำไมต้อง DevConvert",
  whyTitle: `ออกแบบมาสำหรับนักพัฒนา\nโดยนักพัฒนา`,
  whySubtitle: 'ทุกฟีเจอร์ถูกออกแบบมาเพื่อประหยัดเวลาในงานประจำวัน ไม่มี bloat ไม่มี ads ไม่มีเงื่อนไข',
  whyFeat1Title: 'ข้อมูลของคุณปลอดภัย 100%',
  whyFeat1Body: 'ทุกการแปลงเกิดขึ้นในเบราว์เซอร์ของคุณโดยตรง ไม่มีการส่งโค้ดหรือข้อมูลออกไปยังเซิร์ฟเวอร์ใด ๆ เหมาะสำหรับข้อมูล sensitive ที่ไม่ควรออกไปนอก machine',
  whyFeat2Title: 'เร็วทันทีที่พิมพ์',
  whyFeat2Body: 'แปลงแบบ real-time ทันทีที่คุณวางข้อมูล ไม่ต้องกดปุ่มใด ๆ ไม่มี loading, ไม่รอ network ผลลัพธ์ปรากฏภายใน 50ms',
  whyFeat3Title: '35+ เครื่องมือในที่เดียว',
  whyFeat3Body: 'ครอบคลุมทุกงาน dev: JSON, TypeScript, YAML, XML, CSV, SQL, Markdown, HTML, Base64, JWT, สี, CSS และอื่น ๆ ไม่ต้องวิ่งหลายเว็บ',
  whyFeat4Title: 'รองรับหลายภาษา',
  whyFeat4Body: 'อินเทอร์เฟซรองรับภาษาไทย, อังกฤษ, ญี่ปุ่น และจีน ให้นักพัฒนาทั่วโลกใช้งานได้อย่างสะดวก',
  whyFeat5Title: 'Editor ระดับมืออาชีพ',
  whyFeat5Body: 'ใช้ Monaco Editor (เดียวกับ VS Code) รองรับ syntax highlighting, auto-indent และ code folding สำหรับทุก format',
  whyFeat6Title: 'ดาวน์โหลดผลลัพธ์ได้ทันที',
  whyFeat6Body: 'ผลลัพธ์ที่ได้สามารถ copy หรือดาวน์โหลดเป็นไฟล์ .ts, .json, .yaml, .xml ฯลฯ ได้ทันที นำไปใช้ใน project ได้เลย',

  // ── HowItWorks ────────────────────────────────────────────────────────────────
  howTitleDivider: "วิธีใช้งาน",
  howTitle: 'ใช้งานง่าย 3 ขั้นตอน',
  howSubtitle: 'ไม่ต้อง login ไม่ต้อง install ไม่ต้อง config — เปิดและแปลงได้เลย',
  howStep1Label: 'ขั้นตอนที่ 01',
  howStep1Title: 'วางข้อมูลของคุณ',
  howStep1Body: 'วาง JSON, YAML, TypeScript, CSV หรือข้อมูลอื่น ๆ ลงในช่อง input ทางซ้าย หรือพิมพ์เองก็ได้',
  howStep1Hint: 'รองรับ paste จาก clipboard โดยตรง',
  howStep2Label: 'ขั้นตอนที่ 02',
  howStep2Title: 'เลือก format ที่ต้องการ',
  howStep2Body: 'เลือก format ปลายทางจาก dropdown: TypeScript, JSON, YAML, XML, SQL, Markdown และอีกมากมาย',
  howStep2Hint: 'แปลงอัตโนมัติทันทีที่คุณเลือก',
  howStep3Label: 'ขั้นตอนที่ 03',
  howStep3Title: 'คัดลอกหรือดาวน์โหลด',
  howStep3Body: 'คัดลอก output ได้ทันที หรือดาวน์โหลดเป็นไฟล์ นำไปใช้งานใน project ได้เลยโดยไม่ต้องแก้ไขเพิ่ม',
  howStep3Hint: 'บันทึกเป็น .ts, .json, .yaml และอื่น ๆ',

  // ── ToolCategories ────────────────────────────────────────────────────────────
  catTitleDivider: "เครื่องมือทั้งหมด",
  catTitle: 'ครอบคลุมทุก format\nที่นักพัฒนาต้องการ',
  catSubtitle: 'ไม่ว่าจะทำงานกับ REST API, DevOps pipeline, frontend หรือ data engineering — มีเครื่องมือที่ใช่สำหรับทุกงาน',
  catJsonLabel: 'JSON',
  catJsonDesc: 'JSON ↔ TypeScript, YAML, XML, CSV, SQL',
  catYamlLabel: 'YAML / XML',
  catYamlDesc: 'แปลงระหว่าง YAML, XML, JSON และ TypeScript',
  catCodeLabel: 'โค้ด',
  catCodeDesc: 'TypeScript ↔ JavaScript, CSS ↔ SCSS, Tailwind',
  catMarkupLabel: 'Markup',
  catMarkupDesc: 'Markdown ↔ HTML, Format และ Minify',
  catEncodingLabel: 'Encoding',
  catEncodingDesc: 'Base64, URL, JWT, HTML Entities, เลขฐาน',
  catColorLabel: 'สี',
  catColorDesc: 'HEX ↔ RGB ↔ HSL พร้อม CSS variables',

  // ── PrivacyPerformance ────────────────────────────────────────────────────────
  ppTitleDivider: "เน้นความเป็นส่วนตัวและรวดเร็ว",
  ppTitle: 'ข้อมูลของคุณไม่เคย\nออกไปจากเบราว์เซอร์',
  ppBody: 'DevConvert ไม่มี backend server ทุกการแปลงเกิดขึ้นใน JavaScript ของเบราว์เซอร์ 100% ไม่มีการเก็บ log, ไม่มีการ track ข้อมูล, ไม่มีการส่งโค้ดออกไปที่ใด เหมาะสำหรับงาน enterprise หรือข้อมูลที่เป็น confidential',
  ppCheck1: 'ไม่มีการสร้าง account หรือ login',
  ppCheck2: 'ทำงาน offline ได้หลังจาก load ครั้งแรก',
  ppCheck3: 'open-source และตรวจสอบโค้ดได้',
  ppCheck4: 'ไม่มีโฆษณา ไม่มี tracking',
  ppStat1Label: 'หน่วงเวลาเซิร์ฟเวอร์',
  ppStat1Sub: 'ทุกอย่างทำงานในเครื่องคุณ',
  ppStat2Label: 'ทำงานในเบราว์เซอร์',
  ppStat2Sub: 'ไม่มี backend, ไม่มี API call',
  ppStat3Label: 'เครื่องมือ',
  ppStat3Sub: 'ครอบคลุมทุก format ยอดนิยม',
  ppStat4Label: 'ใช้ได้ไม่จำกัด',
  ppStat4Sub: 'ฟรีตลอดไป ไม่มี rate limit',

  // ── UseCases ──────────────────────────────────────────────────────────────────
  useCaseTitleDivider: "สำหรับทุกบทบาท",
  useCaseTitle: 'ไม่ว่าคุณจะเป็นใคร\nมีเครื่องมือที่ใช่สำหรับคุณ',
  ucRole1: 'Frontend Developer',
  ucRole1Case1: 'แปลง API response (JSON) เป็น TypeScript interface ได้ทันที',
  ucRole1Case2: 'แปลง HEX สีจาก Figma เป็น RGB/HSL สำหรับ CSS',
  ucRole1Case3: 'แปลง CSS เป็น Tailwind utility class',
  ucRole2: 'DevOps / Backend',
  ucRole2Case1: 'แปลง JSON config เป็น YAML สำหรับ Kubernetes / Docker Compose',
  ucRole2Case2: 'Decode JWT token เพื่อตรวจสอบ claims และ expiry',
  ucRole2Case3: 'แปลง timestamp เป็นวันที่อ่านออกในทุก timezone',
  ucRole3: 'Data Engineer',
  ucRole3Case1: 'แปลง CSV เป็น JSON array สำหรับ import ลง database',
  ucRole3Case2: 'สร้าง SQL CREATE TABLE + INSERT จาก JSON sample data',
  ucRole3Case3: 'แปลง XML จาก legacy API เป็น JSON ที่ใช้งานง่าย',
  ucRole4: 'Technical Writer',
  ucRole4Case1: 'แปลง Markdown เป็น HTML สำหรับ blog หรือ documentation',
  ucRole4Case2: 'Format JSON ให้อ่านง่ายก่อน copy ใส่ใน doc',
  ucRole4Case3: 'แปลง HTML จาก CMS เป็น Markdown สำหรับ GitHub',

  // ── Knowledge Section ─────────────────────────────────────────────────────
  knowledgeSectionTitle: 'สิ่งที่นักพัฒนาควรรู้เกี่ยวกับการแปลงรูปแบบข้อมูล',
  knowledgeCards: [
    {
      title: 'ทำไมถึงต้องมีการแปลงรูปแบบ',
      body: 'ระบบสมัยใหม่แทบไม่เคยใช้ภาษาข้อมูลเดียวกัน API พูด JSON, ไฟล์ config ใช้ YAML, เครื่องมือองค์กรต้องการ XML, และ pipeline ส่งออก CSV การแปลงรูปแบบไม่ใช่แค่ความสะดวก แต่คือกาวที่เชื่อมโครงสร้างซอฟต์แวร์ทั้งหมดเข้าด้วยกัน',
    },
    {
      title: 'ตรวจสอบความถูกต้องหลังแปลงเสมอ',
      body: 'อย่าไว้ใจผลลัพธ์ที่แปลงมาโดยไม่ตรวจสอบ ให้รัน schema validator หรือ linter ก่อนเสมอ เครื่องหมายคำพูดผิดที่หรือประเภทข้อมูลผิดเพียงตัวเดียว อาจทำให้ pipeline ทั้งหมดล่มโดยไม่แสดงข้อผิดพลาดใน production',
    },
    {
      title: 'การแปลงไม่ใช่ทุกอย่างที่ไม่สูญเสียข้อมูล',
      body: 'XML → JSON ทำให้สูญเสียลำดับ element และ mixed content. YAML → JSON ตัด comment ทิ้งทั้งหมด. JSON → CSV ทำให้ nested object แบนราบ สูญเสีย hierarchy ทำความเข้าใจว่าอะไรจะหายไปก่อนแปลง โดยเฉพาะถ้าข้อมูลนั้นป้อนเข้า process ที่สำคัญ',
    },
    {
      title: 'กับดัก Encoding ที่ควรระวัง',
      body: 'UTF-8 คือมาตรฐานสากล แต่ระบบเก่ายังคงส่งออก ISO-8859-1 หรือ Windows-1252 การผสม encoding กลางกระบวนการทำให้เกิด mojibake — ตัวอักษรแปลกที่ทำให้ข้อมูลเสียหายโดยไม่แสดงข้อผิดพลาด ควรระบุ encoding อย่างชัดเจนทุกครั้งที่อ่านหรือเขียนไฟล์',
    },
    {
      title: 'ทำให้การแปลงที่ทำซ้ำเป็นอัตโนมัติ',
      body: 'การแปลงครั้งเดียวไม่มีปัญหา แต่ถ้าต้องทำซ้ำ ควรผนวกเข้าใน CI/CD pipeline เครื่องมืออย่าง jq (JSON), yq (YAML), และ xmllint (XML) สามารถเขียน script ได้ ตรวจสอบย้อนหลังได้ และควบคุมเวอร์ชันได้ การทำให้เป็นอัตโนมัติเปลี่ยนขั้นตอนที่ผิดพลาดง่ายให้กลายเป็น artefact ที่ตรวจสอบได้',
    },
    {
      title: 'กำหนด Schema ก่อนเสมอ',
      body: 'กำหนด schema ปลายทางก่อนแปลงข้อมูล JSON Schema, TypeScript interface หรือ XSD จะช่วยตรวจจับปัญหาโครงสร้างตอนแปลง ไม่ใช่ตอน runtime แนวคิด schema-first ยังทำให้การแปลงย้อนกลับได้ เพราะมีอ้างอิงที่ canonical สำหรับตรวจสอบเสมอ',
    },
  ],
  proTipsTitle: 'เคล็ดลับจากมืออาชีพ',
  proTips: [
    'ใช้ pretty-print ก่อน diff เสมอ — output แบบ minified ซ่อนการเปลี่ยนแปลงโครงสร้าง',
    'ลบ null และ string ว่างก่อนแปลง — ระบบปลายทางตีความแตกต่างกัน',
    'ทดสอบ round-trip: แปลง A→B แล้ว B→A แล้วเปรียบเทียบกับต้นฉบับ ความแตกต่างบอก field ที่สูญหาย',
    'เก็บไฟล์ต้นฉบับไว้ใน version control เสมอ รูปแบบที่แปลงแล้วสร้างใหม่ได้ แต่ต้นฉบับไม่ได้',
  ],

  // for blog
  "blogTitle": "บทความ",
  "developerBlog": "คลังความรู้สำหรับนักพัฒนา",
  "blogDescription": "ยกระดับทักษะการเขียนโปรแกรมของคุณด้วยบทความเชิงลึก คู่มือการใช้งานจริง และตัวอย่างจากสถานการณ์จริง ครอบคลุมทั้ง JSON, TypeScript, YAML, การเข้ารหัสข้อมูล, CSS และกระบวนการพัฒนาสมัยใหม่ เนื้อหาถูกออกแบบให้เข้าใจง่ายแบบเป็นขั้นตอน พร้อมแนวทางปฏิบัติที่ดีที่สุด เทคนิคเพิ่มประสิทธิภาพ และข้อผิดพลาดที่ควรหลีกเลี่ยง ไม่ว่าคุณจะกำลังพัฒนาแอปพลิเคชัน จัดการข้อมูล หรือปรับปรุงระบบ frontend และ backend ที่นี่คือแหล่งความรู้ที่จะช่วยให้คุณเขียนโค้ดได้สะอาดขึ้น แก้ปัญหาได้เร็วขึ้น และทันต่อเครื่องมือที่นักพัฒนาใช้งานจริงในทุกวัน",
  "blogFeaturedArticles": "บทความแนะนำ",
  "blogAllArticles": "บทความทั้งหมด",
  "totalArticles": "บทความที่ครอบคลุมเครื่องมือทั้งหมดของ DevConvert",
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
        "title": "JSON คืออะไร? คู่มือฉบับสมบูรณ์สำหรับ Developer",
        "description": "เรียนรู้ว่า JSON คืออะไร ทำไมถึงกลายเป็น format มาตรฐานของ API และวิธีใช้งานอย่างมีประสิทธิภาพพร้อมตัวอย่างจริง",
        "sections": [
          {
            "heading": "JSON คืออะไร?",
            "paragraphs": [
              "JSON (JavaScript Object Notation) คือ format ข้อมูลแบบ text ที่มีน้ำหนักเบา ใช้สำหรับจัดเก็บและแลกเปลี่ยนข้อมูลที่มีโครงสร้าง แม้จะมีรากมาจาก JavaScript แต่ปัจจุบัน JSON กลายเป็นมาตรฐานสากลสำหรับการรับส่งข้อมูลในทุกภาษาโปรแกรมมิ่งและทุก platform",
              "โครงสร้างพื้นฐานของ JSON มีเพียงสองแบบ ได้แก่ คู่ชื่อ/ค่า (object) และรายการข้อมูลตามลำดับ (array) สองโครงสร้างนี้เพียงพอสำหรับแทนข้อมูลในโลกจริงได้เกือบทุกรูปแบบ ตั้งแต่ข้อมูลผู้ใช้ไปจนถึง configuration file ที่ซับซ้อน"
            ]
          },
          {
            "heading": "ทำไม JSON ถึงกลายเป็นมาตรฐานสากล",
            "paragraphs": [
              "ก่อน JSON จะมา XML ครองตลาด XML มีพลังแต่ verbose มาก แค่จะเก็บรายชื่อธรรมดาก็ต้องใช้ tag เปิดปิดมากมาย JSON ตัดส่วนที่ไม่จำเป็นออกและเก็บไว้เฉพาะข้อมูล เมื่อ REST API เริ่มแทนที่ SOAP ในช่วงปลายปี 2000s JSON จึงเป็นตัวเลือกที่ใช่ เพราะมนุษย์อ่านได้ กระชับ และ parse ได้ใน browser ทุกตัว",
              "วันนี้ JSON อยู่ทุกที่ REST API ส่งคืนเป็น JSON, configuration file ใช้ JSON (package.json, tsconfig.json), database อย่าง MongoDB เก็บ document ในรูป BSON, แม้แต่ AWS และ Azure ก็ใช้ JSON สำหรับ infrastructure policy การรู้จัก JSON ไม่ใช่ทางเลือก แต่เป็นพื้นฐานของ developer ยุคใหม่"
            ]
          },
          {
            "heading": "ประเภทข้อมูลและกฎ syntax ของ JSON",
            "paragraphs": [
              "JSON รองรับ 6 ประเภทข้อมูล ได้แก่ string (ต้องใช้ double quote), number, boolean (true หรือ false), null, object (ใช้ curly brace) และ array (ใช้ square bracket) กฎสำคัญ: key ของ object ต้องเป็น string ที่ครอบด้วย double quote เท่านั้น ต่างจาก JavaScript ที่อนุญาต single quote หรือ trailing comma",
              "Syntax ที่เข้มงวดนี้คือทั้งจุดแข็งและแหล่งที่มาของ bug ใน JSON เพียงแค่ comma หายไปหนึ่งตัวหรือ bracket ไม่ครบก็ทำให้ document ทั้งหมดใช้ไม่ได้ นี่คือเหตุผลที่ JSON beautifier และ validator อย่าง JSON Beautify บน DevConvert เป็นเครื่องมือสำคัญสำหรับ developer ที่ต้องทำงานกับ API หรือ configuration file ทุกวัน"
            ]
          },
          {
            "heading": "JSON ในทางปฏิบัติ: Use Case ที่พบบ่อย",
            "paragraphs": [
              "การตอบกลับของ API คือการพบเจอ JSON ที่บ่อยที่สุด เมื่อคุณ fetch ข้อมูลจาก REST API ตัว response body แทบทั้งหมดจะเป็น JSON Frontend developer จะ parse JSON นี้เป็น JavaScript object ดึงข้อมูลที่ต้องการ แล้ว render ออกมาที่ UI",
              "Configuration file เป็น use case สำคัญอีกตัว โปรเจกต์ Node.js ใช้ package.json สำหรับประกาศ dependency และ script โปรเจกต์ TypeScript ใช้ tsconfig.json สำหรับตั้งค่า compiler ESLint, Prettier และ Babel ต่างใช้ config ที่เป็น JSON การเข้าใจโครงสร้าง JSON ช่วยให้ debug ปัญหา configuration ได้เร็วขึ้น",
              "นอกจากนี้ JSON ยังใช้สำหรับจัดเก็บข้อมูลใน NoSQL database, serialize application state, กำหนด cloud infrastructure (AWS IAM policy, GCP service account file) และสื่อสารระหว่าง service ใน microservice architecture"
            ]
          },
          {
            "heading": "เคล็ดลับทำงานกับ JSON ได้ดีขึ้น",
            "paragraphs": [
              "ใช้ JSON beautifier เมื่อต้องจัดการกับ API response ที่ถูก minify JSON ที่ถูกบีบอัดไว้ในบรรทัดเดียวอ่านและ debug ไม่ได้เลย เครื่องมือ JSON Beautify ของ DevConvert จัดรูปแบบ JSON ที่ถูก minify ให้มี indentation ที่ถูกต้องทันที",
              "เมื่อสร้างแอปพลิเคชัน TypeScript ให้แปลง JSON data ของคุณเป็น typed interface ทันที สิ่งนี้มอบ autocomplete, type safety และการตรวจจับ error ณ compile time เครื่องมือ JSON to TypeScript ของ DevConvert สร้าง interface ที่แม่นยำจาก JSON object ใดก็ได้ รวมถึงโครงสร้างที่ซ้อนกันและ array",
              "สำหรับ data pipeline การแปลง JSON เป็น CSV ทำให้นำเข้าข้อมูลไปยัง Excel, Google Sheets หรือเครื่องมือ import database ได้ง่ายขึ้น ตัว JSON to CSV converter จัดการ object ที่ซ้อนกันโดย flatten ออกมา ทำให้ข้อมูลพร้อมสำหรับ spreadsheet"
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
        "title": "JSON to TypeScript: สร้าง Typed Interface โดยอัตโนมัติ",
        "description": "หยุดเขียน TypeScript interface ด้วยมือ เรียนรู้วิธีสร้าง type definition ที่ถูกต้องและซ้อนกันจาก JSON object ใดก็ได้ในไม่กี่วินาที",
        "sections": [
          {
            "heading": "ทำไม TypeScript Interface ถึงสำคัญ",
            "paragraphs": [
              "เมื่อคุณ fetch ข้อมูลจาก API คุณได้รับ JavaScript object ธรรมดาที่ไม่มีข้อมูล type TypeScript มีพลังอยู่ที่การจับ error ณ compile time แทน runtime แต่พลังนั้นจะทำงานได้ก็ต่อเมื่อข้อมูลของคุณมี type ที่ถูกต้อง ถ้าไม่มี interface TypeScript ก็แค่เป็น JavaScript ที่ใส่ annotation มา แล้วคุณก็เสีย autocomplete, ความปลอดภัยในการ refactor และ type narrowing ไป",
              "การเขียน interface ด้วยมือน่าเบื่อและผิดพลาดง่าย API response ทั่วไปอาจมี 15 field, object ที่ซ้อนกัน, optional array และ union type การถอดความทั้งหมดนั้นด้วยมือใช้เวลาและเพิ่มความผิดพลาดจากมนุษย์ เช่น ลืมเครื่องหมาย ? บน optional field หรือ type ผิดบน number field การ automate การแปลงนี้จึงเป็นวิธีที่ฉลาดกว่า"
            ]
          },
          {
            "heading": "วิธีการแปลง JSON เป็น TypeScript",
            "paragraphs": [
              "ตัวแปลง JSON เป็น TypeScript จะตรวจสอบแต่ละคู่ key-value ใน JSON ของคุณและ infer type TypeScript ที่ถูกต้อง ค่า string กลายเป็น `string`, ตัวเลขกลายเป็น `number`, boolean กลายเป็น `boolean` และค่า null จะถูกทำเครื่องหมายเป็น optional (`field?: type`) Array จะถูกตรวจสอบทีละ element เพื่อระบุประเภทของ element รวมถึง union type เมื่อ array มีค่าผสม",
              "Object ที่ซ้อนกันจะกลายเป็น interface ที่มีชื่อของตัวเอง ตัวอย่างเช่น JSON object ที่มี `address` object ซ้อนอยู่จะสร้างทั้ง interface `Root` และ interface `Address` โดย `Root.address` มี type เป็น `Address` ซึ่งสร้าง type definition ที่สะอาดและ modular ตรงกับ best practice ของ TypeScript ในโลกจริง"
            ]
          },
          {
            "heading": "Best Practice ของ TypeScript Interface",
            "paragraphs": [
              "ใช้ `interface` สำหรับ object shape ที่สามารถ extend ได้ ใช้ `type` สำหรับ union type, intersection หรือเมื่อต้อง alias primitive สำหรับ type ของ API response ควรใช้ `interface` เพราะ API contract ของคุณคือสัญญาที่นัยถึงความเข้ากันได้ในการ extend",
              "ทำเครื่องหมาย field ที่เป็น optional จริงๆ ด้วย `?` อย่าทำเครื่องหมาย optional ทุกอย่างเพราะ API บางครั้ง return null นั่นทำลายจุดประสงค์ของ TypeScript ถ้า field สามารถเป็น null ให้ type เป็น `string | null` ไม่ใช่แค่ `string?` ความแตกต่างสำคัญ: optional field อาจไม่มีอยู่ใน object เลย ในขณะที่ nullable field มีอยู่เสมอแต่สามารถเป็น null ได้"
            ]
          },
          {
            "heading": "รับมือกับ JSON ที่ซับซ้อนในโลกจริง",
            "paragraphs": [
              "API จริงๆ แทบไม่เคย return JSON ที่สม่ำเสมออย่างสมบูรณ์แบบ คุณอาจเจอ array ที่บางครั้งว่างเปล่า field ที่ปรากฏเฉพาะในบางเงื่อนไข หรือค่าที่สามารถมีหลาย type TypeScript จัดการสิ่งเหล่านี้ด้วย union type เช่น `string | number`, `string | null`",
              "เมื่อแปลง JSON ที่มาจาก API ที่คุณไม่ได้ควบคุม ให้มอง interface ที่สร้างขึ้นมาเป็นจุดเริ่มต้น ไม่ใช่คำตอบสุดท้าย ตรวจสอบ interface ที่สร้างและเพิ่ม `?` ให้ field ที่อาจหายไป หรือขยาย type ตามที่ document ของ API ระบุ ตัวแปลงช่วยงาน 80% ความรู้ domain ของคุณให้อีก 20%"
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
        "title": "YAML vs JSON vs XML: เลือก Format ไหนดี?",
        "description": "การเปรียบเทียบเชิงปฏิบัติของ 3 format การ serialize ข้อมูลที่ใช้กันมากที่สุด เรียนรู้ว่าเมื่อไหรควรใช้ YAML, JSON หรือ XML และแปลงระหว่างกันโดยไม่สูญเสียข้อมูล",
        "sections": [
          {
            "heading": "3 Format, 3 แนวคิด",
            "paragraphs": [
              "YAML, JSON และ XML แก้ปัญหาเดียวกันคือแทนข้อมูลที่มีโครงสร้างเป็น text แต่ทำด้วยแนวคิดการออกแบบที่ต่างกันโดยสิ้นเชิง XML (1998) ให้ความสำคัญกับ semantics แบบเอกสารด้วย attribute และ mixed content JSON (2001) ให้ความสำคัญกับ machine-readability และความเข้ากันได้กับ JavaScript YAML (2001) ให้ความสำคัญกับ human-readability และความสะดวกในการใช้เป็น configuration",
              "ในการพัฒนาซอฟต์แวร์ยุคใหม่คุณจะพบทั้งสาม REST API ใช้ JSON Kubernetes และ Docker Compose ใช้ YAML ระบบ Java ระดับ enterprise และ SOAP web service ยังคงใช้ XML การรู้ว่าเมื่อไหรควรใช้อะไรและวิธีแปลงระหว่างกันเป็นทักษะปฏิบัติประจำวัน"
            ]
          },
          {
            "heading": "JSON: มาตรฐาน API",
            "paragraphs": [
              "JSON parse เร็วที่สุด รองรับกว้างขวางที่สุด และกระชับที่สุดในสาม ทุกภาษาโปรแกรมมิ่งมี JSON parser ในตัว `JSON.parse()` ของ browser ก็มีในตัว JSON เป็นตัวเลือกที่ชัดเจนสำหรับ API response, request payload และการสื่อสาร machine-to-machine ที่ขนาดไฟล์และความเร็วในการ parse สำคัญ",
              "จุดอ่อนของ JSON คือการแก้ไขโดยมนุษย์ double quote ที่เข้มงวด ไม่มี comment ไม่มี trailing comma และไม่มี multiline string ทำให้การเขียน JSON config file ด้วยมือเป็นเรื่องเจ็บปวด นี่คือเหตุผลที่หลายเครื่องมือชอบ YAML สำหรับ configuration"
            ]
          },
          {
            "heading": "YAML: ราชาแห่ง Configuration",
            "paragraphs": [
              "YAML ถูกออกแบบให้มนุษย์อ่านและเขียน ใช้ indentation แทน bracket อนุญาต comment ด้วย `#` รองรับ multiline string โดยกำเนิด และอนุญาต string ที่ไม่ครอบด้วย quote ในกรณีส่วนใหญ่ Kubernetes deployment manifest ใน YAML อ่านง่ายกว่า JSON เทียบเท่ากันมาก",
              "จุดอ่อนของ YAML คือความเข้มงวด error จาก indentation เป็น silent killer indent 2 space ที่ต้องการ 4 space ทำให้ configuration ทั้งหมดพัง ใช้ YAML สำหรับ Kubernetes manifest, Docker Compose file, GitHub Actions workflow, Ansible playbook, CI/CD pipeline configuration และ config file ที่มนุษย์ต้องอ่านและแก้ไขเป็นประจำ"
            ]
          },
          {
            "heading": "XML: ยุคสมัยเก่าที่ยังอยู่",
            "paragraphs": [
              "ความเก่าแก่ของ XML เป็นทั้งภาระและพลัง ภาระ: tag ที่ verbose และซ้ำซ้อนที่เพิ่ม noise โดยไม่มีคุณค่า พลัง: ecosystem ของเครื่องมือที่ใหญ่โต XPath สำหรับ query, XSLT สำหรับ transformation, XSD สำหรับ schema validation",
              "เมื่อ migrate จาก XML เป็น JSON ระวังสิ่งที่หายไป XML attribute กลายเป็น JSON property (หรือหายไปถ้า converter ไม่ระวัง), mixed content ไม่มีตัวเทียบ JSON ที่สะอาด และ XML namespace ต้องการการจัดการพิเศษ"
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
        "title": "Base64 และ URL Encoding: คู่มืออ้างอิงฉบับสมบูรณ์สำหรับ Developer",
        "description": "เข้าใจ Base64, URL encoding และ HTML entity encoding ว่าคืออะไร ใช้เมื่อไหร่ และข้อผิดพลาดที่ developer มักทำกับ encoding",
        "sections": [
          {
            "heading": "Base64 Encoding คืออะไร?",
            "paragraphs": [
              "Base64 คือ encoding scheme ที่แปลง binary data เป็น ASCII text โดยแทน binary data ทุกๆ 3 byte เป็น ASCII character 4 ตัวที่ดึงมาจากตัวอักษร 64 ตัว (A–Z, a–z, 0–9, +, /) ชื่อ '64' หมายถึงตัวอักษร 64 ตัวนี้ แต่ละตัว encode ข้อมูล 6 bit",
              "Base64 ถูกสร้างขึ้นเพื่อแก้ปัญหาเฉพาะ: โปรโตคอลการสื่อสารเก่าๆ (เช่น SMTP ของ email) ถูกออกแบบสำหรับ ASCII text 7-bit ไม่ใช่ binary data ทั่วไป ถ้าพยายาม send ไฟล์ภาพ JPEG หรือ PDF เป็น byte ดิบผ่านระบบนั้น byte binary จะถูกตีความเป็น control character ผิดและทำข้อมูลเสียหาย Base64 encode binary เป็น ASCII text ที่ปลอดภัย"
            ]
          },
          {
            "heading": "การใช้งาน Base64 ที่พบบ่อย",
            "paragraphs": [
              "Email attachment: MIME ใช้ Base64 encode ไฟล์ binary ที่แนบกับ email นี่คือเหตุผลที่ email attachment ถูก encode เป็น Base64 ก่อน transmit",
              "Data URI: คุณสามารถ embed รูปภาพโดยตรงใน HTML หรือ CSS โดยใช้ data URI: `<img src='data:image/png;base64,...'>` ซึ่งขจัด HTTP request แยกต่างหากสำหรับรูปเล็กๆ อย่าง icon",
              "JWT token: header และ payload ของ JWT ถูก encode ด้วย Base64URL (รูปแบบที่แทน `+` ด้วย `-` และ `/` ด้วย `_` เพื่อให้ปลอดภัยสำหรับ URL) การ decode JWT คือการ reverse Base64URL encoding นี้ ไม่ต้องใช้ secret key เพื่ออ่าน payload"
            ]
          },
          {
            "heading": "URL Encoding (Percent Encoding)",
            "paragraphs": [
              "URL encoding แปลง character ที่ผิดกฎหรือมีความหมายพิเศษใน URL เป็นรูปแบบที่ปลอดภัย โดย replace แต่ละ byte ที่ไม่ปลอดภัยด้วย `%` ตามด้วยเลข hexadecimal 2 หลักของค่า byte นั้น ช่องว่างกลายเป็น `%20`, ampersand กลายเป็น `%26`",
              "เสมอ encode ค่า query parameter ไม่ใช่ URL ทั้งหมด การ encode URL เต็ม (รวมถึง `://` และ path slash) จะทำให้ URL พัง encode เฉพาะค่า: `https://example.com/search?q=${encodeURIComponent(userInput)}`"
            ]
          },
          {
            "heading": "เลือก Encoding ที่ถูกต้อง",
            "paragraphs": [
              "ใช้ Base64 เมื่อ: ส่ง binary data ผ่าน text-based protocol, embed รูปภาพใน data URI หรือ encode credential สำหรับ HTTP Basic Auth ระวัง Base64 เพิ่มขนาดข้อมูลประมาณ 33%",
              "ใช้ URL encoding เมื่อ: สร้าง query string, encode path segment ที่มี character พิเศษ หรือทำงานกับ form data ที่ส่งผ่าน GET request",
              "ใช้ HTML encoding เมื่อ: render เนื้อหาที่ผู้ใช้สร้างขึ้นในหน้า HTML, สร้าง HTML จาก code หรือแทรกค่า dynamic ลงใน HTML attribute"
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
        "title": "JWT Token อธิบาย: วิธี Decode และตรวจสอบ",
        "description": "เรียนรู้โครงสร้างของ JSON Web Token, วิธี decode และตรวจสอบ JWT claim, เข้าใจการหมดอายุและการ verify signature และ debug ปัญหา authentication ได้เร็วขึ้น",
        "sections": [
          {
            "heading": "JWT คืออะไร?",
            "paragraphs": [
              "JSON Web Token (JWT) คือ format token ที่กระชับและปลอดภัยสำหรับ URL ใช้แทน claim ระหว่างสองฝ่าย JWT ใช้กันทั่วไปสำหรับ authentication และ authorization ในเว็บแอปพลิเคชันและ API เมื่อผู้ใช้ login เซิร์ฟเวอร์จะออก JWT ที่ client เก็บและส่งกับทุก request ถัดไปเพื่อพิสูจน์ตัวตน",
              "JWT ประกอบด้วย 3 ส่วนคั่นด้วย dot: `header.payload.signature` แต่ละส่วน encode ด้วย Base64URL อย่างอิสระ header อธิบาย algorithm ที่ใช้ sign payload มี claim (ข้อมูล) signature verify ความถูกต้อง"
            ]
          },
          {
            "heading": "Decode vs Verify: ความแตกต่างที่สำคัญ",
            "paragraphs": [
              "การ decode JWT หมายถึงการ reverse Base64URL encoding เพื่ออ่าน header และ payload ทุกคนสามารถ decode JWT ใดก็ได้ ไม่ต้องใช้ key เครื่องมือ JWT Decode ของ DevConvert ทำสิ่งนี้: แสดง claim ที่มนุษย์อ่านได้ภายใน token ใดๆ",
              "การ verify JWT หมายถึงการตรวจสอบ cryptographic signature เพื่อยืนยันว่า token ถูกออกโดยฝ่ายที่เชื่อถือและไม่ถูกแก้ไข ซึ่งต้องใช้ secret key (สำหรับ HS256) หรือ public key (สำหรับ RS256) ไม่ควรเชื่อถือ JWT payload ฝั่ง client โดยไม่มีการ verify ฝั่ง server"
            ]
          },
          {
            "heading": "ปัญหา JWT ที่พบบ่อยและวิธี Debug",
            "paragraphs": [
              "Token หมดอายุ (`exp` อยู่ในอดีต): client ต้องรับ token ใหม่ ตรวจสอบ field `exp` ด้วยเครื่องมือ JWT Decode เพื่อยืนยันเวลาหมดอายุที่แน่นอนใน timezone ของคุณ",
              "Signature ไม่ถูกต้อง: token ถูก sign ด้วย key ที่ต่างออกไป หรือ token ถูกแก้ไขระหว่างส่ง ต้องตรวจสอบฝั่ง server เสมอ",
              "Missing claim: logic authorization ของคุณคาดว่าจะมี field `roles` แต่ไม่มีใน payload เครื่องมือ JWT Decode ช่วยให้คุณเห็น claim ทั้งหมดทันทีและระบุสิ่งที่หายไป"
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
        "title": "CSS to Tailwind: คู่มือการ Migrate เชิงปฏิบัติ",
        "description": "เรียนรู้วิธีแปลง vanilla CSS เป็น Tailwind utility class อย่างมีประสิทธิภาพ เข้าใจว่าเมื่อไหร่การ migrate จึงสมเหตุสมผล และจัดการ CSS pattern ที่ไม่มีตัวเทียบ Tailwind โดยตรง",
        "sections": [
          {
            "heading": "ทำไมถึง Migrate มา Tailwind CSS?",
            "paragraphs": [
              "Tailwind CSS ใช้ utility-first approach แทนการเขียน `.button { background-color: blue; padding: 8px; }` คุณ compose class โดยตรงใน HTML: `<button class='bg-blue-500 px-4 py-2 rounded'>` ซึ่งขจัดความจำเป็นในการคิดชื่อ class ป้องกัน CSS file จากการเติบโตไม่สิ้นสุด และทำให้ style มองเห็นได้ทันทีใน component markup",
              "ทีมงานรายงานว่า CSS bundle size เล็กลงอย่างมีนัยสำคัญด้วย Tailwind เพราะกระบวนการ build ของ Tailwind ตัด class ที่ไม่ได้ใช้ออก CSS production ของคุณมีเฉพาะสิ่งที่คุณใช้จริงๆ"
            ]
          },
          {
            "heading": "วิธีแปลง CSS เป็น Tailwind Class",
            "paragraphs": [
              "กระบวนการแปลง map คู่ property-value ของ CSS กับ naming convention ของ Tailwind CSS property ส่วนใหญ่มีตัวเทียบ Tailwind โดยตรง: `margin-top: 16px` map เป็น `mt-4` (Tailwind ใช้หน่วยฐาน 4px), `display: flex` map เป็น `flex`, `font-weight: 700` map เป็น `font-bold`",
              "ตัวแปลง CSS to Tailwind ของ DevConvert จัดการ CSS declaration ที่พบบ่อยที่สุดโดยอัตโนมัติ วาง CSS rule ของคุณแล้วเครื่องมือจะ output Tailwind class ที่เทียบเท่า ซึ่งมีประโยชน์โดยเฉพาะเมื่อคุณได้รับ CSS จาก designer (เช่น จาก Figma CSS export) และต้องแปลงเป็น component class"
            ]
          },
          {
            "heading": "CSS Minification และ Beautification",
            "paragraphs": [
              "CSS minification ลบ whitespace, comment และ semicolon ที่ซ้ำซ้อนทั้งหมดเพื่อสร้าง stylesheet ที่เล็กที่สุด CSS file ทั่วไปสามารถลดได้ 30–50% ผ่าน minification เสมอ minify CSS production เพื่อลดเวลาโหลดหน้า",
              "CSS beautification ทำตรงข้าม: ใช้ CSS ที่ถูก minify หรือจัดรูปแบบไม่ดีและเพิ่ม indentation, line break และ spacing ที่สม่ำเสมอ ซึ่งจำเป็นเมื่อคุณได้รับ CSS จาก third-party หรือ legacy stylesheet ที่ต้องอ่าน เข้าใจ และแก้ไข"
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
        "title": "Unix Timestamp อธิบาย: วันและเวลาไร้พรมแดน",
        "description": "เรียนรู้ว่า Unix timestamp คืออะไร ทำไมถึงเป็น format เวลาสากลสำหรับซอฟต์แวร์ วิธีแปลงเป็นวันที่ที่มนุษย์อ่านได้ และ timestamp pitfall ที่ developer มักพบ",
        "sections": [
          {
            "heading": "Unix Timestamp คืออะไร?",
            "paragraphs": [
              "Unix timestamp (เรียกอีกว่า Unix time, POSIX time หรือ epoch time) คือจำนวนวินาทีที่ผ่านไปนับตั้งแต่วันที่ 1 มกราคม 1970 เวลา 00:00:00 UTC ซึ่งเรียกว่า Unix epoch ตัวอย่างเช่น timestamp `1700000000` แทนวันที่ 14 พฤศจิกายน 2023 เวลา 22:13:20 UTC",
              "สิ่งสำคัญคือ Unix epoch กำหนดจุดอ้างอิงเดียวที่สอดคล้องกันที่ทุกระบบเห็นด้วย ไม่ว่าจะเป็น timezone, locale หรือระบบปฏิทิน"
            ]
          },
          {
            "heading": "วินาที vs มิลลิวินาที: Bug Timestamp ที่พบบ่อยที่สุด",
            "paragraphs": [
              "Unix timestamp ดั้งเดิมนับวินาที แต่ `Date.now()` ของ JavaScript return มิลลิวินาที ความต่าง 1000 เท่านี้คือ timestamp bug ที่พบบ่อยที่สุดในการพัฒนาเว็บ timestamp `1700000000` คือวันในปี 2023 แต่ `1700000000000` คือวันเดียวกันในมิลลิวินาที ส่งค่าผิดแล้วการคำนวณวันของคุณจะผิด 31 ปี",
              "ตรวจสอบ timestamp ของคุณเสมอ: ถ้าตัวเลขมี 10 หลักคือวินาที ถ้ามี 13 หลักคือมิลลิวินาที เครื่องมือ Timestamp to Date ของ DevConvert รับทั้งสอง format โดยอัตโนมัติและแสดงวันที่ที่ถูกต้องใน timezone ท้องถิ่นของคุณ, UTC และ ISO 8601"
            ]
          },
          {
            "heading": "ทำไม Timestamp ถึงดีกว่า Date String",
            "paragraphs": [
              "Date string อย่าง `12/01/2024` มีความคลุมเครือ เป็นวันที่ 1 ธันวาคมหรือ 12 มกราคม? convention ของอเมริกาและยุโรปต่างกัน Date string ยังมี timezone assumption โดยนัย `2024-01-15 14:30:00` ที่เก็บใน database อาจเป็นเวลาท้องถิ่น, UTC หรือ timezone ของ server ขึ้นอยู่กับว่าใครเขียน code",
              "Timestamp ไม่มีความคลุมเครือ `1705328400` คือช่วงเวลาเดียวในโลก การเก็บและเปรียบเทียบ timestamp หลีกเลี่ยง timezone conversion bug ทั้งหมด เก็บเป็น timestamp ทุกที่ แสดงในเวลาท้องถิ่นของผู้ใช้เมื่อ render"
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
        "title": "Binary, Hex และ Decimal: ระบบตัวเลขที่ Developer ทุกคนต้องรู้",
        "description": "เชี่ยวชาญ 3 ระบบตัวเลขที่คุณจะใช้ทุกวันในฐานะ developer เข้าใจ binary สำหรับ bitwise operation, hexadecimal สำหรับสีและ memory และ decimal conversion ที่ขับเคลื่อน code ของคุณ",
        "sections": [
          {
            "heading": "ทำไม Developer ต้องเข้าใจเลขฐาน",
            "paragraphs": [
              "คอมพิวเตอร์ทำงานด้วย binary (ฐาน-2) ในระดับ hardware มนุษย์คิดด้วย decimal (ฐาน-10) Hexadecimal (ฐาน-16) เป็นสะพานเชื่อม — กระชับพอสำหรับมนุษย์อ่านและ map ได้อย่างสมบูรณ์แบบกับ binary developer ทุกคนพบทั้งสามเมื่อทำงานกับสี, memory address, bitwise operation, debugging, low-level code และ networking",
              "คุณไม่จำเป็นต้องคำนวณในใจด้วย hex นั่นคือสิ่งที่เครื่องมือมีไว้ แต่คุณต้องรู้จักว่าเลขฐานแทนอะไรและรู้ว่าเมื่อไหรค่าใน code หรือ log ของคุณเป็น hex, binary หรือ decimal"
            ]
          },
          {
            "heading": "Hexadecimal (ฐาน-16): Format ที่มีประสิทธิภาพที่มนุษย์อ่านได้",
            "paragraphs": [
              "Hexadecimal ใช้ 16 สัญลักษณ์: 0–9 สำหรับค่า 0–9 และ A–F สำหรับค่า 10–15 หนึ่ง hex digit แทน 4 bit พอดี สอง hex digit แทนหนึ่ง byte พอดี ความสอดคล้องสมบูรณ์แบบกับ binary ทำให้ hex เป็น format ที่นิยมสำหรับแสดงข้อมูล binary ให้มนุษย์",
              "คุณพบ hex ทุกที่ในฐานะ developer: สีเว็บ (`#3b82f6` คือสีน้ำเงิน), memory address ใน debugger, UUID string (`550e8400-e29b-41d4-a716-446655440000`)"
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
        "title": "HEX, RGB และ HSL: เข้าใจ Format สีสำหรับเว็บ",
        "description": "เรียนรู้ความแตกต่างระหว่าง format สี HEX, RGB และ HSL ว่าควรใช้อะไรใน CSS ของคุณและวิธีแปลงระหว่างกันอย่างแม่นยำสำหรับ design system ใดก็ได้",
        "sections": [
          {
            "heading": "3 Color Model อธิบาย",
            "paragraphs": [
              "สีเว็บสามารถแสดงได้ใน 3 format หลัก HEX (`#3b82f6`) เป็น shorthand สำหรับ RGB model แสดงค่าสีแดง เขียว และน้ำเงินเป็นตัวเลข hexadecimal 2 หลัก RGB (`rgb(59, 130, 246)`) แสดง 3 channel เดียวกันเป็น integer 0–255 HSL (`hsl(217, 91%, 60%)`) แสดงสีเป็น Hue (0–360°), Saturation (0–100%) และ Lightness (0–100%)",
              "ทั้งสามแบบอธิบาย color space เดียวกัน สีเดิมทำได้ด้วยทุก format การเลือกระหว่างกันเป็นเรื่องของ workflow และ readability"
            ]
          },
          {
            "heading": "ควรใช้ HSL เมื่อไหร่",
            "paragraphs": [
              "HSL เป็น format ที่เป็นมิตรกับ developer มากที่สุดสำหรับสร้าง design system และ theme variable รูปแบบ hue, saturation และ lightness map โดยตรงกับวิธีที่มนุษย์รับรู้สี: hue คือ 'สี', saturation คือ 'ความสดใส' และ lightness คือ 'ความสว่าง'",
              "การสร้าง color scale ใน HSL ง่ายมาก ต้องการ gray scale 9 ขั้น? กำหนด hue ที่ 220°, saturation ที่ 10% และเปลี่ยน lightness จาก 10% ถึง 90%"
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
        "title": "Markdown to HTML: แปลง Documentation และ Content สำหรับเว็บ",
        "description": "เรียนรู้กระบวนการแปลง Markdown เป็น HTML, feature ของ GitHub Flavored Markdown, เมื่อไหรควรแปลงและเมื่อไหรควร render Markdown โดยตรง และวิธี format HTML สำหรับ production",
        "sections": [
          {
            "heading": "ทำไม Markdown ถึงมีอยู่",
            "paragraphs": [
              "Markdown ถูกสร้างโดย John Gruber ในปี 2004 เป็นวิธีเขียน text ที่จัดรูปแบบโดยใช้ plain-text syntax ที่อ่านได้ตามธรรมชาติแม้ก่อน render เป้าหมาย: syntax ที่สะอาดมากจนคุณไม่จำเป็นต้องเห็น render เพื่อเข้าใจเอกสาร",
              "วันนี้ Markdown เป็น format การเขียน default สำหรับ technical documentation, README file, GitHub issue และ pull request, blog post (ผ่าน static site generator อย่าง Hugo และ Jekyll)"
            ]
          },
          {
            "heading": "HTML Formatting: Beautify และ Minify",
            "paragraphs": [
              "HTML Beautify เพิ่ม indentation และ line break ที่สม่ำเสมอให้กับ HTML code จำเป็นเมื่อทำงานกับ HTML ที่สร้างโดยเครื่องมือ export จากระบบอื่น หรือถูก minify สำหรับ production HTML ที่อ่านได้คือ HTML ที่บำรุงรักษาได้",
              "HTML Minify ลบ whitespace, comment และ character ที่ไม่จำเป็นออกจาก HTML สำหรับเว็บไซต์ production การ minify HTML ลดขนาดหน้าและปรับปรุง Time to First Byte เสมอ beautify ก่อนแก้ไข minify ก่อน deploy"
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
        "title": "CSV to JSON: แปลงข้อมูล Spreadsheet สำหรับ API และ Database",
        "description": "เรียนรู้วิธีแปลงไฟล์ CSV เป็น JSON array จัดการ edge case ของ CSV ทั่วไป และใช้ข้อมูลที่แปลงแล้วใน API, database และแอปพลิเคชัน JavaScript",
        "sections": [
          {
            "heading": "ทำไม CSV และ JSON ถึงยังสำคัญทั้งคู่",
            "paragraphs": [
              "CSV (Comma-Separated Values) และ JSON รองรับ ecosystem ที่ต่างกัน CSV เป็น format สากลสำหรับข้อมูลแบบตาราง ทุก spreadsheet application, database export tool และ data analytics platform สามารถอ่านและเขียน CSV ได้ JSON เป็น format สากลสำหรับ API และแอปพลิเคชัน JavaScript",
              "การแปลงระหว่างกันเป็นงานประจำในด้าน data engineering คุณได้รับ data export จากระบบธุรกิจในรูปแบบ CSV และต้องนำเข้า API คุณมี JSON จาก API และต้องวิเคราะห์ใน Excel"
            ]
          },
          {
            "heading": "JSON to SQL: Scaffold Database Schema",
            "paragraphs": [
              "ก้าวต่อจาก CSV ตัวแปลง JSON to SQL ของ DevConvert สร้างทั้ง statement `CREATE TABLE` และ `INSERT INTO` จาก JSON array ซึ่งช่วยให้คุณนำ JSON API response ตัวอย่างมาสร้าง database schema เพื่อเก็บข้อมูลนั้นได้ทันที",
              "ตัวแปลง infer ประเภท SQL column จากค่า JSON: string กลายเป็น `VARCHAR(255)`, ตัวเลขกลายเป็น `INTEGER` หรือ `FLOAT`, boolean กลายเป็น `BOOLEAN` SQL ที่สร้างขึ้นเป็นจุดเริ่มต้น คุณจะต้องปรับขนาด column เพิ่ม index ตาม requirement"
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
        "title": "TypeScript vs JavaScript: เมื่อไหรและอย่างไรที่จะแปลงระหว่างกัน",
        "description": "เข้าใจความแตกต่างที่แท้จริงระหว่าง TypeScript และ JavaScript เมื่อไหรควร migrate และวิธีใช้ตัวแปลง TS↔JS จัดการทั้งสองทิศทางของการแปลงในโปรเจกต์ของคุณ",
        "sections": [
          {
            "heading": "TypeScript คือ JavaScript บวก Type Layer",
            "paragraphs": [
              "TypeScript เป็น superset ของ JavaScript ทุก JavaScript file ที่ถูกต้องก็เป็น TypeScript file ที่ถูกต้องด้วย TypeScript เพิ่ม type system ไว้ด้านบน ซึ่งทั้งหมดถูกลบออกเมื่อ compile JavaScript ที่รันใน browser หรือ Node.js เป็น JavaScript บริสุทธิ์ TypeScript เป็นเครื่องมือในเวลา development",
              "นี่มีนัยสำคัญ: การ migrate จาก JavaScript เป็น TypeScript เป็น additive ไม่ใช่ destructive คุณกำลังเพิ่ม type ไม่ใช่เปลี่ยน behavior คุณสามารถ migrate ทีละ file ทีละ function โดยไม่ต้องเขียนใหม่ทั้งหมด"
            ]
          },
          {
            "heading": "เมื่อไหรที่ TypeScript คุ้มค่า",
            "paragraphs": [
              "TypeScript คุ้มค่าตามขนาดของโปรเจกต์และทีม โปรเจกต์ solo สุดสัปดาห์ด้วย JavaScript ล้วนๆ ก็ไม่เป็นไร แต่ทีม 6 คนที่ทำงานบน production API มา 2 ปีโดยไม่มี TypeScript คือฝันร้ายด้านบำรุงรักษา",
              "จุดคุ้มทุนโดยประมาณ: โปรเจกต์ใดก็ตามที่จะถูกแก้ไขโดยมากกว่าหนึ่งคน จะมีอายุนานกว่า 3 เดือน หรือมีมากกว่า 20 file ต่ำกว่าเกณฑ์นั้น ค่าใช้จ่ายในการตั้งค่า TypeScript มากกว่าประโยชน์ที่ได้รับ"
            ]
          }
        ]
      },
    }
  ]
}

export default th

import{u as d,j as e,b,C as v,S as y,P as f,A as j}from"./index-B1OvSnPa.js";import{u as S,r as m}from"./vendor-react-CbWf5x74.js";import{A as C,C as h}from"./index-D-Ct8A21.js";import{I as w,a as N,s as T}from"./vendor-antd-CnwVIOgK.js";import"./vendor-monaco-CWvaZ9-J.js";const L=[{icon:"🔒"},{icon:"⚡"},{icon:"🛠️"},{icon:"🌐"},{icon:"🎨"},{icon:"💾"}];function k(){const{t}=d();return e.jsxs("section",{children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:32},children:[e.jsx("h2",{style:{fontSize:"clamp(24px, 3.5vw, 36px)",fontWeight:800,color:"var(--color-text)",margin:"0 0 16px",letterSpacing:"-0.02em"},className:"text-newline",children:t.whyTitle}),e.jsx("p",{style:{fontSize:16,color:"var(--color-text-secondary)",maxWidth:480,margin:"0 auto",lineHeight:1.7},children:t.whySubtitle})]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:20},children:L.map((s,r)=>e.jsxs("div",{style:{background:"var(--color-surface)",border:"1px solid var(--color-border)",borderRadius:12,padding:"24px 24px",transition:"border-color 0.2s, transform 0.2s"},onMouseEnter:o=>{o.currentTarget.style.borderColor="var(--color-primary)",o.currentTarget.style.transform="translateY(-2px)"},onMouseLeave:o=>{o.currentTarget.style.borderColor="var(--color-border)",o.currentTarget.style.transform="translateY(0)"},children:[e.jsx("div",{style:{fontSize:28,marginBottom:14},children:s.icon}),e.jsx("h3",{style:{fontSize:15,fontWeight:700,color:"var(--color-text)",margin:"0 0 10px"},children:t[`whyFeat${r+1}Title`]}),e.jsx("p",{style:{fontSize:14,color:"var(--color-text-secondary)",lineHeight:1.7,margin:0},children:t[`whyFeat${r+1}Body`]})]},t[`whyFeat${r+1}Title`]))})]})}const g=[{step:"01",title:"วางข้อมูลของคุณ",body:"วาง JSON, YAML, TypeScript, CSV หรือข้อมูลอื่น ๆ ลงในช่อง input ทางซ้าย หรือพิมพ์เองก็ได้",hint:"รองรับ paste จาก clipboard โดยตรง"},{step:"02",title:"เลือก format ที่ต้องการ",body:"เลือก format ปลายทางจาก dropdown: TypeScript, JSON, YAML, XML, SQL, Markdown และอีกมากมาย",hint:"แปลงอัตโนมัติทันทีที่คุณเลือก"},{step:"03",title:"คัดลอกหรือดาวน์โหลด",body:"คัดลอก output ได้ทันที หรือดาวน์โหลดเป็นไฟล์ นำไปใช้งานใน project ได้เลยโดยไม่ต้องแก้ไขเพิ่ม",hint:"บันทึกเป็น .ts, .json, .yaml และอื่น ๆ"}];function z(){const{t}=d();return e.jsxs("section",{children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:32},children:[e.jsx("h2",{style:{fontSize:"clamp(24px, 3.5vw, 36px)",fontWeight:800,color:"var(--color-text)",margin:"0 0 16px",letterSpacing:"-0.02em"},children:t.howTitle}),e.jsx("p",{style:{fontSize:16,color:"var(--color-text-secondary)",maxWidth:400,margin:"0 auto"},children:t.howSubtitle})]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(240px, 1fr))",gap:0,position:"relative"},children:g.map((s,r)=>e.jsxs("div",{style:{padding:"32px 32px",borderTop:"2px solid var(--color-border)",borderRight:r<g.length-1?"1px solid var(--color-border)":"none",position:"relative"},children:[e.jsx("div",{style:{position:"absolute",top:-2,left:0,width:`${(r+1)/g.length*100}%`,height:2,background:"var(--color-primary)"}}),e.jsx("div",{style:{fontSize:11,fontWeight:800,letterSpacing:"0.12em",color:"var(--color-primary)",marginBottom:16},children:t[`howStep${r+1}Label`]}),e.jsx("h3",{style:{fontSize:18,fontWeight:700,color:"var(--color-text)",margin:"0 0 12px"},children:t[`howStep${r+1}Title`]}),e.jsx("p",{style:{fontSize:14,color:"var(--color-text-secondary)",lineHeight:1.7,margin:"0 0 16px"},children:t[`howStep${r+1}Body`]}),e.jsxs("p",{style:{fontSize:12,color:"var(--color-text-muted)",margin:0,display:"flex",alignItems:"center",gap:6},children:[e.jsx("span",{style:{color:"var(--color-primary)"},children:"✓"}),t[`howStep${r+1}Hint`]]})]},t[`howStep${r+1}Label`]))})]})}const R=[{icon:"{ }",label:"JSON",color:"#f59e0b",desc:"JSON ↔ TypeScript, YAML, XML, CSV, SQL",converters:["json-to-typescript","json-to-yaml","json-beautify"],count:9},{icon:"⚡",label:"YAML / XML",color:"#8b5cf6",desc:"แปลงระหว่าง YAML, XML, JSON และ TypeScript",converters:["yaml-to-json","xml-to-json"],count:5},{icon:"</>",label:"โค้ด",color:"#3b82f6",desc:"TypeScript ↔ JavaScript, CSS ↔ SCSS, Tailwind",converters:["typescript-to-javascript","css-to-tailwind"],count:6},{icon:"#",label:"Markup",color:"#10b981",desc:"Markdown ↔ HTML, Format และ Minify",converters:["markdown-to-html","html-beautify"],count:4},{icon:"🔐",label:"Encoding",color:"#ef4444",desc:"Base64, URL, JWT, HTML Entities, เลขฐาน",converters:["base64-encode","jwt-decode"],count:10},{icon:"🎨",label:"สี",color:"#ec4899",desc:"HEX ↔ RGB ↔ HSL พร้อม CSS variables",converters:["hex-to-rgb","rgb-to-hex"],count:3}];function M(){const t=S(),{t:s}=d(),r=[{label:s.catJsonLabel,desc:s.catJsonDesc},{label:s.catYamlLabel,desc:s.catYamlDesc},{label:s.catCodeLabel,desc:s.catCodeDesc},{label:s.catMarkupLabel,desc:s.catMarkupDesc},{label:s.catEncodingLabel,desc:s.catEncodingDesc},{label:s.catColorLabel,desc:s.catColorDesc}];return e.jsxs("section",{children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:32},children:[e.jsx("h2",{style:{fontSize:"clamp(24px, 3.5vw, 36px)",fontWeight:800,color:"var(--color-text)",margin:"0 0 16px",letterSpacing:"-0.02em"},className:"text-newline",children:s.catTitle}),e.jsx("p",{style:{fontSize:16,color:"var(--color-text-secondary)",maxWidth:480,margin:"0 auto",lineHeight:1.7},children:s.catSubtitle})]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(260px, 1fr))",gap:16},children:R.map((o,x)=>e.jsxs("div",{onClick:()=>t(b.converter(o.converters[0])),style:{background:"var(--color-surface)",border:"1px solid var(--color-border)",borderRadius:12,padding:"20px 20px",cursor:"pointer",transition:"all 0.2s ease"},onMouseEnter:a=>{const n=a.currentTarget;n.style.borderColor=o.color,n.style.transform="translateY(-2px)"},onMouseLeave:a=>{const n=a.currentTarget;n.style.borderColor="var(--color-border)",n.style.transform="translateY(0)"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:14},children:[e.jsx("div",{style:{width:40,height:40,borderRadius:10,background:`${o.color}18`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,fontWeight:800,fontFamily:"monospace",color:o.color},children:o.icon}),e.jsxs("span",{style:{fontSize:11,fontWeight:700,color:o.color,background:`${o.color}18`,borderRadius:100,padding:"2px 10px"},children:[o.count," tools"]})]}),e.jsx("h3",{style:{fontSize:15,fontWeight:700,color:"var(--color-text)",margin:"0 0 8px"},children:r[x].label}),e.jsx("p",{style:{fontSize:13,color:"var(--color-text-secondary)",margin:0,lineHeight:1.6},children:r[x].desc})]},o.label))})]})}function E(){const{t}=d(),s=[{value:"0",unit:"ms",label:t.ppStat1Label,sub:t.ppStat1Sub},{value:"100",unit:"%",label:t.ppStat2Label,sub:t.ppStat2Sub},{value:"35",unit:"+",label:t.ppStat3Label,sub:t.ppStat3Sub},{value:"∞",unit:"",label:t.ppStat4Label,sub:t.ppStat4Sub}],r=[t.ppCheck1,t.ppCheck2,t.ppCheck3,t.ppCheck4];return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        .pp-section {
          padding: 32px 24px;
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: 16px;
        }
        .pp-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
        }
        .pp-stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        .pp-stat-card {
          background: var(--color-surface-2, var(--color-bg));
          border: 1px solid var(--color-border);
          border-radius: 12px;
          padding: 20px 16px;
          text-align: center;
        }
        .pp-stat-value {
          font-size: 36px;
          font-weight: 900;
          color: var(--color-primary);
          line-height: 1;
          margin-bottom: 4px;
          letter-spacing: -0.03em;
        }
        .pp-stat-unit {
          font-size: 20px;
        }
        .pp-stat-label {
          font-size: 13px;
          font-weight: 700;
          color: var(--color-text);
          margin-bottom: 4px;
        }
        .pp-stat-sub {
          font-size: 11px;
          color: var(--color-text-muted);
          line-height: 1.4;
        }

        /* Tablet: stack to single column */
        @media (max-width: 768px) {
          .pp-section {
            padding: 28px 20px;
          }
          .pp-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }

        /* Mobile: tighter spacing */
        @media (max-width: 480px) {
          .pp-section {
            padding: 24px 16px;
            border-radius: 12px;
          }
          .pp-stat-card {
            padding: 16px 12px;
          }
          .pp-stat-value {
            font-size: 28px;
          }
          .pp-stat-unit {
            font-size: 16px;
          }
          .pp-stat-label {
            font-size: 12px;
          }
          .pp-stat-sub {
            font-size: 10px;
          }
        }

        /* Very small: 2-col stats still fine, but collapse to 1-col if < 320px */
        @media (max-width: 320px) {
          .pp-stats-grid {
            grid-template-columns: 1fr;
          }
        }
      `}),e.jsx("section",{className:"pp-section",children:e.jsxs("div",{className:"pp-grid",children:[e.jsxs("div",{children:[e.jsx("h2",{style:{fontSize:"clamp(20px, 4vw, 32px)",fontWeight:800,color:"var(--color-text)",margin:"0 0 16px",letterSpacing:"-0.02em",lineHeight:1.3},className:"text-newline",children:t.ppTitle}),e.jsx("p",{style:{fontSize:"clamp(13px, 1.5vw, 15px)",color:"var(--color-text-secondary)",lineHeight:1.8,margin:"0 0 20px"},children:t.ppBody}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:10},children:r.map(o=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,fontSize:"clamp(12px, 1.4vw, 14px)",color:"var(--color-text-secondary)"},children:[e.jsx("span",{style:{width:18,height:18,minWidth:18,borderRadius:"50%",background:"var(--color-primary)",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,fontWeight:800,flexShrink:0},children:"✓"}),o]},o))})]}),e.jsx("div",{className:"pp-stats-grid",children:s.map(o=>e.jsxs("div",{className:"pp-stat-card",children:[e.jsxs("div",{className:"pp-stat-value",children:[o.value,e.jsx("span",{className:"pp-stat-unit",children:o.unit})]}),e.jsx("div",{className:"pp-stat-label",children:o.label}),e.jsx("div",{className:"pp-stat-sub",children:o.sub})]},o.label))})]})})]})}function W(){const{t}=d(),s=[{role:"Frontend Developer",emoji:"👩‍💻",color:"#3b82f6",cases:[t.ucRole1Case1,t.ucRole1Case2,t.ucRole1Case3]},{role:"DevOps / Backend",emoji:"🖥️",color:"#8b5cf6",cases:[t.ucRole2Case1,t.ucRole2Case2,t.ucRole2Case3]},{role:"Data Engineer",emoji:"📊",color:"#f59e0b",cases:[t.ucRole3Case1,t.ucRole3Case2,t.ucRole3Case3]},{role:"Technical Writer",emoji:"✍️",color:"#10b981",cases:[t.ucRole4Case1,t.ucRole4Case2,t.ucRole4Case3]}];return e.jsxs("section",{children:[e.jsx("div",{style:{textAlign:"center",marginBottom:32},children:e.jsx("h2",{style:{fontSize:"clamp(24px, 3.5vw, 36px)",fontWeight:800,color:"var(--color-text)",margin:"0 0 16px",letterSpacing:"-0.02em"},className:"text-newline",children:t.useCaseTitle})}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(260px, 1fr))",gap:20},children:s.map(r=>e.jsxs("div",{style:{background:"var(--color-surface)",border:"1px solid var(--color-border)",borderRadius:12,overflow:"hidden"},children:[e.jsxs("div",{style:{padding:"16px 20px",borderBottom:"1px solid var(--color-border)",display:"flex",alignItems:"center",gap:10,background:`${r.color}0d`},children:[e.jsx("span",{style:{fontSize:22},children:r.emoji}),e.jsx("span",{style:{fontSize:14,fontWeight:700,color:"var(--color-text)"},children:r.role})]}),e.jsx("div",{style:{padding:"16px 20px"},children:r.cases.map(o=>e.jsxs("div",{style:{display:"flex",gap:10,marginBottom:12,alignItems:"flex-start"},children:[e.jsx("span",{style:{width:6,height:6,borderRadius:"50%",background:r.color,flexShrink:0,marginTop:6}}),e.jsx("span",{style:{fontSize:13,color:"var(--color-text-secondary)",lineHeight:1.6},children:o})]},o))})]},r.role))})]})}const p=({name:t})=>e.jsx(T,{orientation:"center",style:{marginTop:64},children:e.jsx("p",{style:{fontSize:16,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",color:"var(--color-primary)",marginBottom:12},children:t})});function I(){const[t,s]=m.useState(""),{t:r}=d(),[o,x]=m.useState(0),a=m.useMemo(()=>{const l=t.toLowerCase().trim();return l?v.filter(i=>i.name.toLowerCase().includes(l)||i.description.toLowerCase().includes(l)||i.shortName.toLowerCase().includes(l)||i.seoKeywords.some(c=>c.includes(l))):null},[t]),n=[{from:"JSON",to:"TypeScript",label:"json-to-typescript"},{from:"YAML",to:"JSON",label:"yaml-to-json"},{from:"CSV",to:"JSON",label:"csv-to-json"},{from:"Markdown",to:"HTML",label:"markdown-to-html"},{from:"HEX",to:"RGB",label:"hex-to-rgb"}];m.useEffect(()=>{const l=setInterval(()=>x(i=>(i+1)%n.length),2500);return()=>clearInterval(l)},[]);const u=n[o];return e.jsxs(e.Fragment,{children:[e.jsx(y,{title:"DevConvert – Free Online Code & Data Converter for Developers",description:"30+ free online developer tools. Convert JSON, YAML, TypeScript, Markdown, Base64, and more – instantly in your browser. No signup, no install.",keywords:["json converter","typescript converter","yaml converter","developer tools","free online tools"],canonicalPath:"/"}),e.jsx(C,{slot:"topLeaderboard",format:"leaderboard",style:{marginBottom:-40}}),e.jsxs("div",{className:"app-content",children:[e.jsxs("section",{className:"home-hero",children:[e.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:8,background:"var(--color-surface-2, rgba(255,255,255,0.06))",border:"1px solid var(--color-border)",borderRadius:100,padding:"6px 14px",fontSize:13,color:"var(--color-text-secondary)",marginBottom:28},children:[e.jsx("span",{style:{width:7,height:7,borderRadius:"50%",background:"#22c55e",display:"inline-block",animation:"pulse-dot 1.8s ease-in-out infinite"}}),r.privacyNote]}),e.jsxs("h1",{className:"hero-title",children:[r.heroTitle1,e.jsx("br",{}),e.jsx("span",{className:"highlight",children:r.heroTitle2})]}),e.jsx("p",{className:"hero-subtitle",children:r.heroSubtitle}),e.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:10,background:"var(--color-surface-2, rgba(255,255,255,0.05))",border:"1px solid var(--color-border)",borderRadius:10,padding:"10px 20px",marginBottom:18,fontSize:15,fontFamily:"monospace",transition:"all 0.3s ease"},children:[e.jsx("span",{style:{color:"var(--color-primary)",fontWeight:700},children:u.from}),e.jsx("span",{style:{color:"var(--color-text-muted)",fontSize:12},children:"→"}),e.jsx("span",{style:{color:"var(--color-text)",fontWeight:700},children:u.to})]}),e.jsxs("div",{className:"hero-stats",children:[e.jsxs("div",{className:"hero-stat",children:[e.jsx("span",{className:"hero-stat-value",children:"35+"}),e.jsx("span",{className:"hero-stat-label",children:r.statConverters})]}),e.jsxs("div",{className:"hero-stat",children:[e.jsx("span",{className:"hero-stat-value",children:"0ms"}),e.jsx("span",{className:"hero-stat-label",children:r.statLatency})]}),e.jsxs("div",{className:"hero-stat",children:[e.jsx("span",{className:"hero-stat-value",children:"100%"}),e.jsx("span",{className:"hero-stat-label",children:r.statClientSide})]}),e.jsxs("div",{className:"hero-stat",children:[e.jsx("span",{className:"hero-stat-value",children:"Free"}),e.jsx("span",{className:"hero-stat-label",children:r.statFree})]})]}),e.jsx("div",{className:"search-wrapper",children:e.jsx(w,{prefix:e.jsx(N,{}),placeholder:r.searchPlaceholder,value:t,onChange:l=>s(l.target.value),allowClear:!0,size:"large"})}),a&&e.jsxs("div",{children:[e.jsx("div",{className:"section-label",style:{marginBottom:16},children:r.searchResults(a.length,t)}),a.length>0?e.jsx("div",{className:"category-grid",children:a.map(l=>e.jsx(h,{converter:l},l.id))}):e.jsx("p",{style:{color:"var(--color-text-muted)"},children:r.noResults})]}),!a&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"section-label",children:r.mostPopular}),e.jsx("div",{className:"popular-grid",children:f.map(l=>e.jsx(h,{converter:l},l.id))})]})]}),!a&&e.jsx(e.Fragment,{children:j.map(l=>{const i=v.filter(c=>c.category===l.key);return i.length?e.jsxs("section",{className:"category-group",children:[e.jsxs("div",{className:"section-label",children:[l.emoji," ",l.label]}),e.jsx("div",{className:"category-grid",children:i.map(c=>e.jsx(h,{converter:c},c.id))})]},l.key):null})}),e.jsx(p,{name:r.whyTitleDivider}),e.jsx(k,{}),e.jsx(p,{name:r.howTitleDivider}),e.jsx(z,{}),e.jsx(p,{name:r.catTitleDivider}),e.jsx(M,{}),e.jsx(p,{name:r.ppTitleDivider}),e.jsx(E,{}),e.jsx(p,{name:r.useCaseTitleDivider}),e.jsx(W,{})]})]})}export{I as default};

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 4 — Tool Categories: หมวดหมู่เครื่องมือทั้งหมด
// interactive card grid พร้อม navigate ไปยัง converter
// ─────────────────────────────────────────────────────────────────────────────

import { useI18n } from "@/contexts/I18nContext";
import { buildPath } from "@/routes";
import { useNavigate } from "react-router-dom";

const TOOL_CATEGORIES = [
    {
        icon: "{ }",
        label: "JSON",
        color: "#f59e0b",
        desc: "JSON ↔ TypeScript, YAML, XML, CSV, SQL",
        converters: ["json-to-typescript", "json-to-yaml", "json-beautify"],
        count: 9,
    },
    {
        icon: "⚡",
        label: "YAML / XML",
        color: "#8b5cf6",
        desc: "แปลงระหว่าง YAML, XML, JSON และ TypeScript",
        converters: ["yaml-to-json", "xml-to-json"],
        count: 5,
    },
    {
        icon: "</>",
        label: "โค้ด",
        color: "#3b82f6",
        desc: "TypeScript ↔ JavaScript, CSS ↔ SCSS, Tailwind",
        converters: ["typescript-to-javascript", "css-to-tailwind"],
        count: 6,
    },
    {
        icon: "#",
        label: "Markup",
        color: "#10b981",
        desc: "Markdown ↔ HTML, Format และ Minify",
        converters: ["markdown-to-html", "html-beautify"],
        count: 4,
    },
    {
        icon: "🔐",
        label: "Encoding",
        color: "#ef4444",
        desc: "Base64, URL, JWT, HTML Entities, เลขฐาน",
        converters: ["base64-encode", "jwt-decode"],
        count: 10,
    },
    {
        icon: "🎨",
        label: "สี",
        color: "#ec4899",
        desc: "HEX ↔ RGB ↔ HSL พร้อม CSS variables",
        converters: ["hex-to-rgb", "rgb-to-hex"],
        count: 3,
    },
];

export function ToolCategories() {
    const navigate = useNavigate();

    const { t } = useI18n()

    const labelList = [
        {
            label: t.catJsonLabel,
            desc: t.catJsonDesc
        },
        {
            label: t.catYamlLabel,
            desc: t.catYamlDesc
        },
        {
            label: t.catCodeLabel,
            desc: t.catCodeDesc
        },
        {
            label: t.catMarkupLabel,
            desc: t.catMarkupDesc
        },
        {
            label: t.catEncodingLabel,
            desc: t.catEncodingDesc
        },
        {
            label: t.catColorLabel,
            desc: t.catColorDesc
        }
    ]

    return (
        <section >
            <div style={{ textAlign: "center", marginBottom: 32 }}>
                <h2
                    style={{
                        fontSize: "clamp(24px, 3.5vw, 36px)",
                        fontWeight: 800,
                        color: "var(--color-text)",
                        margin: "0 0 16px",
                        letterSpacing: "-0.02em",
                    }}
                    className="text-newline"
                >
                    {t.catTitle}
                </h2>
                <p
                    style={{
                        fontSize: 16,
                        color: "var(--color-text-secondary)",
                        maxWidth: 480,
                        margin: "0 auto",
                        lineHeight: 1.7,
                    }}
                >
                    {t.catSubtitle}
                </p>
            </div>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                    gap: 16,
                }}
            >
                {TOOL_CATEGORIES.map((cat, i) => (
                    <div
                        key={cat.label}
                        onClick={() => navigate(buildPath.converter(cat.converters[0]))}
                        style={{
                            background: "var(--color-surface)",
                            border: "1px solid var(--color-border)",
                            borderRadius: 12,
                            padding: "20px 20px",
                            cursor: "pointer",
                            transition: "all 0.2s ease",
                        }}
                        onMouseEnter={(e) => {
                            const el = e.currentTarget as HTMLDivElement;
                            el.style.borderColor = cat.color;
                            el.style.transform = "translateY(-2px)";
                        }}
                        onMouseLeave={(e) => {
                            const el = e.currentTarget as HTMLDivElement;
                            el.style.borderColor = "var(--color-border)";
                            el.style.transform = "translateY(0)";
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                marginBottom: 14,
                            }}
                        >
                            <div
                                style={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: 10,
                                    background: `${cat.color}18`,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: 14,
                                    fontWeight: 800,
                                    fontFamily: "monospace",
                                    color: cat.color,
                                }}
                            >
                                {cat.icon}
                            </div>
                            <span
                                style={{
                                    fontSize: 11,
                                    fontWeight: 700,
                                    color: cat.color,
                                    background: `${cat.color}18`,
                                    borderRadius: 100,
                                    padding: "2px 10px",
                                }}
                            >
                                {cat.count} tools
                            </span>
                        </div>
                        <h3
                            style={{
                                fontSize: 15,
                                fontWeight: 700,
                                color: "var(--color-text)",
                                margin: "0 0 8px",
                            }}
                        >
                            {labelList[i].label} 
                        </h3>
                        <p
                            style={{
                                fontSize: 13,
                                color: "var(--color-text-secondary)",
                                margin: 0,
                                lineHeight: 1.6,
                            }}
                        >
                            {labelList[i].desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

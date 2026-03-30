// ─────────────────────────────────────────────────────────────────────────────
// SECTION 3 — How It Works: 3-step horizontal flow
// เรียบ ใช้ได้ทั้ง light/dark mode
// ─────────────────────────────────────────────────────────────────────────────

import { useI18n } from "@/contexts/I18nContext";

const HOW_STEPS = [
    {
        step: "01",
        title: "วางข้อมูลของคุณ",
        body: "วาง JSON, YAML, TypeScript, CSV หรือข้อมูลอื่น ๆ ลงในช่อง input ทางซ้าย หรือพิมพ์เองก็ได้",
        hint: "รองรับ paste จาก clipboard โดยตรง",
    },
    {
        step: "02",
        title: "เลือก format ที่ต้องการ",
        body: "เลือก format ปลายทางจาก dropdown: TypeScript, JSON, YAML, XML, SQL, Markdown และอีกมากมาย",
        hint: "แปลงอัตโนมัติทันทีที่คุณเลือก",
    },
    {
        step: "03",
        title: "คัดลอกหรือดาวน์โหลด",
        body: "คัดลอก output ได้ทันที หรือดาวน์โหลดเป็นไฟล์ นำไปใช้งานใน project ได้เลยโดยไม่ต้องแก้ไขเพิ่ม",
        hint: "บันทึกเป็น .ts, .json, .yaml และอื่น ๆ",
    },
];

export function HowItWorks() {
    const { t } = useI18n()

    type howStepLabelKey = `howStep${1 | 2 | 3}Label`;
    type howStepTitleKey = `howStep${1 | 2 | 3}Title`;
    type howStepBodyKey = `howStep${1 | 2 | 3}Body`;
    type howStepHintKey = `howStep${1 | 2 | 3}Hint`;

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
                >
                    {t.howTitle}
                </h2>
                <p
                    style={{
                        fontSize: 16,
                        color: "var(--color-text-secondary)",
                        maxWidth: 400,
                        margin: "0 auto",
                    }}
                >
                    {t.howSubtitle}
                </p>
            </div>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                    gap: 0,
                    position: "relative",
                }}
            >
                {HOW_STEPS.map((s, i) => (
                    <div
                        key={t[`howStep${i + 1}Label` as howStepLabelKey]}
                        style={{
                            padding: "32px 32px",
                            borderTop: "2px solid var(--color-border)",
                            borderRight:
                                i < HOW_STEPS.length - 1
                                    ? "1px solid var(--color-border)"
                                    : "none",
                            position: "relative",
                        }}
                    >
                        {/* Step number accent bar */}
                        <div
                            style={{
                                position: "absolute",
                                top: -2,
                                left: 0,
                                width: `${((i + 1) / HOW_STEPS.length) * 100}%`,
                                height: 2,
                                background: "var(--color-primary)",
                            }}
                        />

                        <div
                            style={{
                                fontSize: 11,
                                fontWeight: 800,
                                letterSpacing: "0.12em",
                                color: "var(--color-primary)",
                                marginBottom: 16,
                            }}
                        >
                            {t[`howStep${i + 1}Label` as howStepLabelKey]}
                        </div>
                        <h3
                            style={{
                                fontSize: 18,
                                fontWeight: 700,
                                color: "var(--color-text)",
                                margin: "0 0 12px",
                            }}
                        >
                            {t[`howStep${i + 1}Title` as howStepTitleKey]}
                        </h3>
                        <p
                            style={{
                                fontSize: 14,
                                color: "var(--color-text-secondary)",
                                lineHeight: 1.7,
                                margin: "0 0 16px",
                            }}
                        >
                            {t[`howStep${i + 1}Body` as howStepBodyKey]}
                        </p>
                        <p
                            style={{
                                fontSize: 12,
                                color: "var(--color-text-muted)",
                                margin: 0,
                                display: "flex",
                                alignItems: "center",
                                gap: 6,
                            }}
                        >
                            <span style={{ color: "var(--color-primary)" }}>✓</span>
                            {t[`howStep${i + 1}Hint` as howStepHintKey]}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

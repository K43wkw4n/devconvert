/**
 * DevConvert — Landing Page Sections
 * 5 variants, pick what you like and drop into your page.
 * Uses your existing CSS variables (--color-text, --color-surface, etc.)
 */

import { useState, useEffect } from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { buildPath } from "@/routes";

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 1 — Hero: Dark terminal aesthetic with live conversion preview
// "แปลงได้ทุกอย่าง ภายในไม่กี่วินาที" vibe
// ─────────────────────────────────────────────────────────────────────────────

export function HeroTerminal() {
    const navigate = useNavigate();
    const [tick, setTick] = useState(0);

    const examples = [
        { from: "JSON", to: "TypeScript", label: "json-to-typescript" },
        { from: "YAML", to: "JSON", label: "yaml-to-json" },
        { from: "CSV", to: "JSON", label: "csv-to-json" },
        { from: "Markdown", to: "HTML", label: "markdown-to-html" },
        { from: "HEX", to: "RGB", label: "hex-to-rgb" },
    ];

    useEffect(() => {
        const id = setInterval(() => setTick((t) => (t + 1) % examples.length), 2500);
        return () => clearInterval(id);
    }, []);

    const current = examples[tick];

    return (
        <section
            style={{
                background: "var(--color-surface, #0f1117)",
                border: "1px solid var(--color-border)",
                borderRadius: 16,
                padding: "56px 40px",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Grid background pattern */}
            <div
                aria-hidden
                style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage:
                        "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                    opacity: 0.3,
                    pointerEvents: "none",
                }}
            />

            <div style={{ position: "relative", zIndex: 1 }}>
                {/* Live pill */}
                <div
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                        background: "var(--color-surface-2, rgba(255,255,255,0.06))",
                        border: "1px solid var(--color-border)",
                        borderRadius: 100,
                        padding: "6px 14px",
                        fontSize: 13,
                        color: "var(--color-text-secondary)",
                        marginBottom: 28,
                    }}
                >
                    <span
                        style={{
                            width: 7,
                            height: 7,
                            borderRadius: "50%",
                            background: "#22c55e",
                            display: "inline-block",
                            animation: "pulse-dot 1.8s ease-in-out infinite",
                        }}
                    />
                    ทำงาน 100% ในเบราว์เซอร์ — ไม่ส่งข้อมูลออกไปที่ใด
                </div>

                <style>{`@keyframes pulse-dot { 0%,100%{opacity:1} 50%{opacity:.3} }`}</style>

                <h1
                    style={{
                        fontSize: "clamp(32px, 5vw, 54px)",
                        fontWeight: 800,
                        color: "var(--color-text)",
                        margin: "0 0 16px",
                        letterSpacing: "-0.03em",
                        lineHeight: 1.15,
                    }}
                >
                    แปลงได้ทุกอย่าง
                    <br />
                    <span style={{ color: "var(--color-primary)" }}>ภายในไม่กี่วินาที</span>
                </h1>

                <p
                    style={{
                        fontSize: 17,
                        color: "var(--color-text-secondary)",
                        maxWidth: 520,
                        margin: "0 auto 36px",
                        lineHeight: 1.7,
                    }}
                >
                    เครื่องมือแปลงโค้ดและข้อมูลสำหรับนักพัฒนา — JSON, TypeScript, YAML,
                    XML, Markdown, Base64, สี และอื่น ๆ อีก 35+ เครื่องมือ
                    ทั้งหมดฟรีและทำงานในเบราว์เซอร์
                </p>

                {/* Live conversion badge */}
                <div
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 10,
                        background: "var(--color-surface-2, rgba(255,255,255,0.05))",
                        border: "1px solid var(--color-border)",
                        borderRadius: 10,
                        padding: "10px 20px",
                        marginBottom: 36,
                        fontSize: 15,
                        fontFamily: "monospace",
                        transition: "all 0.3s ease",
                    }}
                >
                    <span style={{ color: "var(--color-primary)", fontWeight: 700 }}>
                        {current.from}
                    </span>
                    <span style={{ color: "var(--color-text-muted)", fontSize: 12 }}>→</span>
                    <span style={{ color: "var(--color-text)", fontWeight: 700 }}>
                        {current.to}
                    </span>
                </div>

                {/* CTAs */}
                <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                    <Button
                        type="primary"
                        size="large"
                        onClick={() => navigate(buildPath.converter("json-to-typescript"))}
                        style={{ borderRadius: 8, fontWeight: 600, paddingInline: 28 }}
                    >
                        เริ่มใช้งานฟรี
                    </Button>
                    <Button
                        size="large"
                        onClick={() => navigate(buildPath.home())}
                        style={{ borderRadius: 8, borderColor: "var(--color-border)" }}
                    >
                        ดูเครื่องมือทั้งหมด
                    </Button>
                </div>

                {/* Stats row */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: 32,
                        marginTop: 48,
                        flexWrap: "wrap",
                    }}
                >
                    {[
                        { value: "35+", label: "เครื่องมือ" },
                        { value: "0ms", label: "หน่วงเวลาเซิร์ฟเวอร์" },
                        { value: "100%", label: "ทำงานในเบราว์เซอร์" },
                        { value: "ฟรี", label: "ตลอดไป" },
                    ].map((s) => (
                        <div key={s.label} style={{ textAlign: "center" }}>
                            <div
                                style={{
                                    fontSize: 24,
                                    fontWeight: 800,
                                    color: "var(--color-primary)",
                                    lineHeight: 1,
                                }}
                            >
                                {s.value}
                            </div>
                            <div
                                style={{
                                    fontSize: 12,
                                    color: "var(--color-text-muted)",
                                    marginTop: 4,
                                }}
                            >
                                {s.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

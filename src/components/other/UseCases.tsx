// ─────────────────────────────────────────────────────────────────────────────
// SECTION 6 — Use Cases: สำหรับใคร / ตัวอย่างการใช้งานจริง
// Bonus section — แสดง persona และ use case จริง
// ─────────────────────────────────────────────────────────────────────────────

import { useI18n } from "@/contexts/I18nContext";

export function UseCases() {
    const { t } = useI18n()

    const USE_CASES = [
        {
            role: "Frontend Developer",
            emoji: "👩‍💻",
            color: "#3b82f6",
            cases: [
                t.ucRole1Case1,
                t.ucRole1Case2,
                t.ucRole1Case3,
            ],
        },
        {
            role: "DevOps / Backend",
            emoji: "🖥️",
            color: "#8b5cf6",
            cases: [
                t.ucRole2Case1,
                t.ucRole2Case2,
                t.ucRole2Case3,
            ],
        },
        {
            role: "Data Engineer",
            emoji: "📊",
            color: "#f59e0b",
            cases: [
                t.ucRole3Case1,
                t.ucRole3Case2,
                t.ucRole3Case3,
            ],
        },
        {
            role: "Technical Writer",
            emoji: "✍️",
            color: "#10b981",
            cases: [
                t.ucRole4Case1,
                t.ucRole4Case2,
                t.ucRole4Case3,
            ],
        },
    ];

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
                    {t.useCaseTitle}
                </h2>
            </div>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                    gap: 20,
                }}
            >
                {USE_CASES.map((uc) => (
                    <div
                        key={uc.role}
                        style={{
                            background: "var(--color-surface)",
                            border: "1px solid var(--color-border)",
                            borderRadius: 12,
                            overflow: "hidden",
                        }}
                    >
                        {/* Card header */}
                        <div
                            style={{
                                padding: "16px 20px",
                                borderBottom: "1px solid var(--color-border)",
                                display: "flex",
                                alignItems: "center",
                                gap: 10,
                                background: `${uc.color}0d`,
                            }}
                        >
                            <span style={{ fontSize: 22 }}>{uc.emoji}</span>
                            <span
                                style={{
                                    fontSize: 14,
                                    fontWeight: 700,
                                    color: "var(--color-text)",
                                }}
                            >
                                {uc.role}
                            </span>
                        </div>
                        {/* Use cases list */}
                        <div style={{ padding: "16px 20px" }}>
                            {uc.cases.map((c) => (
                                <div
                                    key={c}
                                    style={{
                                        display: "flex",
                                        gap: 10,
                                        marginBottom: 12,
                                        alignItems: "flex-start",
                                    }}
                                >
                                    <span
                                        style={{
                                            width: 6,
                                            height: 6,
                                            borderRadius: "50%",
                                            background: uc.color,
                                            flexShrink: 0,
                                            marginTop: 6,
                                        }}
                                    />
                                    <span
                                        style={{
                                            fontSize: 13,
                                            color: "var(--color-text-secondary)",
                                            lineHeight: 1.6,
                                        }}
                                    >
                                        {c}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
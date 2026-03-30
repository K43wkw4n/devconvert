// ── KnowledgeSection component ───────────────────────────────────────────────
// วาง import เพิ่มตรง import block ของ ConverterPage
// import { useI18n } from "@/contexts/I18nContext";

const KNOWLEDGE_CARDS = [
    { icon: "🔗", key: "why" },
    { icon: "✅", key: "validate" },
    { icon: "⚠️", key: "lossiness" },
    { icon: "🔡", key: "encoding" },
    { icon: "⚙️", key: "automate" },
    { icon: "📐", key: "schema" },
] as const;

// Card accent colors — cycles through 6 hues matching CSS variables
const CARD_ACCENTS = [
    "var(--color-primary)",
    "#10b981",
    "#f59e0b",
    "#ef4444",
    "#8b5cf6",
    "#3b82f6",
];

type KnowledgeSectionProps = {
    knowledgeSectionTitle: string;
    knowledgeCards: readonly {
        title: string;
        body: string;
    }[];
    proTipsTitle: string;
    proTips: readonly string[];
};

// อันนี้กับด้านบนใช้อันไหนก็ได้
// type KnowledgeSectionProps = Pick<
//   Translations,
//   'knowledgeSectionTitle' | 'knowledgeCards' | 'proTipsTitle' | 'proTips'
// >;

export function KnowledgeSection({ knowledgeSectionTitle, knowledgeCards, proTipsTitle, proTips }: KnowledgeSectionProps) {

    return (
        <section
            style={{
                marginTop: 40,
                marginBottom: 8,
            }}
        >
            {/* Section header */}
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: 16,
                }}
            >
                <div
                    style={{
                        width: 3,
                        height: 20,
                        borderRadius: 2,
                        background: "var(--color-primary)",
                        flexShrink: 0,
                    }}
                />
                <span
                    style={{
                        fontSize: 13,
                        fontWeight: 700,
                        color: "var(--color-text-secondary)",
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                    }}
                >
                    {knowledgeSectionTitle}
                </span>
            </div>

            {/* Cards grid */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                    gap: 12,
                    marginBottom: 16,
                }}
            >
                {KNOWLEDGE_CARDS.map(({ icon, key }, i) => {
                    const card = knowledgeCards[i];
                    if (!card) return null;
                    const accent = CARD_ACCENTS[i % CARD_ACCENTS.length];

                    return (
                        <div
                            key={key}
                            style={{
                                background: "var(--color-surface)",
                                border: "1px solid var(--color-border)",
                                borderLeft: `3px solid ${accent}`,
                                borderRadius: "var(--radius-md)",
                                padding: "14px 16px",
                                display: "flex",
                                flexDirection: "column",
                                gap: 6,
                                transition: "box-shadow 0.15s ease",
                            }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLDivElement).style.boxShadow =
                                    `0 2px 8px color-mix(in srgb, ${accent} 15%, transparent)`;
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                            }}
                        >
                            {/* Icon + title row */}
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 8,
                                }}
                            >
                                <span
                                    style={{
                                        fontSize: 15,
                                        lineHeight: 1,
                                        flexShrink: 0,
                                        userSelect: "none",
                                    }}
                                >
                                    {icon}
                                </span>
                                <span
                                    style={{
                                        fontSize: 13,
                                        fontWeight: 700,
                                        color: "var(--color-text)",
                                        lineHeight: 1.3,
                                    }}
                                >
                                    {card.title}
                                </span>
                            </div>

                            {/* Body */}
                            <p
                                style={{
                                    margin: 0,
                                    fontSize: 12.5,
                                    lineHeight: 1.65,
                                    color: "var(--color-text-secondary)",
                                }}
                            >
                                {card.body}
                            </p>
                        </div>
                    );
                })}
            </div>

            {/* Pro tips strip */}
            <div
                style={{
                    background: "var(--color-surface)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "var(--radius-md)",
                    padding: "12px 16px",
                }}
            >
                <div
                    style={{
                        fontSize: 11,
                        fontWeight: 700,
                        color: "var(--color-primary)",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        marginBottom: 10,
                    }}
                >
                    {proTipsTitle}
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 7,
                    }}
                >
                    {proTips.map((tip, i) => (
                        <div
                            key={i}
                            style={{
                                display: "flex",
                                alignItems: "flex-start",
                                gap: 8,
                                fontSize: 12.5,
                                color: "var(--color-text-secondary)",
                                lineHeight: 1.55,
                            }}
                        >
                            <span
                                style={{
                                    flexShrink: 0,
                                    width: 4,
                                    height: 4,
                                    borderRadius: "50%",
                                    background: "var(--color-primary)",
                                    marginTop: 7,
                                    opacity: 0.7,
                                }}
                            />
                            {tip}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
import { useState, useCallback, useEffect, useRef, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Select, Alert, Tooltip, message, Tag, Breadcrumb } from "antd";
import {
  CopyOutlined,
  DeleteOutlined,
  HomeOutlined,
  CheckOutlined,
  LoadingOutlined,
  DownloadOutlined,
  SwapOutlined,
} from "@ant-design/icons";
import CodeEditor from "@/components/CodeEditor";
import ConverterCard from "@/components/ConverterCard";
import AdBanner from "@/components/AdBanner";
import SEOHead from "@/components/SEOHead";
import TimezoneSelector from "@/components/TimezoneSelector";
import {
  resolveConverter,
  CONVERTER_MAP,
  findConverterByLangs,
  getOutputLangsFor,
  getAllInputLangs,
} from "@/config/converters.config";
import { buildPath } from "@/routes";
import { useConverterLocale } from "@/hooks/useConverterLocale";
import { useI18n } from "@/contexts/I18nContext";
import { getUserTimezone } from "@/data/timezones";
import type { ConvertResult, Converter, MonacoLanguage } from "@/types";

// ── Language display labels ──────────────────────────────────────────────────
const LANG_LABELS: Record<string, string> = {
  json: "JSON",
  typescript: "TypeScript",
  javascript: "JavaScript",
  yaml: "YAML",
  xml: "XML",
  html: "HTML",
  markdown: "Markdown",
  css: "CSS",
  scss: "SCSS",
  sql: "SQL",
  plaintext: "Plain Text",
  graphql: "GraphQL",
  ini: "INI",
};

function langLabel(lang: string) {
  return LANG_LABELS[lang] ?? lang;
}

// ── Extension map for download ────────────────────────────────────────────────
const EXT_MAP: Record<string, string> = {
  json: "json",
  typescript: "ts",
  javascript: "js",
  yaml: "yaml",
  xml: "xml",
  html: "html",
  markdown: "md",
  css: "css",
  scss: "scss",
  sql: "sql",
  plaintext: "txt",
  graphql: "graphql",
  ini: "ini",
};

export default function ConverterPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { t } = useI18n();

  const converter = resolveConverter(slug ?? "");

  // ── Editor state ─────────────────────────────────────────────
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [warnings, setWarnings] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [optionValues, setOptionValues] = useState<Record<string, string>>({});
  const autoTimer = useRef<ReturnType<typeof setTimeout>>();
  const prevConverterIdRef = useRef<string | undefined>();

  // ── Available language options (derived from converter map) ──
  // Input options: all languages that have at least one converter
  const allInputLangs = useMemo(() => getAllInputLangs(), []);

  // Output options: only langs reachable from current input
  const availableOutputLangs = useMemo(
    () => (converter ? getOutputLangsFor(converter.inputLanguage) : []),
    [converter?.inputLanguage],
  );

  // ── Option defaults when converter changes ────────────────────
  useEffect(() => {
    if (!converter) return;
    const defaults: Record<string, string> = {};
    converter.options?.forEach((opt) => {
      if (opt.type === "timezone") defaults[opt.key] = getUserTimezone();
      else if (opt.defaultValue) defaults[opt.key] = opt.defaultValue;
    });
    setOptionValues(defaults);
  }, [converter?.id]);

  // ── Reset editor when converter changes ───────────────────────
  useEffect(() => {
    if (!converter) return;
    // Don't reset input if only output lang changed (same input lang)
    const prevId = prevConverterIdRef.current;
    const prevConverter = prevId ? CONVERTER_MAP.get(prevId) : undefined;
    const sameInputLang =
      prevConverter?.inputLanguage === converter.inputLanguage;

    setError(null);
    setWarnings([]);

    if (!sameInputLang || !prevId) {
      // New input language → reset with placeholder
      setInput(converter.inputPlaceholder ?? "");
      setOutput("");
    }
    prevConverterIdRef.current = converter.id;
  }, [converter?.id]);

  // ── Core convert ─────────────────────────────────────────────
  const runConvert = useCallback(
    async (val: string, conv: Converter, opts: Record<string, string>) => {
      if (!val.trim()) {
        setOutput("");
        setError(null);
        setWarnings([]);
        return;
      }
      setIsLoading(true);
      setError(null);
      setWarnings([]);
      try {
        const result = conv.convert(val, opts);
        const resolved: ConvertResult =
          result instanceof Promise ? await result : result;
        if (resolved.success) {
          setOutput(resolved.output);
          setWarnings(resolved.warnings ?? []);
        } else {
          setError(resolved.error ?? "Conversion failed");
          setOutput("");
        }
      } catch (e) {
        setError((e as Error).message);
        setOutput("");
      } finally {
        setIsLoading(false);
      }
    },
    [],
  );

  // ── Auto-convert on input / option change ─────────────────────
  useEffect(() => {
    if (!converter || !input.trim()) return;
    clearTimeout(autoTimer.current);
    autoTimer.current = setTimeout(() => {
      runConvert(input, converter, optionValues);
    }, 350);
    return () => clearTimeout(autoTimer.current);
  }, [input, converter, optionValues, runConvert]);

  // ── Handle INPUT language change ──────────────────────────────
  // Find the best converter: keep same output lang if possible, else pick first
  const handleInputLangChange = useCallback(
    (newInputLang: string) => {
      if (!converter) return;
      const currentOutputLang = converter.outputLanguage;

      // Try to keep same output lang
      let target = findConverterByLangs(newInputLang, currentOutputLang);

      // Fallback: first available converter with this input lang
      if (!target) {
        const outputs = getOutputLangsFor(newInputLang);
        if (outputs.length > 0)
          target = findConverterByLangs(newInputLang, outputs[0]);
      }

      if (target) navigate(buildPath.converter(target.id));
    },
    [converter, navigate],
  );

  // ── Handle OUTPUT language change ─────────────────────────────
  // Find converter with same input lang but new output lang
  const handleOutputLangChange = useCallback(
    (newOutputLang: string) => {
      if (!converter) return;
      const target = findConverterByLangs(
        converter.inputLanguage,
        newOutputLang,
      );
      if (target) navigate(buildPath.converter(target.id));
    },
    [converter, navigate],
  );

  const setOption = (key: string, value: string) => {
    setOptionValues((prev) => ({ ...prev, [key]: value }));
  };

  // ── Copy ──────────────────────────────────────────────────────
  const handleCopy = useCallback(async () => {
    if (!output) return;
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      message.success({ content: "Copied!", duration: 2 });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      message.error("Copy failed.");
    }
  }, [output]);

  // ── Download ──────────────────────────────────────────────────
  const handleDownload = useCallback(() => {
    if (!output || !converter) return;
    const ext = EXT_MAP[converter.outputLanguage] ?? "txt";
    const blob = new Blob([output], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `converted.${ext}`;
    a.click();
    URL.revokeObjectURL(url);
  }, [output, converter]);

  // ── Clear ─────────────────────────────────────────────────────
  const handleClear = useCallback(() => {
    setInput("");
    setOutput("");
    setError(null);
    setWarnings([]);
  }, []);

  const relatedConverters = converter?.relatedConverters
    ?.map((id) => CONVERTER_MAP.get(id))
    .filter(Boolean) as Converter[] | undefined;

  const { description, longDescription } = useConverterLocale(converter);
  const hasTimezoneOption = converter?.options?.some(
    (o) => o.type === "timezone",
  );

  // ── 404 ──────────────────────────────────────────────────────
  if (!converter) {
    return (
      <div
        className="app-content"
        style={{ textAlign: "center", paddingTop: 80 }}
      >
        <h2
          style={{ color: "var(--color-text)", fontSize: 32, fontWeight: 800 }}
        >
          404
        </h2>
        <p style={{ color: "var(--color-text-secondary)" }}>{t.notFound}</p>
        <Button type="primary" onClick={() => navigate(buildPath.home())}>
          {t.browseAll}
        </Button>
      </div>
    );
  }

  return (
    <>
      <SEOHead
        title={converter.seoTitle}
        description={converter.seoDescription}
        keywords={converter.seoKeywords}
        canonicalPath={`/${converter.id}`}
      />

      <AdBanner slot="converterTop" format="leaderboard" />

      <div className="app-content">
        {/* Breadcrumb */}
        <Breadcrumb
          style={{ marginBottom: 16 }}
          items={[
            {
              title: (
                <HomeOutlined
                  onClick={() => navigate(buildPath.home())}
                  style={{
                    cursor: "pointer",
                    color: "var(--color-text-secondary)",
                  }}
                />
              ),
            },
            {
              title: (
                <span style={{ color: "var(--color-text-secondary)" }}>
                  {converter.name}
                </span>
              ),
            },
          ]}
        />

        {/* Title */}
        <div className="converter-header">
          <h1 className="converter-title">{converter.name}</h1>
          <p className="converter-description">{description}</p>
        </div>

        {/* Timezone option */}
        {hasTimezoneOption && (
          <div
            style={{
              marginBottom: 16,
              padding: "10px 16px",
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-md)",
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            {converter.options
              ?.filter((o) => o.type === "timezone")
              .map((opt) => (
                <TimezoneSelector
                  key={opt.key}
                  value={optionValues[opt.key] ?? getUserTimezone()}
                  onChange={(tz) => setOption(opt.key, tz)}
                />
              ))}
          </div>
        )}

        {/* ── Editors ── */}
        <div className="editor-layout">
          {/* Input panel */}
          <div className="editor-panel">
            <div className="editor-toolbar">
              <div className="toolbar-left">
                <span className="editor-label">{t.input}</span>

                {/* INPUT language selector — shows all valid input langs */}
                <Select
                  className="lang-selector"
                  value={converter.inputLanguage}
                  onChange={handleInputLangChange}
                  size="small"
                  style={{ minWidth: 130 }}
                  popupMatchSelectWidth={false}
                  options={allInputLangs.map((lang) => ({
                    value: lang,
                    label: langLabel(lang),
                  }))}
                />
              </div>
              <div className="toolbar-right">
                <Tooltip title={t.clear}>
                  <Button
                    type="text"
                    size="small"
                    icon={<DeleteOutlined />}
                    onClick={handleClear}
                    style={{ color: "var(--color-text-muted)" }}
                    disabled={!input}
                  />
                </Tooltip>
              </div>
            </div>
            <div className="editor-wrapper">
              <CodeEditor
                value={input}
                onChange={setInput}
                language={converter.inputLanguage as MonacoLanguage}
                placeholder={converter.inputPlaceholder}
              />
            </div>
          </div>

          {/* Output panel */}
          <div className="editor-panel">
            <div className="editor-toolbar">
              <div className="toolbar-left">
                <span className="editor-label">{t.output}</span>

                {/* OUTPUT language selector — shows only reachable outputs */}
                <Select
                  className="lang-selector"
                  value={converter.outputLanguage}
                  onChange={handleOutputLangChange}
                  size="small"
                  style={{ minWidth: 130 }}
                  popupMatchSelectWidth={false}
                  options={availableOutputLangs.map((lang) => ({
                    value: lang,
                    label: langLabel(lang),
                  }))}
                />
              </div>
              <div className="toolbar-right">
                {isLoading && (
                  <Tag icon={<LoadingOutlined spin />} color="processing">
                    {t.converting}
                  </Tag>
                )}
                <Tooltip title={t.download}>
                  <Button
                    type="text"
                    size="small"
                    icon={<DownloadOutlined />}
                    onClick={handleDownload}
                    style={{ color: "var(--color-text-muted)" }}
                    disabled={!output}
                  />
                </Tooltip>
                <Tooltip title={copied ? t.copied : t.copy}>
                  <Button
                    type={copied ? "primary" : "default"}
                    size="small"
                    icon={copied ? <CheckOutlined /> : <CopyOutlined />}
                    onClick={handleCopy}
                    disabled={!output}
                  >
                    {copied ? t.copied : t.copy}
                  </Button>
                </Tooltip>
              </div>
            </div>
            <div className="editor-wrapper">
              <CodeEditor
                value={output}
                language={converter.outputLanguage as MonacoLanguage}
                readOnly
                placeholder={t.outputPlaceholder}
              />
            </div>
          </div>
        </div>

        {/* Status bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: 12,
            gap: 12,
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {/* Current converter path */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              borderRadius: 20,
              padding: "4px 14px",
              fontSize: 13,
              color: "var(--color-text-secondary)",
            }}
          >
            <span style={{ fontWeight: 700, color: "var(--color-primary)" }}>
              {langLabel(converter.inputLanguage)}
            </span>
            <SwapOutlined
              style={{ fontSize: 11, color: "var(--color-text-muted)" }}
            />
            <span style={{ fontWeight: 700, color: "var(--color-primary)" }}>
              {langLabel(converter.outputLanguage)}
            </span>
          </div>

          {output && (
            <Button
              size="small"
              icon={<DownloadOutlined />}
              onClick={handleDownload}
            >
              {t.download}
            </Button>
          )}
        </div>

        {/* Error */}
        {error && (
          <Alert
            type="error"
            message={t.conversionError}
            description={error}
            showIcon
            closable
            className="error-banner"
            onClose={() => setError(null)}
          />
        )}

        {/* Warnings */}
        {warnings.map((w, i) => (
          <Alert
            key={i}
            type="warning"
            message={w}
            showIcon
            className="warning-banner"
          />
        ))}

        <AdBanner
          slot="converterBottom"
          format="leaderboard"
          style={{ marginTop: 32 }}
        />

        {/* Related tools */}
        {relatedConverters && relatedConverters.length > 0 && (
          <section className="related-section">
            <div className="section-label">{t.relatedTools}</div>
            <div className="category-grid">
              {relatedConverters.map((c) => (
                <ConverterCard key={c.id} converter={c} />
              ))}
            </div>
          </section>
        )}

        {/* SEO block */}
        <section
          style={{
            marginTop: 48,
            padding: "32px",
            background: "var(--color-surface)",
            borderRadius: "var(--radius-lg)",
            border: "1px solid var(--color-border)",
          }}
        >
          <h2
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: "var(--color-text)",
              marginTop: 0,
            }}
          >
            {t.about} {converter.name}
          </h2>
          <p
            style={{
              color: "var(--color-text-secondary)",
              lineHeight: 1.8,
              marginBottom: 0,
            }}
          >
            {longDescription}
          </p>
          <div
            style={{ marginTop: 16, display: "flex", gap: 8, flexWrap: "wrap" }}
          >
            {converter.seoKeywords.map((k) => (
              <Tag
                key={k}
                style={{
                  background: "var(--color-surface-2)",
                  borderColor: "var(--color-border)",
                  color: "var(--color-text-secondary)",
                }}
              >
                {k}
              </Tag>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

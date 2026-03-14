import { useRef, useEffect } from 'react'
import Editor, { type OnMount } from '@monaco-editor/react'
import type { MonacoLanguage } from '@/types'
import { useTheme } from '@/contexts/ThemeContext'

interface CodeEditorProps {
  value: string
  onChange?: (value: string) => void
  language: MonacoLanguage
  readOnly?: boolean
  placeholder?: string
  height?: string | number
}

const MONACO_THEME_RULES = [
  { token: 'keyword', foreground: '79c0ff' },
  { token: 'string', foreground: 'a5d6ff' },
  { token: 'number', foreground: 'f0883e' },
  { token: 'comment', foreground: '8b949e', fontStyle: 'italic' },
  { token: 'type', foreground: 'ffa657' },
  { token: 'variable', foreground: 'e2e8f0' },
  { token: 'delimiter', foreground: '8b949e' },
  { token: 'attribute.name', foreground: '79c0ff' },
  { token: 'attribute.value', foreground: 'a5d6ff' },
  { token: 'tag', foreground: '7ee787' },
  { token: 'metatag.content.html', foreground: 'a5d6ff' },
]

export default function CodeEditor({
  value,
  onChange,
  language,
  readOnly = false,
  placeholder = '',
  height = '100%',
}: CodeEditorProps) {
  const editorRef = useRef<Parameters<OnMount>[0] | null>(null)
  const { theme } = useTheme()
  const monacoRef = useRef<Parameters<OnMount>[1] | null>(null)

  // Update theme when app theme changes
  useEffect(() => {
    if (monacoRef.current) {
      const editorTheme = theme === 'dark' ? 'devconvert-dark' : 'devconvert-light'
      monacoRef.current.editor.setTheme(editorTheme)
    }
  }, [theme])

  const handleMount: OnMount = (editor, monaco) => {
    editorRef.current = editor
    monacoRef.current = monaco

    // Define dark theme
    monaco.editor.defineTheme('devconvert-dark', {
      base: 'vs-dark',
      inherit: true,
      rules: MONACO_THEME_RULES,
      colors: {
        'editor.background': '#111827',
        'editor.foreground': '#e2e8f0',
        'editor.lineHighlightBackground': '#1a2236',
        'editor.selectionBackground': '#1d3a6e',
        'editorLineNumber.foreground': '#4a5568',
        'editorLineNumber.activeForeground': '#8b949e',
        'editorCursor.foreground': '#1677ff',
        'editor.findMatchBackground': '#1d3a6e',
        'editorBracketMatch.background': '#1d3a6e',
        'editorBracketMatch.border': '#1677ff',
        'scrollbarSlider.background': '#1e2d4780',
        'scrollbarSlider.hoverBackground': '#1e2d47',
        'editorGutter.background': '#111827',
      },
    })

    // Define light theme
    monaco.editor.defineTheme('devconvert-light', {
      base: 'vs',
      inherit: true,
      rules: [
        { token: 'keyword', foreground: '0550ae' },
        { token: 'string', foreground: '0a3069' },
        { token: 'number', foreground: '0550ae' },
        { token: 'comment', foreground: '6e7781', fontStyle: 'italic' },
        { token: 'type', foreground: '953800' },
        { token: 'tag', foreground: '116329' },
        { token: 'attribute.name', foreground: '0550ae' },
        { token: 'attribute.value', foreground: '0a3069' },
      ],
      colors: {
        'editor.background': '#ffffff',
        'editor.foreground': '#0f1729',
        'editor.lineHighlightBackground': '#f5f7ff',
        'editor.selectionBackground': '#b6d0fb',
        'editorLineNumber.foreground': '#8899b8',
        'editorLineNumber.activeForeground': '#3a4d6e',
        'editorCursor.foreground': '#1677ff',
        'editorBracketMatch.background': '#b6d0fb',
        'editorBracketMatch.border': '#1677ff',
        'scrollbarSlider.background': '#d1daf080',
        'editorGutter.background': '#ffffff',
      },
    })

    const editorTheme = theme === 'dark' ? 'devconvert-dark' : 'devconvert-light'
    monaco.editor.setTheme(editorTheme)

    // Show placeholder when empty
    if (placeholder && !value) {
      const model = editor.getModel()
      if (model && model.getValue() === '') {
        editor.setValue('')
        // Use decorations for placeholder effect
      }
    }
  }

  useEffect(() => {
    // Update editor value when prop changes externally
    const editor = editorRef.current
    if (editor && editor.getValue() !== value) {
      const position = editor.getPosition()
      editor.setValue(value)
      if (position && !readOnly) editor.setPosition(position)
    }
  }, [value, readOnly])

  const displayValue = value === '' && !readOnly && placeholder
    ? placeholder
    : value

  return (
    <Editor
      height={height}
      language={language}
      value={displayValue}
      onChange={(val) => {
        if (!readOnly && onChange) {
          // Don't propagate placeholder as real value
          onChange(val ?? '')
        }
      }}
      onMount={handleMount}
      options={{
        readOnly,
        fontSize: 13,
        fontFamily: "'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace",
        fontLigatures: true,
        lineNumbers: 'on',
        minimap: { enabled: false },
        scrollBeyondLastLine: false,
        wordWrap: 'on',
        tabSize: 2,
        automaticLayout: true,
        padding: { top: 12, bottom: 12 },
        renderLineHighlight: readOnly ? 'none' : 'line',
        cursorBlinking: 'smooth',
        smoothScrolling: true,
        contextmenu: false,
        folding: true,
        bracketPairColorization: { enabled: true },
        guides: { bracketPairs: true },
        renderWhitespace: 'none',
        overviewRulerLanes: 0,
        hideCursorInOverviewRuler: true,
        scrollbar: {
          verticalScrollbarSize: 6,
          horizontalScrollbarSize: 6,
        },
      }}
      loading={
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#4a5568' }}>
          Loading editor…
        </div>
      }
    />
  )
}

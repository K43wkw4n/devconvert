import { useState, useMemo } from 'react'
import { Select } from 'antd'
import { ClockCircleOutlined } from '@ant-design/icons'
import { TIMEZONES, TIMEZONE_REGIONS, getUserTimezone } from '@/data/timezones'
import { useI18n } from '@/contexts/I18nContext'

interface TimezoneSelectorProps {
  value: string
  onChange: (tz: string) => void
}

export default function TimezoneSelector({ value, onChange }: TimezoneSelectorProps) {
  const { t } = useI18n()
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    const q = search.toLowerCase()
    return TIMEZONES.filter(
      (tz) =>
        tz.label.toLowerCase().includes(q) ||
        tz.value.toLowerCase().includes(q) ||
        tz.offset.includes(q) ||
        tz.region.toLowerCase().includes(q)
    )
  }, [search])

  const grouped = useMemo(() => {
    return TIMEZONE_REGIONS.map((region) => ({
      region,
      options: filtered
        .filter((tz) => tz.region === region)
        .map((tz) => ({
          value: tz.value,
          label: tz.label,
        })),
    })).filter((g) => g.options.length > 0)
  }, [filtered])

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <ClockCircleOutlined style={{ color: 'var(--color-text-muted)', flexShrink: 0 }} />
      <span style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, color: 'var(--color-text-muted)', flexShrink: 0 }}>
        {t.timezone}
      </span>
      <Select
        value={value}
        onChange={onChange}
        showSearch
        filterOption={false}
        onSearch={setSearch}
        searchValue={search}
        placeholder={t.timezoneSearch}
        style={{ minWidth: 280 }}
        size="small"
        className="lang-selector"
        popupMatchSelectWidth={360}
        optionFilterProp="label"
        optionLabelProp="value"
        dropdownRender={(menu) => (
          <div style={{ background: 'var(--color-surface-2)' }}>
            {menu}
          </div>
        )}
        options={grouped.map((group) => ({
          label: group.region,
          options: group.options,
        }))}
      />
      {value !== getUserTimezone() && (
        <button
          onClick={() => onChange(getUserTimezone())}
          style={{
            background: 'none',
            border: '1px solid var(--color-border)',
            borderRadius: 4,
            color: 'var(--color-text-muted)',
            cursor: 'pointer',
            fontSize: 11,
            padding: '2px 6px',
            whiteSpace: 'nowrap',
          }}
          title="Reset to local timezone"
        >
          Local
        </button>
      )}
    </div>
  )
}

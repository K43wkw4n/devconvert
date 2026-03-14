import { useNavigate } from 'react-router-dom'
import { RightOutlined } from '@ant-design/icons'
import type { Converter } from '@/types'
import { useConverterLocale } from '@/hooks/useConverterLocale'
import { buildPath } from '@/routes'

const CATEGORY_ICONS: Record<string, string> = {
  json: '📄',
  code: '⚡',
  markup: '🏷️',
  encoding: '🔐',
  color: '🎨',
  data: '📊',
  utility: '🔧',
}

interface ConverterCardProps {
  converter: Converter
  compact?: boolean
}

export default function ConverterCard({ converter, compact = false }: ConverterCardProps) {
  const navigate = useNavigate()
  // ดึง description ที่แปลแล้วตาม locale ปัจจุบัน
  const { description } = useConverterLocale(converter)

  return (
    <div
      className="converter-card"
      onClick={() => navigate(buildPath.converter(converter.id))}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && navigate(buildPath.converter(converter.id))}
      aria-label={`Open ${converter.name} converter`}
    >
      <div className="card-icon">
        {CATEGORY_ICONS[converter.category] ?? '🔧'}
      </div>
      <div className="card-body">
        <div className="card-name">{converter.shortName}</div>
        {!compact && <div className="card-desc">{description}</div>}
      </div>
      <RightOutlined className="card-arrow" />
    </div>
  )
}

import { useId } from 'react'

export function styleVariables (variable: string): React.CSSProperties {
  return { [`--${variable}`]: +(useId().replace(/\D/g, '')) + 1 }
}

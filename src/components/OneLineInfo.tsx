/**
 * Отрисовывает компонент OneLineInfo (однострочный блок с информацией)
 *
 */

export default function OneLineInfo({ children }: {children: React.ReactNode}) {
  return (
    <div className="one-line-info">
      {children}
    </div>
  )
}
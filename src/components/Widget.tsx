/**
 * Отрисовывает компонент Widget (виджет с заголовком)
 *
 */
export default function Widget({ title, children}: {title: string, children: React.ReactNode}) {
  return (
    <div className="widget">
      <h3>{title}</h3>
      {children}
    </div>
  )
}
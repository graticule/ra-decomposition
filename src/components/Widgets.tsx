/**
 * Отрисовывает компонент Widgets (трехколоночный блок виджетов)
 *
 */
export default function Widgets({children}: {children: React.ReactNode}) {
  return (
  <div className="widgets">
  {children}
  </div>
  )
}
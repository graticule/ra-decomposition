/**
 * Отрисовывает компонент DateWidget (текущая дата)
 *
 */

export default function DateWidget() {
  return (
    <div className="date">{Date().toLocaleString()}</div>
  )
}
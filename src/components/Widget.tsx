/**
 * Отрисовывает компонент Widget с заголовком и содержимым
 *
 */
export default function Widget({ title, children}: {title: string, children: React.ReactNode}) {
  return (
    <div>
      <h3>{title}</h3>
      {children}
    </div>
  )
}
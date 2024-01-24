/**
 * Отрисовывает компонент Banner (ссылка с рисунком)
 *
 */

export default function Banner({ image, href = "#" }: { image: string, href?: string }) {
  return (
    <div className="banner">
      <a href={href}><img className="banner__image" src={image} /></a>
    </div>
  )
}
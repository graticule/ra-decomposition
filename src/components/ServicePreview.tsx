/**
 * Отрисовывает компонент ServicePreview (анонс сервисов)
 *
 */

export default function ServicePreview({image, title, description}: {image: string, title: string, description: string}) {
  return (
    <div className="service-preview">
      <img className="service-preview__image" src={image} alt="" />
      <h4 className="service-preview__title">{title}</h4>
      <div className="service-preview__description">{description}</div>
    </div>
  )
}
/**
 * Отрисовывает компонент NewsCategoriesSelect (выбор темы новостей)
 *
 */

export default function NewsCategoriesSelect() {
  return (
    <div className="news-tabs">
      <a href="#" className="news-tab news-tab_active">Сейчас в СМИ</a>
      <a href="#" className="news-tab">в Германии</a>
      <a href="#" className="news-tab">Рекомендуем</a>
    </div>
  )
}
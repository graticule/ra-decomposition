import Logo from "./Logo";

/**
 * Отрисовывает компонент SearchBar (поисковая строка)
 *
 */
export default function SearchBar() {
  return (
    <div className="search-box">
      <Logo />
      <div className="search-box__form">
        <div className="search-box__categories">
          <a href="#" className="search-box__category">Видео</a>
          <a href="#" className="search-box__category">Картинки</a>
          <a href="#" className="search-box__category">Новости</a>
          <a href="#" className="search-box__category">Карты</a>
          <a href="#" className="search-box__category">Маркет</a>
          <a href="#" className="search-box__category">Переводчик</a>
          <a href="#" className="search-box__category">Эфир</a>
          <a href="#" className="search-box__category">ещё</a>
        </div>
        <div className="search">
          <input className="search__input" placeholder="Поиск по сайту" />
          <button className="search__button">Найти</button>
        </div>
        <div className="search-box__hint">
          Найдется всё. Например, <a href='#'>фаза луны сегодня</a>
        </div>
      </div>
    </div>
  )
}
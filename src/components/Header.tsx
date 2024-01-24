import News from "./News";
import NewsCategoriesSelect from "./NewsCategoriesSelect";
import DateWidget from "./DateWidget";

/**
 * Отрисовывает компонент Header
 */
export default function Header({ children }: {children: React.ReactNode}) {
  return (
    <div className="header">
      <div>
        <div className="header__top">
          <NewsCategoriesSelect />
          <DateWidget />
        </div>
        <div className="news-content">
          <News text={"Президент упростил получение автомобильных номеров"} />
          <News text={"Президент упростил получение автомобильных номеров"} />
          <News text={"Президент упростил получение автомобильных номеров"} />
          <News text={"Президент упростил получение автомобильных номеров"} />
          <News text={"Президент упростил получение автомобильных номеров"} />
          <News text={"Президент упростил получение автомобильных номеров"} />
        </div>
      </div>
     {children}
    </div>
  )
}
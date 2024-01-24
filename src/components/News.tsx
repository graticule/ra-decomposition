import OneLineInfo from "./OneLineInfo";

/**
 * Отрисовывает строку с новостью News
 *
 */
export default function News({ icon ="https://cdn3.iconfinder.com/data/icons/design-n-code/100/272127c4-8d19-4bd3-bd22-2b75ce94ccb4-512.png", text, href="#", comments}: {icon?: string, text: string, href?: string, comments?: string}) {
  return (
    <OneLineInfo>
      <img src={icon} className="one-line-info__icon" />
      <a href={href} target="_blank" className="one-line-info__link">{text}</a>
      {comments ? 
      <p className="one-line-info__comment">{comments}
      </p> : null } 
    </OneLineInfo>
  )
}
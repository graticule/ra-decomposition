/**
 * Отрисовывает строку с новостью News
 *
 */
export default function News({icon, text, comments}: {icon: string, text: string, comments?: string}) {
  return (
    <div>
      <img src={icon} />
      <p>{text}</p>
      {comments? <p>{comments}</p> : null } 
    </div>
  )
}
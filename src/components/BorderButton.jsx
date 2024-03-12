import { Link } from "react-router-dom"
function BorderButton({name}) {
  return (
    <Link to={`/${name}`}>
    <button>{name}</button>
    </Link>
    
  )
}
export default BorderButton
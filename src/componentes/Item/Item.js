import { Link } from "react-router-dom"
import "./Item.css"

const Item = ({name, img, price, id}) => {
    return(
        <div className="uwu_cart">
            <div className="uwu_cont">

            <h4> {name}</h4>
            <img className = "img_list" src={img} alt={name}></img>
            <p> $ {price}</p>
            <Link className="buton"  to={`item/${id}`}>ver Detalle</Link>

            </div>
        </div>
    )
}

export default Item
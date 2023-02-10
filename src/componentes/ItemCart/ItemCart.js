import "./ItemCart.css"
import { useContext } from "react"
import { CartContext } from "../../contex/CartContex"
import { Link } from "react-router-dom"

const ItemCart = ({ id, name, quantity, price, img }) => {

    const { removeItem } = useContext(CartContext)

    return (
        <article className="uwu_cart">
            <div className="uwu_cont">
                <h3>{name}</h3>
                {/* <picture>
                <img className = "img_list" src={img} alt={name}></img>
                </picture> */}
                <h4>cantidad {quantity}</h4>
                <h4>precio uni: ${price}</h4>
                <h4>subtotal: ${price * quantity}</h4>
                <Link className="buton2" to="/checkout"> terminar compra</Link>
                <button className="buton2" onClick={() => removeItem(id)}>Remove</button>
            </div>
        </article>
    )
}

export default ItemCart
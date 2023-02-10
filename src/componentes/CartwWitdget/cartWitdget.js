
import { Link } from 'react-router-dom'

const CartWidget = ({ quantity }) => {
    return(
        <Link to='/cart' className="cart">
            <img className = "image" src="./images/carritox.png" alt="carrito" />
             { quantity }
        </Link>
    );
}

export default CartWidget
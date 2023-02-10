
import { useContext } from "react"
import { CartContext } from "../../contex/CartContex"
import CartList from "../CartList/CartList"

const Cart = () => {
    const { cart } = useContext(CartContext)
    return (
        <div>
            <h1 className="titulo">Estos son los productos de tu carrito</h1>
            <CartList cart={cart}/>
        </div>
    )
}

export default Cart
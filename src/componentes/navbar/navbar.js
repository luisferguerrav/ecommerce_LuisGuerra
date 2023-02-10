import "./navbar.css"
import CartWidget from "../CartwWitdget/cartWitdget"
import { Link } from "react-router-dom"
import { CartContext } from "../../contex/CartContex"
import { useContext } from "react"


const Navbar = () => {
    const {totalQuantity} = useContext(CartContext)

    return (
        <nav className='container'>
            <Link to="/" className = "nombre">BADCOMERCE</Link>
            
            <div>
                <Link to ="/category/celular" className = "boton">celulares</Link>
                <Link to ="/category/tablet" className = "boton"> tablets</Link>
                <Link to ="/category/notebooks" className = "boton">notebooks</Link>
                
                
            </div>
            <CartWidget quantity={totalQuantity}></CartWidget>
            
            

        </nav>
    )
}
export default Navbar
import "./navbar.css"
import CartWidget from "../CartwWitdget/cartWitdget"
import { Link } from "react-router-dom"


const Navbar = () => {
    return (
        <nav className='container'>
            <Link to="/" className = "nombre">Aun por definir nombre</Link>
            
            <div>
                <Link to ="/category/celular" className = "boton">celulares</Link>
                <Link to ="/category/tablet" className = "boton"> tablets</Link>
                <Link to ="/category/notebooks" className = "boton">notebooks</Link>
                
                
            </div>
            <CartWidget></CartWidget>
            
            

        </nav>
    )
}
export default Navbar
import "./navbar.css"
import CartWidget from "../CartwWitdget/cartWitdget"


const Navbar = () => {
    return (
        <nav className='container'>
            <h1 className = "nombre">Aun por definir nombre</h1>
            <div>
                <button className = "boton">celulares</button>
                <button className = "boton"> tablet</button>
                <button className = "boton"> noteboks</button>
            </div>
            <CartWidget></CartWidget>

        </nav>
    )
}
export default Navbar
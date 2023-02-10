import { Link } from "react-router-dom"
import "./Item.css"

const Item = ({name, img, price, id, category, description,stock}) => {
    return(
        <div className="uwu_cart">
            <div className="uwu_cont">

            <h4> {name}</h4>
            <picture> 
            <img className = "img_list" src={img} alt={name}></img>
            </picture>
            <p> $ {price}</p>
            <section>
                <p className="Info">
                    Categoria: {category}
                </p>
                <p className="Info">
                    Descripción: {description}
                </p>
                <p className="Info">
                    Precio: {price}
                </p>
                <p className="Info">
                    stock: {stock}
                </p>
            </section>  
            <Link className="buton"  to={`item/${id}`}>ver Detalle</Link>

            </div>
        </div>
    )
}

export default Item
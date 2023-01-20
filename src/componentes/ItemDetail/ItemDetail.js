import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"
const ItemDetail = ({id,name,price,img,category,stock,description, }) =>{
    const[quantity, setQuantity] = useState()
    const handleOnAdd = (qty) =>{
        console.log(`se agregaron ${qty} ${name} con el id ${id}`)
        setQuantity(qty)
    }
    
    return(
        <div>
            <h4>{name}</h4>
            <p> categoria {category}</p>
            <img className = "img_list" src={img} alt={name}></img>
            <p> $ {price}</p>
            <p> Descripcion {description}</p>
            {
                quantity > 0 ? (
                    <Link>terminar compra</Link>
                    
                ) : (

                    <ItemCount stock={stock} onAdd={handleOnAdd}></ItemCount>
                )
            }
        </div>
    )
}
export default ItemDetail
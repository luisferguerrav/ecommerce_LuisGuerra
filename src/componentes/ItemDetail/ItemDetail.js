
import './ItemDetail.css'
import { useState, useContext } from 'react'
import ItemCount from "../ItemCount/ItemCount"
import { Link } from 'react-router-dom'
import { CartContext } from '../../contex/CartContex'

const ItemDetail = ({ id, name, category, img, price, stock, description }) => {
    const [quantity, setQuantity] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        console.log('agregue al carrito: ', quantity)

        setQuantity(parseInt(quantity))

        addItem({ id, name, quantity, price })
    }

    return (
        <article className="uwu_cart">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img className = "img_list" src={img} alt={name}/>
            </picture>
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
            </section>           
            <footer className='ItemFooter'>
                {
                    quantity > 0 ? (
                        <Link to='/cart' className='buton2'>Terminar compra</Link>
                    ) : (
                        <ItemCount stock={stock} onAdd={handleOnAdd} />
                    )
                }
            </footer>
        </article>
    )
}

export default ItemDetail
import {useState} from "react"


const ItemCount = ({initial = 1, stock, onAdd}) => {
    const [ count, setCount] = useState(initial)

    const decrement = () => {
        if (count > 1) {
            setCount ( count -1)
        }
        

    }
    const increment = () => {
        if (count < stock) {
            setCount ( count +1) 
        }

    }
    
    
    return (
        <div>
            <h2> {count} </h2>
            <button className="buton" onClick={increment}>+</button>
            <button className="buton" onClick={() => onAdd(count)}>agregar al carrito</button>
            <button className="buton" onClick={decrement}>-</button>
        </div>
    )
}
export default ItemCount
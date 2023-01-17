import {useState} from "react"


const ItemCount = ({initial = 1, stock}) => {
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
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button>agregar al carrito</button>
        </div>
    )
}
export default ItemCount
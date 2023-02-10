
import { collection, query, where, documentId, getDocs, writeBatch, addDoc } from "firebase/firestore"
import { useContext, useState, } from "react"
import { CartContext } from "../../contex/CartContex"
import { db } from "../../services/firebase/firebaseConfig"


const Checkout = () =>{

    const [loading, setLoading] = useState(false)
    const [orderId, setOrderID] = useState('')
    const { cart, total, clearCart } = useContext(CartContext)

    

    const createOrder = async () => {
        setLoading(true)
        try {
            const objOrder = {
                buyer: {
                    nombre: "Luis Guerra",
                    phone: "12333",
                    mail: "luisfernadogv@gmail.com"
                },
                items: cart,
                total
            }
    
            const batch = writeBatch(db)
    
            const ids = cart.map(prod => prod.id)
            console.log(ids)
    
            const productsRef = query(collection(db, 'products'), where(documentId(), 'in', ids))
    
            const productsAddedToCartFromFirestore = await getDocs(productsRef)
            const { docs } = productsAddedToCartFromFirestore
    
            const outOfStock = []
    
            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
    
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart.quantity
    
                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })
    
            if(outOfStock.length === 0) {
                await batch.commit()
    
                const orderRef = collection(db, 'orders')
            
                const orderAdded = await addDoc (orderRef, objOrder)
    
                const { id } = orderAdded
                setOrderID(id)
            
                clearCart()

            } else {
                console.error('no hay productos en stock')
            }
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
       
        
    }

    if(loading) {
        return <h1> confrimando compra</h1>
    }
    if (orderId) {
        return <h1> muchas gracias por su compra, su numero de confirmacion es: {orderId}</h1>
    }


    return( 
        <div>
            <h1> confirmacion de compra</h1>
            
            <button className="buton2" onClick={createOrder}> confrimar</button>
        </div>
    )
}
export default Checkout
import { useState ,useEffect } from "react"
import { useParams } from "react-router-dom"

import ItemDetail from "../ItemDetail/ItemDetail"
import { getDoc, doc } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"


const ItemDetailContainer = () =>{
    const [product, setproduct] = useState({})
    const {productId} = useParams()

    useEffect (() =>{
        (async()=>{
            
            const productRef = doc(db, "products", productId)
            getDoc(productRef)
            const snapshot = await getDoc(productRef)
            const fields = snapshot.data()
            const productAdapted = {id: snapshot.id,...fields }

            setproduct(productAdapted)
        })()

    },[productId])
    
    return(
        <div>
            <h1> Detalle de producto</h1>
            <ItemDetail {...product}></ItemDetail>
            

        </div>
    )
}

export default ItemDetailContainer
import { useState ,useEffect } from "react"
import { useParams } from "react-router-dom"
import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"


const ItemDetailContainer = () =>{
    const [product, setproduct] = useState({})
    const {productId} = useParams()

    useEffect (() =>{
        getProductById(productId)
        .then(product =>{
            setproduct(product)
        }).catch(error =>{
            console.log(error);
        })

    },[productId])
    
    return(
        <div>
            <h1> Detalle de producto</h1>
            <ItemDetail {...product}></ItemDetail>
            

        </div>
    )
}

export default ItemDetailContainer
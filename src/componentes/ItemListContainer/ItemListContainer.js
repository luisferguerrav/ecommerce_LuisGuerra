import "./ItemListContainer.css"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
// import ItemCount from "../ItemCount/ItemCount"


const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([])

    const {categoryId} = useParams() 

    useEffect(() =>{

        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId)
        .then(products => {
            setProducts(products)
        })
        .catch(error =>{
            console.log(error);
        })
    },[categoryId])

    return (
     <div>
       
        <h1 className="titulo ">{greeting} </h1>
        <ItemList products={products}></ItemList>
        
        {/* <ItemCount></ItemCount> */}
     </div>
    )
}
export default ItemListContainer
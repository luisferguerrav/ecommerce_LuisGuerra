  import "./ItemListContainer.css"

  import { useEffect, useState } from "react"
  import ItemList from "../ItemList/ItemList"
  import { useParams } from "react-router-dom"
  import { getDocs,  collection, query,where } from "firebase/firestore"
  import { db } from "../../services/firebase/firebaseConfig"


  const ItemListContainer = ({greeting}) => {

      const [products, setProducts] = useState([])
       const [loading, setLoading] = useState(true)
    

      const {categoryId} = useParams() 

      useEffect(() => {
          document.title = "todos los productos"
      },[])

      useEffect(() =>{
           (async() =>{
               
               const productsRef = categoryId
               ? query(collection(db, "products"), where('category', '==', categoryId))
               :collection(db, "products")
              
               try{
                   const snapshot =  await getDocs(productsRef)
                  
                   const productsAdapted = snapshot.docs.map(doc =>{
                      const fields = doc.data()
                       return{ id: doc.id, ...fields}
                    })
                    
                     console.log("hola")
                   setProducts (productsAdapted)

               }catch(error){
                   console.log(error);
               } finally {
                    setLoading(false)
               }
               })()


      },[categoryId])

      if(loading) {
           return <h1>Cargando...</h1>
       }


      return (
       <div>
       
       <h1 className="titulo">{categoryId ? `Las opciones para ti en:  ${categoryId}`: 'Estos son todos nuestros productos'}</h1>
         <ItemList products={products}></ItemList>
        
       </div>
      )
  }
  export default ItemListContainer

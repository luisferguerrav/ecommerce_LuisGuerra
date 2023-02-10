import { Routes, Route} from "react-router-dom"
import ItemDetailContainer from "../componentes/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "../componentes/ItemListContainer/ItemListContainer"
import Cart from "../componentes/Cart/Cart"
import Checkout from "../componentes/Checkout/Checkout"

const AppRoutes = () =>{
    return(
        <div>
            <Routes>
          
          <Route path='/' element ={<ItemListContainer greeting="Bienvenidos a mi ecommerce"></ItemListContainer>}></Route>
          <Route path='/category/:categoryId' element ={<ItemListContainer greeting="Bienvenidos Badcomerce"></ItemListContainer>}></Route>
          <Route path='/item/:productId' element={<ItemDetailContainer></ItemDetailContainer>}></Route>
          <Route path='/cart' element={<Cart></Cart>}></Route> 
           <Route path='/checkout' element={<Checkout></Checkout>}></Route>
          
  
        </Routes>

        </div>
    )
}
export default AppRoutes
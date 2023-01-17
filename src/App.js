
import './App.css';
 import Navbar from './componentes/Navbar/navbar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Navbar></Navbar>
        <Routes>
          
          <Route path='/' element ={<ItemListContainer greeting="Bienvenidos a mi ecommerce"></ItemListContainer>}></Route>
          <Route path='/category/:categoryId' element ={<ItemListContainer greeting="Bienvenidos a mi ecommerce"></ItemListContainer>}></Route>
          <Route path='/item/:productId' element={<ItemDetailContainer></ItemDetailContainer>}></Route>
          
        
        </Routes>
      </BrowserRouter>
       
      
    </div>
  );
}

export default App;


import './App.css';
import Navbar from './componentes/navbar/navbar';

import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';



function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <ItemListContainer greeting="Bienvenidos a mi ecommerce"></ItemListContainer>
        
    </div>
  );
}

export default App;

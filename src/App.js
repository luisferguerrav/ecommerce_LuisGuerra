
import './App.css';
 import Navbar from './componentes/Navbar/navbar';
import {BrowserRouter} from "react-router-dom"
import AppRoutes from './AppRoutes/AppRoutes';
import { CartProvider } from './contex/CartContex';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <Navbar></Navbar>
          <AppRoutes></AppRoutes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

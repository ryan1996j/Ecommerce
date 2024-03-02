
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Products from './Pages/Products'
import Navbar from './Pages/Navbar'
import { StateProvider } from './Context/StateContext'
import Cart from './Pages/Cart'
import Purchase from './Pages/Purchase'
import PurchasedSuccess from './Pages/PurchasedSuccess'

function App() {

  return (

    <div className='container mx-auto   '>
      <StateProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/Purchase' element={<Purchase />} />
          <Route path='/PurchasedSuccess' element={<PurchasedSuccess />} />
        </Routes>
      </StateProvider>
    </div>

  )
}

export default App

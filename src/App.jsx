import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './pages/login'
import Dash from './admin/dash'
import Dashu from './user/dashu'
import Home from './admin/Home'
import Add from './admin/AddProducts'
import ViewProducts from './admin/viewproducts'
import Homeu from './user/Home'
import ViewProductsu from './user/viewproductsu'
import Details from './user/details'
import Cart from './user/Cart'
import Wish from './user/WishList'
import Orders from './user/Orders'
import Update from './admin/Update'
import TestDrive from './user/TestDrive'
import AdminOrders from './admin/AdminOrders'
import AdminTestDrive from './admin/AdminTestDrive'














function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login></Login>} />
          <Route path='/admin' element={<Dash></Dash>}>
          <Route path='home' element={<Home></Home>} />
          <Route path='viewproducts' element={<ViewProducts></ViewProducts>} />
          <Route path='addproducts' element={<Add></Add>} />
          <Route path='update/:pid' element={<Update></Update>}/>
          <Route path='ordered' element={<AdminOrders></AdminOrders>} />
          <Route path="testdrives" element={<AdminTestDrive />} />
         </Route>
      
          <Route path='/user' element={<Dashu></Dashu>}>
          <Route path='homeu' element={<Homeu></Homeu>} />
          <Route path='viewproductsu' element={<ViewProductsu></ViewProductsu>} />
          <Route path='details/:pid' element={<Details></Details>} />
          <Route path='cart' element={<Cart></Cart>} />
          <Route path="testdrive" element={<TestDrive />} />
          <Route path='wish' element={<Wish></Wish>} />
          <Route path='orders' element={<Orders></Orders>} />
      </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;

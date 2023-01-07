import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

// Pages
import Login from './login'
import ProductList from './productList'
import ProductDetail from './productDetail'

// Router
import { Route, Routes } from "react-router-dom"


function App() {

  const navigate = useNavigate()

  let { isLoggedIn } = useSelector((state => state.LoginSlice))

  useEffect(() => {
    // window.location.href = `${window.location.href}/product`
    if (isLoggedIn)
      navigate("/productList")
  }, [isLoggedIn])

  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/productList">
          <Route index element={<ProductList />} />
          <Route path=":id" element={<ProductDetail />} />
        </Route>
      </Routes>

      {/* {
        !isLoggedIn ? <Login></Login> : <>Product list</>
      } */}

    </div>
  );
}

export default App;

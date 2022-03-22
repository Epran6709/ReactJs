import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './Layout/Cart'
import Featured from './Layout/Featured'
import Signin from './Layout/Signin'
import Home from './Pages/Home'

const Routess = () => {
    return (
        <BrowserRouter>
            <Routes>
            {/* // path - url , element - components */}
                <Route path='/' element={<Home/>} />
                <Route path='/signin' element={<Signin/>} />
                <Route path='/cart' element={<Cart/>} />
                <Route path='/featured' element={<Featured/>}/>

            </Routes>
        </BrowserRouter>
    )
}

export default Routess
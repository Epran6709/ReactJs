import React from 'react'
import Footer from './Footer'
import Nav from './Nav'

const Cart = () => {
  return (
    <>
    <Nav/>
    <h3 className='text-center my-3'>Cart Items</h3>
    <table className='table container mx-auto text-center' >
        <thead>
            <tr>
                <th>S.No.</th>
                <th>Product Image</th>
                <th>Product Description</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>
                    <img src='./img/111.jpg' style={{"height": 100}} alt='Dhaka'/>
                </td>
                <td>
                    <h4>Dhaka Pacheura</h4>
                    <h5>20$</h5>
                    <h6>Xirbire Dhaka ko Paxeura</h6>
                </td>
                <td>
                    <button className='btn btn-warning me-2'>Update</button>
                    <button className='btn btn-danger'>Delete</button>
                </td>
            </tr>
            <tr>
                <td>2</td>
                <td>
                    <img src='./img/222.jpg' style={{"height": 100}} alt='Dhaka'/>
                </td>
                <td>
                    <h4>Jwaricoat</h4>
                    <h5>50$</h5>
                    <h6>Dhaka ko Jwaricoat</h6>
                </td>
                <td>
                    <button className='btn btn-warning me-2'>Update</button>
                    <button className='btn btn-danger'>Delete</button>
                </td>
            </tr>

        </tbody>
    </table>
    <Footer/>
    </>
  )
}

export default Cart
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className="container-fluid">
                <footer className="d-flex flex-wrap py-2 my-4 border-top">
                    <p>Payment Method: &nbsp;&nbsp;&nbsp;&nbsp;</p>
                    <ul className="nav text-center justify-content-end">
                         <li className="nav-item"><Link to="#"><img src="./img/esewa.png" alt="..." style={{height: "37px", width: "73px"}}></img></Link></li>
                         <li className="nav-item"><Link to="#"><img src="./img/Khalti_Digital_Wallet_Logo.png" alt="..." style={{height: "37px", width: "73px"}}></img></Link></li>
                         <li className="nav-item"><Link to="#"><img src="./img/visa.png" alt="..." style={{height: "37px", width: "73px"}}></img></Link></li>
                         <li className="nav-item"><Link to="#"><img src="./img/mmm.png" alt="..." style={{height: "37px", width: "73px"}}></img></Link></li>


                    </ul>
                </footer>
            </div>
            <div className="container-fluid">
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <p className="col-md-4 mb-0 text-muted">&copy; 2021 Company, Inc</p>

                    <ul className="nav col-md-4 justify-content-end">
                        <li className="nav-item"><Link to="#" className="nav-link px-2 text-muted">Home</Link></li>
                        <li className="nav-item"><Link to="#" className="nav-link px-2 text-muted">Features</Link></li>
                        <li className="nav-item"><Link to="#" className="nav-link px-2 text-muted">Pricing</Link></li>
                        <li className="nav-item"><Link to="#" className="nav-link px-2 text-muted">FAQs</Link></li>
                        <li className="nav-item"><Link to="#" className="nav-link px-2 text-muted">About</Link></li>
                    </ul>
                </footer>
            </div>
        </>
    )
}

export default Footer
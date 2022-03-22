import React from 'react'

const Products = () => {
    return (
        <>
            <div className="justify-content-end"><center><img src="./img/nepalko.png" alt="NepalKo" className="responsive"></img></center></div>
            <div className="myhead"><h2>Dhaka Products</h2></div>
            <div className="container mx-auto my-5">
                <div className="row">
                    <div className="col-md-4 justify-content-end">
                        <div className="card shadow-lg">
                            <div className="img-container">
                                <img src="./img/111.jpg" className="card-img-top" alt="Crop Polo"></img>
                            </div>


                            <div className="card-body">
                                <h6 className="card-title text-center">Price: 20$</h6><br></br>
                                <h5 className="card-title text-center">Dhaka Paxeura Xirbire</h5><br />
                                <center><button className="btn btn-dark"> View Details</button></center><br />
                                <center><button className="btn btn-warning"> Add to Wish List</button>
                                    <button className="btn btn-danger"> Add to Cart</button></center>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 justify-content-end">
                        <div className="card shadow-lg">
                            <div className="img-container">
                                <img src="./img/222.jpg" className="card-img-top" alt="Cowl Neck Crop"></img>
                            </div>
                            <div className="card-body">
                                <h6 className="card-title text-center">Price: 50$</h6><br />
                                <h5 className="card-title text-center">Jwaricoat</h5><br />
                                <center><button className="btn btn-dark"> View Details</button></center><br/>
                                    <center><button className="btn btn-warning"> Add to Wish List</button>
                                        <button className="btn btn-danger"> Add to Cart</button></center>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 justify-content-end">
                        <div className="card shadow-lg">
                            <div className="img-container">
                                <img src="./img/333.jpg" className="card-img-top" alt="Graffiti Crop Shirt"></img>
                            </div>
                            <div className="card-body">
                                <h6 className="card-title text-center">Price: 20$</h6><br />
                                <h5 className="card-title text-center">Dhaka Paxeura Normal</h5><br />
                                <center><button className="btn btn-dark"> View Details</button></center><br/>
                                <center><button className="btn btn-warning"> Add to Wish List</button>
                                    <button className="btn btn-danger"> Add to Cart</button></center>
                            </div>
                        </div>
                    </div>
                    <center><button className="btn" style={{"backgroundColor": "cornflowerblue", "marginTop":"10px !important"}}>View More</button></center>
                </div>
            </div>


            <div className="myhead"><h2>Dolpo Jackets</h2></div>
            <div className="container mx-auto my-5">
                <div className="row">
                    <div className="col-md-4 justify-content-end">
                        <div className="card shadow-lg">
                            <div className="img-container">
                                <img src="./img/blue.JPG" className="card-img-top" alt="Crop Polo"></img>

                                <div className="card-body">
                                    <h6 className="card-title text-center">Price: 40$</h6><br />
                                    <h5 className="card-title text-center">Dolpo Down Jacket Blue</h5><br />
                                    <center><button className="btn btn-dark me"> View Details</button></center><br />
                                    <center><button className="btn btn-warning me-2"> Add to Wish List</button>
                                        <button className="btn btn-danger"> Add to Cart</button></center>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 justify-content-end">
                        <div className="card shadow-lg">
                            <div className="img-container">
                                <img src="./img/green.JPG" className="card-img-top" alt="Cowl Neck Crop"></img>
                            </div>
                            <div className="card-body">
                                <h6 className="card-title text-center">Price: 40$</h6><br />
                                <h5 className="card-title text-center">Dolpo Down Jacket Green</h5><br />
                                <center><button className="btn btn-dark"> View Details</button></center><br />
                                <center><button className="btn btn-warning"> Add to Wish List</button>
                                    <button className="btn btn-danger"> Add to Cart</button></center>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 justify-content-end">
                        <div className="card shadow-lg">
                            <div className="img-container">
                                <img src="./img/yellow.JPG" className="card-img-top" alt="Graffiti Crop Shirt"></img>
                            </div>
                            <div className="card-body">
                                <h6 className="card-title text-center">Price: 40$</h6><br />
                                <h5 className="card-title text-center">Dolpo Down Jacket Yellow</h5><br />
                                <center><button className="btn btn-dark"> View Details</button></center><br />
                                <center><button className="btn btn-warning"> Add to Wish List</button>
                                    <button className="btn btn-danger"> Add to Cart</button></center>
                            </div>
                        </div>
                    </div>
                    <center><button className="btn mt-2" style={{ "backgroundColor": "cornflowerblue", "marginTop":"10px !important" }}>View More</button></center>
                </div>
            </div>
        </>
    )
}

     export default Products
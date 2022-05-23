import React from 'react';
import laptop1 from '../../assets/laptop.jpg'
import book1 from '../../assets/book.jpg'
import watch1 from '../../assets/watch.jpg'
import bag1 from '../../assets/bag.jpg'
import shirt1 from '../../assets/shirt.jpg'
import fan1 from '../../assets/fan.jpg'



import Footer from '../../components/footer/Footer';
import './Service.css'

function Service() {
    return (
        <div>
            <h1 style={{ color: 'black', textAlign: 'center', padding: '4px', backgroundColor: 'salmon', color: 'white', marginBottom: '20px' }}>Our Services</h1>
            <div className="container">
                <div class="row">

                    <div className="col-md-4" style={{ marginTop: '1px' }}>
                        <div className="card">
                            <div className="card_body">
                                <img src={laptop1} alt="" />
                                <h2 style={{textAlign: 'center'}} className="card_title">Laptop</h2>
                                <p className="card_desc" style={{ textAlign: 'center' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, est?</p>
                            </div>
                            <div className="btn" style={{ color: 'black', backgroundColor: 'orange', padding: '10px' }}>Add to cart</div>

                        </div>

                    </div>

                    <div className="col-md-4">
                        <div className="card">
                            <div className="card_body">
                                <img src={watch1} alt="" />
                                <h2 className="card_title">Watch</h2>
                                <p className="card_desc" style={{ textAlign: 'center' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, est?</p>
                            </div>
                            <button type="button" class="btn btn-primary">Add to cart</button>

                        </div>

                    </div>

                    <div className="col-md-4">
                        <div className="card">
                            <div className="card_body">
                                <img src={book1} alt="" />
                                <h2 className="card_title">Book</h2>
                                <p className="card_desc" style={{ textAlign: 'center' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, est?</p>
                            </div>
                            <div className="btn" style={{ color: 'black', backgroundColor: 'orange', padding: '10px' }}>Add to cart</div>
                        </div>

                    </div>


                    {/* ///////////////////////////////////////////////// ////////////////////////////////////////////////////////////////////////////////////////////  */}



                    {/* <div className="row sec">  */}

                    <div className="container sec">
                        <div className="row">
                            <div className="col-md-4" style={{ marginTop: '1px' }}>
                                <div className="card">
                                    <div className="card_body">
                                        <img src={bag1} alt="" />
                                        <h2 className="card_title">Bag</h2>
                                        <p className="card_desc" style={{ textAlign: 'center' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, est?</p>
                                    </div>
                                    <div className="btn" style={{ color: 'black', backgroundColor: 'orange', padding: '10px' }}>Add to cart</div>

                                </div>

                            </div>

                            <div className="col-md-4">
                                <div className="card">
                                    <div className="card_body">
                                        <img src={shirt1} alt="" />
                                        <h2 className="card_title">Shirt</h2>
                                        <p className="card_desc" style={{ textAlign: 'center' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, est?</p>
                                    </div>
                                    <button type="button" class="btn btn-primary">Add to cart</button>

                                </div>

                            </div>

                            <div className="col-md-4">
                                <div className="card">
                                    <div className="card_body">
                                        <img src={fan1} alt="" />
                                        <h2 className="card_title">Fan</h2>
                                        <p className="card_desc" style={{ textAlign: 'center' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, est?</p>
                                    </div>
                                    <div className="btn" style={{ color: 'black', backgroundColor: 'orange', padding: '10px' }}>Add to cart</div>
                                </div>

                            </div>
                        </div>
                    </div>




                    {/* </div>  */}






                </div>
            </div>


            <div className="container-fluid" style={{ margin: '0', padding: '0' }}>
                <div className="row">
                    <div className="col-sm-12">
                        <Footer />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Service;
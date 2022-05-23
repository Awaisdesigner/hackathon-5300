import React from 'react';
import "./Body.css"

function Body() {
    return (
        <div>
            <div className="container">
                <div className="row mt-3">
                    <div className="col-sm-9 ">
                        <h5 id='styletext'><i> From the FireHouse</i></h5>
                        <hr />



                        <h2 className='fw-bold'>Sample blog Post</h2>
                        <p>Janurary 1,2014 by <a href="#">Mark</a></p>
                        <p>This blog show a few people content of post Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam magnam deserunt nam!Lorem this is a deign of me inshallah one day no one developer of world</p>
                        <hr />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a href='#' style={{ textDecoration: "none" }}>Quisquam fugiat impedit</a> voluptas animi. Consequatur eligendi labore velit consectetur possimus, numquam quod perferendis et nesciunt impedit?</p>
                        <p>This blog show a few people content of post <b>  Lorem ipsum dolor sit </b> amet consectetur adipisicing elit. Numquam magnam deserunt nam!Lorem this is a deign of me inshallah one day no one developer of world</p>
                        <p>This blog show a few people content of post Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam magnam deserunt nam!Lorem this is a deign of me inshallah one day no one developer of world</p>



                        <h2 className='fw-bold'>Heading</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, eos? Id, nam nulla ullam non suscipit repudiandae voluptas? Repellendus optio itaque eum inventore iste aperiam dignissimos provident tenetur eos ipsum.</p>



                        <h2 className='fw-bold'>Sub-Heading</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, adipisci.</p>

                        <p>This is a SubHeading</p>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque amet tempora sint exercitationem modi fugit iste, et reiciendis dicta perspiciatis!</p>



                        <h2 className='fw-bold'>Sub-Heading</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi libero placeat labore? Provident quis dolore facere. Voluptates minus facere debitis, delectus aspernatur dignissimos eaque ratione? Sapiente reprehenderit omnis explicabo consequuntur minus quam ipsa eligendi quibusdam. Aliquam nesciunt nemo dolorum sunt.</p>

                        <ul style={{ fontSize: "13px" }}>
                            <li>   this is a blog page this is a very easy too design</li>
                            <li>this is a blog page this is a very easy too design</li>
                            <li>this is a blog page this is a very easy too design</li>

                        </ul>

                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, cum!</p>
                        <ol style={{ fontSize: "13px" }}>
                            <li>   this is a blog page this is a very easy too design</li>
                            <li>this is a blog page this is a very easy too design</li>
                            <li>this is a blog page this is a very easy too design</li>
                        </ol>




                    </div>
                    <div className='col-sm-3 col-lg-3 box'>
                        <i>About</i>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt. Assumenda exercitationem voluptatum eligendi ipsa.
                        </p>
                        <h5><i className='fw-bold'>Archies</i></h5>
                        <a href="#" className="styleTag">Janurary 2014</a>
                        <a href="#" className="styleTag">Feburary 2014</a>
                        <a href="#" className="styleTag">Januray 2014</a>
                        <a href="#" className="styleTag">March 2014</a>
                        <a href="#" className="styleTag">June 2014</a>
                        <a href="#" className="styleTag">July 2014</a>
                        <a href="#" className="styleTag">May 2014</a>
                        <a href="#" className="styleTag">December 2014</a>
                        <a href="#" className="styleTag">October 2014</a>
                        <a href="#" className="styleTag">March 2014</a>
                        <a href="#" className="styleTag">November 2014</a>
                        <a href="#" className="styleTag">March 2014</a>


                        <h5><i className='fw-bold'>Else Where</i></h5>
                        <a href="#" className="styleTag">
                            Github
                        </a>
                        <a href="#" className="styleTag">Twitter</a>
                        <a href="#" className="styleTag">Facebook</a>




                    </div>

                </div>
            </div>

        </div>
    );
}

export default Body;
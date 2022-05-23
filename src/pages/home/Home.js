import React from 'react';
// import Card from '../../components/card/Card';
import img1 from '../../assets/img.jpg'

import Footer from '../../components/footer/Footer'

function Home() {
    return (
        <div>

            <img src={img1} style={{ height: '600px', width: '100%' }} className="img-fluid" alt="Responsive image" />
            {/* <Card /> */}

            <Footer />

        </div>
    );
}

export default Home;
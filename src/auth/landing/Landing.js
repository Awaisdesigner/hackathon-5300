import React from 'react';
import Header from "../../components/header/Header";
import Body from "../../components/body/Body"

function Landing() {
    return (
        <div>
            <h1>
                <Header/>
                {/* card section */}
                {/* <Card/> */}
                {/* Body part */}
                <Body/>
            </h1>
        </div>
    );
}

export default Landing;
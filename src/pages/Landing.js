import React from 'react';
import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components/index';

const Landing = () => {
    return (
        <Wrapper>
            <nav>
                <Logo />
            </nav>
            <div className="container page">
                <div className="info">
                    <h1>
                        job<span>tracking</span> app
                    </h1>
                    <p>
                        Meggings truffaut coloring book migas quinoa sustainable. Stumptown prism gentrify paleo
                        sriracha. Pabst solarpunk truffaut, church-key poke everyday carry iPhone tilde austin yr
                        portland tumeric messenger bag waistcoat paleo. Deep v sartorial vice you probably haven't heard
                        of them, post-ironic XOXO godard air plant pop-up tumeric kickstarter bicycle rights quinoa
                        meggings. Church-key pitchfork 90's 8-bit, fixie solarpunk gluten-free iPhone kitsch art party
                        chambray.
                    </p>
                    <button className="btn btn-hero">Login/Register</button>
                </div>
                <img src={main} alt="job hunt" className="img main-img" />
            </div>
        </Wrapper>
    );
};

export default Landing;

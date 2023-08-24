import React from 'react';
import Wrapper from '../assets/wrappers/ErrorPage';
import { Link } from 'react-router-dom';
import img from '../assets/images/not-found.svg';
const Error = () => {
    return (
        <Wrapper>
            <div>
                <img src={img} alt="not found" />
                <h3>Ohh! Page Not Found</h3>
                <p>We cant't seem to find the page you're looking for</p>
                <Link to="/">Back Home</Link>
            </div>
        </Wrapper>
    );
};

export default Error;

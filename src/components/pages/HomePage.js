import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
    <div class="ui container">
        <h1>hello</h1>
        <Link to="/login">Login</Link>
    </div>
);

export default HomePage;
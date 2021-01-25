import React from 'react';
import {Link} from 'react-router-dom';
import './HomeView.css';

export const HomeView = () => {

    return (
        <div id='home-view'>
            <button>
                <Link to='/anonymous'>
                    Anonymous in JSX
                </Link>
            </button>
        </div>
    );
}

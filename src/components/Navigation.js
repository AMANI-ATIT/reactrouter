import React from 'react';
import {Link} from 'react-router-dom'

const Navigation = () => {
    return (
        <div className = "navigation">
            <ul> 
                <li> 
                    <h3><Link to ='/'>Home</Link>  </h3> 
                </li> 
                <li> 
                <h3><Link to ='/movies'>movies</Link>  </h3> 
                </li>
                <li> 
                    <h3><Link to ='/Contact'> Contact </Link> </h3> 
                </li>
            </ul>
        </div>
    );
}

export default Navigation;


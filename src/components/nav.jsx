import React from 'react'
import img1 from "../images/foot.png"
import {Link} from 'react-router-dom';

function Nav(){
    return(
        <div>
            <nav>
            <span className='logo_main'>
                        <img className='logo-img' src={img1} width="30%" />
                        <label className="logo-name">RUHANGO FC</label>
                    </span>
               
                <ul className="nav-lists">

                    <Link to="/about">
                    <li>ABOUT</li>
                    </Link>
                    <Link to="/players">
                    <li>PLAYERS</li>
                    </Link>
                    <Link to="/shop">
                    <li>SHOP</li>
                    </Link>
                    <Link to="/news">
                    <li>NEWS</li>
                    </Link>
                    {/* <Link to='/about'></Link> */}
                </ul>
            </nav>
        </div>
    )
}
export default Nav
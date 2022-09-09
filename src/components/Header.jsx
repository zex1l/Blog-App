import {Link} from "react-router-dom"

import { useAuth } from "../hooks/useAuth";

const Header = () => {
    const {isAuth, id} = useAuth()

    return (
        <header className='header'>
            <div className="header__inner">
                <Link to="/" className="header__logo">
                    <svg width="40px" height="40px" viewBox="0 0 15 15" version="1.1" id="post" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14,6.5V12c0,0.5523-0.4477,1-1,1H2c-0.5523,0-1-0.4477-1-1V6.5C1,6.2239,1.2239,6,1.5,6&#xA;&#x9;c0.0692-0.0152,0.1408-0.0152,0.21,0l0,0l5.79,4l5.8-4l0,0c0.066-0.0138,0.134-0.0138,0.2,0C13.7761,6,14,6.2239,14,6.5z M1.25,3.92&#xA;&#x9;L1.25,3.92L1.33,4L7.5,8l6.19-4l0,0h0.06l0,0c0.1796-0.0981,0.2792-0.2975,0.25-0.5C14,3.2239,13.7761,3,13.5,3h-12&#xA;&#x9;C1.2239,3,1,3.2239,1,3.5C1.0026,3.6745,1.0978,3.8345,1.25,3.92z"/>
                    </svg>
                    <span className="header__text">Blog</span>
                </Link>

                <nav className='header__nav'>
                    <a href="https://github.com/zex1l" className="nav__item">Git Hub</a>
                    {
                        isAuth ? (<Link  to= {`/profile:${id}`}  className="nav__item">Profile</Link>) : (<Link  to="/auth"  className="nav__item active__block">Login</Link>)
                    }
                </nav>
            </div>
        </header>
    );
};

export default Header;
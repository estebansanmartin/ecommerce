import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider'
import { auth } from "./firebase"
import Logo from "./logo.png"

function Header() {

    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <div className="header">
            <Link to="/">
                <img 
                    className="header_logo"
                    src={Logo}
                    alt="shop"
                />
            </Link>

            <div className="header_search">
                <input className="header_searchInput" type="text" />
                <SearchIcon className="header_searchIcon" />
            </div>

            <div className="header_nav">

                <Link to={!user && '/login'}>
                    <div onClick={handleAuthentication} className="header_option">
                        <span className="header_optionLineOne">Salve {!user ? 'Ospite' : user.email}</span>
                        <span className="header_optionalLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>
                
                <Link to="./orders">
                    <div className="header_option">
                        <span className="header_optionLineOne">Resi</span>
                        <span className="header_optionLineTwo">e ordini</span>
                    </div>
                </Link>

                <div className="header_option">
                    <span className="header_optionLineOne">Inscriviti a </span>
                    <span className="header_optionLineTwo">Prime</span>
                </div>

                <Link to="/checkout">
                    <div className="header_optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header_optionLineTwo header_basketCount">
                            {basket?.length}
                        </span>
                    </div>
                </Link>
            </div>

        </div>
    )
}

export default Header

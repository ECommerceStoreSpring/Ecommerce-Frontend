import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { useStateValue } from '../StateProvider'
import { auth } from '../../services/firebase'
import Images from "../../assests/Images";

const Header = () => {

    const [{ basket, user }] = useStateValue();
    // console.log(user)
    console.log("User Details:")
    console.log(user?.email)
    let user_email = user?.email;
    const loginFunc = () => {
        if (user) {
            auth.signOut();
        }
    }


    return (
        <nav className="header">
            <Link to="/">
                <img className="header__logo" alt="DS Logo" src={Images.logo} />
            </Link>
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <Link to={!user && "/login"} className="header__link">
                    <div onClick={loginFunc} className="header__option">
                        <span className="header__optionLineOne">{user?.email}</span>
                        <span className="header__optionLineTwo">{ user? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>
                { user_email=="admin@gmail.com" && <Link to="/items" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Manage</span>
                        <span className="header__optionLineTwo">Items</span>
                    </div>
                </Link>}
                <Link to="/checkout" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Cart</span>
                    </div>
                </Link>

                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header;
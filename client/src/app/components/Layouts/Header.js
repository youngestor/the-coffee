import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom'
import { path } from '../../../utils'
import { dataHeader } from '../../data'

function Header() {
    const [menu, setMenu] = useState(false)

    return (
        <div className='header-wrapper'>
            <div className='header-container'>
                <div className='header-left'>
                    <Link className='left-title' to={path.HOME}>
                        Shop Pet
                    </Link>
                    <div className='left-desc'>
                        Thế giới thú cưng
                    </div>
                </div>
                <div className='header-right'>
                    <i onClick={() => setMenu(true)} className="fa-solid fa-bars right-icon-menu"></i>
                    <div className={menu ? 'right-main' : 'right-main close'}>
                        <i onClick={() => setMenu(false)} className="fa-solid fa-square-xmark right-icon-close"></i>
                        {dataHeader && dataHeader.map((item, index) => <NavLink key={index} onClick={() => setMenu(false)}
                            to={item.path} className='right-item'>{item.name}</NavLink>)}
                        <div className='right-cart'>
                            <span>Giỏ hàng</span>
                            <i className="fa-solid fa-cart-shopping"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Header;
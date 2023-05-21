import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom'
import { path } from '../../../utils'
import { dataHeader } from '../../data'

function Header() {
    const [menu, setMenu] = useState(false)

    return (
        <div className='header-wrapper'>
            <div className='header-container'>
                <Link to={path.HOME} className='header-left'>
                    <div className='left-title'>
                        The Coffee
                    </div>
                    <div className='left-desc'>
                        Thế giới cà phê
                    </div>
                </Link>
                <div className='header-right'>
                    <i onClick={() => setMenu(true)} className="fa-solid fa-bars right-icon-menu"></i>
                    <div className={menu ? 'right-main' : 'right-main close'}>
                        <i onClick={() => setMenu(false)} className="fa-solid fa-square-xmark right-icon-close"></i>
                        {dataHeader && dataHeader.map((item, index) => <NavLink key={index} onClick={() => setMenu(false)}
                            to={item.path} className='right-item'>{item.name}</NavLink>)}
                        <div className='right-btn'>
                            <Link to={path.ADMIN}>
                                <span>Giỏ hàng</span>
                                <i className="fa-solid fa-cart-shopping"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
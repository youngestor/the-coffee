import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom'
import { path } from '../../../utils'
import { dataHeader } from '../../data'

function AdminHeader() {
    const [menu, setMenu] = useState(false)

    return (
        <div className='header-wrapper'>
            <div className='header-container'>
                <div className='header-left'>
                    <Link className='left-title' to={path.ADMIN_USER_READ}>
                        Admin
                    </Link>
                    <div className='left-desc'>
                        Quản lý thú cưng
                    </div>
                </div>
                <div className='header-right'>
                    <i onClick={() => setMenu(true)} className="fa-solid fa-bars right-icon-menu"></i>
                    <div className={menu ? 'right-main' : 'right-main close'}>
                        <i onClick={() => setMenu(false)} className="fa-solid fa-square-xmark right-icon-close"></i>
                        {dataHeader && dataHeader.map((item, index) => <NavLink key={index} onClick={() => setMenu(false)}
                            to={item.path} className='right-item'>{item.name}</NavLink>)}
                        <div className='right-btn'>
                            <Link to={path.HOME}>
                                <span>Trang chủ</span>
                                <i className="fa-solid fa-house"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default AdminHeader;
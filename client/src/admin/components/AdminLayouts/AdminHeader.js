import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom'
import { path } from '../../../utils'
import { dataHeader } from '../../data'
import { connect } from 'react-redux'
import { processLogout } from '../../../redux/actions'

function AdminHeader({ userInfo, processLogout }) {
    const [menu, setMenu] = useState(false)
    const firstname = userInfo.fullname.substring(userInfo.fullname.lastIndexOf(' '), userInfo.fullname.length)

    return (
        <div className='header-wrapper'>
            <div className='header-container'>
                <div onClick={() => processLogout()} className='header-left'>
                    <div className='left-title'>
                        Admin
                    </div>
                    <div className='left-desc'>
                        {firstname} <i className="fa-solid fa-right-from-bracket"></i>
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

const mapStateToProps = state => ({
    userInfo: state.user.userInfo
})

const mapActionsToProps = {
    processLogout
}

export default connect(mapStateToProps, mapActionsToProps)(AdminHeader)
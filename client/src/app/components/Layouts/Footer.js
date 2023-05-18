import { NavLink } from 'react-router-dom'
import { path } from '../../../utils'

function Footer() {
    return (
        <div className='footer-wrapper'>
            <div className='footer-container'>
                <div className='footer-top'>
                    <div className='top-list'>
                        <div className='title'>Cửa hàng</div>
                        <div className='item'>
                            <NavLink to={path.PET}>
                                Thú cưng
                            </NavLink>
                        </div>
                        <div className='item'>
                            <NavLink to={path.ACCESSORY}>
                                Phụ kiện
                            </NavLink>
                        </div>
                        <div className='item'>
                            <NavLink to={path.NEWS}>
                                Tin tức
                            </NavLink>
                        </div>
                    </div>
                    <div className='top-list'>
                        <div className='title'>Liên hệ</div>
                        <div className='item'>
                            <i className="fa-solid fa-envelope"></i>
                            Email: shoppet@example.vn
                        </div>
                        <div className='item'>
                            <i className="fa-solid fa-phone"></i>
                            Hotline: 098 765 4321
                        </div>
                    </div>
                </div>
                <div className='footer-bottom'>
                    @2023 Shop Pet. All rights reserved. Copyright by Shop Pet.
                </div>
            </div>
        </div>
    );
}

export default Footer;
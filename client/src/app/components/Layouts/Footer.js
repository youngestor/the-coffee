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
                            <NavLink to={path.PRODUCTS}>
                                Sản phẩm
                            </NavLink>
                        </div>
                        <div className='item'>
                            <NavLink to={path.NEWS}>
                                Tin tức
                            </NavLink>
                        </div>
                        <div className='item'>
                            <NavLink to={path.CONTACT}>
                                Liên hệ
                            </NavLink>
                        </div>
                    </div>
                    <div className='top-list'>
                        <div className='title'>Liên hệ</div>
                        <div className='item'>
                            <i className="fa-solid fa-envelope"></i>
                            Email: thecoffee@example.vn
                        </div>
                        <div className='item'>
                            <i className="fa-solid fa-phone"></i>
                            Hotline: 098 765 4321
                        </div>
                    </div>
                </div>
                <div className='footer-bottom'>
                    @2023 The Coffee. All rights reserved. Copyright by The Coffee.
                </div>
            </div>
        </div>
    );
}

export default Footer;
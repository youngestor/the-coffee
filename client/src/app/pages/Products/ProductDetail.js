import { useLocation, Link } from 'react-router-dom'
import { path } from '../../../utils'
import { dataDetailProductSize, dataDetailProductTopping } from '../../data'

function ProductDetail() {
    const location = useLocation()
    const product = location.state

    return (
        <div className="detail-product-wrapper">
            <div className='detail-header'>
                <Link to={path.PRODUCTS}>Sản phẩm</Link>
                /
                <span>{product.name}</span>
            </div>
            <div className='detail-main'>
                <img src={product.image} alt='' />
                <div className='info'>
                    <div className='name'>
                        {product.name}
                    </div>
                    <div className='price'>
                        {product.price}
                    </div>
                    <div className='options'>
                        <b>Chọn size (bắt buộc)</b>
                        <div className='item'>
                            {dataDetailProductSize.map((item, index) => {
                                return <label key={index}>
                                    <input type="radio" name='size' />
                                    <span>{item.size} + {item.price}</span>
                                </label>
                            })}
                        </div>
                    </div>
                    <div className='options'>
                        <b>Topping</b>
                        <div className='item'>
                            {dataDetailProductTopping.map((item, index) => {
                                return <label key={index}>
                                    <input type="checkbox" name='topping' />
                                    <span>{item.topping} + {item.price}</span>
                                </label>
                            })}
                        </div>
                    </div>
                    <Link className='btn-order'>Thêm vào giỏ hàng</Link>
                </div>
            </div>
            <div className='detail-footer'>
                <b>Mô tả sản phẩm</b>
                <span>{product.desc}</span>
            </div>
        </div>
    );
}

export default ProductDetail;
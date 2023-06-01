import { useLocation, Link } from 'react-router-dom'
import { path } from '../../../utils'
import { dataDetailProductSize, dataDetailProductTopping } from '../../data'
import { useState } from 'react'
import { addCart } from '../../../redux/actions'
import { connect } from 'react-redux'

function ProductDetail({ addCart }) {
    const location = useLocation()
    const product = location.state

    const [size, setSize] = useState(`${dataDetailProductSize[0].size} + ${dataDetailProductSize[0].price}`)
    const [topping, setTopping] = useState([])

    const priceInt = parseInt(product.price.replace(' đ', '').replace('.', ''))
    const sizeInt = parseInt(size.substring(size.indexOf('+') + 1, size.length)
        .replace(' đ', '').replace('.', '')) || 0
    const toppingInt = topping.map(item => parseInt(item.substring(item.indexOf('+') + 1, item.length)
        .replace(' đ', '').replace('.', '')))
    let toppingValue = 0
    toppingInt.map(item => toppingValue += item)
    const newPrice = `${(toppingValue + priceInt + sizeInt).toString()} đ`.replace('000 ', '.000 ')

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
                        {newPrice}
                    </div>
                    <div className='options'>
                        <b>Chọn size (bắt buộc)</b>
                        <div className='item'>
                            {dataDetailProductSize.map((item, index) => {
                                return <label key={index}>
                                    <input onChange={e => setSize(e.target.value)}
                                        type="radio" name='size' value={`${item.size} + ${item.price}`} />
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
                                    <input onChange={e => {
                                        if (e.target.checked)
                                            setTopping([...topping, e.target.value])
                                        else {
                                            topping.pop()
                                            setTopping([...topping])
                                        }
                                    }}
                                        type="checkbox" name='topping' value={`${item.topping} + ${item.price}`} />
                                    <span>{item.topping} + {item.price}</span>
                                </label>
                            })}
                        </div>
                    </div>
                    <div onClick={() => {
                        const productInfo = { ...product, price: newPrice, size, topping }
                        console.log(productInfo);
                        addCart(productInfo)
                    }} className='btn-order'>Thêm vào giỏ hàng</div>
                </div>
            </div>
            <div className='detail-footer'>
                <b>Mô tả sản phẩm</b>
                <span>{product.desc}</span>
            </div>
        </div>
    );
}

const mapActionsToProps = {
    addCart
}

export default connect(null, mapActionsToProps)(ProductDetail)

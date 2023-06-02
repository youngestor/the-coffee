import React from 'react'
import { addCart } from '../../../redux/actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { path } from '../../../utils'

function CartList({ cart, addCart }) {
    return (
        <div className='cart-list-wrapper'>
            <div>
                {cart.length > 0 ? cart.map((item, index) => {
                    const totalInt = parseInt(item.total.replace(' đ', '').replace('.', ''))
                    const totalPrice = `${(totalInt * item.quantity).toString()} đ`.replace('000 ', '.000 ')

                    return <div key={index} className='cart-item'>
                        <div className='product-info'>
                            <div className='default'>
                                <img src={item.image} alt='' />
                                <div className='name'>{item.name}</div>
                                <div>{item.price}</div>
                            </div>
                            <div className='options'>
                                <div className='title'>Size: {item.size}</div>
                                <div>
                                    <div className='title'>{item.topping.length > 0 && 'Topping'}</div>
                                    {item.topping.map((topping, index) => {
                                        return <div className='item-topping' key={index}>{topping} </div>
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className='total'>
                            <div className='quantity'>
                                Số lượng:
                                <i onClick={() => {
                                    if (item.quantity > 1) {
                                        item.quantity = item.quantity - 2
                                        addCart(item)
                                    }
                                }} className="fa-solid fa-minus"></i>
                                <span>{item.quantity}</span>
                                <i onClick={() => addCart(item)} className="fa-solid fa-plus"></i>
                            </div>
                            <div className='price-total'>
                                Tổng cộng: {totalPrice}
                            </div>
                            <div>
                                <i className="fa-solid fa-trash btn-delete"></i>
                            </div>
                        </div>
                    </div>
                }) : <div className='empty-cart'>Giỏ hàng hiện đang trống...</div>}
            </div>
            {cart.length > 0 ?
                <Link to={path.ORDER} className='btn-cart'>Đặt hàng</Link>
                :
                <Link to={path.PRODUCTS} className='btn-cart'>Thêm sản phẩm vào giỏ hàng</Link>
            }
        </div>
    );
}

const mapStateToProps = state => ({
    cart: state.cart.cartAt,
})

const mapActionsToProps = {
    addCart,
}

export default connect(mapStateToProps, mapActionsToProps)(CartList)
import { addCart } from '../../../redux/actions'
import { connect } from 'react-redux'

function Cart({ cart, addCart }) {
    console.log(cart, addCart);

    return (
        <div>
            Cart page
        </div>
    );
}

const mapStateToProps = state => ({
    cart: state.cart.cartAt,
})

const mapActionsToProps = {
    addCart,
}

export default connect(mapStateToProps, mapActionsToProps)(Cart)
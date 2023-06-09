import LayoutSingle from '../../components/LayoutSingle'
import PageHeader from '../../components/PageHeader'
import CardList from './CardList'

function Cart() {
    return (
        <LayoutSingle
            pageHeader={
                <PageHeader
                    title='Giỏ hàng'
                />
            }
            container={
                <CardList />
            }
        />
    );
}

export default Cart
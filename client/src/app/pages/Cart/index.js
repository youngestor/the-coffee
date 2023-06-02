import LayoutNewsProducts from '../../components/LayoutNewsProducts'
import PageHeader from '../../components/PageHeader'
import CardList from './CardList'

function Cart() {
    return (
        <LayoutNewsProducts
            pageHeader={
                <PageHeader
                    title='Giỏ hàng'
                    desc=''
                />
            }
            container={
                <CardList />
            }
        />
    );
}

export default Cart
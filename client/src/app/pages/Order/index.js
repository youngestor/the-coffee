import LayoutSingle from '../../components/LayoutSingle'
import PageHeader from '../../components/PageHeader'
import OrderList from './OrderList'

function Order() {
    return (
        <LayoutSingle
            pageHeader={
                <PageHeader
                    title='Thanh toán'
                />
            }
            container={
                <OrderList />
            }
        />
    );
}

export default Order;
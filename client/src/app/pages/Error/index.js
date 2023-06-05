import LayoutSingle from '../../components/LayoutSingle'
import PageHeader from '../../components/PageHeader'
import { Link } from 'react-router-dom'
import { path } from '../../../utils'

function Error() {
    return (
        <LayoutSingle
            pageHeader={
                <PageHeader
                    title='404 Not found'
                />
            }
            container={
                <div className='error-wrapper'>
                    <div>Trang này không có sẵn.</div>
                    <Link to={path.HOME}>
                        Trang chủ
                        <i className="fa-solid fa-house"></i>
                    </Link>
                </div>
            }
        />
    );
}

export default Error
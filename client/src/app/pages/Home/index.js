import PageHeader from "../../components/PageHeader";
import Banner from '../../../../src/assets/images/banner.png'
import ProductList from "../Products/ProductList";
import NewsList from '../News/NewList'
import { Link } from 'react-router-dom'
import { path } from "../../../utils";

function Home() {
    return (
        <div className='home-wrapper'>
            <div className="banner-img">
                <img src={Banner} alt='' />
                <div className="btn-products">
                    <Link to={path.PRODUCTS}>Sản phẩm</Link>
                </div>
                <div className="btn-news">
                    <Link to={path.NEWS}>Tin tức</Link>
                </div>
            </div>
            <div className="spacing"></div>
            <div className='home-products'>
                <PageHeader
                    title='Sản phẩm'
                    desc='Thức uống "đánh thức" năng lượng ngày mới hợp cho những ai mới bước vào thế giới cà phê hoặc ghiền cà phê nhưng muốn khám phá thêm nhiều hương vị mới.'
                />
                <div className='home-list'>
                    <ProductList />
                </div>
            </div>
            <div className="spacing"></div>
            <div className='home-news'>
                <PageHeader
                    title='Tin tức'
                    desc='The Coffee sẽ là nơi mọi người xích lại gần nhau, đề cao giá trị kết nối con người và sẻ chia thân tình bên những tách cà phê, ly trà đượm hương, truyền cảm hứng về lối sống hiện đại.'
                />
                <div className='home-list'>
                    <NewsList />
                </div>
            </div>
        </div>
    );
}

export default Home;
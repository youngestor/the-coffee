import LayoutSingle from '../../components/LayoutSingle';
import PageHeader from "../../components/PageHeader";
import ProductList from "./ProductList";

function Products() {
    return (
        <LayoutSingle
            pageHeader={
                <PageHeader
                    title='Sản phẩm'
                    desc='Thức uống "đánh thức" năng lượng ngày mới hợp cho những ai mới bước vào thế giới cà phê hoặc ghiền cà phê nhưng muốn khám phá thêm nhiều hương vị mới.'
                />
            }
            container={
                <ProductList />
            }
        />
    );
}

export default Products;
import LayoutSingle from '../../components/LayoutSingle';
import PageHeader from '../../components/PageHeader'
import NewsList from "./NewList";

function News() {
    return (
        <LayoutSingle
            pageHeader={
                <PageHeader
                    title='Tin tức'
                    desc='The Coffee sẽ là nơi mọi người xích lại gần nhau, đề cao giá trị kết nối con người và sẻ chia thân tình bên những tách cà phê, ly trà đượm hương, truyền cảm hứng về lối sống hiện đại.'
                />
            }
            container={
                <NewsList />
            }
        />
    );
}

export default News;
function LayoutNewsProducts({ pageHeader, container }) {
    return (
        <div className='layout-news-products-wrapper'>
            {pageHeader}
            <div className='container'>
                {container}
            </div>
        </div>
    );
}

export default LayoutNewsProducts;
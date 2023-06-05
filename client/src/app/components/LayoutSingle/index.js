function LayoutSingle({ pageHeader, container }) {
    return (
        <div className='layout-single-wrapper'>
            {pageHeader}
            <div className='container'>
                {container}
            </div>
        </div>
    );
}

export default LayoutSingle;